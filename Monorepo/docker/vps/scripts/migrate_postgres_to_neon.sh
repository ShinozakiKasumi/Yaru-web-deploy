#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/migrate_postgres_to_neon.sh [options]

Required:
  --target-database-url URL   Direct PostgreSQL connection string for the target
                              database. You can also provide TARGET_DATABASE_URL
                              or NEON_DATABASE_URL in the environment.

Options:
  --source-container NAME         Source PostgreSQL container name
                                  (default: vps-postgres-1)
  --source-user USER              Source PostgreSQL user
                                  (default: POSTGRES_USER from .env)
  --source-db NAME                Source PostgreSQL database
                                  (default: POSTGRES_DB from .env)
  --schema-only                   Restore schema only
  --data-only                     Restore data only
  --reset-public-schema           Drop and recreate target public schema first
  --target-size-limit-bytes N     Abort when source DB size exceeds this limit
  --dry-run                       Print the resolved plan without executing
  -h, --help                      Show this help message

Examples:
  TARGET_DATABASE_URL="postgresql://..." ./scripts/migrate_postgres_to_neon.sh --dry-run
  ./scripts/migrate_postgres_to_neon.sh --target-database-url "postgresql://..." --reset-public-schema
EOF
}

log() {
  echo "[pg-neon] $*"
}

die() {
  echo "[pg-neon] $*" >&2
  exit 1
}

human_bytes() {
  local bytes="${1:-0}"
  python3 - "$bytes" <<'PY'
import sys
value = float(sys.argv[1])
units = ["B", "KiB", "MiB", "GiB", "TiB"]
unit = 0
while value >= 1024 and unit < len(units) - 1:
    value /= 1024
    unit += 1
print(f"{value:.2f} {units[unit]}")
PY
}

SOURCE_CONTAINER="vps-postgres-1"
SOURCE_USER=""
SOURCE_DB=""
TARGET_DATABASE_URL="${TARGET_DATABASE_URL:-${NEON_DATABASE_URL:-}}"
SCHEMA_ONLY=false
DATA_ONLY=false
RESET_PUBLIC_SCHEMA=false
DRY_RUN=false
TARGET_SIZE_LIMIT_BYTES="${TARGET_SIZE_LIMIT_BYTES:-}"

while (($# > 0)); do
  case "$1" in
    --target-database-url)
      [[ $# -ge 2 ]] || die "missing value for $1"
      TARGET_DATABASE_URL="$2"
      shift 2
      ;;
    --source-container)
      [[ $# -ge 2 ]] || die "missing value for $1"
      SOURCE_CONTAINER="$2"
      shift 2
      ;;
    --source-user)
      [[ $# -ge 2 ]] || die "missing value for $1"
      SOURCE_USER="$2"
      shift 2
      ;;
    --source-db)
      [[ $# -ge 2 ]] || die "missing value for $1"
      SOURCE_DB="$2"
      shift 2
      ;;
    --schema-only)
      SCHEMA_ONLY=true
      shift
      ;;
    --data-only)
      DATA_ONLY=true
      shift
      ;;
    --reset-public-schema)
      RESET_PUBLIC_SCHEMA=true
      shift
      ;;
    --target-size-limit-bytes)
      [[ $# -ge 2 ]] || die "missing value for $1"
      TARGET_SIZE_LIMIT_BYTES="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      die "unknown argument: $1"
      ;;
  esac
done

$SCHEMA_ONLY && $DATA_ONLY && die "--schema-only and --data-only cannot be used together"

if [[ ! -f ".env" ]]; then
  die "missing .env in $ROOT_DIR"
fi

set -a
source ./.env
set +a

SOURCE_USER="${SOURCE_USER:-${POSTGRES_USER:-}}"
SOURCE_DB="${SOURCE_DB:-${POSTGRES_DB:-}}"

[[ -n "$SOURCE_USER" ]] || die "source PostgreSQL user is empty"
[[ -n "$SOURCE_DB" ]] || die "source PostgreSQL database is empty"
[[ -n "$TARGET_DATABASE_URL" ]] || die "set --target-database-url or TARGET_DATABASE_URL"

if [[ "$TARGET_DATABASE_URL" == *"-pooler."* ]]; then
  log "warning: target URL looks like a pooled Neon connection string"
  log "warning: use a direct connection string for large restores when possible"
fi

docker inspect "$SOURCE_CONTAINER" >/dev/null 2>&1 || die "source container not found: $SOURCE_CONTAINER"

source_db_size_bytes="$(
  docker exec "$SOURCE_CONTAINER" \
    psql -U "$SOURCE_USER" -d "$SOURCE_DB" -At \
    -c "select pg_database_size(current_database());"
)"
[[ "$source_db_size_bytes" =~ ^[0-9]+$ ]] || die "failed to read source database size"

source_table_count="$(
  docker exec "$SOURCE_CONTAINER" \
    psql -U "$SOURCE_USER" -d "$SOURCE_DB" -At \
    -c "select count(*) from information_schema.tables where table_schema='public';"
)"

log "source container: $SOURCE_CONTAINER"
log "source database: $SOURCE_DB"
log "source size: $(human_bytes "$source_db_size_bytes") ($source_db_size_bytes bytes)"
log "public tables: $source_table_count"

if [[ -n "$TARGET_SIZE_LIMIT_BYTES" ]]; then
  [[ "$TARGET_SIZE_LIMIT_BYTES" =~ ^[0-9]+$ ]] || die "target size limit must be an integer"
  if (( source_db_size_bytes > TARGET_SIZE_LIMIT_BYTES )); then
    die "source database size $(human_bytes "$source_db_size_bytes") exceeds target limit $(human_bytes "$TARGET_SIZE_LIMIT_BYTES")"
  fi
fi

log "top 10 public tables by size"
docker exec "$SOURCE_CONTAINER" \
  psql -U "$SOURCE_USER" -d "$SOURCE_DB" -At -F $'\t' \
  -c "select n.nspname||'.'||c.relname as table_name, pg_total_relation_size(c.oid) as bytes from pg_class c join pg_namespace n on n.oid=c.relnamespace where c.relkind='r' and n.nspname='public' order by pg_total_relation_size(c.oid) desc limit 10;" \
  | while IFS=$'\t' read -r table_name table_bytes; do
      [[ -n "$table_name" ]] || continue
      log "  $(human_bytes "$table_bytes")  $table_name"
    done

log "checking target connectivity"
docker exec "$SOURCE_CONTAINER" \
  psql "$TARGET_DATABASE_URL" -v ON_ERROR_STOP=1 -At \
  -c "select current_database(), current_user;"

if $RESET_PUBLIC_SCHEMA; then
  log "resetting target public schema"
  $DRY_RUN || docker exec "$SOURCE_CONTAINER" \
    psql "$TARGET_DATABASE_URL" -v ON_ERROR_STOP=1 \
    -c "DROP SCHEMA IF EXISTS public CASCADE;" \
    -c "CREATE SCHEMA public;"
fi

dump_args=(
  pg_dump
  -U "$SOURCE_USER"
  -d "$SOURCE_DB"
  --no-owner
  --no-privileges
)

if $SCHEMA_ONLY; then
  dump_args+=(--schema-only)
elif $DATA_ONLY; then
  dump_args+=(--data-only)
fi

log "dump mode: $(
  if $SCHEMA_ONLY; then
    echo schema-only
  elif $DATA_ONLY; then
    echo data-only
  else
    echo full
  fi
)"
log "target reset: $RESET_PUBLIC_SCHEMA"
log "dry run: $DRY_RUN"

if $DRY_RUN; then
  printf -v resolved_dump_cmd '%q ' "${dump_args[@]}"
  log "resolved pg_dump command: ${resolved_dump_cmd% }"
  log "dry run complete"
  exit 0
fi

log "starting stream restore"
docker exec "$SOURCE_CONTAINER" "${dump_args[@]}" \
  | docker exec -i "$SOURCE_CONTAINER" \
      psql "$TARGET_DATABASE_URL" -v ON_ERROR_STOP=1

log "restore completed successfully"
