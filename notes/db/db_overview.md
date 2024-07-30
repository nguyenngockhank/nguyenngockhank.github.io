---
tags: ["Overview"]
---

# Database overview

## Overview
![Database alignment chart](https://i.pinimg.com/originals/a0/9b/61/a09b614664e1223a7aa0fe51a1d92ad6.jpg)

### Storage & use cases

![Storage & use cases](https://i.pinimg.com/originals/b9/09/29/b90929e8de0bc16e95e267e95edabdc0.jpg)

### Hierarchical DB use cases 

![Hierarchical Database use cases ](https://i.pinimg.com/736x/e9/da/78/e9da780f1b9943f6878b52a15338ad6a.jpg)

## Terms

![Terms](https://i.pinimg.com/564x/13/3a/cd/133acd07c01498c62e06cde824d3985c.jpg)

## ACID

![ACID](https://i.pinimg.com/736x/12/2d/4b/122d4b796752fc72b34dd5315c948d07.jpg)

ACID is an acronym that stands for four key properties that define a transaction in a database:

- **Atomicity**: All operations within a transaction are treated as a single unit. Either all operations are completed successfully, or none of them are. This ensures that the database remains in a consistent state.   
- **Consistency**: A transaction moves the database from one consistent state to another. This means that the database adheres to all defined integrity constraints and business rules.   
- **Isolation**: Concurrent transactions operate independently without interfering with each other. This prevents data corruption and ensures that each transaction sees a consistent view of the database.   
- **Durability**: Once a transaction is committed, the changes made by the transaction are permanent and will survive system failures.   
In essence, ACID properties guarantee the reliability and integrity of data in a database.

## CAP theorem

The CAP theorem says that a distributed system can deliver on only two of three desired characteristics: consistency, availability and partition tolerance.

![CAP](https://i.pinimg.com/originals/5d/45/a0/5d45a01c6048b0ec7c085f8191932212.jpg)

## Change Data Capture (CDC)

Change Data Capture (CDC) is a process that identifies and tracks modifications made to data within a database. It captures these changes in real-time or near-real-time and delivers them to downstream systems or applications.   

![CDC](https://i.pinimg.com/originals/45/ba/80/45ba800854eb2d2958e0204dba36c03e.png)

1. Data is written to the database normally.
2. Database uses the **transaction log** to record the modifications. 
3. `CDC software` uses the **source connector** to connect to the database and reads the **transaction log**.
4. The **source connector** publishes the log to the **message queue**.
5. `CDC software` uses its **sink connector** to consume the log.
6. The **sink connector** writes the log content to the **destination**.

## DBMS Components

![DBMS Components](https://i.pinimg.com/originals/39/13/c2/3913c2c3600a9ac76b4d3c35d088a328.webp)

- Transport
    - Cluster communication
    - Client communication
- Query processor
    - Query parser
    - Query optimizer
- Execution Engine
    - Remote Execution
    - Local Execution
- Storage Engine
    - Transaction manager
    - Lock manager
    - Access methods
    - Buffer database
    - Recovery manager

