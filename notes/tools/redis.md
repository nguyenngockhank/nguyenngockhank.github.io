# Redis

## Cài

**Mac**

Install 

```
brew install redis
```

Start

```
redis-server /usr/local/etc/redis.conf
```

Stop 

```
redis-cli shutdown
```


**Ubuntu**

Install 

```
$sudo apt-get update 
$sudo apt-get install redis-server
```

Start

```
redis-server
```

Stop 

```
redis-cli shutdown
```


## Xài với Command Line

```
redis-cli 
```

Test
```
redis-cli ping
```

See all keys 
```
keys
```

## Xài qua PHP

- Package: [predis](https://github.com/nrk/predis)


## GUI Quản lý
- Package: [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)

```
git clone https://github.com/ErikDubbelboer/phpRedisAdmin.git
cd phpRedisAdmin
git clone https://github.com/nrk/predis.git vendor
```

## Demo PHP with NodeJs through Pub/Sub

Here are [my repository](https://github.com/nguyenngockhank/php-pulisher-node-subscriber-redis) Mini Demo for this feature


## References 

[How to Install Redis Cache Server on CentOS 7/6](https://tecadmin.net/install-redis-centos/)