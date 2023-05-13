---
tags: ["Performance"]
---

# Cache Strategies 

<TagLinks />

Choose strategies for applying a cache layer

## Read Strategies

### Cache Aside

![Image](./cache-aside.png)
- The cache is sitting aside the database. 
- The application will first request the data from the cache. 
    - If the data exists **cache hit**, the app will retrieve the data directly. 
    - If not **cache miss**, the app will request data from the database and write it to the cache so that the data can be retrieved from the cache again next time.


### Read through

![Image](./cache-read-through.png)

- The cache sits in between the application and the database. 
- The application only request data from the cache. 
- If a **cache miss** occurs, the cache is responsible to retrieve data from the database, update itself and return data to the application.


## Write Strategies

### Write through
![Image](./cache-write-through.png)
- The cache sits in between the application and the database. 
- Every writes from the application must go through the cache to the database. (double write)

### Write Back (a.k.a Write Behind)

![Image](./cache-write-back.png)

- The application still writes data to the cache. 
- However, there is a delay in writing from the cache to the database. 
- The cache only flushes all updated data to the DB once in a while (e.g. every 2 minutes).

### Write Around

![Image](./cache-write-around.png)

- Write around usually combines with either **cache aside** or **read through** strategy. 
- The application writes directly to the database. 
- Only data that is read goes to the cache.

## Invalidate cache
- At Read side
    - let the cache item live until its expiration (probably stale data)
    - use soft expiration (probably stale data)
- At write side
    - remove completely cache item from storage if we using **Cache Aside** 
    - remove soft expiration (probably stale data)
    - update new value into the cache item (will be problem if data structure of cache item)
    - emit an event, then cache updator will update itself (CQRS architecture)

## 🔗 Readmore 
- [Cache Miss Attack Prevention](../security/software-security.md#cache-miss-attack-prevention)
- [Cache miss : Escaping the Storm](https://dev.to/uzumakinarut0/cache-miss-escaping-the-storm-1f9j)
- [Cache Miss Storm](https://www.percona.com/blog/cache-miss-storm/)

https://www.youtube.com/watch?v=jIA7z1gxuc8&ab_channel=HusseinNasser