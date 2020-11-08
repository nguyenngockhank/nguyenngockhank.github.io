# Git

## Branch

:::: tabs

::: tab Current
```sh
git branch
```
:::

::: tab Create new
(same head current branch)
```sh
git checkout -b <<<new_branch_name>>>
```
:::


::: tab Rename
```sh
git branch -m <<<new_branch_name>>>
```
:::

::: tab Delete
At local 
```sh
git branch -D <<<branch_name>>>
```

At server
```sh
git push <<<remote_name>>> <<<branch_name>>> --delete
```
:::

::::


## Remote


:::: tabs

::: tab "List All"
```sh
git remote -v
```
:::

::: tab Add
```sh
git remote add <<<remote_name>>> <<<remote_link>>>
```
:::


::: tab Update
```sh
git remote set-url <<<remote_name>>> <<<new_remote_link>>>
# E.g: 
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
:::

::: tab Remove
```sh
git remote rm <<<remote_name>>>
```
:::

::::


## Others

:::: tabs

::: tab "Cherry pick"
```sh
git cherry-pick <<<commit_hash>>>
```
:::

::: tab "Override last"
```sh
git commit --amend -m "Message"
```
:::


::: tab "Combine commits"
```sh
git rebase -i HEAD~3
```
:::

::: tab "Last-Updated timestamp"
```sh
git log -1 --format=%at README.md
```

In Node

```js
const spawn = require('cross-spawn')

function getGitLastUpdatedTimeStamp (filePath) {
  let lastUpdated
  try {
    lastUpdated = parseInt(spawn.sync(
      'git',
      ['log', '-1', '--format=%at', path.basename(filePath)],
      { cwd: path.dirname(filePath) }
    ).stdout.toString('utf-8')) * 1000
  } catch (e) { /* do not handle for now */ }
  return lastUpdated
}
```
:::

::::


## Refs 

[Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)