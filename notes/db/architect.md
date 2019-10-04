# Scalable Database Architectures

[[toc]]

## Replication

Hiểu nôm na thì đây là kiến trúc nhân bản. 

::: tip
- Chúng ta có 1 server Master và 1 hoặc nhiều server Slave
    - Master dùng chủ yếu để ghi dữ liệu (có thể dùng để đọc trong trường hợp cần thiết)
    - Slave dùng để dọc dữ liệu và ko thể ghi dữ liệu.
:::


Vấn đề lớn nhất của phương pháp này là khi ứng dung được cấu hình ghi trên master , đọc trên slave. Nhưng sau khi dư liệu trên master thì mất một khoảng thời gian nhất định gọi là lag dư liệu mới được đồng bộ lên slave.

Ví dụ khi mua hàng, chúng ta mua thì số lượng sản phẩm phải bị giảm đi, Nhưng câu lệnh giảm số lượng sản phẩm đã thưc hiện xong thì trên slave vẫn chưa được cập nhật nên có thể dẫn đến sai logic. Trong trường hợp này chúng ta phải thực hiện dọc trực tiếp trên master thay vì đọc trên slave.


## Partitioning

::: tip 
Partitioning is a database design technique which is used to improves performance, manageability, simplifies maintenance and reduce the cost of storing large amounts of data.
:::

Để dễ hình dung thì 1 bảng dữ liệu gióng như một chiếc hộp nhiều ngăn. 
- Mỗi partition là một ngăn, mỗi một ngăn sẽ chưa một số lượng bản ghi theo một quy luật nào đó.
- Các cách chia thường theo id của bản ghi, hoặc theo thời gian tạo bản ghi theo ngày tháng

### Horizontal partitioning

::: tip 
Horizontal partitioning divides a table into multiple tables. Each table then contains the same number of columns, but fewer rows.
:::



Ví dụ theo tháng chẳng hạn, thì bảng sẽ chia thành 12 partition, dữ liệu của mỗi tháng của các năm sẽ được đấy vào cùng partition, nôm na có thể hiểu truy vẫn dữ liệu trong một tháng tốc độ sẽ tăng lên 12 lần.


```sql
ALTER table testing_user
PARTITION BY HASH( YEAR(created) )
PARTITIONS 10;
```

### Vertical Partitioning

::: tip 
Vertical partitioning involves creating tables with fewer columns and using additional tables to store the remaining columns. Normalization also involves this splitting of columns across tables, but vertical partitioning goes beyond that and partitions columns even when already normalized.
:::


## Partitioning criteria

- Range partitioning
- List partitioning
- Composite partitioning
- Round-robin partitioning
- Hash partitioning

## Sharding

::: tip
Partitioning is more a generic term for dividing data across tables or databases. 
Sharding is one specific type of partitioning, namely horizontal partitioning.
:::

Thường dùng trong ứng dụng dữ liệu người dùng ko liên quan đến dữ liệu cảu người dùng khác. Hoặc nhóm người dùng, các user trong một công ty sẽ lưu vào một sharding node chẳng hạn

---

## Cluster


## Maria Galera Cluster

::: tip
một công cụ tạo ra nhiều bản sao giống hệt nhau trên nhiều máy chủ khác nhau, phục vụ cho mục đích backup dữ liệu
:::

---

## References

- [Các mô hình database nên biết](https://kipalog.kaopiz.com/posts/Cac-mo-hinh-database-nen-biet)
- [Cấu hình Galera server cho MariaDB](https://kipalog.com/posts/Cau-hinh-Galera-server-cho-MariaDB)
- [A Step-by-Step Guide to Create Partitions on MySQL table](http://acmeextension.com/mysql-table-partitioning/)
- [What's the difference between sharding DB tables and partitioning them?](https://www.quora.com/Whats-the-difference-between-sharding-DB-tables-and-partitioning-them)