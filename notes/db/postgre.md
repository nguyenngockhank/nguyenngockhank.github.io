---
tags: ["RDMS"]
---

# PostgreSql Snippets

<TagLinks />


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

## Change Data Capture (CDC)

### 1. Using Triggers

```sql
CREATE OR REPLACE FUNCTION audit_log() RETURNS TRIGGER AS $
BEGIN
  IF (TG_OP = 'DELETE') THEN
    INSERT INTO audit_table (id, old_data, operation) VALUES (OLD.id, OLD.data, 'DELETE');
  ELSIF (TG_OP = 'UPDATE') THEN
    INSERT INTO audit_table (id, old_data, new_data, operation) VALUES (NEW.id, OLD.data, NEW.data, 'UPDATE');
  ELSIF (TG_OP = 'INSERT') THEN
    INSERT INTO audit_table (id, new_data, operation) VALUES (NEW.id, NEW.data, 'INSERT');
  END IF;
  RETURN NEW;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER audit_trigger
AFTER INSERT OR UPDATE OR DELETE ON my_table
FOR EACH ROW
EXECUTE FUNCTION audit_log();
```

### 2. Using Logical Replication

```sql
-- Enable the pglogical extension
CREATE EXTENSION pglogical;

-- Create a replication set
SELECT pglogical.create_replication_set('my_replication_set', true);

-- Add the table to the replication set
SELECT pglogical.replication_set_add_table('my_replication_set', 'my_table', true);

-- Create a replication node
SELECT pglogical.create_node(
  node_name := 'my_node',
  dsn := 'host=192.168.1.100 dbname=my_database user=my_user password=my_password'
);

-- Create a replication slot
SELECT pglogical.create_replication_slot('my_slot', 'my_node', true);

-- Start the replication worker
SELECT pglogical.start_replication(
  slot_name := 'my_slot',
  create_slot := false,
  replication_sets := ARRAY['my_replication_set']
);
```

In this example, we enable the pglogical extension and create a replication set called `my_replication_set`. We then add the `my_table` table to the replication set and create a replication node called `my_node` that connects to the publisher database. We create a replication slot called my_slot and start the replication worker to capture data changes in real-time.


### 3. Using Change Data Capture (CDC)

Change Data Capture (CDC) is a feature in PostgreSQL that allows you to capture data changes in real-time and store them in a separate table. You can use CDC to capture data changes without affecting the performance of the database.

1. Enable the `wal_level` parameter in the `postgresql.conf` file. This parameter determines the amount of information written to the Write-Ahead Log (WAL). Set it to `logical` to enable logical decoding, which is required for CDC.

```
wal_level = logical
```

2. Restart the Postgres server to apply the changes made to the `postgresql.conf` file.


3. Create a replication slot using the `pg_create_logical_replication_slot` function. This function creates a replication slot that can be used to capture changes.

```sql
SELECT pg_create_logical_replication_slot('cdc_slot', 'wal2json');
```
In the above example, we create a replication slot named `cdc_slot` using the `wal2json` output plugin. The `wal2json` plugin converts the Write-Ahead Log (WAL) into a JSON format, making it easier to consume the changes.


4. Create a publication to define the tables and columns you want to capture changes for. A publication is a named collection of tables and columns that are tracked for changes.

```sql
CREATE PUBLICATION cdc_publication FOR TABLE table1, table2;
```

In the above example, we create a publication named `cdc_publication` for `table1` and `table2`. Any changes made to these tables will be captured by CDC.

5. Create a subscription to consume the changes captured by CDC. A subscription defines the connection details and the publication to subscribe to.

```sql
CREATE SUBSCRIPTION cdc_subscription CONNECTION 'host=127.0.0.1 port=5432 dbname=mydb user=myuser password=mypassword' PUBLICATION cdc_publication;
```

In the above example, we create a subscription named `cdc_subscription` that connects to the database `mydb` using the provided connection details. It subscribes to the `cdc_publication` publication.

Once you have completed these steps, CDC will be set up in your Postgres database. Any changes made to the tables included in the publication will be captured and made available for consumption through the subscription.

You can query the changes using the `pg_logical_slot_get_changes` function or any other method supported by the output plugin you have chosen.

Remember to monitor the size of the replication slot and the disk space used by the changes captured by CDC to ensure it does not grow excessively.


#### Example 2

In this example, we create a publication called `my_publication` for the `my_table` table on the publisher database. We then create a subscription called `my_subscription` on the subscriber database that connects to the publisher database and subscribes to the `my_publication` publication.

```sql
-- On the publisher database
CREATE PUBLICATION my_publication FOR TABLE my_table;

-- On the subscriber database
CREATE SUBSCRIPTION my_subscription
CONNECTION 'host=192.168.1.100 dbname=my_database user=my_user password=my_password'
PUBLICATION my_publication;
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

## 2PC 

use this feature with one coordinator and two nodes
- The step with [C] means operation on the coordinator node, 
- and with [P] means operation on foreign servers (participant nodes).

### Configuration

1. [C] Set GUC parameter max_foreign_prepared_transactions

```
$ $EDITOR postgresql.conf
max_connections = 100
max_prepared_foreign_transactions = 200 # max_connections = 100 and two foreign servers
max_foreign_transaction_resolvers = 1
foreign_twophase_commit = required
foreign_transaction_resolution_interval = 5s
froeign_transaction_resolver_timeout = 60s
```

2. [P] Set GUC parameter max_prepared_transactions

```
$ $EDITOR postgresql.conf
max_prepared_transactions = 100 # same as max_connections of the coordinator server
log_statement = all # for testing
log_line_prefix = '<F1> ' # for fs2 server we can set '<F2> '
```

3. [C] Create postgres_fdw extension

4. [C] Create foreign servers with two_phase_commit parameter = on

```
=# CREATE SERVER fs1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'fs1', dbname 'postgres', port '5432');
CREATE SERVER

=# CREATE SERVER fs2 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'fs2', dbname 'postgres', port '5342');
CREATE SERVER

=# SELECT * FROM pg_foreign_server;
 oid  | srvname | srvowner | srvfdw | srvtype | srvversion | srvacl |              srvoptions
-------+---------+----------+--------+---------+------------+--------+--------------------------------------
16451 | fs1     |       10 |  16387 |         |            |        | {host=fs1,dbname=postgres,port=5432}
16452 | fs2     |       10 |  16387 |         |            |        | {host=fs2,dbname=postgres,port=5432}
```

5. [C] Create user mapping

```
=# CREATE USER MAPPING FOR PUBLIC SERVER fs1;
CREATE USER MAPPING

=# CREATE USER MAPPING FOR PUBLIC SERVER fs2;
CREATE USER MAPPING
```

### Example

```
=# BEIGN;
=# INSERT INTO ft1 VALUES (1);
=# INSERT INTO ft2 VALUES (1);
=# COMMIT;
```


We will see the following server logs on fs1 server and fs2 server.

```
<FS1> LOG:  statement: START TRANSACTION ISOLATION LEVEL REPEATABLE READ
<FS1> LOG:  execute pgsql_fdw_prep_1: INSERT INTO public.s1(col) VALUES ($1)
<FS1> DETAIL:  parameters: $1 = '1'
<FS1> LOG:  statement: DEALLOCATE pgsql_fdw_prep_1

<FS2> LOG:  statement: START TRANSACTION ISOLATION LEVEL REPEATABLE READ
<FS2> LOG:  execute pgsql_fdw_prep_2: INSERT INTO public.s2(col) VALUES ($1)
<FS2> DETAIL:  parameters: $1 = '1'
<FS2> LOG:  statement: DEALLOCATE pgsql_fdw_prep_2

<FS1> LOG:  statement: PREPARE TRANSACTION 'fx_68464475_515_16400_10'
<FS2> LOG:  statement: PREPARE TRANSACTION 'fx_658736079_515_16410_10'
<FS1> LOG:  statement: COMMIT PREPARED 'fx_68464475_515_16400_10'
<FS2> LOG:  statement: COMMIT PREPARED 'fx_658736079_515_16410_10'
```

::: warning PREPARE TRANSACTION
PREPARE TRANSACTION is not intended for use in applications or interactive sessions. Its purpose is to allow an external transaction manager to perform atomic global transactions across multiple databases or other transactional resources. Unless you're writing a transaction manager, you probably shouldn't be using PREPARE TRANSACTION.
:::

https://wiki.postgresql.org/wiki/Atomic_Commit_of_Distributed_Transactions

## References 

- [PostgreSQL Tutorial](https://www.tutorialspoint.com/postgresql/index.htm)
- [PostgreSQL JSON](https://www.postgresqltutorial.com/postgresql-json/)
- [Table Partitioning](https://www.postgresql.org/docs/10/ddl-partitioning.html)
- [Postgres Table Partitioning](https://www.enterprisedb.com/blog/postgres-table-partitioning)
- [PostgreSQL CREATE TABLESPACE](https://www.postgresqltutorial.com/postgresql-create-tablespace/#:~:text=A%20tablespace%20is%20a%20location,pg_default%20tablespace%20stores%20user%20data.)