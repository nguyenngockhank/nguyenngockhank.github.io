# Mac tricks

* [Cài đặt Homebrew](#cài-đặt-homebrew)
* [Toggle hidden files](#toggle-hidden-files)
* [Edit file hosts](#edit-file-hosts)
* [Xem version tool trên CLI](#xem-version-tool-trên-cli)
* [Kill process trên port](#kill-process-trên-port)
* [Custom Enviroment Variables](#custom-enviroment-variables)
* [Get local IP](#get-local-ip)
* [Lỗi Clipboard](#loi-clipboard)
* [SSH](#ssh)
    * [Tạo ssh key](#tạo-ssh-key)
    * [Tạo shortcut](#tạo-shortcut)
    
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

### Tạo ssh key
```
ssh-keygen -t rsa -b 4096 -C "khanh@construct.sg"
```
Move tay file đó vào `~/.ssh`

### Tạo shortcut
Để không phải nhớ tên IP + Account
```
host staging
    hostname xxx.xxx.xxx.xxx
    user root
```

Từ nay có thể xài `ssh staging`







