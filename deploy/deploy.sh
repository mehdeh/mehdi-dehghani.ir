#!/usr/bin/env bash
# Deploy mehdi-dehghani.ir from repos/ to sites/
set -euo pipefail

REPO="/home/mehdi/repos/mehdi-dehghani.ir"
SITE="/home/mehdi/sites/mehdi-dehghani.ir"
USER_NAME="mehdi"

echo "==> Build Next.js"
cd "$REPO"
npm run build

echo "==> Sync standalone output"
rm -rf "$SITE"
mkdir -p "$SITE"
cp -a "$REPO/.next/standalone/." "$SITE/"
mkdir -p "$SITE/.next"
cp -a "$REPO/.next/static" "$SITE/.next/static"
if [[ -d "$REPO/public" ]]; then
  cp -a "$REPO/public" "$SITE/public"
fi

chown -R "$USER_NAME:$USER_NAME" "$SITE"

echo "==> Sync systemd unit"
sudo cp "$REPO/deploy/mehdi-dehghani-next.service" /etc/systemd/system/mehdi-dehghani-next.service
sudo systemctl daemon-reload
sudo systemctl enable mehdi-dehghani-next.service

echo "==> Restart Next.js"
sudo systemctl restart mehdi-dehghani-next
sudo systemctl reload nginx || true

echo "Deploy finished."
