cd $1
npm version $2
cd ..
git commit -m "bumping up version for release" ./
git push
lerna publish from-package --yes