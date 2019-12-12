# Git
[[toc]]


## Branch

:::: tabs

::: tab Current
```
git branch
```
:::

::: tab Create new
(same head current branch)
```
git checkout -b <<<new_branch_name>>>
```
:::


::: tab Rename
```
git branch -m <<<new_branch_name>>>
```
:::

::: tab Delete
At local 
```
git branch -D <<<branch_name>>>
```

At server
```
git push <<<remote_name>>> <<<branch_name>>> --delete
```
:::

::::


## Remote


:::: tabs

::: tab "List All"
```
git remote -v
```
:::

::: tab Add
```
git remote add <<<remote_name>>> <<<remote_link>>>
```
:::


::: tab Update
```
git remote set-url <<<remote_name>>> <<<new_remote_link>>>
# E.g: 
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
:::


::: tab Remove
```
git remote rm <<<remote_name>>>
```
:::

::::


## Others

:::: tabs

::: tab "Cherry pick"
```
git cherry-pick <<<commit_hash>>>
```
:::

::: tab "Override last"
```
git commit --amend -m "Message"
```
:::


::: tab "Combine commits"
```
git rebase -i HEAD~3
```
:::
::::


## Refs 

[Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)