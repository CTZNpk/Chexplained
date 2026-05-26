#!/usr/bin/env sh
set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
app_dir="$script_dir/mobileapp"
command=${1:-start}
platform=${2:-android}

cd "$app_dir"

if [ ! -d node_modules ]; then
  npm install
fi

case "$command" in
  start)
    npx expo start --dev-client
    ;;
  web)
    npx expo start --web
    ;;
  go)
    npx expo start
    ;;
  build)
    npx eas build --profile development --platform "$platform"
    ;;
  login)
    npx eas login
    ;;
  whoami)
    npx eas whoami
    ;;
  *)
    echo "Usage: ./start.sh [start|web|go|build|login|whoami] [android|ios|all]" >&2
    exit 2
    ;;
esac
