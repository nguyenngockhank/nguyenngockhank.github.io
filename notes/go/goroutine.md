
## Goroutine 

A goroutine is a lightweight thread managed by the Go runtime

## Channel 

Channels are a typed conduit through which you can send and receive values with the channel operator,

```go
ch := make(chan int) // create a channel

ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v
```

### Example 1

:::: tabs

::: tab Code
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan int)
	go process(c)
	for {
		fmt.Println("Received:", <-c)
	}
}

func process(c chan int) {
	for i := 1; i <= 3; i++ {
		c <- i
		time.Sleep(time.Millisecond * 300)
	}
}
```

:::

::: tab Output
```
Received: 1
Received: 2
Received: 3
fatal error: all goroutines are asleep - deadlock!

goroutine 1 [chan receive]:
main.main()
	/tmp/sandbox708494458/prog.go:13 +0x7d
```

because `process` function is done but `main` function still waiting 
:::

::: tab Fix
```go
for {
    i, open := <-c
    if !open {
        return
    }
    fmt.Println("Received:", i)
}
```

or 

```go
for i := range c {
    fmt.Println("Received:", i)
}
```

Output
```
Received: 1
Received: 2
Received: 3

Program exited.
```
:::

::::


### Buffered Channels

:::: tabs

::: tab Code
```go
package main

import "fmt"

func main() {
	ch := make(chan int)
	ch <- 1
	fmt.Println("Received:", <-ch)
}
```

Output
```
fatal error: all goroutines are asleep - deadlock!

goroutine 1 [chan send]:
main.main()
	/tmp/sandbox980511399/prog.go:7 +0x59
```


When we send value to channel, goroutine will block until the value that was taken by another thread.

:::

::: tab BufferedChannel

```go
func main() {
	ch := make(chan int, 2)  // 1 Buffered Channels, size = 2
	ch <- 1
	ch <- 2
	fmt.Println("Received:", <-ch)
	fmt.Println("Received:", <-ch)
}
```

Output

```
Received: 1
Received: 2

Program exited.
```
:::

::::



## Selection 

:::: tabs

::: tab Code
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan string)
	c2 := make(chan string)

	go sendAndSleep(c1, "Sleep 1s", time.Second*1)
	go sendAndSleep(c2, "Sleep 5s", time.Second*5)

	for {
		fmt.Println("Received:", <-c1)
		fmt.Println("Received:", <-c2)
	}
}

func sendAndSleep(c chan string, value string, duration time.Duration) {
	for {
		c <- value
		time.Sleep(duration)
	}
}
```

::: 

::: tab Output
```
timeout running program
Received: Sleep 1s
Received: Sleep 5s
Received: Sleep 1s
Received: Sleep 5s
Received: Sleep 1s
...
```

Still run sequencely 
:::

::: tab Selection

```go
for {
	select {
	case v1 := <-c1:
		fmt.Println("Received:", v1)
	case v2 := <-c2:
		fmt.Println("Received:", v2)
	}
}
```

Output
```
timeout running program
Received: Sleep 5s
Received: Sleep 1s
Received: Sleep 1s
Received: Sleep 1s
Received: Sleep 1s
Received: Sleep 1s
Received: Sleep 5s
Received: Sleep 1s
Received: Sleep 1s
```
:::

::::

## Go channels vs JavaScript generators

:::: tabs

::: tab Js
```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

function main() {
  g = gen();

  // We can use next() to get the next value,
  // it returns an object with the following shape:

  // interface IteratorResult<T> {
  //   done: boolean;
  //   value: T;
  // }

  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
}

main();
```

Output
```
$ node main.js
1
2
3
4
5
```

A generator is an iterator; therefore, we can use a `for...of` loop to get the same output.
```js
function main() {
  for (const i of gen()) {
    console.log(i);
  }
}
```
:::

::: tab Go
```go
// main.go
package main
import "fmt"

func gen() <-chan int {
	c := make(chan int)

	go func() {
		c <- 1
		c <- 2
		c <- 3
		c <- 4
		c <- 5

		close(c)
	}()
	return c
}

func main() {
	g := gen()
	fmt.Println(<-g)
	fmt.Println(<-g)
	fmt.Println(<-g)
	fmt.Println(<-g)
	fmt.Println(<-g)
}
```

Output

```
$ go run main.go
1
2
3
4
5
```

The same way, we can iterate over the channel with `range`.

```go
func main() {
	for i := range gen() {
		fmt.Println(i)
	}
}
```
:::
::::


However, there are subtle differences to bear in mind. 

A built-in generator computes its yielded value on demand whereas Go will send the next value over a channel as soon as the previous value has been received; the computation timing is slightly different. 

Furthermore, Go channels can be created with a buffer size; at runtime, values ​​are sent over the channel until the buffer is full, causing those values ​​to be kept in memory in such a situation.

[Detail](https://www.mickaelvieira.com/blog/2020/02/21/a-short-explanation-of-generators-with-go-channels.html)
[Se more](https://github.com/frankandrobot/js-go-channels)