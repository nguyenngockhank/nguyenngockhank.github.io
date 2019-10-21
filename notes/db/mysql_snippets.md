# MySql Snippets

[[toc]]

## Clone table 

```sql
CREATE TABLE foo SELECT * FROM bar LIMIT 0
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

## MySQL binlog

1 thứ hay ho 

[Ứng dụng MySql Binary Log để giải quyết vấn đề tích hợp — P1](https://techtalk.vn/blog/posts/ung-dung-mysql-binary-log-de-giai-quyet-van-de-tich-hop-p1)
[Giải quyết các vấn đề tích hợp bằng MySql Binlog — P2](https://engineering.tiki.vn/gi%E1%BA%A3i-quy%E1%BA%BFt-c%C3%A1c-v%E1%BA%A5n-%C4%91%E1%BB%81-t%C3%ADch-h%E1%BB%A3p-b%E1%BA%B1ng-mysql-binlog-part-2-77483a572798)

## References 
[Row Level Locking](https://riptutorial.com/mysql/example/24166/row-level-locking)