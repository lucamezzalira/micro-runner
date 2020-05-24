cd $1
npm version $2
git commit -m "bumping up version for release" ./
cd ..
lerna publish from-package --yes