#!/bin/bash

VERSION_FILE=".version"

if [ ! -f "$VERSION_FILE" ]; then
    echo "0.0.0" > "$VERSION_FILE"
fi

CURRENT=$(cat "$VERSION_FILE")
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"

case "$1" in
    major)
        MAJOR=$((MAJOR + 1))
        MINOR=0
        PATCH=0
        ;;
    minor)
        MINOR=$((MINOR + 1))
        PATCH=0
        ;;
    patch)
        PATCH=$((PATCH + 1))
        ;;
    *)
        echo "Current version: $CURRENT"
        echo "Usage: ./version.sh [major|minor|patch] \"commit message\""
        exit 1
        ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
echo "$NEW_VERSION" > "$VERSION_FILE"

echo "Version bumped: $CURRENT → $NEW_VERSION"

if [ -n "$2" ]; then
    git add .
    git commit -m "$2"
    git tag -a "v$NEW_VERSION" -m "$2"
    git push origin main
    git push origin "v$NEW_VERSION"
    gh release create "v$NEW_VERSION" --title "v$NEW_VERSION" --notes "$2"
    echo "Released v$NEW_VERSION"
fi
