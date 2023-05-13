---
tags: ["RDMS"]
---

# MySql Snippets

<TagLinks />

## Clone table 

```sql
CREATE TABLE foo SELECT * FROM bar LIMIT 0
```

## Move row from 1 table to another

Archived purpose - an an alternative way to soft delete. Avoid inserting duplication by unique key case.

```sql
INSERT INTO archived_posts 
    SELECT * FROM posts WHERE id = 1;

DELETE FROM posts WHERE id = 1;
```

## Sort by relevant (Fulltext search)

```sql{2,3,5}
SELECT 
    SQL_CALC_FOUND_ROWS product_id, 
    MATCH ( text_data ) AGAINST ( '{$params['keyword']}' IN NATURAL LANGUAGE MODE ) as `score`
FROM {$table_name} 
WHERE MATCH ( text_data ) AGAINST ( '{$params['keyword']}' IN NATURAL LANGUAGE MODE ) > 0
ORDER BY `score` DESC 
```

## Update Batch with specific condition

```sql{3-6}
UPDATE people 
SET name = 
  (CASE id WHEN 1 THEN 'Karl'
           WHEN 2 THEN 'Tom'
           WHEN 3 THEN 'Mary'
   END)
WHERE id IN (1,2,3);
```

*Note*: This feature is not available in Laravel. 
This package will help you [laravel-batch](https://packagist.org/packages/mavinoo/laravel-batch)



## Ordering by specific field value

```sql{3}
SELECT * 
FROM mytable WHERE id IN (1,2,3,4) 
ORDER BY FIELD(id,3,2,1,4); 
```

## Complicated Ordering

```sql{3-19}
select *
from `ac2_graduations` 
order by (
    CASE `is_scheduled`
        WHEN 1 THEN
            CASE `is_offline`
                WHEN 0 THEN 1
                ELSE 2
            END
        ELSE
            CASE `taken_exam`
                WHEN 1 THEN
                    CASE `is_offline`
                        WHEN 0 THEN 3
                        ELSE  4
                    END
                ELSE 10
            END
    END 
) 
```

## View

```sql
CREATE VIEW PostCountPerCategoryView 
AS
SELECT  c.id, c.title, count(1) as count
FROM post p 
JOIN category c ON c.id = p.cat_id 
GROUP BY c.id, c.title
ORDER BY count DESC
```


## Lock rows


### FOR UPDATE

```sql
SELECT * FROM table_name WHERE id=10 FOR UPDATE;
```

- *will not allow other transactions to read, update or delete the row*

### LOCK IN SHARE MODE

```sql
SELECT * FROM table_name WHERE id=10 LOCK IN SHARE MODE
```

- *will allow other transaction to read the locked row*
- *but it will not allow other transaction to update or delete the row*

## Joins

![joins](@/images/sql/joins.jpg)

## Index 

1. Primary key - **no duplication, has not `null`**
```sql
ALTER TABLE tbl_name ADD PRIMARY KEY (column 1, column 2,..)
```

2. Unique  - **no duplication, has `null`**
```sql
ALTER TABLE tbl_name ADD UNIQUE KEY (column 1, column 2,..)
```

3. Index - **has duplication, has `null`**
```sql
ALTER TABLE tbl_name ADD INDEX index_name (column 1, column 2,..)
```

4. Fulltext - **Use for searching document**
```sql
ALTER TABLE tbl_name ADD FULLTEXT index_name (column 1, column 2,..)
```

0. Drop index
```sql
DROP INDEX index_name;
```


## Commands

### Import Sql

:::: tabs
::: tab Mac
```
mysql -u [user] -p [database] < backup-file.sql
```
:::

::: tab Windows
```
mysql -p -u [user] [database] < backup-file.sql
```
:::
::::



## Hot Fix

Error: `Expression #1 of ORDER BY clause is not in SELECT list, references column 'test_wp3.dsm.Order'`

**Solution:**
```
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

Error: `ERROR 1418 (HY000) at line 64: This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)`

**Solution:**
```
SET GLOBAL log_bin_trust_function_creators = 1;
```

---

## String Function Cheatsheets 

![joins](@/images/sql/mysql-string-funcs.png)

## Mysql Cluster
... TODO


## MySQL hay ho 

- [Ứng dụng MySql Binary Log để giải quyết vấn đề tích hợp — P1](https://techtalk.vn/blog/posts/ung-dung-mysql-binary-log-de-giai-quyet-van-de-tich-hop-p1)
- [Giải quyết các vấn đề tích hợp bằng MySql Binlog — P2](https://engineering.tiki.vn/gi%E1%BA%A3i-quy%E1%BA%BFt-c%C3%A1c-v%E1%BA%A5n-%C4%91%E1%BB%81-t%C3%ADch-h%E1%BB%A3p-b%E1%BA%B1ng-mysql-binlog-part-2-77483a572798)
- [Ảnh hưởng to lớn của AUTO_INCREMENT](https://nghethuatcoding.com/2020/05/02/dao-sau-ve-mysql#2-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-to-l%E1%BB%9Bn-c%E1%BB%A7a-auto_increment)


## References 
[Row Level Locking](https://riptutorial.com/mysql/example/24166/row-level-locking)