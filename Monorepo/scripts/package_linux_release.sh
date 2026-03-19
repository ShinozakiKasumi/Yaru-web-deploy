#!/usr/bin/env bash
set -euo pipefail

version="${1:?version is required}"
root="${2:?root path is required}"

src="$root/apps/Flutter/build/linux/x64/release/bundle"
out="/mnt/c/Users/Akarin/Desktop/Yaru/Monorepo/dist/$version/linux"
icon="$root/apps/Flutter/assets/icon/asaka_app_icon.png"

rm -rf "$out"
mkdir -p "$out"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

appdir="$tmp/Yaru.AppDir"
cp -a "$src" "$appdir"
chmod +x "$appdir/yaru"

cat > "$appdir/moe.asaka.app.desktop" <<'EOF'
[Desktop Entry]
Type=Application
Version=1.0
Name=Yaru
Exec=yaru
Icon=moe.asaka.app
Categories=Education;
Terminal=false
EOF

cp "$icon" "$appdir/moe.asaka.app.png"
ln -sf moe.asaka.app.png "$appdir/.DirIcon"

cat > "$appdir/AppRun" <<'EOF'
#!/bin/sh
set -eu
HERE="$(dirname "$(readlink -f "$0")")"
exec "$HERE/yaru" "$@"
EOF

chmod +x "$appdir/AppRun"
ARCH=x86_64 /home/akari/.local/bin/appimagetool --no-appstream "$appdir" "$out/yaru-$version-linux-x64.AppImage"

cp -a "$src" "$tmp/yaru-$version-linux-x64"
tar -C "$tmp" -czf "$out/yaru-$version-linux-x64.tar.gz" "yaru-$version-linux-x64"

ls -lh "$out"
