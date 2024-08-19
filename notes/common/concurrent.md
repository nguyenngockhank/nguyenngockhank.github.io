# Concurrency

## Terms

### Layers of Concurrency
- **Hardware layer**: This is the lowest level, where machine instructions are executed using signals to interact with physical components. Understanding this layer is crucial for optimizing application performance on modern, complex architectures.
- **Runtime system layer**: This layer includes operating systems, system calls, and device drivers. While it hides complexities from the application layer, it significantly affects concurrent systems.
- **Application layer**: This is the highest level, where software engineers write code to implement algorithms and business logic using abstract concepts.


### Task & Serial execution & Sequential computations

- A **task** can be thought of as a logically independent piece of work.
- **Sequential computing** means each task in a program depends on the execution of all previous tasks in the order in which they are listed in the code.
- **Serial execution** refers to a set of ordered instructions executed one at a time on
one processing unit. Serial execution is required when the input to each task
requires the output of a previous task.
- **Parallel execution** refers to executing multiple computations at the same time.
Parallel execution can be used when the tasks can be performed independently.
- **Parallel computing** uses multiple processing elements simultaneously to solve a problem. This often leads to significant program redesign—decomposition of the problem, creating or adapting an algorithm, adding  synchronization points to the program, and so on.

**Sequential Computations**
- **Definition**: Tasks are executed one after the other, following a linear order.   
- **Characteristics**:
    - Predictable and deterministic.
    - Often simpler to reason about and debug.
    - Limited by the speed of a single processor.
    - Example: A single-threaded program performing calculations step-by-step.

**Serial execution**
- **Definition**: 
    - Tasks are executed one at a time on a single processor. 
    - Serial execution is like a single-lane road where cars can only pass one at a time.
- **Characteristics**:
    - Similar to sequential computations but more specific to hardware execution.
    - Can be part of a larger concurrent system.
    - Example: A single thread running on a single core of a multi-core processor.

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

## Hardware

![SISD vs MISD vs SIMD vs MIMD](https://i.pinimg.com/originals/6f/aa/67/6faa67a50db3c09c3ed47a3760ce3595.png)

- Execution depends on the actual hardware. Modern hardware has multiple processing resources—multiple cores, multiprocessors, or computer clusters—and they are optimized for executing programs.
- Flynn’s taxonomy describes four types of architecture based on whether the system processes single or multiple instructions at a time (SI or MI) and whether each instruction acts on single or multiple blocks of data (SD or MD).
- A GPU is an example of SIMD architecture. It’s optimized for highly parallel task execution.
- Modern multiprocessors and multicore processors are examples of MIMD. They are far more complex because they’re multipurpose.
- The processor or CPU is the brain of the computer system, but it’s difficult to work with directly. In programming, an additional level of abstraction is introduced between the application and the system: the runtime system.
- To exploit parallel execution, an application developer needs a processing unit that is suitable for the problem. A CPU has a higher clock frequency and a wider set of instructions that can be executed in parallel, while a GPU operates at a lower clock speed and executes only one instruction across all of the cores, but it does so at incredible speed due to massive parallelism

## Operation system

- The mechanism by which threads and processes synchronize themselves and exchange data is called **interprocess communication (IPC)**.
- Each IPC mechanism has advantages and disadvantages. Each is the optimal solution for a particular problem:
    - A shared-memory mechanism is used when threads or processes need to efficiently exchange large amounts of data but have a problem with synchronizing access to the data.
    -  Pipes provide an efficient way to implement synchronous communication between producer–consumer processes. Named pipes provide a simple interface for transferring data between two processes, whether on the same computer or on a network.
    -  A message queue between processes or threads is a way of asynchronously exchanging data. Message queues are used to implement weakly coupled systems.
    - Sockets are a two-way communication channel that can use networking capabilities. Here, data communication takes place through the socket interface instead of the file interface. In most cases, sockets provide the best combination of performance, scalability, and ease of use.
- A **thread pool** is a collection of worker threads that efficiently execute incoming tasks on behalf of the program’s main thread. Worker threads in a thread pool are designed to be reused once the task is completed and protect against the unexpected failure of the task, such as raising an exception, without affecting the worker thread itself.


## Amdahl's Law

Amdahl's Law is a formula used in computer architecture to predict the maximum potential speedup in latency of the execution of a task at fixed workload that can be expected of a system whose resources are improved. 

In simpler terms, it tells us that the overall performance improvement of a system is limited by the portion of the system that cannot be improved. This is often referred to as the **bottleneck**.

### **Key points:**
- **Speedup is limited**: No matter how much you improve the parallel part of a system, the overall speedup is capped by the sequential part.   
- **Identifies bottlenecks**: It helps pinpoint the parts of a system that need the most improvement.
- **Practical implications**: It's crucial for understanding the limits of parallel computing and for making informed decisions about system design.

### **Formula:**
```
S = 1 / (1 - P + P/N)
```
- S: Speedup
- P: Proportion of the program that can be parallelized   
- N: Number of processors


### **Ví dụ**
Giả sử một chương trình có 80% phần có thể song song hóa và 20% phần phải thực hiện tuần tự. Nếu chúng ta tăng số lượng bộ xử lý lên gấp đôi, tốc độ tăng tối đa sẽ là:

```
S = 1 / (1 - 0.8 + 0.8/2) = 1.67
```

Điều này có nghĩa là hiệu suất chỉ tăng được 67%. Dù tăng số lượng bộ xử lý lên bao nhiêu đi nữa, hiệu suất vẫn bị giới hạn ở mức này do phần 20% phải thực hiện tuần tự.

## Gustafson's Law

Gustafson's Law is a principle in computer architecture that describes the potential speedup of a task using parallel computing compared to running it on a single-core machine. Unlike Amdahl's Law, which focuses on a fixed problem size, Gustafson's Law considers the possibility of increasing problem size as the number of processors grows. 


### Key points 
- **Problem size scaling**: It assumes that the problem size can be increased proportionally to the number of processors.   
- **Constant execution time**: The overall execution time remains constant even as the problem size and number of processors increase.
- **Linear speedup**: The speedup achieved is often linear with the number of processors.


Feature	| Amdahl's Law	| Gustafson's Law
---- | ---- | ----
Problem size	| Fixed	| Increases with number of processors
Speedup	| Limited by sequential portion	| Can approach linear speedup
Focus	| Improving performance of existing applications |	Solving larger problems

**Real-world Implications**
- Amdahl's Law: More relevant for optimizing existing applications on multi-core processors.
- Gustafson's Law: More applicable for large-scale parallel computing problems like scientific simulations and data analysis.

## Lamport's bakery algorithm

::: tip Lamport's bakery algorithm 
Lamport's bakery algorithm is a computer algorithm devised by computer scientist Leslie Lamport, as part of his long study of the formal correctness of concurrent systems, which is intended to improve the safety in the usage of shared resources among multiple threads by means of mutual exclusion.
:::

## References

- [Concurrent Programming và GCD (Part 1)](https://medium.com/@lvhan/concurrent-programming-v%C3%A0-gcd-part-1-c701cf180de6)
- [Concurrency Programming Guide](https://viblo.asia/p/concurrency-programming-guide-63vKjpYdl2R)
- [Parallel Processing, Concurrency, và Async Programming](https://viblo.asia/p/parallel-processing-concurrency-va-async-programming-OeVKBdj0lkW)

[Concurrency Patterns](https://en.wikipedia.org/wiki/Concurrency_pattern)