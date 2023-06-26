# Vector clock

A vector clock is a mechanism used in distributed systems to **order events and determine causality** between them. It is a **logical clock** that assigns a unique identifier to each event in the system, allowing for the tracking and synchronization of events across multiple nodes.

In a distributed system, where multiple processes or nodes are working concurrently, it becomes essential to establish a consistent ordering of events. Vector clocks provide a way to achieve this by assigning a vector of integers to each process or node.

Each process maintains its own vector clock, which is initially set to zero for all entries . Whenever an event occurs, the process increments its own entry in the vector clock. The resulting vector represents the causal history of events observed by that process.

When processes communicate with each other, they exchange their vector clocks to determine the relative ordering of events. By comparing the vector clocks, it is possible to determine if one event happened before, after, or concurrently with another event.

The comparison of vector clocks is done by comparing the corresponding entries in the vectors. If all entries in one vector are less than or equal to the corresponding entries in another vector, then the first vector is said to be causally before the second vector. If the entries are equal for all but one entry, and the entry in the first vector is less than the corresponding entry in the second vector, then the first vector is said to be causally before the second vector.

Vector clocks are particularly useful in scenarios where events can occur concurrently across multiple nodes. They provide a way to establish a partial ordering of events, even in the absence of a global clock. This allows for the detection of causality relationships between events, which is crucial for maintaining consistency in distributed systems.


## Example
Let's consider two processes, A and B, in a distributed system. Each process has its own vector clock with two entries initially set to zero: `[0, 0]`.

1. Process A increments its own entry: `[1, 0]`
2. Process B increments its own entry: `[0, 1]`
3. Process A sends a message to Process B, including its vector clock `[1, 0]`
4. Process B receives the message and compares the vector clocks.
    - The first entry in Process B's vector clock is less than the first entry in Process A's vector clock, so Process B updates its vector clock to `[1, 1]`
5. Process B sends a response to Process A, including its updated vector clock `[1, 1]`.
6. Process A receives the response and compares the vector clocks.
    - The first entry in Process A's vector clock is equal to the first entry in Process B's vector clock, but the second entry in Process A's vector clock is less than the second entry in Process B's vector clock. Therefore, Process A updates its vector clock to `[1, 1]`.

By comparing the vector clocks, the processes can establish the causal relationship between events and ensure consistency in the distributed system.