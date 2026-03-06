# Yaru Webapp Deploy Repo

This repository stores generated Flutter web output for Yaru.

## Update flow

- Source app: `Monorepo/apps/Flutter`
- Sync script: `Monorepo/scripts/deploy_web_to_pages.py`
- CI workflow: `.github/workflows/deploy-webapp.yml`
- Publish target: this repository (`main` branch)
- Runtime: Coolify with Dockerfile mode

## Coolify settings

- Repository: `asakatea/webapp`
- Branch: `main`
- Build pack: `Dockerfile`
- Dockerfile location: `/Dockerfile`
- Exposed port: `80`
- Custom domain: `web.asaka.moe`

## Required checks after deploy

- `GET /` returns `200`
- `GET /pkg/asaka_bridge.js` returns `200` and not `text/html`
- `GET /pkg/asaka_bridge_bg.wasm` returns `200`
- Response headers include `Cross-Origin-Opener-Policy: same-origin`
- Response headers include `Cross-Origin-Embedder-Policy: require-corp`
