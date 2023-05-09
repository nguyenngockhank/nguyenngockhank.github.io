# Consistent hashing


Consistent hashing can be described as follows:
- It represents the resource requestors and the server nodes in a virtual ring structure known as a hashring.
- 


## Consistent Hashing vs Hash Slot

Redis Cluster => Hash Slot 16384 slots

Cassandra Consistent Hashing => fROM -2<sup>63</sup> to 2<sup>63</sup> - 1


Virtual nodes is quite simalar with hash slot.

But virtual nodes is not an original concept of consistent hashing, but more like a trick used by Cassandra based on consistent hashing. So it's also ok for redis to say not using consistent hashing.

So, don't bother with phraseology.


https://www.reddit.com/r/redis/comments/4yztxi/which_one_is_better_hash_slot_or_consistent/


https://stackoverflow.com/questions/50246763/does-redis-cluster-use-consistent-hashing


## REfs


https://www.youtube.com/watch?v=p6wwj0ozifw&ab_channel=HusseinNasser

https://ably.com/blog/implementing-efficient-consistent-hashing


