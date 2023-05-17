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