#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f https://github.com/LazyTechwork/NWMarks.git master:gh-pages

cd -