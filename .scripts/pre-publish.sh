#!/usr/bin/env sh

# Check workspace dependencies
if grep -q "workspace:" package.json; then
    echo "- [ pre-publish.sh ] \`workspace\` is not a valid  version timestamp = $(
        date -u +"%Y-%m-%dT%H:%M:%SZ"
    )" >>.log.md
    exit 1
fi
