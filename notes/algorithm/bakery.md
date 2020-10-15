# Lamport's bakery

Lamport's bakery algorithm is a computer algorithm devised by computer scientist Leslie Lamport, as part of his long study of the formal correctness of concurrent systems, which is intended to improve the safety in the usage of shared resources among multiple threads by means of mutual exclusion.

## Implementation

```java
AtomicIntegerArray ticket = new AtomicIntegerArray(threads); // ticket for threads in line, n - number of threads
// Java initializes each element of 'ticket' to 0
 
AtomicIntegerArray entering = new AtomicIntegerArray(threads); // 1 when thread entering in line
// Java initializes each element of 'entering' to 0
 
public void lock(int pid) // thread ID
{
    entering.set(pid, 1);
    int max = 0;
    for (int i = 0; i < threads; i++)
    {
        int current = ticket.get(i);
        if (current > max)
        {
            max = current;
        }
    }
    ticket.set(pid, 1 + max); 
    entering.set(pid, 0);
    for (int i = 0; i < ticket.length(); ++i)
    {
        if (i != pid)
        {
            while (entering.get(i) == 1) { Thread.yield(); } // wait while other thread picks a ticket
            while (
                ticket.get(i) != 0 
                && ( 
                    ticket.get(pid) > ticket.get(i)  
                      || (ticket.get(pid) == ticket.get(i) && pid > i)
                )
            ) { 
                Thread.yield(); 
            }
        }
    }
    // The critical section goes here...
}

public void unlock(int pid)
{
  ticket.set(pid, 0);
}
```