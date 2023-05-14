---
tags: ["Comparison", "NoSQL", "DistributedSystem"]
---

# Consistent hashing

<TagLinks />

Consistent Hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table. It powers many high-traffic dynamic websites and web applications.


## How Does Consistent Hashing Work?

At a high level, consistent hashing performs the following operations:

1. The output of the **hash function** is placed on a **virtual ring structure** (known as the **hash ring**)
2. The **hashed IP addresses of the nodes** are used to assign a position for the nodes on the hash ring
3. The **key of a data object** is hashed using the same hash function to find the position of the key on the hash ring
4. The hash ring is traversed in the clockwise direction starting from the position of the key until a node is found
5. The data object is stored or retrieved from the node that was found

Read more: [Consistent Hashing Algorithm](http://highscalability.com/blog/2023/2/22/consistent-hashing-algorithm.html)

## Consistent Hashing vs Hash Slot

Redis Cluster => Hash Slot 16384 slots

Cassandra Consistent Hashing => fROM -2<sup>63</sup> to 2<sup>63</sup> - 1


Virtual nodes is quite simalar with hash slot.

But virtual nodes is not an original concept of consistent hashing, but more like a trick used by Cassandra based on consistent hashing. So it's also ok for redis to say not using consistent hashing.

So, don't bother with phraseology.

Readmore: 
- [Which one better hashslot or consistent hashing](https://www.reddit.com/r/redis/comments/4yztxi/which_one_is_better_hash_slot_or_consistent/)
- [Does Redis cluster use consistent hashing](https://stackoverflow.com/questions/50246763/does-redis-cluster-use-consistent-hashing)


## Refs

- [Consistent Hashing explain by HusseinNasser](https://www.youtube.com/watch?v=p6wwj0ozifw&ab_channel=HusseinNasser)
- [Consistent hashing explained](https://ably.com/blog/implementing-efficient-consistent-hashing)





