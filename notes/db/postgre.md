---
tags: ["RDMS"]
---

# PostgreSql Snippets

<TagLinks />


## 


[Postgres Architecture Explained](https://www.youtube.com/watch?v=Q56kljmIN14)

## Data Type 

### Array Type

:::: tabs
::: tab Create
```sql
CREATE TABLE monthly_savings (
   name text,
   saving_per_quarter integer ARRAY[4],
   scheme text[][]
);
```
:::

::: tab Inserting
```sql
INSERT INTO monthly_savings 
VALUES (
    'Manisha', 
    '{20000, 14600, 23500, 13250}', 
    '{ {“FD”, “MF”}, {“FD”, “Property”} }'
); 
```
:::

::: tab Modifying
```sql
UPDATE monthly_savings 
SET saving_per_quarter = '{25000,25000,27000,27000}'
WHERE name = 'Manisha';
```
:::

::: tab Querying
```sql
SELECT * FROM monthly_savings 
WHERE saving_per_quarter[1] = 10000 OR
    saving_per_quarter[2] = 10000 OR
    saving_per_quarter[3] = 10000 OR
    saving_per_quarter[4] = 10000;
```
:::
::::

### JSON Type

:::: tabs
::: tab Create
```sql
CREATE TABLE orders (
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);
```
:::

::: tab Inserting
```sql
INSERT INTO orders (info)
VALUES('{ "customer": "Lily Bush", "items": {"product": "Diaper","qty": 24}}'),
      ('{ "customer": "Josh William", "items": {"product": "Toy Car","qty": 1}}'),
      ('{ "customer": "Mary Clark", "items": {"product": "Toy Train","qty": 2}}');
```
:::

::: tab Querying

- The operator `->` returns JSON object field by `key`.
- The operator `->>` returns JSON object field by `text`.

```sql
SELECT info -> 'items' ->> 'product' as product
FROM orders
ORDER BY product;
```

**JSON functions**
- json_each
- json_object_keys
- json_typeof . It can be `number`, `boolean`, `null`, `object`, `array`, and `string`.
:::
::::

### Composite Type

:::: tabs
::: tab Create
```sql
CREATE TYPE inventory_item AS (
   name text,
   supplier_id integer,
   price numeric
);
```

```sql
CREATE TABLE on_hand (
   item inventory_item,
   count integer
);
```
:::

::: tab Inserting
```sql
INSERT INTO on_hand 
VALUES (ROW('fuzzy dice', 42, 1.99), 1000);
```
:::

::: tab Querying
```sql
SELECT (item).name 
FROM on_hand 
WHERE (item).price > 9.99;
```
:::
::::

## Recursive CTE

```
WITH RECURSIVE cte_name AS (
    CTE_query_definition -- non-recursive term
    UNION [ALL]
    CTE_query definion  -- recursive term
) SELECT * FROM cte_name;
```


```sql
WITH RECURSIVE subordinates AS (
	SELECT employee_id, manager_id, full_name
        FROM employees
        WHERE employee_id = 2
	UNION
    SELECT e.employee_id, e.manager_id, e.full_name
        FROM employees e 
        INNER JOIN subordinates s ON s.employee_id = e.manager_id
) SELECT * FROM subordinates;
```

## Materialized View

- [postgresqltutorial](https://www.postgresqltutorial.com/postgresql-materialized-views/)
- [Materialized Views](https://www.postgresql.org/docs/9.3/rules-materializedviews.html)

**Create** 
```sql
CREATE MATERIALIZED VIEW "UserDashboard" 
AS
   SELECT count(1) AS count , u."isAdmin"
   FROM "User" u
   GROUP BY "isAdmin" 
WITH DATA 
```

**Refresh** 
```sql
REFRESH MATERIALIZED VIEW "UserDashboard";
-- allow querying when refreshing data
REFRESH MATERIALIZED VIEW CONCURRENTLY "UserDashboard"; 
```

**Drop**
```sql
DROP MATERIALIZED VIEW view_name;
```

## Delete duplicated rows

```sql
DELETE FROM
   basket a
        USING basket b
WHERE
   a.id < b.id
    AND a.fruit = b.fruit;
```

## Table Partitioning

Postgres provides three built-in partitioning methods:

- **Range Partitioning**: Partition a table by a *range of values*. This is commonly used with date fields, e.g., a table containing sales data that is divided into monthly partitions according to the sale date.
- **List Partitioning**: Partition a table by a *list of known values*. This is typically used when the partition key is a categorical value, e.g., a global sales table divided into regional partitions. The partition key in this case can be the country or city code, and each partition will define the list of codes that map to it.
- **Hash Partitioning**: Partition a table using a *hash function* on the partition key. This is especially useful when there is no obvious way of dividing data into logically similar groups and is often used on categorical partitioning keys that are accessed individually. E.g., if a sales table is often accessed by product, the table might benefit from a hash partition on the product SKU.


```sql
CREATE TABLE sale (
   sale_date       date not null,
   country_code    text,
   product_sku     text,
   units           integer
) PARTITION BY RANGE (sale_date);


CREATE TABLE sale_201901 PARTITION OF sale
   FOR VALUES FROM ('2019-01-01') TO ('2019-02-01');

CREATE TABLE sale_201902 PARTITION OF sale
   FOR VALUES FROM ('2019-02-01') TO ('2019-03-01');
```

## Unlogged Table

Disable [WAL (Write-Ahead Log)](https://www.postgresql.org/docs/9.6/wal.html).

Cases to use: 
- large data sets (e.g. computation) which will be only used few times
- dynamic data with expiration date e.g. user sessions
- volatile data which can be easily regenerated

```sql
CREATE TABLE daily_summary(...) UNLOGGED;

ALTER TABLE daily_summary SET UNLOGGED;
```

List all unlogged tables 

```sql
SELECT relname FROM pg_class WHERE relpersistence = 'u';
```

## Managing Disk-Spaces
- Hot Data
- Warm Data
- Cold Data

```sql
CREATE TABLESPACE hot_data LOCATION /disk0/ssd/
CREATE TABLESPACE warm_data LOCATION /disk0/sata2/
```

```sql
CREATE DATABASE logistics 
TABLESPACE ts_primary;
```

## References 

- [PostgreSQL Tutorial](https://www.tutorialspoint.com/postgresql/index.htm)
- [PostgreSQL JSON](https://www.postgresqltutorial.com/postgresql-json/)
- [Table Partitioning](https://www.postgresql.org/docs/10/ddl-partitioning.html)
- [Postgres Table Partitioning](https://www.enterprisedb.com/blog/postgres-table-partitioning)
- [PostgreSQL CREATE TABLESPACE](https://www.postgresqltutorial.com/postgresql-create-tablespace/#:~:text=A%20tablespace%20is%20a%20location,pg_default%20tablespace%20stores%20user%20data.)