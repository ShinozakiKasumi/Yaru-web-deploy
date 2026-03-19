#!/usr/bin/env python3
"""
Yaru Auto-Update Deployment Script

This script builds, packages, and uploads Yaru releases to GitHub Release.

Usage:
    python deploy.py                         # Build/deploy for current platform
    python deploy.py --platform linux,android
    python deploy.py --platform local        # Alias for linux,android
    python deploy.py --platform android
    python deploy.py --build-only            # Build/package only, no upload
    python deploy.py --skip-build            # Publish using existing build outputs

Environment Variables:
    GH_TOKEN / GITHUB_TOKEN - GitHub token with release write permission
    UPDATE_GITHUB_REPO      - GitHub repository (default: ProjectYaru/Yaru-release)
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import platform
import re
import shutil
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

import release_publish

try:
    import yaml
except ImportError:
    print("Error: pyyaml is required. Install with: pip install pyyaml")
    sys.exit(1)


# Configuration
ROOT_DIR = Path(__file__).resolve().parent.parent
FLUTTER_APP_DIR = ROOT_DIR / "apps" / "Flutter"
BUILD_DIR = FLUTTER_APP_DIR / "build"
DIST_DIR = ROOT_DIR / "dist"

DEFAULT_GITHUB_REPO = "ProjectYaru/Yaru-release"

STABLE_CHANNEL = "stable"
STABLE_MANIFEST_KEY = "latest.json"


@dataclass(frozen=True)
class DeployOptions:
    build_only: bool
    skip_build: bool
    channel: str
    android_target_platform: str
    android_primary_abi: str
    android_split_per_abi: bool
    android_obfuscate: bool
    android_split_debug_info: str
    android_tree_shake_icons: bool


def get_current_platform() -> str:
    """Get current platform identifier."""
    system = platform.system().lower()
    if system == "windows":
        return "windows"
    if system == "linux":
        return "linux"
    if system == "darwin":
        return "macos"
    raise ValueError(f"Unsupported platform: {system}")


def read_pubspec() -> dict:
    """Read pubspec.yaml and extract version info."""
    pubspec_path = FLUTTER_APP_DIR / "pubspec.yaml"
    with open(pubspec_path, "r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def get_version_info() -> tuple[str, int]:
    """Extract version and build number from pubspec.yaml."""
    pubspec = read_pubspec()
    version_str = str(pubspec.get("version", "1.0.0+1"))

    if "+" in version_str:
        version, build = version_str.split("+", 1)
        return version, int(build)
    return version_str, 1


def resolve_github_repo() -> str:
    repo = os.environ.get("UPDATE_GITHUB_REPO", "").strip()
    return repo or DEFAULT_GITHUB_REPO


def github_release_asset_url(version: str, filename: str) -> str:
    repo = resolve_github_repo()
    return f"https://github.com/{repo}/releases/download/{version}/{filename}"


def github_release_tag_url(version: str) -> str:
    repo = resolve_github_repo()
    return f"https://github.com/{repo}/releases/tag/{version}"


def github_latest_manifest_url(channel: str) -> str:
    if channel != STABLE_CHANNEL:
        raise ValueError(f"Unsupported channel: {channel}")
    repo = resolve_github_repo()
    return f"https://github.com/{repo}/releases/latest/download/{STABLE_MANIFEST_KEY}"


def parse_changelog(version: str) -> dict:
    """Parse CHANGELOG.md for the specified version."""
    changelog_path = FLUTTER_APP_DIR / "CHANGELOG.md"
    if not changelog_path.exists():
        return {"en": []}

    entries = {"en": []}
    with open(changelog_path, "r", encoding="utf-8") as handle:
        content = handle.read()

    pattern = rf"## \[?{re.escape(version)}\]?.*?\n(.*?)(?=\n## |\Z)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        return entries

    section = match.group(1)
    for line in section.strip().split("\n"):
        line = line.strip()
        if not line or line.startswith("#"):
            continue

        entry_type = "improvement"
        text = line.lstrip("- *")
        lower_text = text.lower()
        if any(word in lower_text for word in ["add", "new", "feature", "introduce"]):
            entry_type = "feature"
        elif any(word in lower_text for word in ["fix", "bug", "issue", "resolve"]):
            entry_type = "fix"
        elif any(word in lower_text for word in ["break", "remove", "deprecate"]):
            entry_type = "breaking"

        entries["en"].append({"type": entry_type, "text": text})

    return entries


def calculate_sha256(file_path: Path) -> str:
    """Calculate SHA-256 hash of a file."""
    digest = hashlib.sha256()
    with open(file_path, "rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def run_command(
    cmd: list[str | Path],
    cwd: Optional[Path] = None,
    env: Optional[dict[str, str]] = None,
) -> None:
    """Run a command and raise on failure."""
    normalized_cmd = [str(part) for part in cmd]
    if normalized_cmd:
        executable = normalized_cmd[0]
        if Path(executable).suffix == "":
            resolved_executable = shutil.which(executable)
            if resolved_executable is None and os.name == "nt":
                for ext in (".exe", ".bat", ".cmd"):
                    resolved_executable = shutil.which(f"{executable}{ext}")
                    if resolved_executable:
                        break
            if resolved_executable:
                normalized_cmd[0] = resolved_executable
    print(f"Running: {' '.join(normalized_cmd)}")
    result = subprocess.run(normalized_cmd, cwd=cwd, env=env)
    if result.returncode != 0:
        raise RuntimeError(
            f"Command failed with exit code {result.returncode}: {' '.join(normalized_cmd)}"
        )


def expected_build_output(platform_name: str) -> Path:
    if platform_name == "windows":
        return BUILD_DIR / "windows" / "x64" / "runner" / "Release"
    if platform_name == "linux":
        return BUILD_DIR / "linux" / "x64" / "release" / "bundle"
    if platform_name == "macos":
        return BUILD_DIR / "macos" / "Build" / "Products" / "Release"
    if platform_name == "android":
        return BUILD_DIR / "app" / "outputs" / "flutter-apk"
    raise ValueError(f"Unsupported platform: {platform_name}")


def build_flutter(platform_name: str, options: DeployOptions) -> Path:
    """Build Flutter app for the specified platform and return output path."""
    output_path = expected_build_output(platform_name)

    if options.skip_build:
        if not output_path.exists():
            raise FileNotFoundError(
                f"--skip-build was provided, but expected output path does not exist: {output_path}"
            )
        print(
            f"Skipping build for {platform_name}; using existing outputs at {output_path}"
        )
        return output_path

    print(f"\n{'=' * 50}")
    print(f"Building for {platform_name}...")
    print(f"{'=' * 50}\n")

    if platform_name == "windows":
        run_command(["flutter", "build", "windows", "--release"], cwd=FLUTTER_APP_DIR)
    elif platform_name == "linux":
        run_command(["flutter", "build", "linux", "--release"], cwd=FLUTTER_APP_DIR)
    elif platform_name == "macos":
        run_command(["flutter", "build", "macos", "--release"], cwd=FLUTTER_APP_DIR)
    elif platform_name == "android":
        split_info = Path(options.android_split_debug_info)
        split_info_path = (
            split_info if split_info.is_absolute() else (FLUTTER_APP_DIR / split_info)
        )
        split_info_path.mkdir(parents=True, exist_ok=True)

        cmd: list[str] = [
            "flutter",
            "build",
            "apk",
            "--release",
            f"--target-platform={options.android_target_platform}",
            f"--split-debug-info={options.android_split_debug_info}",
        ]
        if options.android_split_per_abi:
            cmd.append("--split-per-abi")
        if options.android_obfuscate:
            cmd.append("--obfuscate")
        if options.android_tree_shake_icons:
            cmd.append("--tree-shake-icons")

        run_command(cmd, cwd=FLUTTER_APP_DIR)
    else:
        raise ValueError(f"Unsupported platform: {platform_name}")

    if not output_path.exists():
        raise RuntimeError(f"Expected build output was not found: {output_path}")
    return output_path


def prepare_version_platform_dir(version: str, platform_name: str) -> Path:
    """Create a clean dist directory for one platform release."""
    version_dir = DIST_DIR / version / platform_name
    if version_dir.exists():
        shutil.rmtree(version_dir)
    version_dir.mkdir(parents=True, exist_ok=True)
    return version_dir


def parse_linux_cmake_value(key: str, fallback: str) -> str:
    """Extract simple set(KEY \"value\") from linux/CMakeLists.txt."""
    cmake_path = FLUTTER_APP_DIR / "linux" / "CMakeLists.txt"
    if not cmake_path.exists():
        return fallback

    with open(cmake_path, "r", encoding="utf-8") as handle:
        content = handle.read()

    match = re.search(rf'set\(\s*{re.escape(key)}\s+"([^"]+)"\s*\)', content)
    if match:
        return match.group(1)
    return fallback


def package_windows(build_path: Path, version: str) -> dict:
    """Package Windows build into MSIX installer and optional portable zip."""
    print("\nPackaging Windows build...")
    if not build_path.exists():
        raise FileNotFoundError(f"Windows build output not found: {build_path}")

    version_dir = prepare_version_platform_dir(version, "windows")
    assets: dict[str, str | int] = {}

    portable_name = "yaru-portable"
    portable_zip = version_dir / f"{portable_name}.zip"
    shutil.make_archive(str(version_dir / portable_name), "zip", build_path)

    assets["portable_url"] = github_release_asset_url(version, portable_zip.name)
    assets["portable_sha256"] = calculate_sha256(portable_zip)
    assets["portable_size"] = portable_zip.stat().st_size

    msix_cmd = [
        "flutter",
        "pub",
        "run",
        "msix:create",
        "--install-certificate",
        "false",
        "--build-windows",
        "false",
    ]
    msix_publisher = os.environ.get("MSIX_PUBLISHER", "").strip()
    msix_cert_path = os.environ.get("MSIX_CERTIFICATE_PATH", "").strip()
    msix_cert_password = os.environ.get("MSIX_CERTIFICATE_PASSWORD", "").strip()

    if msix_publisher:
        msix_cmd.extend(["--publisher", msix_publisher])
    if msix_cert_path:
        msix_cmd.extend(["--certificate-path", msix_cert_path])
    if msix_cert_password:
        msix_cmd.extend(["--certificate-password", msix_cert_password])

    run_command(msix_cmd, cwd=FLUTTER_APP_DIR)

    preferred_msix_dir = BUILD_DIR / "windows" / "x64" / "runner" / "Release"
    msix_candidates = sorted(preferred_msix_dir.glob("*.msix"))
    if not msix_candidates:
        msix_candidates = sorted((BUILD_DIR / "windows").rglob("*.msix"))
    if not msix_candidates:
        raise RuntimeError(
            "MSIX package was not generated by `flutter pub run msix:create`."
        )

    # Take the latest candidate by mtime to avoid stale files from previous runs.
    msix_source = max(msix_candidates, key=lambda p: p.stat().st_mtime)
    msix_target = version_dir / msix_source.name
    shutil.copy2(msix_source, msix_target)

    assets["installer_url"] = github_release_asset_url(version, msix_target.name)
    assets["installer_sha256"] = calculate_sha256(msix_target)
    assets["installer_size"] = msix_target.stat().st_size

    iscc_path = shutil.which("iscc")
    if iscc_path:
        iss_file = FLUTTER_APP_DIR / "windows" / "installer.iss"
        if iss_file.exists():
            run_command([iscc_path, str(iss_file)], cwd=FLUTTER_APP_DIR)
            installer_path = version_dir / "yaru-setup.exe"
            if installer_path.exists():
                assets["installer_url"] = (
                    github_release_asset_url(version, installer_path.name)
                )
                assets["installer_sha256"] = calculate_sha256(installer_path)
                assets["installer_size"] = installer_path.stat().st_size
    else:
        print("Warning: Inno Setup not found, skipping installer creation")

    return assets


def ensure_linux_appdir_metadata(
    app_dir: Path, binary_name: str, application_id: str
) -> None:
    """Ensure AppRun, desktop file, and icon exist for appimagetool."""
    binary_path = app_dir / binary_name
    if not binary_path.exists():
        raise FileNotFoundError(f"Linux executable not found in bundle: {binary_path}")
    binary_path.chmod(binary_path.stat().st_mode | 0o111)

    desktop_candidates = [
        app_dir / f"{application_id}.desktop",
        *sorted(app_dir.glob("*.desktop")),
        *sorted((app_dir / "share" / "applications").glob("*.desktop")),
    ]
    desktop_source = next(
        (candidate for candidate in desktop_candidates if candidate.exists()), None
    )
    if desktop_source is None:
        desktop_source = app_dir / f"{application_id}.desktop"
        desktop_source.write_text(
            (
                "[Desktop Entry]\n"
                "Type=Application\n"
                "Version=1.0\n"
                "Name=Yaru\n"
                f"Exec={binary_name}\n"
                f"Icon={application_id}\n"
                "Categories=Education;\n"
                "Terminal=false\n"
            ),
            encoding="utf-8",
        )

    desktop_root = app_dir / desktop_source.name
    if desktop_source.resolve() != desktop_root.resolve():
        shutil.copy2(desktop_source, desktop_root)

    icon_root = app_dir / f"{application_id}.png"
    if not icon_root.exists():
        icon_candidates = [
            app_dir
            / "share"
            / "icons"
            / "hicolor"
            / "1024x1024"
            / "apps"
            / f"{application_id}.png",
            app_dir
            / "share"
            / "icons"
            / "hicolor"
            / "512x512"
            / "apps"
            / f"{application_id}.png",
            app_dir
            / "share"
            / "icons"
            / "hicolor"
            / "256x256"
            / "apps"
            / f"{application_id}.png",
            FLUTTER_APP_DIR / "assets" / "icon" / "asaka_app_icon.png",
        ]
        icon_source = next(
            (candidate for candidate in icon_candidates if candidate.exists()), None
        )
        if icon_source is None:
            raise FileNotFoundError("No PNG icon found for AppImage packaging.")
        shutil.copy2(icon_source, icon_root)

    app_run = app_dir / "AppRun"
    app_run.write_text(
        (
            "#!/bin/sh\n"
            "set -eu\n"
            'HERE="$(dirname "$(readlink -f "$0")")"\n'
            f'exec "$HERE/{binary_name}" "$@"\n'
        ),
        encoding="utf-8",
    )
    app_run.chmod(0o755)

    dir_icon = app_dir / ".DirIcon"
    if dir_icon.exists() or dir_icon.is_symlink():
        dir_icon.unlink()
    try:
        dir_icon.symlink_to(icon_root.name)
    except OSError:
        shutil.copy2(icon_root, dir_icon)


def package_linux(build_path: Path, version: str) -> dict:
    """Package Linux build into AppImage plus optional tar.gz bundle."""
    print("\nPackaging Linux build...")
    if not build_path.exists():
        raise FileNotFoundError(f"Linux build output not found: {build_path}")

    appimagetool = shutil.which("appimagetool")
    if not appimagetool:
        raise RuntimeError(
            "appimagetool is required to build AppImage, but it was not found in PATH."
        )

    binary_name = parse_linux_cmake_value("BINARY_NAME", "yaru")
    application_id = parse_linux_cmake_value("APPLICATION_ID", "moe.asaka.app")

    version_dir = prepare_version_platform_dir(version, "linux")
    app_dir = version_dir / "Yaru.AppDir"
    shutil.copytree(build_path, app_dir, symlinks=True)

    ensure_linux_appdir_metadata(app_dir, binary_name, application_id)

    appimage_name = "Yaru-x86_64.AppImage"
    appimage_path = version_dir / appimage_name
    env = os.environ.copy()
    env.setdefault("ARCH", "x86_64")
    run_command([appimagetool, "--no-appstream", app_dir, appimage_path], env=env)

    if not appimage_path.exists():
        raise RuntimeError(f"AppImage was not generated: {appimage_path}")
    appimage_path.chmod(appimage_path.stat().st_mode | 0o111)

    assets: dict[str, str | int] = {
        "appimage_url": github_release_asset_url(version, appimage_name),
        "appimage_sha256": calculate_sha256(appimage_path),
        "appimage_size": appimage_path.stat().st_size,
    }

    tarball_name = f"yaru-{version}-linux-x64"
    tarball_path = version_dir / f"{tarball_name}.tar.gz"
    shutil.make_archive(str(version_dir / tarball_name), "gztar", build_path)
    assets["portable_url"] = github_release_asset_url(version, tarball_path.name)
    assets["portable_sha256"] = calculate_sha256(tarball_path)
    assets["portable_size"] = tarball_path.stat().st_size

    return assets


def collect_android_apks(output_dir: Path) -> list[Path]:
    """Find generated Android APK files in Flutter output directory."""
    apk_files = sorted(output_dir.glob("app-*-release.apk"))
    if not apk_files:
        apk_files = sorted(output_dir.glob("*release.apk"))
    return [apk for apk in apk_files if apk.is_file()]


def pick_primary_android_apk(apk_files: list[Path], primary_abi: str) -> Path:
    """Choose APK used by latest.json installer_url."""
    if not apk_files:
        raise ValueError("No Android APK files were produced.")

    abi_token = primary_abi.lower().replace("_", "-")
    for apk in apk_files:
        if abi_token in apk.name.lower():
            return apk

    if len(apk_files) == 1:
        return apk_files[0]

    names = ", ".join(apk.name for apk in apk_files)
    raise RuntimeError(f"Primary ABI APK '{primary_abi}' not found. Available: {names}")


def package_android(build_path: Path, version: str, primary_abi: str) -> dict:
    """Package Android outputs and select primary installer APK for latest.json."""
    print("\nPackaging Android build...")
    if not build_path.exists():
        raise FileNotFoundError(f"Android build output not found: {build_path}")

    apk_files = collect_android_apks(build_path)
    if not apk_files:
        raise RuntimeError(f"No APK files found in: {build_path}")

    version_dir = prepare_version_platform_dir(version, "android")
    copied_apks: list[Path] = []
    for apk in apk_files:
        destination = version_dir / apk.name
        shutil.copy2(apk, destination)
        copied_apks.append(destination)

    primary_apk = pick_primary_android_apk(copied_apks, primary_abi)
    return {
        "installer_url": github_release_asset_url(version, primary_apk.name),
        "installer_sha256": calculate_sha256(primary_apk),
        "installer_size": primary_apk.stat().st_size,
    }


def package_macos(build_path: Path, version: str) -> dict:
    """Package macOS build into DMG."""
    print("\nPackaging macOS build...")
    if not build_path.exists():
        raise FileNotFoundError(f"macOS build output not found: {build_path}")

    version_dir = prepare_version_platform_dir(version, "macos")
    assets: dict[str, str | int] = {}

    app_bundle = next(
        (item for item in build_path.iterdir() if item.suffix == ".app"), None
    )
    if not app_bundle:
        raise RuntimeError(f"No .app bundle found under {build_path}")

    dmg_name = "Yaru.dmg"
    dmg_path = version_dir / dmg_name

    run_command(
        [
            "hdiutil",
            "create",
            "-volname",
            "Yaru",
            "-srcfolder",
            app_bundle,
            "-ov",
            "-format",
            "UDZO",
            dmg_path,
        ]
    )

    assets["dmg_url"] = github_release_asset_url(version, dmg_name)
    assets["dmg_sha256"] = calculate_sha256(dmg_path)
    assets["dmg_size"] = dmg_path.stat().st_size
    return assets


def generate_latest_json(
    version: str,
    build_number: int,
    platforms: dict,
    changelog: dict,
    min_supported_version: str,
) -> dict:
    """Generate latest.json payload."""
    return {
        "version": version,
        "build_number": build_number,
        "release_date": datetime.now(timezone.utc).isoformat(),
        "min_supported_version": min_supported_version,
        "platforms": platforms,
        "changelog": changelog,
        "release_notes_url": github_release_tag_url(version),
    }


def manifest_key_for_channel(channel: str) -> str:
    if channel == STABLE_CHANNEL:
        return STABLE_MANIFEST_KEY
    raise ValueError(f"Unsupported channel: {channel}")


def manifest_url_for_channel(channel: str) -> str:
    if channel == STABLE_CHANNEL:
        return "https://update.asaka.moe/latest.json"
    raise ValueError(f"Unsupported channel: {channel}")


def fetch_existing_latest_json(channel: str) -> dict:
    """Fetch existing channel manifest for safe platform merge."""
    url = github_latest_manifest_url(channel)
    request = Request(url, headers={"Cache-Control": "no-cache"})
    try:
        with urlopen(request, timeout=10) as response:
            payload = response.read().decode("utf-8")
            data = json.loads(payload)
            if isinstance(data, dict):
                return data
            return {}
    except HTTPError as exc:
        if exc.code == 404:
            return {}
        print(f"Warning: Failed to fetch existing manifest (HTTP {exc.code})")
        return {}
    except (URLError, json.JSONDecodeError) as exc:
        print(f"Warning: Failed to fetch existing manifest: {exc}")
        return {}


def load_local_manifest_fallback(version: str) -> dict:
    """Load a locally generated manifest for same-version multi-platform merge."""
    local_path = DIST_DIR / version / "latest.json"
    if not local_path.exists():
        return {}
    try:
        with open(local_path, "r", encoding="utf-8") as handle:
            data = json.load(handle)
        if isinstance(data, dict):
            print(f"Using local manifest fallback from {local_path}")
            return data
    except (OSError, json.JSONDecodeError) as exc:
        print(f"Warning: Failed to load local manifest fallback: {exc}")
    return {}


def build_platform_release(
    target_platform: str,
    options: DeployOptions,
    version: str,
) -> dict:
    """Build and package one platform into dist/<version>/<platform>."""
    print(f"\nDeploying Yaru v{version} for {target_platform}")
    build_path = build_flutter(target_platform, options)

    if target_platform == "windows":
        return package_windows(build_path, version)
    elif target_platform == "linux":
        return package_linux(build_path, version)
    elif target_platform == "macos":
        return package_macos(build_path, version)
    elif target_platform == "android":
        return package_android(build_path, version, options.android_primary_abi)
    raise ValueError(f"Unsupported platform: {target_platform}")


def load_existing_manifest(version: str, channel: str) -> dict:
    existing_latest = fetch_existing_latest_json(channel)
    if not isinstance(existing_latest.get("platforms"), dict):
        existing_latest = {}
    elif str(existing_latest.get("version", "")) != version:
        print(
            "Existing manifest version "
            f"'{existing_latest.get('version')}' does not match current '{version}', starting fresh merge."
        )
        existing_latest = {}
    if not existing_latest:
        local_fallback = load_local_manifest_fallback(version)
        if local_fallback:
            existing_latest = local_fallback
    return existing_latest


def write_latest_manifest(version: str, latest_json: dict) -> Path:
    latest_path = DIST_DIR / version / "latest.json"
    latest_path.parent.mkdir(parents=True, exist_ok=True)
    with open(latest_path, "w", encoding="utf-8") as handle:
        json.dump(latest_json, handle, indent=2, ensure_ascii=False)
    return latest_path


def collect_release_artifacts(version: str) -> list[Path]:
    version_dir = DIST_DIR / version
    if not version_dir.exists():
        return []
    return sorted(path for path in version_dir.glob("*/*") if path.is_file())


def publish_local_release(version: str, latest_json: dict) -> None:
    artifacts = collect_release_artifacts(version)
    if not artifacts:
        raise RuntimeError(f"No release artifacts found under {DIST_DIR / version}")

    release_publish.publish_release_bundle(
        version=version,
        github_manifest=latest_json,
        artifacts=artifacts,
        github_repo=resolve_github_repo(),
        log=print,
    )


def expand_platforms(raw_value: Optional[str]) -> list[str]:
    """Expand single/group/comma-separated platform arguments."""
    groups: dict[str, list[str]] = {
        "all": ["windows", "linux", "macos", "android"],
        "desktop": ["windows", "linux", "macos"],
        "mobile": ["android"],
        "local": ["linux", "android"],
    }
    valid_single = {"windows", "linux", "macos", "android"}

    if raw_value is None:
        return [get_current_platform()]

    values = [part.strip().lower() for part in raw_value.split(",") if part.strip()]
    if not values:
        raise ValueError("Platform argument is empty.")

    expanded: list[str] = []
    for item in values:
        if item in groups:
            candidates = groups[item]
        elif item in valid_single:
            candidates = [item]
        else:
            valid_tokens = ", ".join(sorted(valid_single | set(groups.keys())))
            raise ValueError(
                f"Unsupported platform token '{item}'. Valid values: {valid_tokens}"
            )

        for candidate in candidates:
            if candidate not in expanded:
                expanded.append(candidate)
    return expanded


def parse_args() -> tuple[list[str], DeployOptions]:
    parser = argparse.ArgumentParser(description="Yaru Auto-Update Deployment Script")
    parser.add_argument(
        "--platform",
        default=None,
        help=(
            "Target platform token(s). "
            "Valid singles: windows, linux, macos, android. "
            "Valid groups: local, mobile, desktop, all. "
            "Comma-separated values are supported (e.g., linux,android)."
        ),
    )
    parser.add_argument(
        "--build-only",
        action="store_true",
        help="Build/package only, do not upload artifacts or latest.json.",
    )
    parser.add_argument(
        "--skip-build",
        action="store_true",
        help="Skip flutter build and package/upload using existing build outputs.",
    )
    parser.add_argument(
        "--channel",
        choices=[STABLE_CHANNEL],
        default=STABLE_CHANNEL,
        help="Update channel manifest to publish (currently only stable).",
    )
    parser.add_argument(
        "--android-target-platform",
        default="android-arm,android-arm64",
        help="Comma-separated value for flutter --target-platform on Android.",
    )
    parser.add_argument(
        "--android-primary-abi",
        default="arm64-v8a",
        help="ABI suffix used for latest.json installer_url (default: arm64-v8a).",
    )
    parser.add_argument(
        "--android-split-debug-info",
        default="./build/app/outputs/symbols",
        help="Path passed to flutter --split-debug-info.",
    )

    parser.add_argument(
        "--android-split-per-abi",
        dest="android_split_per_abi",
        action="store_true",
        default=True,
        help="Enable --split-per-abi when building Android APK.",
    )
    parser.add_argument(
        "--no-android-split-per-abi",
        dest="android_split_per_abi",
        action="store_false",
        help="Disable --split-per-abi.",
    )

    parser.add_argument(
        "--android-obfuscate",
        dest="android_obfuscate",
        action="store_true",
        default=True,
        help="Enable --obfuscate when building Android APK.",
    )
    parser.add_argument(
        "--no-android-obfuscate",
        dest="android_obfuscate",
        action="store_false",
        help="Disable --obfuscate.",
    )

    parser.add_argument(
        "--android-tree-shake-icons",
        dest="android_tree_shake_icons",
        action="store_true",
        default=True,
        help="Enable --tree-shake-icons when building Android APK.",
    )
    parser.add_argument(
        "--no-android-tree-shake-icons",
        dest="android_tree_shake_icons",
        action="store_false",
        help="Disable --tree-shake-icons.",
    )

    args = parser.parse_args()
    target_platforms = expand_platforms(args.platform)
    options = DeployOptions(
        build_only=args.build_only,
        skip_build=args.skip_build,
        channel=args.channel,
        android_target_platform=args.android_target_platform,
        android_primary_abi=args.android_primary_abi,
        android_split_per_abi=args.android_split_per_abi,
        android_obfuscate=args.android_obfuscate,
        android_split_debug_info=args.android_split_debug_info,
        android_tree_shake_icons=args.android_tree_shake_icons,
    )
    return target_platforms, options


def main() -> None:
    platforms, options = parse_args()
    version, build_number = get_version_info()
    print(f"\nPreparing Yaru v{version} (build {build_number})")

    failures: list[tuple[str, str]] = []
    existing_latest = load_existing_manifest(version, options.channel)
    merged_platforms = dict(existing_latest.get("platforms", {}))
    changelog = parse_changelog(version)

    for target in platforms:
        try:
            merged_platforms[target] = build_platform_release(target, options, version)
        except Exception as exc:  # noqa: BLE001 - CLI script should keep going and summarize.
            failures.append((target, str(exc)))
            print(f"Error deploying for {target}: {exc}")

    if failures:
        print("\nDeployment finished with failures:")
        for platform_name, error in failures:
            print(f"  - {platform_name}: {error}")
        raise SystemExit(1)

    existing_min = str(existing_latest.get("min_supported_version", "0.0.0"))
    min_supported_version = os.environ.get("MIN_SUPPORTED_VERSION", existing_min)
    latest_json = generate_latest_json(
        version=version,
        build_number=build_number,
        platforms=merged_platforms,
        changelog=changelog,
        min_supported_version=min_supported_version,
    )
    latest_path = write_latest_manifest(version, latest_json)

    print(f"\n[ok] Build/package complete: {DIST_DIR / version}")
    print(f"  Manifest: {latest_path}")
    if options.build_only:
        print("\n--build-only specified, skipping publish")
        return

    print("\n" + "=" * 50)
    print("Publishing GitHub Release, syncing R2, and deploying landing...")
    print("=" * 50 + "\n")
    publish_local_release(version, latest_json)

    print("\n[ok] Deployment complete!")
    print(f"  Update URL: {manifest_url_for_channel(options.channel)}")


if __name__ == "__main__":
    main()
