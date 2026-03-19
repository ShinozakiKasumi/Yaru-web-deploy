from __future__ import annotations

import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parent))

import release_publish


class ReleasePublishTest(unittest.TestCase):
    def test_build_manifest_bundle_rewrites_server_urls(self) -> None:
        github_manifest = {
            "version": "1.2.3",
            "build_number": 3,
            "release_date": "2026-03-16T00:00:00Z",
            "min_supported_version": "1.0.0",
            "release_notes_url": "https://github.com/ProjectYaru/Yaru-release/releases/tag/1.2.3",
            "changelog": {"en": [{"type": "feature", "text": "New release"}]},
            "platforms": {
                "windows": {
                    "installer_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/1.2.3/app.exe",
                    "portable_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/1.2.3/app.zip",
                },
                "android": {
                    "installer_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/1.2.3/app-arm64.apk",
                },
                "linux": {
                    "portable_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/1.2.3/app.tar.gz",
                },
                "macos": {
                    "dmg_url": "https://github.com/ProjectYaru/Yaru-release/releases/download/1.2.3/app.dmg",
                },
            },
        }

        with tempfile.TemporaryDirectory() as temp_dir:
            bundle = release_publish.build_manifest_bundle(
                version="1.2.3",
                github_manifest=github_manifest,
                output_dir=Path(temp_dir),
                server_download_base="https://bucket.asaka.moe/stable",
            )

            self.assertTrue(bundle.github_latest_path.exists())
            self.assertTrue(bundle.server_history_path.exists())
            self.assertEqual(
                bundle.server_manifest["platforms"]["windows"]["installer_url"],
                "https://bucket.asaka.moe/stable/app.exe",
            )
            self.assertEqual(
                bundle.server_manifest["platforms"]["macos"]["dmg_url"],
                "https://bucket.asaka.moe/stable/app.dmg",
            )

    def test_validate_release_inputs_requires_manifest_files(self) -> None:
        manifest = {
            "platforms": {
                "windows": {"installer_url": "https://example.com/app.exe"},
                "android": {"installer_url": "https://example.com/app.apk"},
                "linux": {"portable_url": "https://example.com/app.tar.gz"},
                "macos": {"dmg_url": "https://example.com/app.dmg"},
            }
        }

        with tempfile.TemporaryDirectory() as temp_dir:
            root = Path(temp_dir)
            artifacts = [
                root / "app.exe",
                root / "app.apk",
                root / "app.tar.gz",
            ]
            for artifact in artifacts:
                artifact.write_bytes(b"data")

            with self.assertRaisesRegex(ValueError, "app.dmg"):
                release_publish.validate_release_inputs(
                    manifest=manifest,
                    artifacts=artifacts,
                )

    def test_resolve_r2_config_accepts_bucket_in_endpoint_path(self) -> None:
        env = {
            "R2_ENDPOINT": "https://example.r2.cloudflarestorage.com/download",
            "R2_ACCESS_KEY_ID": "key",
            "R2_SECRET_ACCESS_KEY": "secret",
        }
        with patch.dict(os.environ, env, clear=False):
            config = release_publish.resolve_r2_config()

        self.assertEqual(config.endpoint, "https://example.r2.cloudflarestorage.com")
        self.assertEqual(config.bucket, "download")
        self.assertEqual(config.object_prefix, "stable/")

    def test_render_landing_fallback_module_exports_snapshot(self) -> None:
        rendered = release_publish.render_landing_fallback_module(
            {
                "version": "1.2.3",
                "platforms": {"windows": {"installer_url": "https://example.com/app.exe"}},
            }
        )

        self.assertIn("export const releaseFallbackData =", rendered)
        self.assertIn('"version": "1.2.3"', rendered)


if __name__ == "__main__":
    unittest.main()
