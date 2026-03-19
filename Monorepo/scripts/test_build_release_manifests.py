from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import build_release_manifests as manifests


class BuildReleaseManifestsTest(unittest.TestCase):
    def test_build_manifest_variant_rewrites_nested_download_urls(self) -> None:
        base_manifest = {
            "version": "0.0.13-alpha",
            "build_number": 13,
            "release_date": "2026-03-15T14:13:51Z",
            "min_supported_version": "0.0.0",
            "platforms": {},
            "changelog": {"en": [{"type": "improvement", "text": "refreshed"}]},
        }
        merged_platforms = {
            "windows": {
                "installer_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/0.0.13-alpha/app.exe",
                "installer_sha256": "abc",
            },
            "android": {
                "installer_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/0.0.13-alpha/app-arm64.apk",
                "installer_sha256": "def",
                "apks": {
                    "arm64-v8a": {
                        "url": "https://github.com/ProjectYaru/Yaru-release/releases/download/0.0.13-alpha/app-arm64.apk",
                        "sha256": "def",
                    }
                },
            },
            "linux": {
                "appimage_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/0.0.13-alpha/app.AppImage",
                "appimage_sha256": "ghi",
            },
            "macos": {
                "dmg_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/0.0.13-alpha/app.dmg",
                "dmg_sha256": "jkl",
            },
        }

        manifest = manifests.build_manifest_variant(
            base_manifest=base_manifest,
            merged_platforms=merged_platforms,
            version="0.0.13-alpha",
            release_date="2026-03-16T00:00:00Z",
            min_supported_version="0.0.0",
            release_notes_url="https://github.com/ProjectYaru/Yaru-release/releases/tag/0.0.13-alpha",
            download_base="https://bucket.asaka.moe/stable",
        )

        self.assertEqual(
            manifest["platforms"]["windows"]["installer_url"],
            "https://bucket.asaka.moe/stable/app.exe",
        )
        self.assertEqual(
            manifest["platforms"]["android"]["apks"]["arm64-v8a"]["url"],
            "https://bucket.asaka.moe/stable/app-arm64.apk",
        )
        self.assertEqual(manifest["build_number"], 13)

    def test_merge_and_copy_release_assets(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            version = "1.2.3"
            dist_root = root / "dist-windows" / "foo" / version / "windows"
            dist_root.mkdir(parents=True)
            (dist_root / "app.exe").write_bytes(b"win")
            manifest_path = root / "dist-windows" / "foo" / version / "latest.json"
            manifest_path.write_text(
                """
                {
                  "version": "1.2.3",
                  "build_number": 7,
                  "release_date": "2026-03-16T00:00:00Z",
                  "min_supported_version": "1.0.0",
                  "platforms": {
                    "windows": {"installer_url": "https://example.com/app.exe"},
                    "android": {"installer_url": "https://example.com/app.apk"},
                    "linux": {"appimage_url": "https://example.com/app.AppImage"},
                    "macos": {"dmg_url": "https://example.com/app.dmg"}
                  },
                  "changelog": {"en": []}
                }
                """.strip(),
                encoding="utf-8",
            )

            android_root = root / "dist-android" / "foo" / version / "android"
            android_root.mkdir(parents=True)
            (android_root / "app.apk").write_bytes(b"apk")
            linux_root = root / "dist-linux" / "foo" / version / "linux"
            linux_root.mkdir(parents=True)
            (linux_root / "app.AppImage").write_bytes(b"linux")
            macos_root = root / "dist-macos" / "foo" / version / "macos"
            macos_root.mkdir(parents=True)
            (macos_root / "app.dmg").write_bytes(b"mac")

            for target in ("android", "linux", "macos"):
                manifest_copy = root / f"dist-{target}" / "foo" / version / "latest.json"
                manifest_copy.write_text(manifest_path.read_text(encoding="utf-8"), encoding="utf-8")

            manifest_paths = manifests.collect_version_manifests(root, version)
            base_manifest, merged_platforms = manifests.merge_platform_manifests(
                manifest_paths,
                version,
            )
            copied = manifests.copy_release_artifacts(
                manifests.collect_release_artifacts(root, version),
                root / "release-assets" / "common",
            )

            self.assertEqual(base_manifest["build_number"], 7)
            self.assertEqual(set(merged_platforms.keys()), manifests.EXPECTED_PLATFORMS)
            self.assertEqual(sorted(path.name for path in copied), [
                "app.AppImage",
                "app.apk",
                "app.dmg",
                "app.exe",
            ])


if __name__ == "__main__":
    unittest.main()
