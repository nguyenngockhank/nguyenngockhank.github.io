# Concurrent Programming

[Concurrency Patterns](https://en.wikipedia.org/wiki/Concurrency_pattern)

::: tip Concurrency
Xử lý đồng thời - Concurrency - là việc nhiều task được xử lý cùng một lúc.
:::

## Multithreading

::: tip Multithreading
Hình thức đồng thời sử dụng nhiều luồng (threads) thực thi.
:::

là 1 dạng của concurrency, nhưng không phải là dạng duy nhất. Multithreading được ứng dụng ở thread pool, nơi mà các thread được phân bổ tự động để đáp ứng các request.

## Asynchronous

::: tip Multithreading
Hình thức đồng thời sử dụng nhiều callbacks để tránh các threads không cần thiết.
:::

1 thể loại khác của concurrency vô cùng mạnh mẽ, sử dụng keywork async và await, lập trình đơn giản như synchronous (nonconcurrent).

## Parallel Processing

::: tip Parallel Processing
Parallel processing (hay là parallel programming) sử dụng multithreading để tối ưu hóa việc sử dụng nhiều processor. Các CPUs ngày nay đều có nhiều core, nếu có nhiều công việc cần xử lý, Parallel processing sẽ chia nhỏ công việc ra nhiều thread, và các thread có thể chạy độc lập trên mỗi core khác nhau. 
:::

Parallel processing là 1 loại của Multithreading và multithreading là 1 loại của concurrency.

## Queue

::: tip Serial Queue
là hàng đợi thực hiện theo tuần tự.
:::

::: tip Concurrent Queue
 là hàng đợi thực hiện đồng thời.
:::


## Locking

::: tip
**Pessimistic approaches** lock data records to prevent conflicts. 
**Optimistic approaches** detect conflicts and fix them.
:::

Optimistic Locking sử dụng phù hợp trong các trường hợp có nghiệp vụ xác suất conflict giữa 2 transaction là thấp. Nhược điểm của Optimistic Offline Locking là chỉ verify trên các câu lệnh UPDATE và DELETE, vẫn có thể gây ra inconsistent khi read dữ liệu.


Pessimistic Locking sử dụng phù hợp trong các nghiệp vụ có khả năng xảy ra conflict cao. Nếu bạn sử dụng Pessimistic Lock, bạn nên cân nhắc đến việc xử lý timeout cho các long transaction để tránh deadlock.


## Critical section

::: tip Critical section
Critical section là một đoạn code chỉ được thực thi duy nhất bởi một thread nào đó tại một thời điểm. Nếu có nhiều hơn một thread thực thi đoạn code này sẽ xảy ra lỗi. 
:::

Ví dụ đó có thể là đoạn code truy cập tới các shared resources như file, data, global variables,…

## Race condition

::: tip Race condition
Race condition: là khi nhiều threads access vào một shared source mà không đảm bảo rằng thread này kết thúc thực thi trên dữ liệu trước khi thread kia truy cập dữ liệu. Nghĩa là các threads đồng thời cùng đọc và cùng ghi trên dữ liệu. Có thể hiểu race condition là trường hợp sẽ xảy ra nếu không quản lý tốt critical section. 
:::

## Deadlock

::: tip Deadlock
là hiện tượng hai hay nhiều tác vụ phải chờ đợi lẫn nhau để hoàn thành.
:::

## Thread safe
::: tip Thread safe
một code được gọi là thread safe code khi trong môi trường multi-threading, nó được thực thi mà không xảy ra bất cứ lỗi nào.
:::

## Atomicity

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