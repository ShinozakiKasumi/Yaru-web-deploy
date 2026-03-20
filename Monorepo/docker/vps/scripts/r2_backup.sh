#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ROOT_DIR="$COMPOSE_DIR"
BACKUP_ROOT="${BACKUP_LOCAL_DIR:-/var/backups/yaru-vps}"
PREFIX="${BACKUP_R2_PREFIX:-yaru-vps}"
BUCKET="${BACKUP_R2_BUCKET:-backup}"
KEEP_VERSIONS="${BACKUP_KEEP_VERSIONS:-2}"
LOCAL_KEEP_VERSIONS="${BACKUP_LOCAL_KEEP_VERSIONS:-2}"
MAX_BUCKET_BYTES="${BACKUP_MAX_BUCKET_BYTES:-10737418240}"
DRY_RUN=0
CLEAN_LOCAL=1
SUCCESS=0

usage() {
    cat <<'EOF'
Usage: r2_backup.sh [options]

Options:
  --compose-dir <dir>     Override docker/vps directory
  --bucket <name>         R2 bucket name (default: backup)
  --prefix <path>         Remote object prefix (default: yaru-vps)
  --keep-versions <n>     Versions to keep (default: 2)
  --max-bytes <n>         Max total bucket bytes (default: 10737418240)
  --dry-run               Build backup and validate remote size without uploading
  --keep-local            Keep local staging directory after success
  -h, --help              Show help
EOF
}

log() {
    printf '[backup] %s\n' "$*"
}

require_cmd() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "missing required command: $1" >&2
        exit 1
    fi
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        --compose-dir)
            COMPOSE_DIR="$2"
            ROOT_DIR="$2"
            shift 2
            ;;
        --bucket)
            BUCKET="$2"
            shift 2
            ;;
        --prefix)
            PREFIX="$2"
            shift 2
            ;;
        --keep-versions)
            KEEP_VERSIONS="$2"
            shift 2
            ;;
        --max-bytes)
            MAX_BUCKET_BYTES="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=1
            shift
            ;;
        --keep-local)
            CLEAN_LOCAL=0
            shift
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            echo "unknown argument: $1" >&2
            usage >&2
            exit 1
            ;;
    esac
done

require_cmd docker
require_cmd python3
require_cmd gzip
require_cmd tar
require_cmd find

if [[ ! -f "$COMPOSE_DIR/.env" ]]; then
    echo "missing env file: $COMPOSE_DIR/.env" >&2
    exit 1
fi

set -a
# shellcheck disable=SC1090
source "$COMPOSE_DIR/.env"
set +a

R2_ENDPOINT="${R2_ENDPOINT:-}"
R2_ACCESS_KEY_ID="${R2_ACCESS_KEY_ID:-}"
R2_SECRET_ACCESS_KEY="${R2_SECRET_ACCESS_KEY:-}"
POSTGRES_USER="${POSTGRES_USER:-yaru}"
POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-yaru}"
POSTGRES_DB="${POSTGRES_DB:-yaru}"
MONOREPO_DIR="$(cd "$ROOT_DIR/../.." && pwd)"
SQLITE_PATH="${SQLITE_BACKUP_SOURCE_PATH:-/var/lib/docker/volumes/vps_sqlite_data/_data/yaru.db}"
POSTGRES_CONTAINER="${POSTGRES_BACKUP_CONTAINER:-vps-postgres-1}"

if [[ -z "$R2_ENDPOINT" || -z "$R2_ACCESS_KEY_ID" || -z "$R2_SECRET_ACCESS_KEY" ]]; then
    echo "R2 credentials are missing in $COMPOSE_DIR/.env" >&2
    exit 1
fi

if [[ ! -f "$SQLITE_PATH" ]]; then
    echo "sqlite source not found: $SQLITE_PATH" >&2
    exit 1
fi

if ! [[ "$KEEP_VERSIONS" =~ ^[0-9]+$ ]] || [[ "$KEEP_VERSIONS" -lt 1 ]]; then
    echo "KEEP_VERSIONS must be a positive integer" >&2
    exit 1
fi

if ! [[ "$LOCAL_KEEP_VERSIONS" =~ ^[0-9]+$ ]] || [[ "$LOCAL_KEEP_VERSIONS" -lt 1 ]]; then
    echo "LOCAL_KEEP_VERSIONS must be a positive integer" >&2
    exit 1
fi

if ! [[ "$MAX_BUCKET_BYTES" =~ ^[0-9]+$ ]] || [[ "$MAX_BUCKET_BYTES" -lt 1 ]]; then
    echo "MAX_BUCKET_BYTES must be a positive integer" >&2
    exit 1
fi

export RCLONE_CONFIG_R2_TYPE="s3"
export RCLONE_CONFIG_R2_PROVIDER="Cloudflare"
export RCLONE_CONFIG_R2_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export RCLONE_CONFIG_R2_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
export RCLONE_CONFIG_R2_ENDPOINT="$R2_ENDPOINT"
export RCLONE_CONFIG_R2_REGION="auto"
RCLONE_IMAGE="${RCLONE_DOCKER_IMAGE:-rclone/rclone:1.69.3}"

rclone_run() {
    docker run --rm \
        -e RCLONE_CONFIG_R2_TYPE \
        -e RCLONE_CONFIG_R2_PROVIDER \
        -e RCLONE_CONFIG_R2_ACCESS_KEY_ID \
        -e RCLONE_CONFIG_R2_SECRET_ACCESS_KEY \
        -e RCLONE_CONFIG_R2_ENDPOINT \
        -e RCLONE_CONFIG_R2_REGION \
        -v "$BACKUP_ROOT:/backup-root" \
        "$RCLONE_IMAGE" "$@"
}

prune_local_staging_dirs() {
    python3 - "$BACKUP_ROOT" "$LOCAL_KEEP_VERSIONS" <<'PY'
import os
import re
import shutil
import sys

root, keep = sys.argv[1], int(sys.argv[2])
pattern = re.compile(r"^\d{8}_\d{6}$")

os.makedirs(root, exist_ok=True)
dirs = sorted(
    name
    for name in os.listdir(root)
    if pattern.match(name) and os.path.isdir(os.path.join(root, name))
)

for name in dirs[:-keep]:
    path = os.path.join(root, name)
    print(path)
    shutil.rmtree(path)
PY
}

cleanup() {
    if [[ "${STAGING_DIR:-}" != "" && -d "${STAGING_DIR:-}" && "$CLEAN_LOCAL" -eq 1 && "$SUCCESS" -eq 1 ]]; then
        rm -rf "$STAGING_DIR"
    fi
    if [[ "$CLEAN_LOCAL" -eq 1 ]]; then
        local pruned_local
        pruned_local="$(prune_local_staging_dirs || true)"
        if [[ -n "$pruned_local" ]]; then
            while IFS= read -r path; do
                [[ -z "$path" ]] && continue
                log "pruned local staging $path"
            done <<< "$pruned_local"
        fi
    fi
}
trap cleanup EXIT

TS="$(date -u +%Y%m%d_%H%M%S)"
STAGING_DIR="$BACKUP_ROOT/$TS"
mkdir -p "$STAGING_DIR"

PG_FILE="$STAGING_DIR/pg_${TS}.sql.gz"
SQLITE_FILE="$STAGING_DIR/sqlite_${TS}.sqlite3.gz"
MONOREPO_FILE="$STAGING_DIR/monorepo_${TS}.tar.gz"
MANIFEST_FILE="$STAGING_DIR/meta_manifest_${TS}.json"

log "creating backup in $STAGING_DIR"

log "dumping postgres database $POSTGRES_DB"
docker exec \
    -e "PGPASSWORD=$POSTGRES_PASSWORD" \
    "$POSTGRES_CONTAINER" \
    pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" --no-owner --no-privileges --format=plain \
    | gzip -1 > "$PG_FILE"

log "compressing sqlite database"
gzip -c "$SQLITE_PATH" > "$SQLITE_FILE"

log "archiving monorepo"
tar \
    --exclude='.git' \
    --exclude='**/node_modules' \
    --exclude='**/.turbo' \
    --exclude='**/.next' \
    --exclude='**/dist' \
    --exclude='**/build' \
    --exclude='./docker/vps/backups' \
    --exclude='./docker/vps/.env' \
    --exclude='./docker/vps/certs' \
    --exclude='./docker/vps/certs/*' \
    -C "$MONOREPO_DIR" \
    -czf "$MONOREPO_FILE" .

log "writing manifest"
python3 - "$TS" "$STAGING_DIR" "$PG_FILE" "$SQLITE_FILE" "$MONOREPO_FILE" "$MANIFEST_FILE" "$POSTGRES_DB" "$PREFIX" "$BUCKET" <<'PY'
import gzip
import hashlib
import json
import os
import sys
import tarfile
from datetime import datetime, timezone

ts, staging_dir, pg_file, sqlite_file, monorepo_file, manifest_file, db_name, prefix, bucket = sys.argv[1:]

def sha256(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()

files = []
total_size = 0
for path in (pg_file, sqlite_file, monorepo_file):
    size = os.path.getsize(path)
    total_size += size
    files.append({
        "name": os.path.basename(path),
        "size_bytes": size,
        "sha256": sha256(path),
    })

with gzip.open(sqlite_file, "rb") as f:
    sqlite_header = f.read(16).decode("latin1", errors="replace")

with tarfile.open(monorepo_file, "r:gz") as tf:
    tar_members = len(tf.getmembers())

manifest = {
    "timestamp_utc": ts,
    "created_at_iso": datetime.now(timezone.utc).isoformat(),
    "database_name": db_name,
    "bucket": bucket,
    "prefix": prefix,
    "files": files,
    "total_size_bytes": total_size,
    "checks": {
        "sqlite_header": sqlite_header,
        "monorepo_tar_members": tar_members,
    },
    "staging_dir": staging_dir,
}

with open(manifest_file, "w", encoding="utf-8") as f:
    json.dump(manifest, f, ensure_ascii=True, indent=2)
PY

snapshot_size="$(python3 - "$STAGING_DIR" <<'PY'
import os, sys
root = sys.argv[1]
total = 0
for name in os.listdir(root):
    path = os.path.join(root, name)
    if os.path.isfile(path):
        total += os.path.getsize(path)
print(total)
PY
)"

log "snapshot size: $snapshot_size bytes"

list_json_tmp="$(mktemp)"
if ! rclone_run lsjson "r2:$BUCKET" --recursive > "$list_json_tmp"; then
    rm -f "$list_json_tmp"
    echo "failed to list bucket: $BUCKET" >&2
    exit 1
fi

preflight_json="$(python3 - "$list_json_tmp" "$PREFIX" "$snapshot_size" "$KEEP_VERSIONS" "$MAX_BUCKET_BYTES" <<'PY'
import json
import sys

path, prefix, snapshot_size, keep_versions, max_bytes = sys.argv[1:]
snapshot_size = int(snapshot_size)
keep_versions = int(keep_versions)
max_bytes = int(max_bytes)

with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

prefix = prefix.strip("/")
versions = {}
total_bucket = 0
prefix_total = 0
for item in data:
    if item.get("IsDir"):
        continue
    rel = item.get("Path", "").strip("/")
    size = int(item.get("Size", 0))
    total_bucket += size
    if not rel.startswith(prefix + "/"):
        continue
    remainder = rel[len(prefix) + 1:]
    if "/" not in remainder:
        continue
    version, _ = remainder.split("/", 1)
    versions[version] = versions.get(version, 0) + size
    prefix_total += size

ordered = sorted(versions.items(), key=lambda x: x[0], reverse=True)
kept_existing = ordered[: max(keep_versions - 1, 0)]
protected_existing = sum(size for _, size in kept_existing)
other_bucket = total_bucket - prefix_total
projected = other_bucket + protected_existing + snapshot_size

result = {
    "total_bucket": total_bucket,
    "prefix_total": prefix_total,
    "other_bucket": other_bucket,
    "versions": [{"name": name, "size_bytes": size} for name, size in ordered],
    "protected_existing_bytes": protected_existing,
    "projected_bytes_after_upload": projected,
    "fits": snapshot_size <= max_bytes and projected <= max_bytes,
}
print(json.dumps(result))
PY
)"
rm -f "$list_json_tmp"

fits="$(python3 - "$preflight_json" <<'PY'
import json, sys
print("1" if json.loads(sys.argv[1])["fits"] else "0")
PY
)"
if [[ "$fits" != "1" ]]; then
    echo "backup would exceed bucket limit or snapshot is too large" >&2
    echo "$preflight_json" >&2
    exit 1
fi

if [[ "$DRY_RUN" -eq 1 ]]; then
    log "dry-run successful"
    echo "$preflight_json"
    CLEAN_LOCAL=0
    exit 0
fi

REMOTE_VERSION_PATH="r2:$BUCKET/$PREFIX/$TS"
log "uploading backup to r2:$BUCKET/$PREFIX/$TS"
rclone_run copy "/backup-root/$TS" "$REMOTE_VERSION_PATH"

verify_json_tmp="$(mktemp)"
rclone_run lsjson "r2:$BUCKET/$PREFIX/$TS" --recursive > "$verify_json_tmp"
uploaded_files="$(python3 - "$verify_json_tmp" <<'PY'
import json, sys
with open(sys.argv[1], "r", encoding="utf-8") as f:
    data = json.load(f)
files = [item for item in data if not item.get("IsDir")]
print(len(files))
PY
)"
rm -f "$verify_json_tmp"

if [[ "$uploaded_files" -lt 4 ]]; then
    echo "upload verification failed: expected at least 4 files, got $uploaded_files" >&2
    rclone_run purge "$REMOTE_VERSION_PATH" || true
    exit 1
fi

prune_json_tmp="$(mktemp)"
rclone_run lsjson "r2:$BUCKET/$PREFIX" --recursive > "$prune_json_tmp"
prune_targets="$(python3 - "$prune_json_tmp" "$PREFIX" "$KEEP_VERSIONS" <<'PY'
import json
import sys

path, prefix, keep = sys.argv[1:]
keep = int(keep)
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

prefix = prefix.strip("/")
versions = set()
for item in data:
    if item.get("IsDir"):
        continue
    rel = item.get("Path", "").strip("/")
    if not rel.startswith(prefix + "/"):
        continue
    remainder = rel[len(prefix) + 1:]
    if "/" not in remainder:
        continue
    version, _ = remainder.split("/", 1)
    versions.add(version)

for version in sorted(versions, reverse=True)[keep:]:
    print(version)
PY
)"
rm -f "$prune_json_tmp"

if [[ -n "$prune_targets" ]]; then
    while IFS= read -r version; do
        [[ -z "$version" ]] && continue
        log "pruning old version $version"
        rclone_run purge "r2:$BUCKET/$PREFIX/$version"
    done <<< "$prune_targets"
fi

final_json_tmp="$(mktemp)"
rclone_run lsjson "r2:$BUCKET" --recursive > "$final_json_tmp"
final_check="$(python3 - "$final_json_tmp" "$MAX_BUCKET_BYTES" <<'PY'
import json, sys
path, max_bytes = sys.argv[1:]
max_bytes = int(max_bytes)
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)
total = sum(int(item.get("Size", 0)) for item in data if not item.get("IsDir"))
print(f"{total}|{'ok' if total <= max_bytes else 'too_large'}")
PY
)"
rm -f "$final_json_tmp"

final_total="${final_check%%|*}"
final_state="${final_check##*|}"
if [[ "$final_state" != "ok" ]]; then
    echo "bucket still exceeds limit after pruning: $final_total bytes" >&2
    exit 1
fi

log "backup complete; bucket total=$final_total bytes"
SUCCESS=1
