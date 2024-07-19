# Crontab

![overview](https://i.pinimg.com/originals/12/c4/0c/12c40c99932fb1252b14112dc89f40e1.png)

## Commands

### Show list crontab

```sh
crontab -l
```

### Edit crontab 

```sh
crontab -e
```

### Explanation
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

## Example: 

```sh
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

## Tools

[https://crontab.guru/](https://crontab.guru/)