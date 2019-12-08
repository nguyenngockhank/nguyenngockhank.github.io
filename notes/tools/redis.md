# Redis

## Install

:::: tabs
::: tab Mac
```
brew install redis
```
:::

::: tab Ubuntu
```
$sudo apt-get update 
$sudo apt-get install redis-server
```
:::
::::

## Usage 

### Start 

:::: tabs
::: tab Mac
**Start**
```
redis-server /usr/local/etc/redis.conf
```
**Stop**
```
redis-cli shutdown
```
:::

::: tab Ubuntu
**Start**
```
redis-server
```
**Stop**
```
redis-cli shutdown
```
:::
::::


### Command Line

**Start**
```
redis-cli 
```

**Test**
```
redis-cli ping
```

**See all keys**
```
keys
```

## With Programming Language 

- PHP Package: [predis](https://github.com/nrk/predis)
- NodeJS: [redis](https://www.npmjs.com/package/redis)


## Manage with GUI
- Package: [phpRedisAdmin](https://github.com/erikdubbelboer/phpRedisAdmin)

```
git clone https://github.com/ErikDubbelboer/phpRedisAdmin.git
cd phpRedisAdmin
git clone https://github.com/nrk/predis.git vendor
```

## Pub/Sub 

Demo PHP with NodeJs, PHP is Publisher & NodeJS is Subscriber

Here are [my repository](https://github.com/nguyenngockhank/php-pulisher-node-subscriber-redis) Mini Demo for this feature

## Lock

Useful feature of Redis when you want to maintain the consistency. E.g: Generate Auto increment ID

Package for node: [redis-lock](https://www.npmjs.com/package/redis-lock)

## References 

[How to Install Redis Cache Server on CentOS 7/6](https://tecadmin.net/install-redis-centos/)