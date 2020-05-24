cd $1
npm version $2
cd ..
git commit -m "bumping up version for release" ./
git push
git branch -d $2
lerna publish from-package --yes