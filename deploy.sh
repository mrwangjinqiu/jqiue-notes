set -e

npm run build

cd docs/.vuepress/dist

# 如果发布自定义域名，则要修改config.js中的base
# echo jqiue.top > CNAME
# echo wjqis.me > CNAME

git init
git add .
git commit -m "deploy"
git push https://e.coding.net/jqiue/wjq/deploy-site.git master -f

cd -
