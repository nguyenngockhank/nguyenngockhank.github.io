# Concurrent Programming

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


## Terms


### Critical section

::: tip Critical section
Critical section là một đoạn code chỉ được thực thi duy nhất bởi một thread nào đó tại một thời điểm. Nếu có nhiều hơn một thread thực thi đoạn code này sẽ xảy ra lỗi. 
:::

Ví dụ đó có thể là đoạn code truy cập tới các shared resources như file, data, global variables,…

### Race condition

::: tip Race condition
Race condition: là khi nhiều threads access vào một shared source mà không đảm bảo rằng thread này kết thúc thực thi trên dữ liệu trước khi thread kia truy cập dữ liệu. Nghĩa là các threads đồng thời cùng đọc và cùng ghi trên dữ liệu. Có thể hiểu race condition là trường hợp sẽ xảy ra nếu không quản lý tốt critical section. 
:::

### Deadlock

::: tip Deadlock
là hiện tượng hai hay nhiều tác vụ phải chờ đợi lẫn nhau để hoàn thành.
:::

### Thread safe
::: tip Thread safe
một code được gọi là thread safe code khi trong môi trường multi-threading, nó được thực thi mà không xảy ra bất cứ lỗi nào.
:::

### Atomicity

::: tip Atomicity
một tác vụ hoặc một công việc cụ thể được cho là atomic khi nó không thể bị gián đoạn. Có nghĩa là nó được đảm bảo sẽ được hoàn thành, không có trường hợp trả ra một trạng thái không hợp lệ nào đó (lỗi). Đây cũng là một ví dụ của thread safe.
:::

## Lamport's bakery algorithm

::: tip Lamport's bakery algorithm 
Lamport's bakery algorithm is a computer algorithm devised by computer scientist Leslie Lamport, as part of his long study of the formal correctness of concurrent systems, which is intended to improve the safety in the usage of shared resources among multiple threads by means of mutual exclusion.
:::

## References

- [Concurrent Programming và GCD (Part 1)](https://medium.com/@lvhan/concurrent-programming-v%C3%A0-gcd-part-1-c701cf180de6)
- [Concurrency Programming Guide](https://viblo.asia/p/concurrency-programming-guide-63vKjpYdl2R)
- [Parallel Processing, Concurrency, và Async Programming](https://viblo.asia/p/parallel-processing-concurrency-va-async-programming-OeVKBdj0lkW)

[Concurrency Patterns](https://en.wikipedia.org/wiki/Concurrency_pattern)