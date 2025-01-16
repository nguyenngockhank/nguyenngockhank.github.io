---
tags: ["Overview"]
---

# System design overview

## Concerns

![Concerns](https://i.pinimg.com/originals/1c/0b/c7/1c0bc77eb2eb6b26e3b107800c777d80.jpg)

## Core concepts

![Core concepts](https://i.pinimg.com/originals/72/ed/e0/72ede0c5ca3edb1e87d7ac2196d28ac7.jpg)

### Cheatsheet

![Cheatsheet](https://i.pinimg.com/originals/2e/f1/e2/2ef1e2df2a9d233cc8263ecd626f1ecf.jpg)

## Trade-offs

![10 Trade-offs](https://i.pinimg.com/originals/ba/c2/d8/bac2d80dec0ee6dfa51f4da87563bc09.jpg)

![Trade-offs](https://i.pinimg.com/originals/d6/1b/ab/d61bab5a9e06681e042d546ee3ab6d97.jpg)


## Common problems

![System design Common problems](https://i.pinimg.com/originals/ac/1d/bf/ac1dbf0e2e4e2ae5da49b66ccc464827.jpg)

- Read heavy system
- Write high traffic
- Single point of failure
- High Availability
- High Latency
- Handle large files
- Monitoring & Alerting
- Slow database queries

## Availability

![High Availability](https://i.pinimg.com/originals/45/fa/a4/45faa4e8462022687dde510818f6ce7d.jpg)

## Scalability 

[👉👉👉 READ MORE](./scalability.md)

![Crash course Architectual scalability](https://i.pinimg.com/736x/ca/b6/91/cab6918414f243eb10beff0b85894991.jpg)

[👉👉👉 READ MORE](./scalability.md)

## Microservices 

[😎 Detail here](../architect/microservices.md)

![Best practices](https://i.pinimg.com/564x/7f/be/40/7fbe40c1758dd162e13501145d82bb6b.jpg)

![Top patterns](https://i.pinimg.com/736x/2e/ab/fd/2eabfd161aa129b8f2a3ceb6afe85693.jpg)

![Most-used distributed system patterns](https://i.pinimg.com/originals/cb/d0/97/cbd0976edbc9f7d5dd084741adf310cc.jpg)


<!-- ![Services Communication 2](https://i.pinimg.com/originals/c0/07/8d/c0078d1ad4fe40de11b7afa500809b13.jpg) -->

## REST API Design

![api design](https://i.pinimg.com/originals/ec/8d/10/ec8d10a1da9f5fc5c3d2a65c7b0a5ce4.png)

### Tips for API Design

![Tips 4 design](https://i.pinimg.com/736x/19/2e/ef/192eeff1ebd8ae69da841d01bb538b14.jpg)

### Examples

![Examples](https://i.pinimg.com/originals/97/36/dc/9736dcbd39c67fb01945c7c6ede7c2df.jpg)

## [Resiliency & Fault Tolerance](./fault-tolerance.md)

![Fault Tolerance Cheatsheet](https://i.pinimg.com/originals/13/94/1f/13941f1dec6fcd28cd7f5a2ecab88e67.jpg)

## EDA

### EDA Architecture

![EDA Architecture](https://i.pinimg.com/originals/83/0b/7a/830b7aeac45dbf81108e7d56b26bc130.jpg)


## Disaster recovery 

![Disaster recoverys](https://i.pinimg.com/originals/a4/98/b5/a498b583fe6c43f999c14f14009a37b3.png)

![Disaster recovery strategies](https://i.pinimg.com/originals/0a/3d/78/0a3d78effd581a1f9a12d9ca50d999cf.jpg)

## Idempotency

![Idempotency](https://i.pinimg.com/736x/66/e4/f8/66e4f81e0acdfe9b0bbc1795b25cad85.jpg)

## Theorem

### CAP Theorem

The CAP Theorem, also known as **Brewer's Theorem**, is a fundamental principle in distributed computing that states:

> In a distributed system, it is impossible to simultaneously achieve Consistency, Availability, and Partition Tolerance.

### PACELC Theorem

The PACELC theorem expands on the CAP theorem and states: 

> In distributed computer systems, you have to make tradeoffs between consistency and availability in the presence of network partitions, and between consistency and latency in the absence of network partitions.

Feature | CAP Theorem	| PACELC Theorem
------ | --------------- | ----------
Focus	|  Network partitions | 	Both partitions and non-partitioned scenarios
Guarantees	|  Consistency, Availability, Partition Tolerance	|  Consistency, Availability, Partition Tolerance, Latency
Trade-offs in Partitioned Scenarios | 	Consistency vs. Availability	|  Consistency vs. Availability
Trade-offs in Non-Partitioned Scenarios	|  N/A	|  Latency vs. Consistency
Best Use Cases	|  Systems that prioritize consistency or availability in the face of partitions | 	Systems that need to balance consistency, availability, and latency in all scenarios