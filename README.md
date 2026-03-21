# Yaru Web Deploy Repo

This repository stores only generated Flutter web output for Yaru.

## Update flow

- Source app: `ProjectYaru/Yaru`
- Sync script: `ProjectYaru/Yaru-release-automation/scripts/deploy_web_to_pages.py`
- CI workflow: `ProjectYaru/Yaru-release-automation/.github/workflows/deploy-yaru-verweb.yml`
- Publish target: this repository (`main` branch)
- Runtime: Vercel static hosting

## Vercel settings

- Project repository: `ProjectYaru/Yaru-web-deploy`
- Production branch: `main`
- Framework preset: `Other`
- Root directory: `.`
- Build command: empty
- Output directory: empty
- Install command: empty
- Custom domain: `web.asaka.moe`

## Required checks after deploy

- `GET /` returns `200`
- `GET /version.json` returns the current release version
- `GET /main.dart.mjs` returns `200` and `Content-Type` includes `text/javascript`
- `GET /manifest.json` returns `200` and `Content-Type` includes `application/manifest+json`
- `GET /pkg/asaka_bridge.js` returns `200` and not `text/html`
- `GET /pkg/asaka_bridge_bg.wasm` returns `200` and `Content-Type` includes `application/wasm`
- Response headers include `Cross-Origin-Opener-Policy: same-origin`
- Response headers include `Cross-Origin-Embedder-Policy: require-corp`

## Automation note

- `ProjectYaru/Yaru-release-automation` publishes Flutter web artifacts to this repo.
- Vercel should watch `ProjectYaru/Yaru-web-deploy` directly and deploy each push to `main`.
- No release, landing, or build scripts should live in this repository.
