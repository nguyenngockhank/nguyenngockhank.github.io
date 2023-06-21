# ACID

## Defination

### Atomicity
Atomicity refers to the property of a transaction that ensures that it is executed as a single, indivisible unit. This means that either all the operations in the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back, and the system is returned to its previous state.

### Consistency
Consistency refers to the property of a transaction that ensures that it brings the system from one valid state to another. This means that the transaction must satisfy all the constraints and rules of the system, and the data must be in a valid state after the transaction is completed.

### Isolation
Isolation refers to the property of a transaction that ensures that it is executed independently of other transactions. This means that the effects of one transaction should not be visible to other transactions until it is completed. This prevents interference between transactions and ensures that they are executed in a predictable and consistent manner.

### Durability
Durability refers to the property of a transaction that ensures that its effects are permanent and persistent. This means that once a transaction is committed, its effects should be stored permanently and should survive any system failures or crashes.

## ACID in Distributed System

ACID (Atomicity, Consistency, Isolation, Durability) compliance is a critical requirement for any database system. In a distributed system, ensuring ACID compliance can be challenging due to the inherent complexity of distributed systems. However, there are several strategies that can be employed to ensure ACID compliance in a distributed system.

### 1. Use a Distributed Database
One of the most effective ways to ensure ACID compliance in a distributed system is to use a distributed database. A distributed database is a database that is spread across multiple nodes in a network. Each node in the network contains a subset of the data, and the nodes work together to provide a unified view of the data. Distributed databases are designed to handle the complexities of distributed systems and provide ACID compliance out of the box.

### 2. Use a Distributed Transaction Coordinator
Another strategy for ensuring ACID compliance in a distributed system is to use a distributed transaction coordinator. A distributed transaction coordinator is a software component that manages transactions across multiple nodes in a network. The coordinator ensures that all nodes in the network agree on the outcome of a transaction, even if the transaction involves multiple nodes. This ensures that the transaction is ACID compliant.

### 3. Use a Consensus Algorithm
A consensus algorithm is a protocol that allows a group of nodes in a network to agree on a single value. Consensus algorithms are often used in distributed systems to ensure that all nodes in the network agree on the outcome of a transaction. By using a consensus algorithm, you can ensure that all nodes in the network agree on the outcome of a transaction, which is essential for ACID compliance.

### 4. Use a Two-Phase Commit Protocol
A two-phase commit protocol is a protocol that ensures that all nodes in a distributed system agree on the outcome of a transaction. The protocol works by dividing the transaction into two phases. In the first phase, all nodes in the network agree to commit the transaction. In the second phase, all nodes in the network actually commit the transaction. By using a two-phase commit protocol, you can ensure that all nodes in the network agree on the outcome of a transaction, which is essential for ACID compliance.

[See more - Distributed patterns](../architect/distributed-patterns.md)