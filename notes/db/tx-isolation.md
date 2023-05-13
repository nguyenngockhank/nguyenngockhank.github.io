---
tags: ["RDMS"]
---

# Transaction Isolation Levels

Isolation Level   | Dirty reads | Non-repeatable reads | Phantoms    | Read                             | Write 
----------------- | ----------- | -------------------- | --------    | -------------------------------- | --------
Serializable      | Impossible  | Impossible           | Impossible  | Shared Lock                      | Exclusive Lock
Repeatable Read   | Impossible  | Impossible           | Probaly     | MVCC (data at begin of tx)       | Exclusive Lock
Read Committed    | Impossible  | Probaly              | Probaly     | MVCC (latest committed data tx)  | Exclusive Lock
Read Uncommitted  | Probaly     | Probaly              | Probaly     | No Lock                          | Exclusive Lock

**Dirty reads** occur when:
1. Transaction A inserts a row into a table.
2. Transaction B reads the new row.
3. Transaction A rolls back.

**Nonrepeatable** reads occur when:
1. Transaction A reads a row.
2. Transaction B changes the row.
3. Transaction A reads the same row a second time and gets the new results.

**Phantom** reads occur when:
1. Transaction A reads all rows that satisfy a WHERE clause on an SQL query.
2. Transaction B inserts an additional row that satisfies the WHERE clause.
3. Transaction A re-evaluates the WHERE condition and picks up the additional row.

## Explicit / Exclusive Locking 
- Table-Level Locks
- Row-Level Locks
- Page-Level Locks
- Advisory Locks



## Refs
- [Transaction isolation levels](https://www.ibm.com/docs/en/i/7.3?topic=transactions-transaction-isolation-levels)
- [MySQL Transaction Isolation Levels](https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html)
- [Postgres Transaction Isolation Levels](https://www.postgresql.org/docs/current/transaction-iso.html)
- [Postgres Concurrency Control](https://www.postgresql.org/docs/current/mvcc.html)
- [Postgres Explicit Locking](https://www.postgresql.org/docs/current/explicit-locking.html)