#!/usr/bin/env python3
"""
Asaka GUI deployment tool for update artifacts and latest.json publishing.

Supported artifacts:
- android: .apk
- windows: .msix
- linux: .AppImage
- macos: .dmg
"""

from __future__ import annotations

import hashlib
import json
import os
import threading
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from tkinter import filedialog, messagebox, ttk
from tkinter import StringVar, BooleanVar
from tkinter import Tk, Text, END, Toplevel
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

import release_publish

DEFAULT_GITHUB_REPO = "ProjectYaru/Yaru-release"
LOCAL_CONFIG_PATH = Path.home() / ".asaka_deploy_gui.json"

CHANGE_TYPES = ["feature", "fix", "improvement", "breaking"]
PLATFORM_EXTENSIONS = {
    "android": ".apk",
    "windows": ".msix",
    "linux": ".appimage",
    "macos": ".dmg",
}


@dataclass
class ArtifactSelection:
    platform: str
    path: Path
    filename: str
    size: int
    sha256: str


class ChangelogEditor(ttk.Frame):
    def __init__(self, master, locale: str) -> None:
        super().__init__(master)
        self.locale = locale
        self._rows: list[dict[str, object]] = []

        header = ttk.Frame(self)
        header.pack(fill="x", pady=(0, 8))

        ttk.Label(header, text=f"{locale} changelog entries").pack(side="left")
        ttk.Button(header, text="Add Entry", command=self.add_row).pack(side="right")

        self.rows_container = ttk.Frame(self)
        self.rows_container.pack(fill="x")

        self.add_row()

    def add_row(self, entry_type: str = "improvement", text: str = "") -> None:
        row_frame = ttk.Frame(self.rows_container)
        row_frame.pack(fill="x", pady=4)

        type_var = StringVar(
            value=entry_type if entry_type in CHANGE_TYPES else "improvement"
        )
        type_box = ttk.Combobox(
            row_frame,
            values=CHANGE_TYPES,
            width=12,
            textvariable=type_var,
            state="readonly",
        )
        type_box.pack(side="left", padx=(0, 8))

        text_var = StringVar(value=text)
        text_entry = ttk.Entry(row_frame, textvariable=text_var)
        text_entry.pack(side="left", fill="x", expand=True, padx=(0, 8))

        remove_btn = ttk.Button(
            row_frame,
            text="Remove",
            command=lambda: self._remove_row(row_frame),
        )
        remove_btn.pack(side="left")

        self._rows.append(
            {
                "frame": row_frame,
                "type_var": type_var,
                "text_var": text_var,
            }
        )

    def _remove_row(self, frame) -> None:
        if len(self._rows) == 1:
            # Keep at least one row visible for UX.
            for row in self._rows:
                if row["frame"] == frame:
                    cast_text_var = row["text_var"]
                    cast_type_var = row["type_var"]
                    if isinstance(cast_text_var, StringVar):
                        cast_text_var.set("")
                    if isinstance(cast_type_var, StringVar):
                        cast_type_var.set("improvement")
            return

        for index, row in enumerate(self._rows):
            if row["frame"] == frame:
                frame.destroy()
                self._rows.pop(index)
                break

    def get_entries(self) -> list[dict[str, str]]:
        entries: list[dict[str, str]] = []
        for row in self._rows:
            type_var = row["type_var"]
            text_var = row["text_var"]
            if not isinstance(type_var, StringVar) or not isinstance(
                text_var, StringVar
            ):
                continue
            text = text_var.get().strip()
            if not text:
                continue
            entry_type = type_var.get().strip().lower()
            if entry_type not in CHANGE_TYPES:
                entry_type = "improvement"
            entries.append({"type": entry_type, "text": text})
        return entries

    def set_entries(self, entries: list[dict[str, str]]) -> None:
        for row in self._rows:
            frame = row["frame"]
            if hasattr(frame, "destroy"):
                frame.destroy()
        self._rows = []

        if not entries:
            self.add_row()
            return

        for entry in entries:
            self.add_row(entry.get("type", "improvement"), entry.get("text", ""))


class DeployGuiApp(Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("Asaka Update Publisher")
        self.geometry("1240x920")
        self.minsize(1100, 820)

        self.version_var = StringVar(value="")
        self.build_var = StringVar(value="")
        self.release_date_var = StringVar(value=datetime.now(timezone.utc).isoformat())
        self.force_update_var = BooleanVar(value=False)
        self.min_supported_var = StringVar(value="0.0.0")
        self.release_notes_var = StringVar(value="")

        self.github_repo_var = StringVar(
            value=(
                os.environ.get("UPDATE_GITHUB_REPO")
                or os.environ.get("GITHUB_REPOSITORY")
                or DEFAULT_GITHUB_REPO
            )
        )
        self.github_token_var = StringVar(
            value=os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN", "")
        )
        self.save_local_config_var = BooleanVar(value=False)

        self.platform_path_vars = {
            "android": StringVar(value=""),
            "windows": StringVar(value=""),
            "linux": StringVar(value=""),
            "macos": StringVar(value=""),
        }

        self._busy = False

        self._build_ui()
        self._load_local_config()

        self.force_update_var.trace_add(
            "write", lambda *_: self._sync_force_update_state()
        )
        self._sync_force_update_state()

    def _build_ui(self) -> None:
        root = ttk.Frame(self, padding=12)
        root.pack(fill="both", expand=True)

        info_group = ttk.LabelFrame(root, text="Release Info", padding=12)
        info_group.pack(fill="x", pady=(0, 10))
        info_group.columnconfigure(1, weight=1)
        info_group.columnconfigure(3, weight=1)

        ttk.Label(info_group, text="Version").grid(
            row=0, column=0, sticky="w", padx=(0, 8), pady=4
        )
        ttk.Entry(info_group, textvariable=self.version_var).grid(
            row=0, column=1, sticky="ew", pady=4
        )

        ttk.Label(info_group, text="Build Number").grid(
            row=0, column=2, sticky="w", padx=(16, 8), pady=4
        )
        ttk.Entry(info_group, textvariable=self.build_var).grid(
            row=0, column=3, sticky="ew", pady=4
        )

        ttk.Label(info_group, text="Release Date (ISO8601)").grid(
            row=1, column=0, sticky="w", padx=(0, 8), pady=4
        )
        ttk.Entry(info_group, textvariable=self.release_date_var).grid(
            row=1, column=1, columnspan=3, sticky="ew", pady=4
        )

        ttk.Checkbutton(
            info_group,
            text="Force Update",
            variable=self.force_update_var,
        ).grid(row=2, column=0, sticky="w", pady=4)

        ttk.Label(info_group, text="Min Supported Version").grid(
            row=2, column=2, sticky="w", padx=(16, 8), pady=4
        )
        self.min_supported_entry = ttk.Entry(
            info_group, textvariable=self.min_supported_var
        )
        self.min_supported_entry.grid(row=2, column=3, sticky="ew", pady=4)

        ttk.Label(info_group, text="Release Notes URL (optional)").grid(
            row=3, column=0, sticky="w", padx=(0, 8), pady=4
        )
        ttk.Entry(info_group, textvariable=self.release_notes_var).grid(
            row=3, column=1, columnspan=3, sticky="ew", pady=4
        )

        platform_group = ttk.LabelFrame(root, text="Platform Artifacts", padding=12)
        platform_group.pack(fill="x", pady=(0, 10))
        platform_group.columnconfigure(1, weight=1)

        self.platform_meta_labels: dict[str, ttk.Label] = {}

        row = 0
        for platform, ext in [
            ("android", ".apk"),
            ("windows", ".msix"),
            ("linux", ".AppImage"),
            ("macos", ".dmg"),
        ]:
            ttk.Label(platform_group, text=f"{platform} ({ext})").grid(
                row=row,
                column=0,
                sticky="w",
                padx=(0, 8),
                pady=6,
            )
            ttk.Entry(
                platform_group, textvariable=self.platform_path_vars[platform]
            ).grid(
                row=row,
                column=1,
                sticky="ew",
                pady=6,
            )
            ttk.Button(
                platform_group,
                text="Browse",
                command=lambda p=platform: self._pick_file(p),
            ).grid(row=row, column=2, padx=(8, 8), pady=6)
            meta_label = ttk.Label(
                platform_group, text="No file selected", foreground="#777777"
            )
            meta_label.grid(row=row, column=3, sticky="w")
            self.platform_meta_labels[platform] = meta_label
            row += 1

        changelog_group = ttk.LabelFrame(root, text="Changelog", padding=12)
        changelog_group.pack(fill="both", expand=True, pady=(0, 10))

        locale_tabs = ttk.Notebook(changelog_group)
        locale_tabs.pack(fill="both", expand=True)

        self.changelog_en_editor = ChangelogEditor(locale_tabs, "en")
        self.changelog_zh_editor = ChangelogEditor(locale_tabs, "zh")
        locale_tabs.add(self.changelog_en_editor, text="English")
        locale_tabs.add(self.changelog_zh_editor, text="Chinese")

        github_group = ttk.LabelFrame(root, text="GitHub Publish Config", padding=12)
        github_group.pack(fill="x", pady=(0, 10))
        github_group.columnconfigure(1, weight=1)
        github_group.columnconfigure(3, weight=1)

        ttk.Label(github_group, text="Repository").grid(
            row=0, column=0, sticky="w", padx=(0, 8), pady=4
        )
        ttk.Entry(github_group, textvariable=self.github_repo_var).grid(
            row=0, column=1, sticky="ew", pady=4
        )

        ttk.Label(github_group, text="Token").grid(
            row=0, column=2, sticky="w", padx=(16, 8), pady=4
        )
        ttk.Entry(github_group, textvariable=self.github_token_var, show="*").grid(
            row=0, column=3, sticky="ew", pady=4
        )

        ttk.Checkbutton(
            github_group,
            text=f"Save credentials locally ({LOCAL_CONFIG_PATH})",
            variable=self.save_local_config_var,
        ).grid(row=1, column=0, columnspan=4, sticky="w", pady=(4, 0))

        action_group = ttk.Frame(root)
        action_group.pack(fill="x", pady=(0, 10))

        self.preview_btn = ttk.Button(
            action_group, text="Preview latest.json", command=self._on_preview
        )
        self.preview_btn.pack(side="left")

        self.upload_btn = ttk.Button(
            action_group,
            text="Upload Release",
            command=self._on_upload,
        )
        self.upload_btn.pack(side="left", padx=(8, 0))

        self.export_btn = ttk.Button(
            action_group, text="Export latest.json", command=self._on_export
        )
        self.export_btn.pack(side="left", padx=(8, 0))

        self.status_var = StringVar(value="Ready")
        ttk.Label(action_group, textvariable=self.status_var).pack(side="right")

        log_group = ttk.LabelFrame(root, text="Output", padding=12)
        log_group.pack(fill="both", expand=True)

        self.log_text = Text(log_group, height=8, wrap="word")
        self.log_text.pack(fill="both", expand=True)

    def _sync_force_update_state(self) -> None:
        if self.force_update_var.get():
            self.min_supported_entry.configure(state="normal")
        else:
            self.min_supported_entry.configure(state="disabled")

    def _pick_file(self, platform: str) -> None:
        extension = PLATFORM_EXTENSIONS[platform]
        if platform == "linux":
            file_types = [
                ("AppImage files", "*.AppImage *.appimage"),
                ("All files", "*.*"),
            ]
        else:
            file_types = [
                (f"{extension} files", f"*{extension}"),
                ("All files", "*.*"),
            ]
        file_path = filedialog.askopenfilename(
            title=f"Select {platform} artifact",
            filetypes=file_types,
        )
        if not file_path:
            return
        self.platform_path_vars[platform].set(file_path)
        self._update_platform_meta(platform)

    def _update_platform_meta(self, platform: str) -> None:
        value = self.platform_path_vars[platform].get().strip()
        label = self.platform_meta_labels[platform]
        if not value:
            label.configure(text="No file selected", foreground="#777777")
            return
        path = Path(value)
        if not path.exists():
            label.configure(text="File does not exist", foreground="#a00000")
            return
        size_mb = path.stat().st_size / (1024 * 1024)
        label.configure(text=f"{path.name} ({size_mb:.2f} MB)", foreground="#007700")

    def _set_busy(self, busy: bool, status: str = "") -> None:
        self._busy = busy
        state = "disabled" if busy else "normal"
        self.preview_btn.configure(state=state)
        self.upload_btn.configure(state=state)
        self.export_btn.configure(state=state)
        self.status_var.set(status if status else ("Working..." if busy else "Ready"))

    def _append_log(self, message: str) -> None:
        now = datetime.now().strftime("%H:%M:%S")
        self.log_text.insert(END, f"[{now}] {message}\n")
        self.log_text.see(END)

    def _post_log(self, message: str) -> None:
        self.after(0, lambda: self._append_log(message))

    def _on_preview(self) -> None:
        try:
            payload = self._prepare_payload(require_merge=True)
            self._persist_local_config_if_needed()
            self._show_manifest_preview(payload["manifest"])
            self._append_log("Generated manifest preview.")
        except Exception as exc:
            messagebox.showerror("Preview Failed", str(exc))

    def _on_export(self) -> None:
        try:
            payload = self._prepare_payload(require_merge=True)
            self._persist_local_config_if_needed()
            save_path = filedialog.asksaveasfilename(
                title="Save latest.json",
                defaultextension=".json",
                initialfile="latest.json",
                filetypes=[("JSON files", "*.json"), ("All files", "*.*")],
            )
            if not save_path:
                return
            with open(save_path, "w", encoding="utf-8") as handle:
                json.dump(payload["manifest"], handle, indent=2, ensure_ascii=False)
            self._append_log(f"Exported manifest to {save_path}")
            messagebox.showinfo("Exported", f"Manifest exported to:\n{save_path}")
        except Exception as exc:
            messagebox.showerror("Export Failed", str(exc))

    def _on_upload(self) -> None:
        if self._busy:
            return
        try:
            payload = self._prepare_payload(require_merge=True)
        except Exception as exc:
            messagebox.showerror("Validation Failed", str(exc))
            return

        if not messagebox.askyesno(
            "Confirm Upload", "Upload artifacts and publish latest.json now?"
        ):
            return

        self._persist_local_config_if_needed()
        self._set_busy(True, "Uploading...")
        thread = threading.Thread(
            target=self._upload_worker, args=(payload,), daemon=True
        )
        thread.start()

    def _upload_worker(self, payload: dict) -> None:
        try:
            self._post_log("Starting upload...")
            release_publish.publish_release_bundle(
                version=payload["version"],
                github_manifest=payload["manifest"],
                artifacts=[
                    artifact.path
                    for artifact in payload["artifacts"]
                    if isinstance(artifact, ArtifactSelection)
                ],
                github_repo=payload["github_repo"],
                github_token=payload["github_token"],
                log=self._post_log,
            )

            self.after(0, lambda: self._set_busy(False, "Upload complete"))
            self._post_log("Upload complete.")
            self.after(
                0,
                lambda: messagebox.showinfo(
                    "Success",
                    "Release published to GitHub, synced to R2, and landing was deployed.",
                ),
            )
        except Exception as exc:
            self.after(0, lambda: self._set_busy(False, "Upload failed"))
            self._post_log(f"Upload failed: {exc}")
            self.after(0, lambda: messagebox.showerror("Upload Failed", str(exc)))

    def _prepare_payload(self, require_merge: bool) -> dict:
        version = self.version_var.get().strip()
        if not version:
            raise ValueError("Version is required.")

        build_raw = self.build_var.get().strip()
        if not build_raw:
            raise ValueError("Build number is required.")
        if not build_raw.isdigit():
            raise ValueError("Build number must be an integer.")
        build_number = int(build_raw)

        release_date = self._normalize_iso_datetime(self.release_date_var.get().strip())

        force_update = self.force_update_var.get()
        if force_update:
            min_supported_version = self.min_supported_var.get().strip()
            if not min_supported_version:
                raise ValueError(
                    "Min supported version is required when Force Update is enabled."
                )
        else:
            min_supported_version = "0.0.0"

        github_repo = self.github_repo_var.get().strip()
        github_token = self.github_token_var.get().strip()
        if not github_repo:
            raise ValueError("GitHub repository is required (example: ProjectYaru/Yaru-release).")
        if "/" not in github_repo:
            raise ValueError("GitHub repository must be in owner/repo format.")
        if not github_token:
            raise ValueError("GitHub token is required.")

        artifacts = self._collect_artifacts()
        if not artifacts:
            raise ValueError("Select at least one platform artifact.")

        changelog = {
            "en": self.changelog_en_editor.get_entries(),
            "zh": self.changelog_zh_editor.get_entries(),
        }
        if not changelog["en"] and not changelog["zh"]:
            raise ValueError("Add at least one changelog entry in English or Chinese.")

        existing_manifest: dict = {}
        if require_merge:
            existing_manifest = self._fetch_existing_manifest(github_repo)

        platforms = dict(existing_manifest.get("platforms", {}))
        platforms.update(self._build_platform_assets(version, github_repo, artifacts))

        release_notes = self.release_notes_var.get().strip()
        if not release_notes:
            release_notes = existing_manifest.get("release_notes_url") or (
                f"https://github.com/{github_repo}/releases/tag/{version}"
            )

        manifest = {
            "version": version,
            "build_number": build_number,
            "release_date": release_date,
            "min_supported_version": min_supported_version,
            "platforms": platforms,
            "changelog": changelog,
            "release_notes_url": release_notes,
        }

        return {
            "version": version,
            "manifest": manifest,
            "artifacts": artifacts,
            "github_repo": github_repo,
            "github_token": github_token,
        }

    def _collect_artifacts(self) -> list[ArtifactSelection]:
        artifacts: list[ArtifactSelection] = []
        for platform, var in self.platform_path_vars.items():
            value = var.get().strip()
            if not value:
                continue

            path = Path(value)
            if not path.exists() or not path.is_file():
                raise ValueError(f"{platform}: file does not exist: {value}")

            expected_ext = PLATFORM_EXTENSIONS[platform]
            if path.suffix.lower() != expected_ext:
                raise ValueError(
                    f"{platform}: expected *{expected_ext}, got {path.name}"
                )

            size = path.stat().st_size
            sha256 = self._hash_file(path)

            artifacts.append(
                ArtifactSelection(
                    platform=platform,
                    path=path,
                    filename=path.name,
                    size=size,
                    sha256=sha256,
                )
            )
        return artifacts

    def _build_platform_assets(
        self,
        version: str,
        github_repo: str,
        artifacts: list[ArtifactSelection],
    ) -> dict:
        assets: dict[str, dict] = {}
        for artifact in artifacts:
            file_url = (
                f"https://github.com/{github_repo}/releases/download/{version}/{artifact.filename}"
            )
            if artifact.platform == "windows":
                assets["windows"] = {
                    "installer_url": file_url,
                    "installer_sha256": artifact.sha256,
                    "installer_size": artifact.size,
                }
            elif artifact.platform == "linux":
                assets["linux"] = {
                    "appimage_url": file_url,
                    "appimage_sha256": artifact.sha256,
                    "appimage_size": artifact.size,
                }
            elif artifact.platform == "macos":
                assets["macos"] = {
                    "dmg_url": file_url,
                    "dmg_sha256": artifact.sha256,
                    "dmg_size": artifact.size,
                }
            elif artifact.platform == "android":
                assets["android"] = {
                    "installer_url": file_url,
                    "installer_sha256": artifact.sha256,
                    "installer_size": artifact.size,
                }
        return assets

    def _fetch_existing_manifest(self, github_repo: str) -> dict:
        url = f"https://github.com/{github_repo}/releases/latest/download/latest.json"
        request = Request(url, headers={"Cache-Control": "no-cache"})
        try:
            with urlopen(request, timeout=10) as response:
                payload = response.read().decode("utf-8")
                data = json.loads(payload)
                if isinstance(data, dict):
                    self._append_log("Loaded existing latest.json for merge.")
                    return data
                return {}
        except HTTPError as exc:
            if exc.code == 404:
                self._append_log(
                    "No existing latest.json found; creating a new manifest."
                )
                return {}
            raise RuntimeError(
                f"Failed to fetch latest.json ({exc.code}): {exc.reason}"
            ) from exc
        except URLError as exc:
            raise RuntimeError(f"Failed to fetch latest.json: {exc.reason}") from exc
        except json.JSONDecodeError as exc:
            raise RuntimeError(f"Existing latest.json is invalid JSON: {exc}") from exc

    def _normalize_iso_datetime(self, text: str) -> str:
        if not text:
            return datetime.now(timezone.utc).isoformat()
        parsed = datetime.fromisoformat(text.replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc).isoformat()

    def _hash_file(self, file_path: Path) -> str:
        digest = hashlib.sha256()
        with open(file_path, "rb") as handle:
            for chunk in iter(lambda: handle.read(1024 * 1024), b""):
                digest.update(chunk)
        return digest.hexdigest()

    def _show_manifest_preview(self, manifest: dict) -> None:
        window = Toplevel(self)
        window.title("latest.json Preview")
        window.geometry("900x700")

        text_widget = Text(window, wrap="none")
        text_widget.pack(fill="both", expand=True)
        text_widget.insert("1.0", json.dumps(manifest, indent=2, ensure_ascii=False))
        text_widget.configure(state="disabled")

    def _persist_local_config_if_needed(self) -> None:
        if not self.save_local_config_var.get():
            return

        data = {
            "github_repo": self.github_repo_var.get().strip(),
            "github_token": self.github_token_var.get().strip(),
        }
        with open(LOCAL_CONFIG_PATH, "w", encoding="utf-8") as handle:
            json.dump(data, handle, indent=2)
        self._append_log(f"Saved local config to {LOCAL_CONFIG_PATH}")

    def _load_local_config(self) -> None:
        if not LOCAL_CONFIG_PATH.exists():
            return
        try:
            with open(LOCAL_CONFIG_PATH, "r", encoding="utf-8") as handle:
                data = json.load(handle)
            if not isinstance(data, dict):
                return
            self.github_repo_var.set(
                str(data.get("github_repo", self.github_repo_var.get()))
            )
            self.github_token_var.set(
                str(data.get("github_token", self.github_token_var.get()))
            )
            self.save_local_config_var.set(True)
            self._append_log(f"Loaded local config from {LOCAL_CONFIG_PATH}")
        except Exception as exc:
            self._append_log(f"Failed to load local config: {exc}")


def main() -> None:
    app = DeployGuiApp()
    app.mainloop()


if __name__ == "__main__":
    main()
