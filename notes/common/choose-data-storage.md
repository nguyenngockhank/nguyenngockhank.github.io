# Choose a data storage

There is no super storage for all cases. Here is a few of my notes about it:

## MySql
A unique design characteristic of MySQL is the seperation of query processing and other server tasks from storage engine. This seperation of concerns let you to trade of various features without changing your data model

### InnoDB
- The default transactional storage engine for MySQL and the most important/widely used. 
- InnoDB uses **Multiversion Concurrency Control (MVCC)** to archive high concurrency.
- The advantages of MVCC is the increased concurrency. The drawback is the additional storage and maintenance work.

### MyISAM
- This is the original, and oldest. 
- **It doesn't support transaction**. 
- Its design is optimized more for speed and compact data storage.

### The Archive Engine
- Not a transactional storage engine
- simply optimmized for high-speed inserting and compressed storage.
- The best for **Logging** and **Data acquisition** (e.g: crawl data)

### The CSV Engine
- helpful as data interchange format
- tables can be constructed from CSV files automatically
- allow access to the files from other programs

### The memory engine
- formerly called *HEAP* tables stores in memory

## Redis
Here are few use cases when we should use Redis:
- **Session cache**: stores as hashes. Because user sessions generally have a lot of I/O.
- **Application cache**: few data applications store/access frequently or rarely change.
- **Distributed lists**: some things could be *top 100 newest list*, *top 100 hottest list*,... 
- **Keep stats**: works with counters
- **Queues and Pub/Sub**: Redis queues and pub/sub channels can use to exchange massages, enabling features such as background workers.

## Cassandra
Cassandra is a distributed database designed to provide extremely **high levels of availability** and **virtually unlimited scalability**.
- Messaging - many companies use Cassandra for Messaging. More: [Why Discord Moved from MongoDB to Apache Cassandra](https://www.youtube.com/watch?v=86olupkuLlU&ab_channel=HusseinNasser)
- Internet of things
- Social Media Analytics and Recommendation Engine