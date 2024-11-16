---
tags: ["Tools", "Overview", "git"]
---

# Git notes

<TagLinks />

## Workflow 

![git workflow & commands](https://i.pinimg.com/originals/f4/d7/2f/f4d72f61f6d9f171fd08b0be6bd62e98.jpg)

## ⚡️ Command Tips

![Command overview](https://i.pinimg.com/originals/38/5d/71/385d713df113bef1da676040566cdcaf.jpg)

### ⚡️ Branch


**Create new branch**
```sh
git checkout -b <<<new_branch_name>>>
```

**Rename branch**
```sh
git branch -m <<<new_branch_name>>>
```

**Delete branch**
At local 
```sh
git branch -D <<<branch_name>>>
```

At server
```sh
git push <<<remote_name>>> <<<branch_name>>> --delete
```

### ⚡️ Remote

**List All**
```sh
git remote -v
```

**Add**
```sh
git remote add <<<remote_name>>> <<<remote_link>>>
```

**Update**
```sh
git remote set-url <<<remote_name>>> <<<new_remote_link>>>
# E.g: 
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

**Remove**
```sh
git remote rm <<<remote_name>>>
```

### **Cherry pick**
```sh
git cherry-pick <<<commit_hash>>>
```

To cherry-pick all the commits from commit A to commit B (where A is older than B), run:

```sh
git cherry-pick A^..B
```

If you want to ignore A itself, run:
```sh
git cherry-pick A..B
```

### **Override last commit**
```sh
git commit --amend -m "Message"
```

### **Combine commits**
```sh
git rebase -i HEAD~3
```


### **Get all commits from all branches**

```sh
git reflog
# or
git log --reflog
```

## Others

### Last-Updated timestamp
```sh
git log -1 --format=%at README.md
```

**In Node**
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

### git-rev-sync

Synchronously get the current git commit hash, tag, count, branch or commit message.

```js
var git = require('git-rev-sync');
 
console.log(git.short());
// 75bf4ee
 
console.log(git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef
 
console.log(git.branch());
// master
```

### Merge và Rebase ???

![Merge vs Rebase](https://i.pinimg.com/564x/8c/da/74/8cda743d62684fbb2051e2f580fe3763.jpg)

Best practice khuyên là:
- Rebase origin/branch vào branch (pull)
- Merge feature branch vào master (hoặc một shared branch nào đó)

Nếu là người không rành và có kinh nghiệm làm việc với rebase thì merge sẽ là cách làm an toàn hơn, nó sẽ không phá mất cái history của repo, cho nên với cách merge cho một shared branch thì việc nhiều người làm chung trên một branch sẽ không xảy ra sự cố, mặc dù history sẽ khá nhập nhằng.

## Specifying the Private SSH Key in Git

```
GIT_SSH_COMMAND="ssh -i /path/to/privatekey/ git <command>
```

Example
```
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519" git clone git@bitbucket.org:chromawallet/stuttgart-mp.git
```

Create alias that we save time to type

At `~/.zprofile` or `~/.bash_profile`, append the below line

```
alias w3tech='GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519"'
```

Then, use like this

```
w3tech git clone git@bitbucket.org:chromawallet/stuttgart-mp.git
```

## Errors

```
error: cannot open '.git/FETCH_HEAD': Permission denied
```

Solution: `sudo chown -R <username> .`

Eg: `sudo chown -R ubuntu .`
## Refs 

[Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)
