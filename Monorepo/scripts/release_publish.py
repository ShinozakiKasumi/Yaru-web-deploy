#!/usr/bin/env python3
"""Shared helpers for local Yaru release publishing."""

from __future__ import annotations

import base64
import hashlib
import hmac
import json
import mimetypes
import os
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Iterable, Mapping, Sequence
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlparse, urlunsplit
from urllib.request import Request, urlopen

import build_release_manifests as manifest_builder

ROOT_DIR = Path(__file__).resolve().parent.parent
LANDING_DIR = ROOT_DIR / "sites" / "landing"
LANDING_FALLBACK_PATH = LANDING_DIR / "src" / "data" / "release-fallback.ts"
DEFAULT_TARGET_BRANCH = "main"
DEFAULT_RELEASE_TITLE_PREFIX = "Yaru"
UPDATE_MANIFEST_URL = "https://update.asaka.moe/latest.json"
DEFAULT_R2_ENDPOINT = (
    "https://25778cbd66f3370947041591f896dc68.r2.cloudflarestorage.com"
)
DEFAULT_R2_BUCKET = "download"
DEFAULT_R2_PUBLIC_BASE_URL = "https://bucket.asaka.moe/stable"
DEFAULT_R2_REGION = "auto"
EXPECTED_PLATFORMS = manifest_builder.EXPECTED_PLATFORMS

Logger = Callable[[str], None]


@dataclass(frozen=True)
class R2Config:
    endpoint: str
    bucket: str
    access_key_id: str
    secret_access_key: str
    public_base_url: str
    object_prefix: str
    region: str = DEFAULT_R2_REGION


@dataclass(frozen=True)
class ManifestBundle:
    github_manifest: dict[str, Any]
    server_manifest: dict[str, Any]
    github_latest_path: Path
    github_history_path: Path
    server_latest_path: Path
    server_history_path: Path


def _emit(log: Logger | None, message: str) -> None:
    if log is not None:
        log(message)


def normalize_command(cmd: Sequence[str | Path]) -> list[str]:
    normalized = [str(part) for part in cmd]
    if not normalized:
        return normalized

    executable = normalized[0]
    if Path(executable).suffix:
        return normalized

    resolved_executable = shutil.which(executable)
    if resolved_executable is None and os.name == "nt":
        for ext in (".exe", ".bat", ".cmd"):
            resolved_executable = shutil.which(f"{executable}{ext}")
            if resolved_executable:
                break
    if resolved_executable:
        normalized[0] = resolved_executable
    return normalized


def run_command(
    cmd: Sequence[str | Path],
    *,
    cwd: Path | None = None,
    env: Mapping[str, str] | None = None,
    log: Logger | None = None,
) -> None:
    normalized = normalize_command(cmd)
    _emit(log, f"Running: {' '.join(normalized)}")
    result = subprocess.run(normalized, cwd=cwd, env=dict(env) if env else None)
    if result.returncode != 0:
        raise RuntimeError(
            f"Command failed with exit code {result.returncode}: {' '.join(normalized)}"
        )


def resolve_github_repo(repo: str | None = None) -> str:
    if repo and repo.strip():
        return repo.strip()

    env_repo = os.environ.get("UPDATE_GITHUB_REPO", "").strip()
    if env_repo:
        return env_repo
    return "ProjectYaru/Yaru-release"


def resolve_github_token(token: str | None = None) -> str:
    if token and token.strip():
        return token.strip()

    for key in ("GH_TOKEN", "GITHUB_TOKEN"):
        value = os.environ.get(key, "").strip()
        if value:
            return value
    raise RuntimeError("Missing GH_TOKEN/GITHUB_TOKEN for GitHub release upload")


def release_exists(tag: str, repo: str, env: Mapping[str, str]) -> bool:
    result = subprocess.run(
        ["gh", "release", "view", tag, "--repo", repo],
        env=dict(env),
        capture_output=True,
        text=True,
    )
    return result.returncode == 0


def create_release_notes(version: str, release_targets: Sequence[str]) -> str:
    release_targets_text = ", ".join(sorted(set(release_targets)))
    return (
        f"Local release publish for {DEFAULT_RELEASE_TITLE_PREFIX} {version}.\n\n"
        f"Included platforms: {release_targets_text}\n"
        "Update channel manifest:\n"
        f"- {UPDATE_MANIFEST_URL}\n"
    )


def iter_download_urls(payload: Any) -> Iterable[str]:
    if isinstance(payload, dict):
        for key, value in payload.items():
            if (key == "url" or key.endswith("_url")) and isinstance(value, str):
                yield value
            else:
                yield from iter_download_urls(value)
    elif isinstance(payload, list):
        for item in payload:
            yield from iter_download_urls(item)


def collect_required_filenames(manifest: Mapping[str, Any]) -> set[str]:
    filenames: set[str] = set()
    for url in iter_download_urls(manifest.get("platforms", {})):
        filename = Path(urlparse(url).path).name
        if filename:
            filenames.add(filename)
    return filenames


def validate_release_inputs(
    *,
    manifest: Mapping[str, Any],
    artifacts: Sequence[Path],
) -> None:
    platforms = manifest.get("platforms")
    if not isinstance(platforms, dict):
        raise ValueError("Release manifest is missing a valid platforms object")

    missing_platforms = EXPECTED_PLATFORMS - set(platforms.keys())
    if missing_platforms:
        missing = ", ".join(sorted(missing_platforms))
        raise ValueError(
            f"Release manifest is incomplete. Missing latest platforms: {missing}"
        )

    artifact_names = {artifact.name for artifact in artifacts}
    duplicates = len(artifact_names) != len(artifacts)
    if duplicates:
        raise ValueError("Release artifact filenames must be unique")

    missing_files = sorted(collect_required_filenames(manifest) - artifact_names)
    if missing_files:
        missing = ", ".join(missing_files)
        raise ValueError(
            "Release manifest references files that are not available locally: "
            f"{missing}"
        )


def build_manifest_bundle(
    *,
    version: str,
    github_manifest: dict[str, Any],
    output_dir: Path,
    server_download_base: str,
) -> ManifestBundle:
    release_date = str(
        github_manifest.get("release_date", datetime.now(timezone.utc).isoformat())
    )
    min_supported_version = str(github_manifest.get("min_supported_version", "0.0.0"))
    release_notes_url = str(github_manifest.get("release_notes_url", ""))
    platforms = github_manifest.get("platforms")
    if not isinstance(platforms, dict):
        raise ValueError("GitHub manifest is missing platforms for bundle generation")

    manifest_builder.write_manifest_pair(output_dir / "github", github_manifest, version)
    server_manifest = manifest_builder.build_manifest_variant(
        base_manifest=github_manifest,
        merged_platforms=platforms,
        version=version,
        release_date=release_date,
        min_supported_version=min_supported_version,
        release_notes_url=release_notes_url,
        download_base=server_download_base,
    )
    manifest_builder.write_manifest_pair(output_dir / "server", server_manifest, version)

    return ManifestBundle(
        github_manifest=github_manifest,
        server_manifest=server_manifest,
        github_latest_path=output_dir / "github" / "latest.json",
        github_history_path=output_dir / "github" / f"history-{version}.json",
        server_latest_path=output_dir / "server" / "latest.json",
        server_history_path=output_dir / "server" / f"history-{version}.json",
    )


def resolve_r2_config() -> R2Config:
    raw_endpoint = os.environ.get("R2_ENDPOINT", DEFAULT_R2_ENDPOINT).strip()
    if not raw_endpoint:
        raise RuntimeError("R2 endpoint is empty. Set R2_ENDPOINT.")

    parsed = urlparse(raw_endpoint)
    if not parsed.scheme or not parsed.netloc:
        raise RuntimeError(f"Invalid R2 endpoint: {raw_endpoint}")

    bucket = os.environ.get("R2_BUCKET", "").strip() or parsed.path.strip("/")
    if not bucket:
        bucket = DEFAULT_R2_BUCKET

    endpoint = urlunsplit((parsed.scheme, parsed.netloc, "", "", ""))
    public_base_url = (
        os.environ.get("R2_PUBLIC_BASE_URL", DEFAULT_R2_PUBLIC_BASE_URL).strip()
        or DEFAULT_R2_PUBLIC_BASE_URL
    )
    object_prefix = urlparse(public_base_url).path.strip("/")
    if object_prefix:
        object_prefix = f"{object_prefix}/"

    access_key_id = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
    secret_access_key = os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
    if not access_key_id or not secret_access_key:
        raise RuntimeError(
            "Missing R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY for R2 release sync"
        )

    region = os.environ.get("R2_REGION", DEFAULT_R2_REGION).strip() or DEFAULT_R2_REGION
    return R2Config(
        endpoint=endpoint.rstrip("/"),
        bucket=bucket,
        access_key_id=access_key_id,
        secret_access_key=secret_access_key,
        public_base_url=public_base_url.rstrip("/"),
        object_prefix=object_prefix,
        region=region,
    )


def _canonical_query_string(params: Mapping[str, str]) -> str:
    parts: list[str] = []
    for key in sorted(params):
        encoded_key = quote(key, safe="-_.~")
        encoded_value = quote(params[key], safe="-_.~")
        parts.append(f"{encoded_key}={encoded_value}")
    return "&".join(parts)


def _canonical_uri(path: str) -> str:
    return quote(path or "/", safe="/-_.~")


def _sign(key: bytes, value: str) -> bytes:
    return hmac.new(key, value.encode("utf-8"), hashlib.sha256).digest()


def _derive_signing_key(
    *,
    secret_access_key: str,
    date_stamp: str,
    region: str,
    service: str = "s3",
) -> bytes:
    date_key = _sign(("AWS4" + secret_access_key).encode("utf-8"), date_stamp)
    region_key = _sign(date_key, region)
    service_key = _sign(region_key, service)
    return _sign(service_key, "aws4_request")


def _signed_request(
    *,
    config: R2Config,
    method: str,
    path: str,
    query_params: Mapping[str, str] | None = None,
    body: bytes = b"",
    extra_headers: Mapping[str, str] | None = None,
) -> Request:
    now = datetime.now(timezone.utc)
    amz_date = now.strftime("%Y%m%dT%H%M%SZ")
    date_stamp = now.strftime("%Y%m%d")
    payload_hash = hashlib.sha256(body).hexdigest()
    parsed = urlparse(config.endpoint)
    host = parsed.netloc
    headers = {
        "host": host,
        "x-amz-date": amz_date,
        "x-amz-content-sha256": payload_hash,
    }
    if extra_headers:
        for key, value in extra_headers.items():
            headers[key.lower()] = value

    canonical_query = _canonical_query_string(query_params or {})
    canonical_headers = "".join(
        f"{key}:{' '.join(headers[key].strip().split())}\n" for key in sorted(headers)
    )
    signed_headers = ";".join(sorted(headers))
    canonical_request = "\n".join(
        [
            method,
            _canonical_uri(path),
            canonical_query,
            canonical_headers,
            signed_headers,
            payload_hash,
        ]
    )
    credential_scope = f"{date_stamp}/{config.region}/s3/aws4_request"
    string_to_sign = "\n".join(
        [
            "AWS4-HMAC-SHA256",
            amz_date,
            credential_scope,
            hashlib.sha256(canonical_request.encode("utf-8")).hexdigest(),
        ]
    )
    signing_key = _derive_signing_key(
        secret_access_key=config.secret_access_key,
        date_stamp=date_stamp,
        region=config.region,
    )
    signature = hmac.new(
        signing_key, string_to_sign.encode("utf-8"), hashlib.sha256
    ).hexdigest()
    authorization = (
        "AWS4-HMAC-SHA256 "
        f"Credential={config.access_key_id}/{credential_scope}, "
        f"SignedHeaders={signed_headers}, Signature={signature}"
    )

    request_headers = {key: value for key, value in headers.items() if key != "host"}
    request_headers["Authorization"] = authorization
    url = urlunsplit(
        (
            parsed.scheme,
            parsed.netloc,
            path,
            canonical_query,
            "",
        )
    )
    return Request(url, data=body or None, headers=request_headers, method=method)


def list_r2_objects(config: R2Config, *, log: Logger | None = None) -> list[str]:
    keys: list[str] = []
    continuation_token: str | None = None
    while True:
        params = {"list-type": "2", "prefix": config.object_prefix}
        if continuation_token:
            params["continuation-token"] = continuation_token

        request = _signed_request(
            config=config,
            method="GET",
            path=f"/{config.bucket}",
            query_params=params,
        )
        try:
            with urlopen(request, timeout=30) as response:
                payload = response.read()
        except HTTPError as exc:
            raise RuntimeError(f"Failed to list R2 objects: HTTP {exc.code}") from exc
        except URLError as exc:
            raise RuntimeError(f"Failed to list R2 objects: {exc.reason}") from exc

        root = ET.fromstring(payload)
        keys.extend(
            key.text
            for key in root.findall(".//{*}Contents/{*}Key")
            if isinstance(key.text, str)
        )
        is_truncated = root.findtext(".//{*}IsTruncated", default="false")
        if is_truncated.lower() != "true":
            break
        continuation_token = root.findtext(".//{*}NextContinuationToken")
        if not continuation_token:
            break

    _emit(log, f"Listed {len(keys)} existing R2 objects under {config.object_prefix}")
    return keys


def delete_r2_objects(
    config: R2Config,
    keys: Sequence[str],
    *,
    log: Logger | None = None,
) -> None:
    if not keys:
        return

    for start in range(0, len(keys), 1000):
        chunk = keys[start : start + 1000]
        body = (
            "<Delete>"
            + "".join(f"<Object><Key>{key}</Key></Object>" for key in chunk)
            + "</Delete>"
        ).encode("utf-8")
        content_md5 = base64.b64encode(hashlib.md5(body).digest()).decode("ascii")
        request = _signed_request(
            config=config,
            method="POST",
            path=f"/{config.bucket}",
            query_params={"delete": ""},
            body=body,
            extra_headers={
                "content-md5": content_md5,
                "content-type": "application/xml",
            },
        )
        try:
            with urlopen(request, timeout=30):
                pass
        except HTTPError as exc:
            raise RuntimeError(f"Failed to delete R2 objects: HTTP {exc.code}") from exc
        except URLError as exc:
            raise RuntimeError(f"Failed to delete R2 objects: {exc.reason}") from exc

        _emit(log, f"Deleted {len(chunk)} R2 objects from {config.object_prefix}")


def upload_r2_file(
    config: R2Config,
    *,
    source_path: Path,
    object_key: str,
    log: Logger | None = None,
) -> None:
    body = source_path.read_bytes()
    mime_type = mimetypes.guess_type(source_path.name)[0] or "application/octet-stream"
    request = _signed_request(
        config=config,
        method="PUT",
        path=f"/{config.bucket}/{object_key}",
        body=body,
        extra_headers={
            "content-type": mime_type,
            "content-length": str(len(body)),
        },
    )
    try:
        with urlopen(request, timeout=120):
            pass
    except HTTPError as exc:
        raise RuntimeError(
            f"Failed to upload {source_path.name} to R2: HTTP {exc.code}"
        ) from exc
    except URLError as exc:
        raise RuntimeError(
            f"Failed to upload {source_path.name} to R2: {exc.reason}"
        ) from exc

    _emit(log, f"Uploaded R2 object: {object_key}")


def sync_release_to_r2(
    *,
    config: R2Config,
    artifacts: Sequence[Path],
    server_latest_path: Path,
    server_history_path: Path,
    log: Logger | None = None,
) -> list[str]:
    existing_keys = list_r2_objects(config, log=log)
    delete_r2_objects(config, existing_keys, log=log)

    uploaded_urls: list[str] = []
    upload_paths = list(artifacts) + [server_latest_path, server_history_path]
    for source_path in upload_paths:
        object_key = f"{config.object_prefix}{source_path.name}"
        upload_r2_file(config, source_path=source_path, object_key=object_key, log=log)
        uploaded_urls.append(f"{config.public_base_url}/{source_path.name}")
    return uploaded_urls


def ensure_public_url_available(url: str) -> None:
    requests = [
        Request(url, method="HEAD"),
        Request(url, method="GET"),
    ]
    for request in requests:
        try:
            with urlopen(request, timeout=20) as response:
                if response.status < 400:
                    return
        except HTTPError as exc:
            if exc.code in (403, 405):
                continue
            raise RuntimeError(f"Failed to validate {url}: HTTP {exc.code}") from exc
        except URLError as exc:
            raise RuntimeError(f"Failed to validate {url}: {exc.reason}") from exc
    raise RuntimeError(f"Failed to validate {url}: request was not accepted")


def render_landing_fallback_module(server_manifest: Mapping[str, Any]) -> str:
    content = json.dumps(server_manifest, indent=2, ensure_ascii=False)
    return (
        "// Generated by Monorepo/scripts/release_publish.py\n"
        f"export const releaseFallbackData = {content} as const;\n"
    )


def write_landing_fallback_module(
    server_manifest: Mapping[str, Any],
    *,
    output_path: Path = LANDING_FALLBACK_PATH,
) -> None:
    output_path.write_text(
        render_landing_fallback_module(server_manifest),
        encoding="utf-8",
    )


def deploy_landing_site(
    *,
    manifest_url: str = UPDATE_MANIFEST_URL,
    log: Logger | None = None,
) -> None:
    env = os.environ.copy()
    env["LANDING_RELEASE_MANIFEST_URL"] = manifest_url
    landing_dir = str(LANDING_DIR)
    run_command(
        ["npm", "--prefix", landing_dir, "--workspaces=false", "ci"],
        env=env,
        log=log,
    )
    run_command(
        ["npm", "--prefix", landing_dir, "--workspaces=false", "run", "build"],
        env=env,
        log=log,
    )
    run_command(
        ["npx", "--prefix", landing_dir, "wrangler", "deploy"],
        env=env,
        log=log,
    )


def publish_release_bundle(
    *,
    version: str,
    github_manifest: dict[str, Any],
    artifacts: Sequence[Path],
    github_repo: str | None = None,
    github_token: str | None = None,
    server_download_base: str | None = None,
    landing_manifest_url: str = UPDATE_MANIFEST_URL,
    log: Logger | None = None,
) -> ManifestBundle:
    normalized_artifacts = [artifact.resolve() for artifact in artifacts]
    validate_release_inputs(manifest=github_manifest, artifacts=normalized_artifacts)

    resolved_repo = resolve_github_repo(github_repo)
    resolved_token = resolve_github_token(github_token)
    r2_config = resolve_r2_config()
    effective_server_download_base = (
        server_download_base or r2_config.public_base_url
    )
    env = os.environ.copy()
    env["GH_TOKEN"] = resolved_token

    with tempfile.TemporaryDirectory(prefix="yaru-release-publish-") as temp_dir:
        bundle = build_manifest_bundle(
            version=version,
            github_manifest=github_manifest,
            output_dir=Path(temp_dir),
            server_download_base=effective_server_download_base,
        )

        title = f"{DEFAULT_RELEASE_TITLE_PREFIX} {version}"
        notes = create_release_notes(
            version, sorted(github_manifest.get("platforms", {}).keys())
        )
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            suffix=".md",
            delete=False,
        ) as notes_file:
            notes_file.write(notes)
            notes_path = Path(notes_file.name)

        try:
            if release_exists(version, resolved_repo, env):
                run_command(
                    [
                        "gh",
                        "release",
                        "edit",
                        version,
                        "--repo",
                        resolved_repo,
                        "--title",
                        title,
                        "--notes-file",
                        notes_path,
                    ],
                    env=env,
                    log=log,
                )
            else:
                run_command(
                    [
                        "gh",
                        "release",
                        "create",
                        version,
                        "--repo",
                        resolved_repo,
                        "--target",
                        DEFAULT_TARGET_BRANCH,
                        "--title",
                        title,
                        "--notes-file",
                        notes_path,
                    ],
                    env=env,
                    log=log,
                )
        finally:
            try:
                notes_path.unlink()
            except OSError:
                pass

        upload_files = [str(path) for path in normalized_artifacts]
        upload_files.extend(
            [
                str(bundle.github_latest_path),
                str(bundle.github_history_path),
            ]
        )
        run_command(
            [
                "gh",
                "release",
                "upload",
                version,
                *upload_files,
                "--repo",
                resolved_repo,
                "--clobber",
            ],
            env=env,
            log=log,
        )

        uploaded_urls = sync_release_to_r2(
            config=r2_config,
            artifacts=normalized_artifacts,
            server_latest_path=bundle.server_latest_path,
            server_history_path=bundle.server_history_path,
            log=log,
        )
        ensure_public_url_available(f"{r2_config.public_base_url}/latest.json")
        if normalized_artifacts:
            ensure_public_url_available(uploaded_urls[0])

        write_landing_fallback_module(bundle.server_manifest)
        deploy_landing_site(manifest_url=landing_manifest_url, log=log)
        return bundle
