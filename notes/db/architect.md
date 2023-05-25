---
tags: ["Performance", "DistributedSystem", "RDMS"]
---

# Scalable Database Architectures

<TagLinks />

## Replication

2 types of replication: 
- async replication 
- sync replication

.           | Sync replication | Async replication 
------------| ------------------|-------------------
Delay in writes   |    High     |  Low 
Wait for a laggard node |  Casscading failure | No
Data loss   |  No  | Maybe 
Consistency     | Yes   | No


### Replication - Master & Slave

A database architecture divided into a master database and slave databases. The slave database serves as the backup for the master database.
- Master node is used for writing data or reading data if consistency required
- Slave nodes are used for reading data, reduce load from master node.

One major issue of this architecture is **relication lag**. Possible solutions to mitigate this problem:
- **Latency sensitive reads** are sent to the master/primary database.
- **Reads that immediately follow writes** are routed to the master/primary database.
- check if a replica is caught up with the master/primary

### Replication -  Leader & Followers 
- One partition is leader, other are followers. Producer writes to leader, followers copy data from leader.
- If leader fails, a follower is elected to become new leader.

*Notes:
- Another pair name: Primary-Replica / Primary-Secondary
- E.g: [Redis Sentinel](https://redis.io/docs/management/sentinel/), [mongodb Replica Set](https://www.mongodb.com/docs/manual/core/replica-set-architecture-three-members/)

### Replication - Leader-Leader 

The problem with a single leader setup is that when the leader is down, nobody will be available to take writes until a new leader is available. 

In a leader-leader configuration, there will be multiple leader nodes to take writes. 

The system will replicate the data to each leader to keep them up to date. 
 
Each leader can still have follower replication for backup and reads.


The advantage of this approach is the writer will be more available since if one leader goes down, the other leader can take over. Another advantage is that if the leader is closer to a user, the latency will be faster than other leaders.

However, note that the performance will probably worsen because the **new leader might be further away**. 
Also, you have to deal with **replication lag** where the new leader might not have the most updated data. 

- complexity of conflicting data. For example, if users are writing the same key to each of the leaders, while there are multiple ways to resolve the conflict and the solution depends on the application, there is additional complexity the engineers have to worry about. Similarly, if the leader goes down, a new leader has to be selected to take write.


### Leaderless Replication

In a leaderless replication, a write request (also known as quorum write) is committed to some replicas, and if at least w nodes are successful, the main write query is successful. 

A read request (also known as quorum read) reads from some of the nodes, and at least r nodes are successful before the main read query is considered successful. 

For example, take a cluster of 3; if the user configured w to 2, 2 of the nodes need to acknowledge success before the write request is successful. If any one of the nodes is down, the write can continue to operate. The algorithm is true for read query as well as defined by r.

w and r are tunable numbers where the higher the w and r, the greater the probability your read request will read up-to-date data. For now, imagine n is the number of nodes in the cluster. If r = n, you’re guaranteed to find the latest data, whereas if r = 1, you are more likely to randomly hit a node that might not be up to date. Similarly, for w, if you always write the data to all the nodes with w = n, even if r is 1, you’re guaranteed to read the latest value. Since w + r > n has a stronger guarantee for up to date data than w + r <= n.

The advantage of doing leaderless replication is you don’t have to worry about leader selection and election when the leader is down. In addition, the cluster can continue to take writes and reads even when some nodes are down. Thus, the leaderless leads to better availability.

The disadvantage of doing leaderless replication is you have to deal with the complexity of data consistency. Multiple requests can write the same key to multiple nodes, similar to multi-leader replication. As the write gets propagated to different nodes during quorum write, it’s unclear which update should be the winner. In an interview, you should talk about the conflict resolution strategy of your design if you chose leaderless replication.

## Partitioning

::: tip 
Partitioning is a database design technique which is used to improves performance, manageability, simplifies maintenance and reduce the cost of storing large amounts of data.
:::

Để dễ hình dung thì 1 bảng dữ liệu gióng như một chiếc hộp nhiều ngăn. 
- Mỗi partition là một ngăn, mỗi một ngăn sẽ chưa một số lượng bản ghi theo một quy luật nào đó.
- Các cách chia thường theo id của bản ghi, hoặc theo thời gian tạo bản ghi theo ngày tháng


### Vertical Partitioning

::: tip 
Vertical partitioning involves creating tables with fewer columns and using additional tables to store the remaining columns. Normalization also involves this splitting of columns across tables, but vertical partitioning goes beyond that and partitions columns even when already normalized.
:::


### Horizontal partitioning (Sharding)

::: tip 
Horizontal partitioning divides a table into multiple tables. Each table then contains the same number of columns, but fewer rows.
:::


Ví dụ theo tháng chẳng hạn, thì bảng sẽ chia thành 12 partition, dữ liệu của mỗi tháng của các năm sẽ được đấy vào cùng partition, nôm na có thể hiểu truy vẫn dữ liệu trong một tháng tốc độ sẽ tăng lên 12 lần.


```sql
ALTER table testing_user
PARTITION BY HASH( YEAR(created) )
PARTITIONS 10;
```

**criteria**
- Range partitioning
- List partitioning
- Composite partitioning
- Round-robin partitioning
- Hash partitioning


## Serverless DB
// ... TODO


## Clustering

::: tip 
Clustering là một kiến trúc nhằm đảm bảo nâng cao khả năng sẵn sàng cho các hệ thống mạng. Clustering bao gồm nhiều server riêng lẻ được liên kết và hoạt động cùng với nhau trong một hệ thống.
:::

Các server này giao tiếp với nhau để trao đổi thông tin và giao tiếp với mạng bên ngoài để thực hiện các yêu cầu. Khi có lỗi xảy ra các dịch vụ trong cluster hoạt động tương tác với nhau để duy trì tính ổn định và độ sẵn sàng cao cho hệ thống.

- **Cluster** : một hệ thống song song và được phân phối bởi một nhóm các server dành riêng để chạy những ứng dụng đặc biệt nào đó và kết nối với nhau để cung cấp khả năng chịu lỗi (`faul tolerance`) và `load balance`. Cluster dùng để cung cấp tính luôn sẵn sàng cho việc truy cập
- **Node** : Là một server thuộc một Cluster nào đó mà trên đó các ứng dụng và Cluster service được cài đặt
- **Failover** :  Quá trình failover có thể xảy ra một cách tự động. Khi một node trong Cluster bị hỏng, các resource group của nó sẽ được chuyển tới một hay nhiều node trong Cluster mà còn hoạt động được. Quá trình tự động failover tương tự như lập kế hoạch cho việc tái chỉ định quyền sở hữu các resource.


---

## References

- [Các mô hình database nên biết](https://kipalog.kaopiz.com/posts/Cac-mo-hinh-database-nen-biet)
- [Cấu hình Galera server cho MariaDB](https://kipalog.com/posts/Cau-hinh-Galera-server-cho-MariaDB)
- [A Step-by-Step Guide to Create Partitions on MySQL table](http://acmeextension.com/mysql-table-partitioning/)
- [What's the difference between sharding DB tables and partitioning them?](https://www.quora.com/Whats-the-difference-between-sharding-DB-tables-and-partitioning-them)
- [Cluster là gì? Tổng quan về Server Clustering](https://topdev.vn/blog/cluster-la-gi/)
- [Choosing the right database for the job](https://blog.andyet.com/2014/10/01/right-database/)
- [](https://www.citusdata.com/blog/2017/08/09/principles-of-sharding-for-relational-databases/)
- [We do not use foreign keys (2016) (github.com/github)](https://news.ycombinator.com/item?id=21486494#:~:text=Maybe%20originally%2C%20but%20lack%20of,not%20use%20foreign%20keys%20either.)