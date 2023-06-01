---
tags: ["Performance"]
---

# Optimize Performance at Backend

<TagLinks />

## Reducing the time response, cope to load
- increase the resource
    - vertial scaling
    - horizotal scaling
        - store user data at global storage
            - session data
            - uploading files
- partially, put the long-processing task in to the queue
    - re-design / re-architect
    - message queues & events
    - graceful service

## Increase concurrency
- Optimize code performance
- Scale-out
    - Cloning to multiple processes (X-Axis) (Stateless pattern)
    - Splitting by functions (Y-Axis) (Domain Driven pattern)
    - Data partitioning (Z-Axis) (Sharding)

### Race condtion 
Solutions:
- Distributed locks
- Data sharding
- Use a queue - multiple consumers (balancing)

## Materialized View - CQRS 
- Caching layer
- turning database inside-out / building the materialized view
- Read model have a high-speed for reading 


##  Optimization Database
- scalable architecture
    - master - replica
    - partioning data: horizontal & vertial 
- optimize the query
    - ORM usage : lazy vs eager
- indexing database
- use cursor instead of loop
- transaction lock rows
    - pessimistic locking
    - optimistic locking
- views


::: warning
CAP Theorem: Tradeoff between Availability vs Consistency
:::

## Concurrent optimization
... 

## Tools
- Timers
- Code analyzers (IDE, DB Profiling)
- Debugger
- Logging
- Efficient Code (runtime, memmory alloc)

## Comparision

- [goroutines vs worker threads P1](https://medium.com/@Cazineer/go-goroutines-vs-node-cluster-worker-threads-part-1-26933b44f5ee)
- [goroutines vs worker threads P1](https://medium.com/@Cazineer/go-goroutines-vs-node-cluster-worker-threads-part-2-52611217340a)

## More
- [Nodejs Performance](https://devtut.github.io/nodejs/node-js-performance.html#increase-maxsockets)
