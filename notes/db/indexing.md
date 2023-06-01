# Indexing

You can use indexes to locate a piece of data quickly instead of searching for every single row. There are various data structures for indexes

Abstractly, an index is just a sorted table that allows the search to be O(Log N) using binary searching with a sorted data structure. 

Internally, an index can be implemented using B-Tree or LSM, which uses Sorted Strings Table (SST). Since an index table is a sorted table with O(Log N) search, the performance will still degrade once the number of records (N) increases.

However, index lookup with O(Log N) is still significantly faster than a full table scan O(N).

::: tip 
Database indexes are not hashmaps. Hashmap is an in-memory data structure. You may implement an in-memory solution on top of the database, but the index stored on disk isn’t a hashmap. 
:::

LSM = Log-structured merge-tree
B-Tree = Binary Tre


## Why isn't a trie index used in databases for string indexing?

Disks or SSDs are read in blocks, and the B+Tree indexes that databases use are optimized according to that structure. The B+Tree minimizes the average number of blocks you have to read to perform a lookup. They also allow you to update the index without changing too many blocks, and maximize the utility of cache.

Tries don't have these advantages. The one advantage they do provide is compressed storage of common prefixes, but for the short strings that are usually used as DB keys, that isn't much of an advantage. Sometimes specialized index structures are built to compress common prefixes, but again they're designed around the block structure of the storage.

[Original Post](https://stackoverflow.com/questions/70472468/why-isnt-a-trie-index-used-in-databases-for-string-indexing)