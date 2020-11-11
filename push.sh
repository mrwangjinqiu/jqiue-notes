set -e

git add .

# git commit -m "feat: update a large number notes"

git commit -m "chore: update deps"

# git commit -m "fix: fixed some errors in the nav"

# github
git push origin_ssh_github master

# gitlab
git push origin_ssh_gitlab master

# gitee
git push origin_ssh_gitee master

# coding
git push origin_ssh_coding master

cd -
