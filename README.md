# Yaru-VerWeb Deploy Repo

This repository stores generated Flutter web output for Yaru.

## Update flow

- Source app: `Monorepo/apps/Flutter`
- Sync script: `Monorepo/scripts/deploy_web_to_pages.py`
- CI workflow: `.github/workflows/deploy-yaru-verweb.yml`
- Publish target: this repository (`main` branch)
- Runtime: Coolify with Dockerfile mode

## Coolify settings

- Application name: `Yaru-VerWeb`
- Repository: `asakatea/Yaru-VerWeb`
- Branch: `main`
- Build pack: `Dockerfile`
- Dockerfile location: `/Dockerfile`
- Exposed port: `80`
- Custom domain: `web.asaka.moe`

## Required checks after deploy

- `GET /` returns `200`
- `GET /main.dart.mjs` returns `200` and `Content-Type` includes `text/javascript`
- `GET /manifest.json` returns `200` and `Content-Type` includes `application/manifest+json`
- `GET /pkg/asaka_bridge.js` returns `200` and not `text/html`
- `GET /pkg/asaka_bridge_bg.wasm` returns `200` and `Content-Type` includes `application/wasm`
- Response headers include `Cross-Origin-Opener-Policy: same-origin`
- Response headers include `Cross-Origin-Embedder-Policy: require-corp`

## Automation note

- The root repo workflow publishes Flutter web artifacts to this repo and then triggers a Coolify deployment.
- The current default deploy trigger uses the Coolify API URL stored in `WEBAPP_COOLIFY_DEPLOY_URL`.
- SSH-triggered deployment is also supported, but is disabled by default unless `WEBAPP_VPS_SSH_ENABLED=true`.
