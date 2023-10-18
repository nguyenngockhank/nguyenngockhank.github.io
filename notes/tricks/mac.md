# Mac tricks

[[toc]]
    
---

## Cài đặt Homebrew
[Trang chủ](https://brew.sh/)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Edit file hosts
Mở finder 
```
Command + Shift + G 
-> Nhập /etc/ 
```

Mở & sửa file `hosts`

## Sủ dụng Preview

[Dùng Preview trong Mac để phóng to chi tiết, nhấn mạnh một vùng, ghi chú, chỉnh sửa ảnh...
](https://tinhte.vn/thread/dung-preview-trong-mac-de-phong-to-chi-tiet-nhan-manh-mot-vung-ghi-chu-chinh-sua-anh.2661212/)

## Shortcuts

### Toggle hidden files
```
Command + shift + .
```

### Xóa tất cả ký tự

```
Option (alt) + Delete
```

### Bàn phím Emoji

```
Command + Control + Space
```

### Screen Capture

```
Command + Shift + 3 (chụp toàn bộ màn hình) 
Command + Shift + 4 (chụp màn hình một khu vực được chọn)
```

### Zoom in / out

```
Command + Option (alt) +  `+(=)`
Command + Option (alt) +  `-(_)`
```

### Workspace

```
Ctrl + Up
Ctrl + Left / Right
```


## Lỗi Clipboard ... 
Reset lại thôi `killall pboard`
```
killall pboard
```

## Xem version tool trên CLI  
```
which php
which composer
```

## Kill process trên port 
```
sudo lsof -i :80

sudo kill 1034
```

## Custom Enviroment Variables
Tạo file `~/.bash_profile`

PHP
```
export PATH=/Applications/AMPPS/php-7.1/bin:$PATH
```

MYSQL
```
export PATH=${PATH}:/Applications/AMPPS/mysql/bin
```

## Get local IP
```
ifconfig |grep inet
```

## SSH

### List all SSH 

```
ls -al ~/.ssh
```

### Create an SSH keys

```
ssh-keygen -t rsa -b 2048
```

Hỏi gì cũng Enter hết :v 
- Để mặc định tạo ra folder `'/Users/apple/.ssh'`
- Với lại khỏi SSH mà phải nhập lại Mật khẩu

*Note*: `apple` là tên máy của mềnh

**Copy public key**

```
pbcopy < ~/.ssh/id_rsa.pub
```

### Tạo SSH key tại thư mục hiện tại 

```
ssh-keygen -t rsa -b 4096 -C "khanh@construct.sg"
```
Move tay file đó vào `~/.ssh`

### Tạo shortcut

Sửa file `/Users/apple/.ssh/config`, nếu không có thì tạo 

Để không phải nhớ tên IP + Account
```
host staging
    hostname xxx.xxx.xxx.xxx
    user root
```

Từ nay có thể xài `ssh staging`

## Icon for files / folders
- copy image to clipboard 
- Get info > paste to icon place
[full description](https://support.apple.com/en-vn/guide/mac-help/mchlp2313/mac)

## Hebernate mode

use this app http://deepsleep.free.fr/

## Install fonts

[Full Here](https://mackeeper.com/blog/post/542-how-to-install-fonts-on-mac/)

## Switch to bash

```
exec bash
exec bash --login
```

## Fix disk



[fix_exfat_drive.md](https://gist.github.com/GuillaumePressiat/1ba66dbb3db802f342a8ea70355fbc52)


exFAT support on macOS seems to have some bugs because my external drives with exFAT formatting will randomly get corrupted.

Disk Utility is unable to repair this at first, but the fix is this:

Use diskutil list to find the right drive id.
1. You want the id under the IDENTIFIER column, it should look like disk1s1
2. Run `sudo fsck_exfat -d <id from above>`. eg sudo `fsck_exfat -d disk1s3`
3. -d is debug so you'll see all your files output as they're processed.
4. Answer YES if it gives you the prompt Main boot region needs to be updated. Yes/No?
5. Open Disk Utility and you should be able to repair here successfully.
6. See the apple man page below for details on the fsck_exfat utility.

```
fsck_exfat -y -x /dev/rdisk4s1
```

Sources/Extra Reading:
- https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/fsck_exfat.8.html
- https://craigsmith.id.au/2014/07/06/repairing-a-corrupted-mac-osx-exfat-partition/
- https://discussions.apple.com/thread/4154638?tstart=0

