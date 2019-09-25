
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