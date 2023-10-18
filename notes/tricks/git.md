# Git notes

## Commands

### ⚡️ Branch

**Get current branch**
```sh
git branch
```

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


## ⚡️ Tips

**Cherry pick**
```sh
git cherry-pick <<<commit_hash>>>
```

**Override last commit**
```sh
git commit --amend -m "Message"
```

**Combine commits**
```sh
git rebase -i HEAD~3
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


## Refs 

[Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)
