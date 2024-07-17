---
tags: ["Performance", "Cache", "Overview"]
---

# Cache overview

<TagLinks />

![Overview](https://i.pinimg.com/originals/b3/f3/a1/b3f3a1eb18edeb1204a7470f5f808966.jpg)

## Things to consider

![Things to consider](https://i.pinimg.com/originals/d2/24/8e/d2248e7100912a5e25701e623f45235a.jpg)

## Layers

![System](https://i.pinimg.com/originals/f1/b3/73/f1b373d463eee7fefc40efc848de1d92.jpg)

![layers](https://i.pinimg.com/originals/c5/5f/03/c55f0395a4fcbd37931c4d561a51f60a.jpg)

## Read & Write

![Read & Write Strategies](https://i.pinimg.com/originals/2f/f5/5b/2ff55b7413171dffe0e851a46ebde90c.jpg)

## Eviction

![Eviction](https://i.pinimg.com/originals/b2/81/6d/b2816d0f475473ac976a8ecd0613d420.jpg)

- Least Recently used (LRU)
- Most recently used (MRU)
- Least Frequently used (LFU)
- Time-to-live (TTL)
- Two-tiered caching

## Problems

![Problems](https://i.pinimg.com/originals/15/ef/66/15ef66af07686594ba7638ac7e718618.jpg)

- Thunder hurd problem: a large amount of keys expire at the same time
- Cache Penetration: data empty from cache & DB
- Cache breakdown: hot key expires => a large amount of queries hit DB
- Cache crash

## Read more

- [Redis overview](../../tools/redis_overview.md)
- [Caching Strategies (geeksforgeeks)](https://www.geeksforgeeks.org/caching-strategies-for-api/)