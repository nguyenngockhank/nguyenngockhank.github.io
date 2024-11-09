# Linux Notes 

## Architecture 

![Architecture](https://i.pinimg.com/originals/a6/eb/2a/a6eb2a3f586a799a793af9237e9a84dd.jpg)

### Kernel

The kernel acts as the core of the Linux system. It's responsible for managing hardware resources, memory allocation, process scheduling, and communication between different parts of the system.  You can think of it as the conductor of the orchestra, keeping everything in sync.

![Important linux components](https://i.pinimg.com/originals/4c/41/74/4c4174b406111f665461f2e8829410fd.jpg)

### Shells

The shell acts as the user interface for Linux. It allows you to interact with the system by issuing commands. There are different shell options available, like Bash or Zsh.

![Linux shells](https://i.pinimg.com/736x/8d/25/be/8d25beaab9610f5b3b2a10055e919661.jpg)


## File

### File systems
![Linux File systems](https://i.pinimg.com/736x/20/6e/40/206e4060303def7a1ba3d4c7439ef05d.jpg)

### File types

![Linux File types](https://i.pinimg.com/736x/c7/3f/e1/c73fe100746d6777931a63b945ec45f9.jpg)
![Linux File types](https://i.pinimg.com/736x/82/ca/80/82ca80c7340753af7441fdffa4c7a09a.jpg)

### Permissions

![Linux Perms](https://i.pinimg.com/736x/07/34/6b/07346b712ebb57ddd3313d096e30ae26.jpg)
![Linux Permissions](https://i.pinimg.com/736x/b9/f1/86/b9f186b2c9d4f5489ea2b091469bdc82.jpg)

#### Permission Types
- `r`: read
- `w`: write
- `x`: execute

**Bitwise**
```
EXECUTE   =>  001  =>  1 
WRITE     =>  010  =>  2  
READ      =>  100  =>  4
```

#### User types
- `u`: user - the owner
- `g`: group - members of file's group
- `o`: others - neither owner nor group

#### Commands
- `chown`: change the owner
- `chgrp`: change the group
- `chmod`: change permissions

Example
```
chmod 600 filename
```

- owner: 6 (110) => WRITE + READ
- group: 0
- other: 0

### Redirections 

By default, commands receive instructions from the keyboard (standard input) and display results on the terminal (standard output). Redirection lets you modify this behavior.

Here's a breakdown of the key concepts:

- Standard Input (stdin): This refers to the data a command receives, typically typed on the keyboard.
- Standard Output (stdout): This is where the command sends its results, usually displayed on the terminal window.
- Standard Error (stderr): This is a separate stream used by commands to report errors or warnings, also shown on the terminal by default.

![Redirections cheatsheet](https://i.pinimg.com/originals/b7/18/62/b7186255105a01a39eeb0aed8d141c28.jpg)

**Operators**
- `>` (output redirection): This sends the standard output (stdout) of a command to a file. Any existing content in the file will be overwritten.
- `>>` (append redirection): Similar to `>,` but instead of overwriting, it appends the output to the end of the existing file.
- `<` (input redirection): This feeds the contents of a file as standard input (stdin) to a command.

### Logical volume management (LVM)

![lvm](https://i.pinimg.com/originals/0e/56/12/0e5612a0eba95b8c77acf485dc407603.jpg)

## Linux admin tips & tricks

![Linux admin tips & tricks](https://i.pinimg.com/originals/a2/b4/1d/a2b41d97ea327209a6759b032a22f204.jpg)

## Commands / Tools

![Basic commands](https://i.pinimg.com/736x/14/bd/9a/14bd9a16da3028c21bbb946d72e1377e.jpg)

## Datetime

**Ubuntu** 
```
cat /etc/timezone
```
Output example: `Australia/Melbourne`

**Another way**
```
date +%Z
```
**Output example**: `AEDT`. [Check list here](https://24timezones.com/time-zone/aedt)

