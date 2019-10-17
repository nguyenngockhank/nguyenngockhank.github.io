# Linux Tricks 

[[toc]]

## Crobtab

1/ Show list crontab

```
crontab -l
```

2/ Edit crontab 

```
crontab -e
```

Explain: 
```
*     *     *     *     *     command to be executed
-     -     -     -     -
|     |     |     |     |
|     |     |     |     +----- day of week (0 - 6) (Sunday=0)
|     |     |     +------- month (1 - 12)
|     |     +--------- day of month (1 - 31)
|     +----------- hour (0 - 23)
+------------- min (0 - 59)
```

Ví dụ: 

```
0 0 * * * cd /var/www/constructdigital.net/domains/shinnyoen-uat2.constructdigital.net/public_html && ./artisan sync-wistia-video-meta-data --env=uat > /dev/null 2>&1
```

### More Explaination

```
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

- **>** chuyển hướng - chuyển luồng dữ liệu đi đâu đó
- **>>** chuyển hướng - giống như trên nhưng sẽ cộng dồn vào đích nó đến
- **/dev/null** trong linux nó giống như một cái hố đen, nơi mà mọi dữ liệu gửi đến đều sẽ bị loại bỏ mất xác.
- **2** là ký hiệu chỉ đích đến Standard Error (stderr)
- **1** là ký hiệu chỉ đích đến Standard Out (stdout)
- **&** là ký hiệu kiểu A or B

Mặc định cron gửi email cho người thực thi cron job, nếu bạn muốn tắt chức năng gửi email này đi thì hãy thêm đoạn sau vào cuối dòng >> /dev/null 2>&1

### Tools

[https://crontab.guru/](https://crontab.guru/)


## SSH

[Cứ làm theo bài viết này](https://hocvps.com/ssh-keys-login/)

Tóm tắt: 
- Dưới Client tạo SSH Key 
- Trên Server Linux (VPS):  dán cái public key vào file này `~/.ssh/authorized_keys`
- Tạo config `IP`, `user` để khỏi phải nhập rồi xài thôi 

## Sử dụng `Vi`

[SGK](https://helpdesk.inet.vn/knowledgebase/huong-dan-co-ban-su-dung-vi-trong-linux)

Tóm tắt lệnh hay xài
- `Esc` để chuyển đổi qua lại từ command mode với insert mode.
- `:w!` lưu tập tin
- `:x!` lưu tập tin và thoát
- `:wq` ZZ lưu tập tin và thoát
- `:q!` không lưu và thoát

## Sử dụng `Nano`

[SGK](https://hocvps.com/cach-su-dung-nano-editor/)

- Ký hiệu `^` thay cho phím `Ctrl`
- `Ctrl+O` lưu file
- `Ctrl+X` thoát khỏi editor (có thể cần ấn thêm Y/N)
- `Ctrl+W` search