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

## Cardinality

![Cardinality](https://i.pinimg.com/originals/06/b6/2b/06b62b6acb0010624e641b517cf96efd.jpg)

Cardinality refers to the number of unique values in a column relative to a table's total number of rows. 
-  **High Cardinality** means the column has many unique values.
-  **Low Cardinality** means the column has few unique values.

Creating an index on a column with low Cardinality is most of the time ineffective because:
1. Low Cardinality means each indexed value points to many rows, reducing the index's ability to narrow down the search.
2. Maintaining an index has a cost of storage and update time. For low cardinality columns, this overhead might outweigh the benefits.
3. Database query optimizers are smart; they know column statistics, including Cardinality. When they detect a low cardinality index, they often ignore it and perform a **full table scan** instead.


**When to consider a Low Cardinality column?**

There are scenarios where indexing a low cardinality column might be beneficial.

For example, combining low and high cardinality columns can be effective.

```sql
CREATE INDEX idx_dept_emp ON Employees(Department, ID);
```


## Why isn't a trie index used in databases for string indexing?

Disks or SSDs are read in blocks, and the B+Tree indexes that databases use are optimized according to that structure. The B+Tree minimizes the average number of blocks you have to read to perform a lookup. They also allow you to update the index without changing too many blocks, and maximize the utility of cache.

Tries don't have these advantages. The one advantage they do provide is compressed storage of common prefixes, but for the short strings that are usually used as DB keys, that isn't much of an advantage. Sometimes specialized index structures are built to compress common prefixes, but again they're designed around the block structure of the storage.

[Original Post](https://stackoverflow.com/questions/70472468/why-isnt-a-trie-index-used-in-databases-for-string-indexing)