# Redis Notes

![So fast](https://i.pinimg.com/originals/ff/e7/ce/ffe7ce9709b19d43d785dc401d51379c.jpg)

## Why is Redis so fast?
- RAM-based database
- leverages IO [multiplexing](https://redis.com/blog/multiplexing-explained/) & single threaded execute loop 
- leverages several efficient lower-level data structures.


## Architecture Evolves

![History](https://i.pinimg.com/originals/88/7b/99/887b99e3692d2bf71be03322149ca0cf.jpg)


![History](https://i.pinimg.com/originals/88/7b/99/887b99e3692d2bf71be03322149ca0cf.jpg)


- **Simple database**, i.e. a single primary shard
- **HA (highly available) database**, i.e. a pair of primary and replica shards
- **Clustered database**, which contains multiple primary shards, each managing a subset of the dataset (or in Redis terms, a different range of “hash-slots”)
- **HA clustered database**, i.e. multiple pairs of primary/replica shards

[Readmore](https://redis.com/redis-enterprise/technology/redis-enterprise-cluster-architecture/)

::: warning Redis Cluster does not guarantee strong consistency
Redis Cluster does not guarantee strong consistency. In practical terms this means that under certain conditions it is possible that Redis Cluster will lose writes that were acknowledged by the system to the client. 

[Detail](https://redis.io/docs/management/scaling/#redis-cluster-consistency-guarantees)
:::


## Communication Patterns

### Use list as event queue

[Code example](https://github.com/luin/ioredis/blob/main/examples/list.js)

```ts
// sending client 
setTimeout(() => {
    // `redis` is in the block mode due to `redis.blpop()`,
    // so we duplicate a new connection to invoke LPUSH command.
    redis.duplicate().lpush("block-list", "hello");
}, 1200);


// block receiving client
const blockPopped = await redis.blpop("block-list", 0); // Resolved after 1200ms.
console.log(blockPopped); // [ 'block-list', 'hello' ]
```

### Pub/sub 

publisher.js
```ts
const message = { foo: Math.random() };
// Publish to my-channel-1 or my-channel-2 randomly.
const channel = `my-channel-${1 + Math.round(Math.random())}`;

// Message can be either a string or a buffer
redis.publish(channel, JSON.stringify(message));
```

subscriber.js
```ts
redis.subscribe("my-channel-1", "my-channel-2", (err, count) => {
    //...
});

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
});
```

### Locking 

Package [redis-lock](https://www.npmjs.com/package/redis-lock)
Package [redlock](https://www.npmjs.com/package/redlock)

- One worker (and only one) worked to be able to acquire rights to a resource
- Be able to release this lock reliably
- Not deadlock any resource meaning that a resource should be unlocked after a given time period.

### Others 
- Simple Queue: [beequeue](https://www.npmjs.com/package/beequeue)
- GraphQL subscriptions: [https://www.npmjs.com/package/graphql-subscriptions](https://www.npmjs.com/package/graphql-subscriptions), [graphql-redis-subscriptions](https://www.npmjs.com/package/graphql-redis-subscriptions)

## Naming convention for key

```
SET Personal:key1 value
SET Personal:key2 value
```

The above pattern can be extended as required so that we get the benefit for the same key managed by different applications or domains or modules.


### Hash tags for determining slot

- `{user1000}.following` and `{user1000}.followers` => `user1000` hashed
- `foo{}{bar}` => `foo{}{bar}` hashed
- `foo{{bar}}zap` => `{bar` hashed
- `foo{bar}{zap}` => `bar` hashed

## Performance notes

- Consider more keys and smaller values
- Any key above 1024 bytes is not recommended as key size may cause issues considering memory and bandwidth.
- SCAN vs. KEYS
    - KEYS command, which returns all matched elements at once, is risky to use in production. It may cause your Redis server to become inefficient and even exhaust its RAM resources.
    - SCAN commands allow you to inspect data without risking your server being blocked.
        - get the data without requiring the use of a slave.
        - retrieve keys in the keyspace using a cursor.
        - accepts a key name pattern and an optional count argument.

### Sorted Sets as Indexes

[Sorted Sets Docs](https://www.tutorialspoint.com/redis/redis_sorted_sets.htm)

```ts
const data = [
    { country: "china", population: 1409517397 },
    { country: "atican-city", population: 792222 },
    // ... more
];

const key = "countries-by-pop"

await redis.zadd(
    key,
    ...scores.map(({ country, population }) => [population, country])
);

// To retrieve the top five countries
await redis.zrange(key, 0, 4); // string[]

// To retrieve the 5 lowest population
await redis.zrange(key, 0, 4, "REV"); 

// getting the countries with a population between 1,000,000 and 100,000 (e.g. by score) would be:
await redis.zrange(key, 100000, 1000000, "BYSCORE");
```



*Read more*: 
- [Redis besst practices](https://redis.com/redis-best-practices/introduction/)
- [Redis clustering best practices](https://redis.com/blog/redis-clustering-best-practices-with-keys/)
- [Cache best practices (Azure)](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices-development)

## Use Lua Scripts

### Generate Id
Generate flakeId code for example

```ts
const generateFlakeIdScript = `
local key = KEYS[1]
local cnt = redis.call('get', key) or 0
cnt = cnt + 1
if (cnt > 1023) then
  cnt = 0
end
redis.call('set', key, cnt)
return cnt`;

// define 
redis.defineCommand("generateFlakeId", {
  numberOfKeys: 1,
  lua: generateFlakeIdScript,
});

// usage 
const key = "FLAKE_ID{GENERATOR_ID}"
redis.generateFlakeId(key, (err, result) => {
    const counter = Number.parseInt(result);
    // more code ...
});
```

### Rate Limiting 

```ts
import { ThrottlerStorageRecord } from "@nestjs/throttler/dist/throttler-storage-record.interface";
import { Cluster, Redis } from "ioredis";

export class ThrottlerStorageRedisService {
  private scriptSrc: string;

  constructor(private redis: Redis | Cluster) {
    this.scriptSrc = this.getScriptSrc();
  }

  private getScriptSrc(): string {
    // Credits to wyattjoh for the fast implementation you see below.
    // https://github.com/wyattjoh/rate-limit-redis/blob/main/src/lib.ts
    return `
      local totalHits = redis.call("INCR", KEYS[1])
      local timeToExpire = redis.call("PTTL", KEYS[1])
      if timeToExpire <= 0
        then
          redis.call("PEXPIRE", KEYS[1], tonumber(ARGV[1]))
          timeToExpire = tonumber(ARGV[1])
        end
      return { totalHits, timeToExpire }
    `
      .replace(/^\s+/gm, "")
      .trim();
  }

  async increment(
    key: string,
    ttlSeconds: number,
  ): Promise<ThrottlerStorageRecord> {
    // Use EVAL instead of EVALSHA to support both redis instances and clusters.
    const results = await this.redis.eval(
      this.scriptSrc,
      1,
      key,
      ttlSeconds * 1000,
    );

    if (!Array.isArray(results)) {
      throw new TypeError(
        `Expected result to be array of values, got ${results}`,
      );
    }

    if (results.length !== 2) {
      throw new Error(`Expected 2 values, got ${results.length}`);
    }

    const [totalHits, timeToExpire] = results;

    if (typeof totalHits !== "number") {
      throw new TypeError("Expected totalHits to be a number");
    }

    if (typeof timeToExpire !== "number") {
      throw new TypeError("Expected timeToExpire to be a number");
    }

    return { totalHits, timeToExpire };
  }
}
```

## Redis vs Memcached

Criteria | Memcached | Redis 
---------| ---------| ------ 
Data structure | plain string values | lists, sets, sorted sets, hashes, ...
Architecture   | multi-thread  | string thread for reading/writing keys 
Transaction    | ❌            | support atomic operations 
Snapshots / Persistence | ❌   | keep data on disks - support RDB / AOF 
Pub / Sub      | ❌            | ✅ 
Geospatial support |  ❌       | Geospatial indexes - stores lat & long 
Server side script |  ❌       | support Lua script
Cache Eviction     |  LRU       | `noeviction`, `allkeys-lru`, `allkeys-lfu`, ...
Replication     | ❌           | Leader - Followers

- RDB - Redis Database Backup : a compact, point-in-time snapshot of the DB at specifict of time
- AOF - Append Only File 
- LRU - Least Recently Used 
-[Geospatial Indexing](https://redis.com/glossary/geospatial-indexing/)
-[Key eviction](https://redis.io/docs/reference/eviction/)

##  🔗 Cache applying 
[Read here](../common/cache/cache-notes.md)

## Libraries

- [ioredis](https://www.npmjs.com/package/ioredis) - node client
- [redlock](https://www.npmjs.com/package/redlock) - distributed lock
- [bull](https://www.npmjs.com/package/bull) - queue

*Read more*: 
- [💎 Dealing with concurrency issues when miss cache storm](https://stackoverflow.com/questions/23303463/dealing-with-concurrency-issues-when-caching-for-high-traffic-sites): Use a soft expiration for async update data on cache
- [Redis Notes - Cluster mode](https://www.stevenchang.tw/blog/2020/12/08/redis-notes-cluster-mode)