# Concurrency

## Terms

### Race condition

Race conditions occur when multiple threads or processes access shared data concurrently, and the outcome depends on the unpredictable order of execution. Locking mechanisms are fundamental tools to prevent these issues. 

### Critical section

A critical section is a part of a program where shared resources are accessed, and concurrent execution can lead to conflicts or inconsistencies.

**Why Critical Sections are Important**
- **Preventing race conditions**: Ensures data integrity and consistency.   
- **Protecting shared resources**: Avoids conflicts when multiple threads or processes access the same data.   
- **Guaranteeing correct program execution**: Ensures that operations on shared data are performed atomically

E.g: Bank account

### Deadlock

A deadlock is a situation in concurrent programming where two or more processes or threads are blocked, each waiting for the other to release a resource. This creates a circular dependency, preventing any process from proceeding.

**Conditions for Deadlock**

To occur, four conditions must be present simultaneously:
1. **Mutual exclusion**: Resources are held exclusively by one process at a time.
2. **Hold and wait**: A process holds at least one resource and is waiting for additional resources.   
3. **No preemption**: Resources cannot be forcibly taken away from a process; they must be released voluntarily.   
4. **Circular wait**: A chain of processes exists, where each process is waiting for a resource held by the next process in the chain.

**Mitigate the risk of deadlocks**
- The **timeout pattern** is a strategy to mitigate the risk of deadlocks by imposing a time limit on resource acquisition attempts.

**Preventing Deadlock**
- **Deadlock prevention**: Avoiding all four conditions simultaneously.
- **Deadlock avoidance**: Dynamically allocating resources to prevent deadlock.   
- **Deadlock detection and recovery**: Allowing deadlocks to occur but detecting and resolving them.

### Atomicity

Atomicity is a fundamental property in concurrent programming and database systems that guarantees that a sequence of operations is executed as a single, indivisible unit. This means that either all operations within the unit are completed successfully, or none of them are. There is no partial completion.

### Thread safe

Thread safety is a property of code that guarantees correct behavior when accessed by multiple threads concurrently. In simpler terms, it means that a piece of code can be executed by multiple threads without causing unexpected results, data corruption, or race conditions

**Pure Functions - A Cornerstone of Thread Safety**

Pure functions are a powerful tool in achieving thread safety. They are functions that:
- Always producethe same output for the same input.
- Have no side effects (i.e., they don't modify any external state).

**Why are pure functions inherently thread-safe?**

- **No shared state**: Since pure functions don't rely on or modify external state, there's no possibility of race conditions.
- **Deterministic**: Given the same inputs, a pure function will always produce the same output, regardless of the execution context or thread.
- **Composable**: Pure functions can be easily combined and reused without worrying about unintended consequences.

### Pessimistic Locking

Pessimistic locking is a concurrency control mechanism that operates under the premise that data conflicts or inconsistencies are probable when multiple users or processes access the same resource simultaneously.

**Patterns**
- Mutex (Mutual Exclusion)
- Semaphore
- Read-Write Locks
- Database-Level Locking


### Optimistic Locking

Optimistic locking is a concurrency control mechanism used in computer systems, particularly in databases, to manage concurrent access to shared resources with an optimistic assumption that conflicts are infrequent or less likely to occur.

**Patterns**
- Version Numbering
- Timestamping
- Check-and-Set (CAS)
    - A compare-and-swap atomic operation is used to update a value conditionally.
    - The operation compares the expected value with the current value.
    - If they match, the new value is set atomically.
    - If they don't match, the operation fails, indicating a conflict.


### Pessimistic vs Optimistic 

![Pessimistic vs Optimistic](https://i.pinimg.com/originals/64/a5/98/64a598fe190fb7675a80180d73fd7b5c.png)


![Pessimistic Locking vs Optimistic Locking](https://i.pinimg.com/originals/d7/11/c1/d711c1351f7aaf035bcc9130e000ed98.jpg)


## Increasing Concurrency 

**Thread Pool**: A thread pool is a collection of pre-initialized threads that are ready to perform tasks. Instead of creating a new thread for each task, a thread pool allows for the reuse of threads, reducing the overhead of thread creation. This pattern is particularly useful when dealing with a large number of short-lived tasks.

**Asynchronous Programming**: Asynchronous programming allows tasks to be executed concurrently without blocking the main thread. By utilizing callbacks, promises, or async/await syntax, tasks can be initiated and executed in the background while the main thread continues with other operations. This pattern is especially effective when dealing with I/O-bound operations, such as network requests or file operations.

**Parallel Processing**: Parallel processing involves dividing a task into smaller subtasks that can be executed simultaneously on multiple processing units. This pattern is commonly used in scenarios where a single task can be divided into independent parts that can be processed concurrently. Parallel processing can be achieved using multi-threading or distributed computing frameworks.

**Event-driven Architecture**: In an event-driven architecture, components of a system communicate through events. When an event occurs, it triggers the execution of associated event handlers. This pattern allows for loose coupling between components and enables concurrent execution of tasks based on events. Event-driven architectures are commonly used in systems that require high scalability and responsiveness.

**Caching**: Caching is a technique that stores frequently accessed data in memory to reduce the need for expensive computations or I/O operations. By caching data, multiple requests can be served concurrently without the need to access the underlying data source. Caching can significantly improve the performance and concurrency of a system, especially in scenarios where data access is a bottleneck.

## Avoid Deadlocks

**Resource Ordering**:  establish a strict ordering of resources. By ensuring that all threads or processes request resources in the same order, the possibility of circular wait conditions, which can lead to deadlocks, is eliminated. This technique requires careful analysis and planning to determine the appropriate resource ordering.

**Resource Allocation**: can detect and prevent deadlocks. For example, the Banker's algorithm is a well-known algorithm that can be used to allocate resources in a way that avoids deadlocks. It works by considering the available resources, the maximum resources each process can request, and the resources currently allocated to each process.

**Locking and Synchronization**: Proper use of locks and synchronization mechanisms can help prevent deadlocks. By ensuring that resources are properly locked and released in a consistent manner, the chances of deadlocks occurring can be reduced. Techniques such as **lock ordering** and **lock timeouts** can be used to further enhance deadlock prevention.

**Avoidance of Circular Wait**: Circular wait is a condition where each process is waiting for a resource held by another process in a circular chain. To avoid circular wait, a technique called "**resource hierarchy**" can be used. In this technique, resources are assigned a unique identifier, and processes are required to acquire resources in increasing order of their identifiers. This ensures that circular wait conditions cannot occur.

**Resource Preemption**: Preemptive resource allocation is a technique where a resource can be forcibly taken away from a process if it is needed by another process. By preempting resources, the possibility of deadlocks can be reduced. However, this technique should be used with caution, as it can introduce its own set of challenges and complexities.

**Proper Error Handling**: Proper error handling and recovery mechanisms can also help prevent deadlocks. By detecting and handling errors related to resource allocation and deallocation, the system can avoid situations that can lead to deadlocks.


## Problems in Concurrency

**Race Conditions**: A race condition occurs when multiple threads or processes access shared resources simultaneously, leading to unpredictable and incorrect results. For example, if two threads try to update the same variable concurrently, the final value may depend on the order of execution, leading to inconsistent or incorrect results.

**Deadlocks**: A deadlock is a situation where two or more threads are blocked indefinitely, waiting for each other to release resources. Deadlocks can occur when multiple threads acquire resources in different orders, creating a circular dependency. This can result in a system freeze or unresponsiveness.

**Starvation**: Starvation happens when a thread is unable to access a shared resource indefinitely due to resource contention. This can occur if a high-priority thread continuously acquires a resource, preventing lower-priority threads from accessing it. Starvation can lead to reduced system performance and fairness.

**Thread Synchronization**: Synchronizing threads is essential to ensure data consistency and prevent race conditions. However, improper synchronization can introduce problems such as deadlocks or performance bottlenecks. It requires careful design and implementation to achieve the right balance between synchronization and performance.

**Performance Bottlenecks**: Concurrency can introduce performance bottlenecks due to increased overhead in managing multiple threads or processes. Excessive context switching, contention for shared resources, or inefficient synchronization can degrade system performance.

**Ordering and Visibility**: In concurrent systems, the order of execution and visibility of shared data can be challenging to manage. Inconsistent ordering or visibility can lead to unexpected behavior and bugs. Proper synchronization mechanisms, such as locks or atomic operations, are required to ensure correct ordering and visibility.

**Testing and Debugging**: Concurrency-related bugs can be difficult to reproduce and debug due to their non-deterministic nature. Testing and debugging concurrent systems require specialized techniques and tools to identify and fix issues effectively.



## Lamport's bakery algorithm

::: tip Lamport's bakery algorithm 
Lamport's bakery algorithm is a computer algorithm devised by computer scientist Leslie Lamport, as part of his long study of the formal correctness of concurrent systems, which is intended to improve the safety in the usage of shared resources among multiple threads by means of mutual exclusion.
:::

## References

- [Concurrent Programming và GCD (Part 1)](https://medium.com/@lvhan/concurrent-programming-v%C3%A0-gcd-part-1-c701cf180de6)
- [Concurrency Programming Guide](https://viblo.asia/p/concurrency-programming-guide-63vKjpYdl2R)
- [Parallel Processing, Concurrency, và Async Programming](https://viblo.asia/p/parallel-processing-concurrency-va-async-programming-OeVKBdj0lkW)

[Concurrency Patterns](https://en.wikipedia.org/wiki/Concurrency_pattern)