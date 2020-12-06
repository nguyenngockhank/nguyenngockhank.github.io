# Apache Cassandra

Cassandra là `NoSQL`, được phát triển bởi Facebook vào năm 2007. Sau đó nó được tặng cho quỹ Apache vào 2/2010 và nâng cấp lên thành dự án hàng đầu của Apache.

Thông thường database trong NoSQL thì không cần thiết phải tạo schema ngay lúc đầu. Thế nhưng Cassandra thì lại khác. **Trước khi insert dữ liệu thì cần phải tạo keyspace và schema của table.**

Có thể thực hiện được 1 số câu query như select, update, insert, delete, drop.

- Dữ liệu được phân tán trên nhiều node khác nhau.
- Node càng nhiều thì throughput của nó càng tăng.
- Write throughput luôn luôn cao hơn read throughput.
- Tính chịu lỗi khá cao, cho dù node bị chết đi chăng nữa thì khi truy vấn sẽ được chuyển hướng đến node khác.
- Backup, restore dữ liệu 1 cách đơn giản.
- Tốc độ truy vấn cao

##  Keys

- Each table requires a unique **primary key**. 
- The first field listed is the **partition key**, since its hashed value is used to determine the node to store the data. 
- If those fields are wrapped in parentheses then the partition key is **composite**. Otherwise the first field is the partition key. 
- Any fields listed after the partition key are called **clustering columns**. These store data in ascending or descending order within the partition for the fast retrieval of similar values. 
- All the fields together are the **primary key**.

All data has the same partison key will be store at the same node

We should only access data using the partison key

*Every node has 256 virtual nodes in default*


## CQL

Tables should reflect the queries we are trying to make



### Keyspace

:::: tabs

::: tab Create
```sql
CREATE KEYSPACE test_keyspace 
WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '3'} 
    AND durable_writes = 'true';
```

```
USE test_keyspace;
```
:::

::: tab Describe
```sql
DESCRIBE KEYSPACES
```
:::

::: tab Drop
```sql
DROP KEYSPACE test_keyspace;
```
:::

::::


### Table

:::: tabs

::: tab Create
```sql
CREATE TABLE employee_by_id ( 
    id int,
    name text,
    position text,
    PRIMARY KEY(id)
);
```
:::


::: tab Alter
```sql
ALTER TABLE employee_by_id
ADD phone set<text>;
```
:::

::: tab Describe
```sql
DESCRIBE TABLES
```

```sql
DESCRIBE TABLE employee_by_id
```
:::

::::

### Selection

Write time
```sql
SELECT car_make, car_model, writetime(car_model)
FROM employee_by_car_make;
```

Allow filtering

```sql
SELECT * FROM employee_by_id
WHERE name = 'John' ALLOW FILTERING;
```

### Update

Time to live (60seconds), value will be `null` after the given time.

**Use case**: token / coupon is only valid in 24hours

```sql
UPDATE employee_by_car_make 
USING TTL 60 
SET car_model='TRUCK'
WHERE car_make'BMW' AND id='2';
```

### Collections

```sql
UPDATE employee_by_id
SET phone = {'123', '321'}
WHERE id = 1
```

Append
```sql
UPDATE employee_by_id
SET phone = phone + {'555', '444'}
WHERE id = 1
```

Remove 
```sql
UPDATE employee_by_id
SET phone = phone - {'555'}
WHERE id = 1
```

### UUID

:::: tabs

::: tab UUID

```sql
CREATE TABLE employee_by_uuid ( 
    id uuid PRIMARY KEY,
    first_name text,
    last_name text
); 
```

```sql
INSERT INTO TABLE employee_by_uuid ( id, first_name, last_name) 
VALUES (uuid(), 'tom', 'jerry');
```
:::

::: tab TimeUUID
```sql
CREATE TABLE employee_by_uuid ( 
    id timeuuid PRIMARY KEY,
    first_name text,
    last_name text
); 
```

```sql
INSERT INTO TABLE employee_by_uuid ( id, first_name, last_name) 
VALUES (now(), 'tom', 'jerry');
```
:::

::::



## Refs

- [Distributed Database Things to Know: Cassandra Datacenter & Racks](https://www.datastax.com/blog/distributed-database-things-know-cassandra-datacenter-racks)
