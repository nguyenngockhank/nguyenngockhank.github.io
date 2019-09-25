# Git

* Branch
    * [Find current branch](#find-current-branch)
    * [Delete Branch](#delete-branch)
    * [Rename current branch name](#rename-current-branch-name)
    * [Create new branch](#create-new-branch)

* Remote
    * [List](#list-all)
    * [Add remote](#add-remote)
    * [Delete remote](#delete-remote)

* [Cherry-pick](#cherry-pick)

## Cherry pick
```
git cherry-pick <<<commit_hash>>>
```

### Override last commit 
```
git commit --amend -m "Message"
```

### Combine commits
```
git rebase -i HEAD~3
```

## Branch
### Find current branch
```
git branch
```

### Delete branch

At local 
```
git branch -D <<<branch_name>>>
```

At server
```
git push <<<remote_name>>> <<<branch_name>>> --delete
```


### Rename current branch name
```
git branch -m <<<new_branch_name>>>
```

### Create new branch 
(same head current branch)
```
git checkout -b <<<new_branch_name>>>
```


## Remote
### List all
```
git remote -v
```

### Add remote 
```
git remote rm <<<remote_name>>>
```

### Delete remote 
```
git remote add <<<remote_name>>> <<<remote_link>>>
```