## Synchronization in distributed system

Issues:
- The more machines => more clocks
- Every machine has a different things (quartz quality, location, ...) => different clock drift => different timme (clock skew)

## Quartz Clock in Computer

- 2 components: counter & register holding
    - counter decrease depends on oscillation of quartz
    - when counter === 0 => send a interrupt signal and reload the value for counter
    - Interrupt signal is called clock tick.
- clock tick is stored in CMOS-RAM
- 00:00:00 UTC, 01 Jan 1970 - first clock tick

## Network Time Protocol

Algorithms: Cristian & Berkeley

Cristian is used for UTC Servers

Berkeley is used for sensor system

## Logic Clock

- Lampart Clock (1978)
- Vector Clock
- Version Vector


## Usage

### Distributed database
- Cassandra, dynamodb, ... 
- ordered write, data versioning between nodes.

### Consistent Global State
- State machine replication
- Garbage collector, deadlock detection, ...
- Global snapshot
- Consistent cuts

### Total-ordered multicast

**Lampart Clock** uses for this use-case, easy to implement, not cost to much storage

Make sure local priority queue on different servers the same.

Example: 
2 transaction on 1 account on 2 servers
- Clerk topup 100 usd
- Increase 1% from saving 


Clock skew 

## References 

[Computer clock vs. quartz watch](https://www.watchuseek.com/threads/computer-clock-vs-quartz-watch.245026/)