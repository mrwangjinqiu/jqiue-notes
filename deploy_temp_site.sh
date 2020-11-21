set -e

npm run build

cd docs/.vuepress/dist

git init
git add .
git commit -m "deploy"
git push https://gitee.com/jqiue/jqiue_temp_site.git master:gh-pages -f

cd -
