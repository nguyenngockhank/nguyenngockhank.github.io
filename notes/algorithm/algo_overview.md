# Algorithm overview

## Essential Algos

![Essential Algos](https://i.pinimg.com/736x/57/b6/0a/57b60a8d0975585455c2304a0018f812.jpg)


### Validation 

![Validation](https://i.pinimg.com/564x/12/c2/7b/12c27b7fb4c7a886718dd6d67587d13f.jpg)

### Load balancing algos

![Load balancing algos](https://i.pinimg.com/564x/32/08/5e/32085e17f4315262381f6f620e6deecd.jpg)

### Retry 

![Retry patterns](https://i.pinimg.com/originals/d1/ca/0c/d1ca0c625b789c2f9f2834d83adf8f54.gif)

### Generate Ids

![Generate Ids](https://i.pinimg.com/564x/3d/59/a6/3d59a68c59c98ada1128c88e9efebaf9.jpg)

## Data structure 

![Data structure cheatsheet](https://i.pinimg.com/564x/e1/ed/b9/e1edb99e16875b42f26b6aa2e017d799.jpg)

### Unordered data structures 

![key-value and connected elements](https://pbs.twimg.com/media/F1AXBhOWwAE1896?format=jpg&name=4096x4096)

useful for storing and retrieving information that doesn't follow a specific order. 
For speed, they utilize key-value pairs or relationships between elements.


### Hierarchical data structures

![tree-like](https://pbs.twimg.com/media/F1AXA8sX0AAbp2P?format=jpg&name=4096x4096)

Hierarchical data structures represent data in a tree-like shape. 

They are great for organizing and managing data with ordered parent-child relationships to quickly search, access, and insert elements quickly.

### Linear data structures

![array](https://pbs.twimg.com/media/F1AXAbAWwAERvCm?format=jpg&name=4096x4096)

Linear data structures are used to arrange items sequentially and in a specific order. They can be traversed in a linear fashion, which makes them ideal for organizing and manipulating data when access, insertion, or removal must take place in a specific sequence or place.


### Skiplist
[Wiki read more](https://en.wikipedia.org/wiki/Skip_list)
- a common in-memory index type
- to build the `Sorted Set`
- allows for fast lookups, range queries, and other operations
- DB used: Redis

https://www.geeksforgeeks.org/skip-list/

https://www.npmjs.com/package/ts-skiplist

### Bloom filter

A Bloom filter is a **space-efficient probabilistic** data structure that is used to test whether an element is a member of a set.

<!-- ![bloom](./bloom-1.png) -->

Use case: 
- avoid attack miss cache attack 

Refs
- Node Package [bloom-filters](https://www.npmjs.com/package/bloom-filters)
- [Bloom filters Introduction](https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/?ref=gcse)


## System design interview

![System design interview](https://i.pinimg.com/564x/8a/42/13/8a42135c1a113a7890cbae34301fc061.jpg)
