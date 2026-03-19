# AGENT.md

Last updated: 2026-03-09

## Objective
This document defines the shared collaboration baseline for work in the `projectyaru` repository, for both AI agents and maintainers.

It also defines the default release/build behavior for Yaru: when asked to prepare a release, the agent should orchestrate platform builds, collect artifacts, write user-friendly changelogs from recent commits and PRs, publish release metadata, and verify the public deployment path.

## Agent Honor Code
- Guessing at APIs is shameful; diligently querying and reading the actual source is honorable.
- Executing vaguely is shameful; seeking explicit confirmation from the user is honorable.
- Imagining business logic is shameful; verifying assumptions with the human is honorable.
- Inventing new interfaces is shameful; reusing existing ones is honorable.
- Skipping verification is shameful; proactively testing and validating is honorable.
- Breaking architecture is shameful; following established conventions is honorable.
- Pretending to understand is shameful; honestly admitting ignorance is honorable.
- Modifying code blindly is shameful; refactoring carefully and deliberately is honorable.

## Repository Branching & PR Rules
- `main` is the only long-lived stable branch.
- Do not commit or push directly to `main`; use PRs only, unless the task is explicitly about a distribution/release mirror repository whose workflow requires direct publishing.
- Start all work from `main` and use typed branch names:
  - `feature/<scope>-<summary>` for new features.
  - `fix/<scope>-<summary>` for bug fixes.
  - `hotfix/<scope>-<summary>` for urgent production fixes.
  - `refactor/<scope>-<summary>` for non-functional restructuring.
  - `chore/<scope>-<summary>` for tooling, CI, dependency, or maintenance tasks.
  - `docs/<scope>-<summary>` for documentation-only changes.
- Template branches are available for onboarding and PR flow:
  - `feature/template`, `fix/template`, `hotfix/template`, `refactor/template`, `chore/template`, `docs/template`.
- PR target branch:
  - `feature/*`, `fix/*`, `refactor/*`, `chore/*`, `docs/*` -> `main`
  - `hotfix/*` -> `main` and must include rollback notes in the PR description.
- Before opening a PR:
  - Rebase onto the latest `origin/main`.
  - Run lint/tests for the touched scope.
  - Include impact scope, risk, and verification steps in the PR description.

## Automated PR & Code Review Requirements
- For any completed code change on a working branch, the agent should automatically create or update a PR to the target branch without waiting for an extra prompt.
- A structured code review is mandatory before PR merge:
  - List findings by severity: `high`, `medium`, `low`.
  - Use file references for every finding.
  - Explicitly state `no findings` when none are found.
  - Include residual risks and missing test coverage, if any.
- PR descriptions must include:
  - Change summary.
  - Verification commands and results.
  - Rollback notes for risky or production-impacting changes.

## Current Production Shape
- Production API domain: `api.asaka.moe`
- Public Web domain: `web.asaka.moe`
- Update manifest domain: `update.asaka.moe`
- Runtime platform: VPS Docker
- Main services currently include:
  - `nginx`
  - `yaru-core`
  - `yaru-ai`
  - `yaru-autolink`
  - `typst-compiler`
  - `postgres`
  - `redis`
  - `qdrant`
  - `dozzle`
- Object storage: Cloudflare R2
- VPS SSH entry:
  - `ssh root@152.53.160.77`

## Documentation Policy
- In-app docs under `Monorepo/apps/backend/worker/src/content/docs` must keep only user-oriented onboarding and usage instructions.
- The in-app "developer guide" is no longer provided.
- Architecture and engineering details belong in repository docs such as `docs/architecture/` and `Monorepo/docker/vps/README.md`.
- Release-facing docs must remain synchronized with the current release flow, package list, and public URLs.

## Change Priorities
1. Protect production availability and rollback capability first.
2. Protect data safety next: backups, migration validation, and idempotency.
3. Optimize structure and user experience last.

## Operations Baseline
- Any operation affecting databases or secrets must be traceable.
- Health checks are mandatory before and after migrations: `/api/health`, container status, and key logs.
- For any data deletion, export a backup first and verify restorability.

## Backend Change Completion Gate
- Any backend-related change is incomplete until it is synchronized to the VPS and verified there.
- This includes API, worker, scheduler, database migration, runtime config, and deployment scripts.
- Minimum required sync path:
  - `ssh root@152.53.160.77`
- If VPS synchronization and verification are not performed, the task remains incomplete.

## Commit Conventions
- Commit in small increments with clear impact scope in the commit message.
- Do not revert or overwrite user changes unrelated to the current task.
- Documentation updates must keep the date and current status synchronized.

## Mandatory Flutter i18n Check
- After any Flutter code change, immediately run the full Flutter i18n scan from repo root:
  - `python3 tools/python/scan_flutter_ui_i18n.py --flutter-root Monorepo/apps/Flutter --include-widgets --json-out Monorepo/apps/Flutter/tool/reports/ui_i18n_scan_report.json --md-out Monorepo/apps/Flutter/tool/reports/ui_i18n_scan_report.md --fail-on-violations`
- This scan is zero-tolerance for three classes of issues:
  - hardcoded UI text
  - locale parity gaps between `en`, `zh`, and `zh_Hant`
  - locale corruption markers such as repeated `?` and ASCII `?` in Chinese sentences
- You may proceed only when the scan result is `violations=0`.
- If violations are found, fix them and re-run until it reaches zero.

## Release Build Objective
- When the user asks for build, packaging, or release work, the agent should:
  - build the official Flutter artifacts,
  - do so in parallel when safe,
  - write user-friendly changelogs from recent root-repo and submodule commits/PRs,
  - update release metadata,
  - publish the release surface,
  - verify public delivery and deployment.
- Prefer explicit build commands over opaque one-click scripts unless the user explicitly requests the script path.
- Run Flutter release builds from `Monorepo/apps/Flutter` unless the task states another target.

## Official Build Matrix

### Windows Host
- Android:
  - `flutter build apk --release --obfuscate --split-debug-info=build/android/symbols --tree-shake-icons --split-per-abi --target-platform android-arm,android-arm64,android-x64`
- Windows:
  - `flutter build windows --release --obfuscate --split-debug-info=build/windows/symbols --tree-shake-icons`
- Web (WASM):
  - `flutter build web --wasm`

### Arch Linux WSL
- Linux:
  - `flutter build linux --release --obfuscate --split-debug-info=build/linux/symbols --tree-shake-icons`

## Parallel Build Policy
- Default expectation: run Windows-side Android, Windows, and Web builds in parallel when machine resources allow.
- Run the Arch Linux WSL Linux build in parallel with Windows-side builds when the environment is ready.
- Serialize builds only when toolchain contention, disk pressure, or memory pressure makes parallel execution unreliable.
- Before starting a large release build, confirm the Flutter tree is clean enough for release work and that generated files from prior failed runs will not pollute packaging.

## Arch Linux WSL Baseline
- Preferred distro: `Arch Linux`
- Ensure Flutter is available inside WSL before starting the Linux build.
- Ensure the Linux packaging path can produce both a runnable directory artifact and the final Linux release assets when required.
- If AppImage packaging is part of the requested release, verify executable bits, desktop metadata, and runtime dependencies from the Arch environment.

## Release Changelog Policy
- Changelogs must be based on recent commits and PRs from:
  - the root repository,
  - the Flutter submodule,
  - the backend submodule,
  - any release-relevant site/deploy repositories touched by the release.
- Determine the comparison range from the previous published release tag or release timestamp.
- Group changes into user-facing themes instead of dumping raw commit lists.
- Prefer bilingual release notes when the release surface is bilingual.
- The top summary should be written for end users, not for developers.
- A detailed source section may follow with commit and PR references.
- Submodule pointer bumps must be translated into the actual user-visible changes behind those commits.

## Release Text Quality Rules
- Every user-facing release text must be checked for UTF-8 integrity.
- Before finishing release work, inspect at least:
  - `README.md`
  - `README_en.md`
  - `README_zh.md`
  - `latest.json`
  - release bodies on GitHub Releases
- Watch for mojibake markers such as:
  - `鈿`
  - `銈`
  - `锟`
  - `Ã`
  - `Â`
  - replacement-character artifacts or unexpected `?` bursts in Chinese text
- Use UTF-8 aware inspection, not only default Windows terminal rendering, before declaring text clean.

## Release Publishing Baseline
- If the task includes a real release, publish assets to `ProjectYaru/Yaru-release`.
- Keep release assets and names consistent across platforms.
- Expected release outputs usually include:
  - Windows installer and portable ZIP
  - Android APKs for `arm64-v8a`, `armeabi-v7a`, and `x86_64`
  - Linux `AppImage` and `tar.gz` when Linux packaging is requested
  - Web WASM build deployed via `ProjectYaru/Yaru-web-deploy`
- Update and verify release metadata files:
  - `latest.json`
  - `yaru-latest.json`
  - `yaru-<version>-history.json`

## Web Deploy Baseline
- Publish the Web/WASM output to `ProjectYaru/Yaru-web-deploy` when the task includes Web release.
- Treat push-to-deploy as unverified until checked through either:
  - the public site response, or
  - the VPS/container path serving `web.asaka.moe`.
- If a deployment path claims automatic push-triggered rollout, verify it explicitly.

## Release Verification Checklist
- Verify the GitHub Release body is updated and readable.
- Verify uploaded assets match the release metadata.
- Verify `https://github.com/ProjectYaru/Yaru-release/releases/latest/download/latest.json`.
- Verify `https://update.asaka.moe/latest.json`.
- Verify the public Web deployment endpoint after pushing `Yaru-VerWeb`.
- Verify package recommendations in release notes still match the actual asset list.
- Verify no release-facing text contains mojibake.

## Recommended User-Facing Package Guidance
- Windows users should usually download the installer first.
- Android users should usually download `arm64-v8a` first.
- `armeabi-v7a` is mainly for older 32-bit Android devices.
- `x86_64` is mainly for emulators or a small number of x86 Android devices.
- Linux desktop users should usually prefer `AppImage` when available.
- Users who do not want installation can use the Web/WASM build.

## Release Plan Template (Manual)
1. Preflight
   - Confirm `gh auth status`, Flutter SDK, Android SDK, VS Desktop C++, Inno Setup, and Arch WSL are available.
   - Confirm `C:\Users\<user>\Desktop\win.iss` exists and points to the correct build output path.
2. Version + i18n
   - Update `Monorepo/apps/Flutter/pubspec.yaml` `version` and `msix_version`.
   - Update `win.iss` `MyAppVersion` and `OutputBaseFilename`.
   - Run the mandatory Flutter i18n scan (must be `violations=0`).
3. Build (Windows host)
   - Windows: `flutter build windows --release --obfuscate --split-debug-info=build/windows/symbols --tree-shake-icons`
   - Android: `flutter build apk --release --obfuscate --split-debug-info=build/android/symbols --tree-shake-icons --split-per-abi --target-platform android-arm,android-arm64,android-x64`
   - Web/WASM: `flutter build web --wasm`
4. Build (Arch WSL)
   - Linux: `flutter build linux --release --obfuscate --split-debug-info=build/linux/symbols --tree-shake-icons`
5. Package
   - Windows portable ZIP from `build/windows/x64/runner/Release`.
   - Windows installer: run Inno Setup `ISCC.exe` with `win.iss`, rename to `yaru-<version>-windows-x64-setup.exe`.
   - Android APKs: rename to `yaru-<version>-android-<abi>.apk`.
   - Linux: build `AppImage` + `tar.gz` (ensure `AppRun`, `.DirIcon`, and `appimagetool`).
6. Assemble release artifacts
   - Place assets under `Monorepo/dist/<version>/`.
   - Compute SHA-256 + file sizes and generate:
     - `latest.json`
     - `yaru-latest.json`
     - `history-<version>.json`
     - `yaru-<version>-history.json`
   - Verify UTF-8 integrity for Chinese text (no mojibake / `???`).
7. Release notes
   - Write bilingual summary + changelog.
   - Include a download table and package guidance.
8. Publish
   - Update and push `Monorepo/distribution/release/latest.json`.
   - Sync `Monorepo/distribution/Yaru-VerWeb` with `build/web` and push.
   - Create GitHub release and upload all assets + manifests.
   - If this is not a pre-release: set `--prerelease=false` and mark `--latest`.
9. Verify
   - Check GitHub release body + assets.
   - Check `https://github.com/ProjectYaru/Yaru-release/releases/latest/download/latest.json`.
   - Check `https://update.asaka.moe/latest.json`.
   - Check `web.asaka.moe` deploy.
