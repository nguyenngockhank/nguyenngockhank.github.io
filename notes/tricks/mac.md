# Mac tricks

[[toc]]
    
---

## Cài đặt Homebrew
[Trang chủ](https://brew.sh/)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Toggle hidden files
```
Command + shift + .
```

## Edit file hosts
Mở finder 
```
Command + Shift + G 
-> Nhập /etc/ 
```

Mở & sửa file `hosts`

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

### Tạo SSH key

```
ssh-keygen -t rsa -b 2048
```

Hỏi gì cũng Enter hết :v 
- Để mặc định tạo ra folder `'/Users/apple/.ssh'`
- Với lại khỏi SSH mà phải nhập lại Mật khẩu

*Note*: `apple` là tên máy của mềnh

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

## Install fonts

[Full Here](https://mackeeper.com/blog/post/542-how-to-install-fonts-on-mac/)







