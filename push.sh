set -e

git add .

git commit -m "feat: updates some notes and changes"

# git commit -m "chore: updates deps"

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
