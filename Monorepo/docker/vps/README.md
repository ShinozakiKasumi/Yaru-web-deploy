# VPS Docker Stack (Backend)

This stack is the production backend runtime on VPS.

## Services

- `yaru-core`: Node runtime (API + async worker + scheduler)
- `yaru-ai`: Python unified AI runtime (RAG + reranker routes)
- `yaru-autolink`: Python autolink engine (API + queue worker)
- `typst-compiler`: Typst compile microservice for online book/course render artifacts
- `postgres`: primary relational database
- `redis`: cache + queue + realtime pub/sub backend
- `qdrant`: vector backend for AI runtime
- `nginx`: reverse proxy
- `dozzle`: Docker logs panel

Cloudflare usage includes **Workers ingress + object storage (R2) + DNS/CDN**.
Client update artifacts are published to GitHub Release.

## Start

```bash
cd Monorepo/docker/vps
cp .env.example .env
# fill required secrets in .env

./scripts/compose-safe.sh up -d --build
```

## Health

```bash
cd Monorepo/docker/vps
./scripts/stack-smoke-check.sh
./scripts/oauth_desktop_smoke.sh
```

## R2 Backup

The VPS backup job stores snapshots in the Cloudflare R2 bucket `backup` and keeps at most two versions.

Included artifacts per snapshot:

- PostgreSQL dump: `pg_<timestamp>.sql.gz`
- SQLite copy: `sqlite_<timestamp>.sqlite3.gz`
- Monorepo source archive: `monorepo_<timestamp>.tar.gz`
- Metadata manifest: `meta_manifest_<timestamp>.json`

Local staging defaults to `/var/backups/yaru-vps` and is removed after a successful run.

Behavior:

- runs every 12 hours via root `crontab`
- computes projected R2 bucket usage before upload
- refuses to upload if the bucket would exceed `10 GiB`
- prunes old versions after successful upload, keeping only the newest two

Install:

```bash
cd Monorepo/docker/vps
chmod +x scripts/r2_backup.sh scripts/install_r2_backup_cron.sh
/bin/bash scripts/install_r2_backup_cron.sh --compose-dir "$(pwd)"
```

Dry-run:

```bash
cd Monorepo/docker/vps
/bin/bash scripts/r2_backup.sh --compose-dir "$(pwd)" --dry-run
```

## Database Cutover (SQLite -> PostgreSQL)

Run the full cutover with backup + import + service restart:

```bash
cd Monorepo/docker/vps
./scripts/cutover_sqlite_to_postgres.sh
```

For VPS rebuilds, prefer `./scripts/compose-safe.sh` over calling `docker compose`
directly. It pins the builtin docker builder and disables compose bake, which is
more stable on this host when importing locally built images.

The script will:

- backup current PostgreSQL and SQLite data
- import `/var/lib/docker/volumes/vps_sqlite_data/_data/yaru.db` into a new PostgreSQL database
- reinitialize AI runtime tables and replay AI runtime migration
- switch `.env` DSNs to the new database
- restart services and run stack + OAuth smoke checks

## Core Runtime Notes

- API listens on `http://yaru-core:8787`.
- PostgreSQL is the only application database backend.
- Redis backs caching, queues, and realtime fanout.
- Object storage is Cloudflare R2 via S3-compatible endpoint.
- Update manifest entrypoint is `https://update.asaka.moe/latest.json` (proxied by VPS Nginx to GitHub latest release asset).

## Workers Ingress (Origin Fallback)

- Public API traffic enters via Cloudflare Workers at `api.asaka.moe`.
- Workers proxy fallback to VPS origin `origin-api.asaka.moe` when `BACKEND_ROUTING=vps` (or canary).
- Ensure `origin-api.asaka.moe` is configured in Nginx and the TLS certificate covers this host.
- When dual-stack is enabled, VPS `DATABASE_URL` / `POSTGRES_URL` should point at Neon.

## Yaru-VerWeb Routing

- `web.asaka.moe` is served by the VPS `nginx` container and proxied to the Coolify-managed static Yaru-VerWeb container on `host.docker.internal:18082`.
- The VPS Nginx config for this route lives in `Monorepo/docker/vps/nginx/nginx.conf`.
- TLS for `web.asaka.moe` is issued with `acme.sh` via Cloudflare DNS challenge and installed to `/opt/asaka-backend/Monorepo/docker/vps/certs/web.crt` and `/opt/asaka-backend/Monorepo/docker/vps/certs/web.key`.
- Renewal is handled by the existing root crontab `acme.sh --cron` job and reloads `vps-nginx-1` after certificate updates.
- The root repo workflow `.github/workflows/deploy-yaru-verweb.yml` publishes Flutter web artifacts to `ProjectYaru/Yaru-web-deploy`; the distribution repo push can then trigger Coolify via webhook, with the workflow API trigger kept as a fallback.

## Update Channel Proxy Check

```bash
curl -i https://update.asaka.moe/latest.json
curl -L -s https://update.asaka.moe/latest.json | jq '.version, (.platforms | keys)'
```

Expected:

- `HTTP/1.1 302` (redirect to GitHub release latest asset)
- `curl -L` returns valid JSON with `version`, `build_number`, `platforms`, `min_supported_version`

## AI Routing

To force backend AI routes (`/api/ai/chat`, `/api/ai/vision`, `/api/ai/math-lens`) through new-api:

- `NEWAPI_BASE_URL=https://ai.asaka.moe/v1`
- `NEWAPI_API_KEY=...`
- `NEWAPI_PROVIDER_ID=nvidia`
- `NEWAPI_ALLOWLIST=152.53.160.77:3000`
- `AI_FORCE_NEWAPI=true`

## Important Environment Variables

- `DATABASE_URL` / `POSTGRES_URL`: application database DSN
- `REDIS_URL`: cache + queue + realtime DSN
- `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_ENDPOINT` / `R2_BUCKET`: Cloudflare R2
- `AUTOLINK_ENGINE_URL` / `AUTOLINK_ENGINE_TOKEN`: autolink engine API
- `AUTOLINK_RERANK_URL` / `AUTOLINK_RERANK_TOKEN`: rerank HTTP path
- `AI_RUNTIME_URL` / `AI_RUNTIME_TOKEN`: ai-runtime API
- `TYPST_COMPILER_URL`: Typst compiler endpoint for backend rendering (for this stack: `http://typst-compiler:8091/compile`)
- `TYPST_ALLOW_SOURCE_FALLBACK`: whether to allow source fallback when Typst compile fails (`true|false`)
 - `VPS_API_ORIGIN`: Worker fallback origin (example: `https://origin-api.asaka.moe`)
 - `BACKEND_ROUTING`: Worker routing mode (`vps|workers|canary`)
