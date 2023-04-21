# Optimize Performance at Backend


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


