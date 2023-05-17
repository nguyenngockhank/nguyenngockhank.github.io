---
tags: ['Pattern', "DistributedSystem"]
---

# Fault Tolerance / Resilience

<TagLinks />

The **Fault Tolerant** means the ability of an architecture to survive (tolerate) when an environment misbehaves by taking corrective actions, e.g, surviving a server crash or preventing a misbehaving API from bringing down the whole system, etc. 

The **Fault Resilience** is probably the capacity to recover from these type of scenarios quickly.

After further reading of Netflix blogs and wikis, it seemed the terms Fault Resilience and Fault Tolerant were used interchangeably.

**Downstream resiliency**
- Timeout
- [Retry](#retries): exponential backoff, retry amplification
- [Circuit breaker](#circuit-breaker)

**Upstream resiliency**
- Load shedding
- Load leveling
- [Rate limiting](#rate-limiter): single process and distributed implementations
- Constant work

## Bulkhead vs Rate Limiter

**Bulkhead**

Limit number of concurrent calls at a time

Ex: Allow 5 concurrent calls at a time 

**Rate Limiter**

Limit number total calls in given period of time

Ex: Allow 5 calls every 2 second.

## Bulkhead

The ability of the system to recover from the failure and remain functional makes the system more resilient. It also avoids any cascading failures.

Pros:
- load shedding
- fail fast

Code Example

:::: tabs

::: tab Plain
```java
// NOT THREAD SAFE

int count = 0;

@PostMapping("/pay")
public ResponseEntity<Payment> makePayment() {
    if (count > THRESHOLD) {
        return "default-response"; // Fail-fast 
    }

    count++;
    Payment response = paymentService.makeResponse();
    count--;
    return response;
}
```
:::

::: tab resilience4j
```java
// Create once
BulkheadConfig config = BulkheadConfig.custom()
                                    .maxConcurrentCalls(150)
                                    .maxWaitTime(100)
                                    .build();

Bulkhead bulkheadForPayment = Bulkhead.of("payment", config);

// decorate call with bulkhead
Supplier<String> pay = Bulkhead.decorateSupplier(bulkheadForPayment, this::makePayment);

// execute the call
Try<String> result = Try.ofSupplier(pay);

if (!result.isSuccess()) {
    return "default-response"; // fail fast
}

return result.get();
```
:::

::::

https://dzone.com/articles/resilient-microservices-pattern-bulkhead-pattern


## Rate limiter 

Algorithms: 
- Token bucket
- Leaking bucket
- Fixed window counter 
- Sliding window log
- Sliding window counter

### Token bucket

A token bucket is a container that has pre-defined capacity. Tokens are put in the bucket at preset rates periodically. Once the bucket is full, no more tokens are added. 

E.g: the token bucket capacity is 4. The refiller puts 2 tokens into the bucket every second. Once the bucket is full, extra tokens will overflow.

Each request consumes one token. When a request arrives, we check if there are enough tokens in the bucket. 
- If there are enough tokens, we take one token out for each request, and the request goes through.
- If there are not enough tokens, the request is dropped.


The token bucket algorithm takes two parameters:
- **Bucket size**: the maximum number of tokens allowed in the bucket 
- **Refill rate**: number of tokens put into the bucket every second

How many buckets do we need? This varies, and it depends on the rate-limiting rules. Here are a few examples.
- It is usually necessary to have **different buckets for different API endpoints**. For instance, if a user is allowed to make 1 post per second, add 150 friends per day, and like 5 posts per second, 3 buckets are required for each user.
- If we need to throttle requests based on IP addresses, each IP address requires a bucket
- If the system allows a maximum of 10,000 requests per second, it makes sense to have a global bucket shared by all requests.

**Pros**:
- The algorithm is easy to implement.
- Memory efficient.
- Token bucket allows a burst of traffic for short periods. A request can go through as long as there are tokens left.
**Cons**:
- Two parameters in the algorithm are bucket size and token refill rate. However, it might be challenging to tune them properly.

### Leaking bucket
// ... todo

### Sliding window counter

**Redis lua example:**

```lua
local totalHits = redis.call("INCR", KEYS[1])
local timeToExpire = redis.call("PTTL", KEYS[1])
if timeToExpire <= 0
then
    redis.call("PEXPIRE", KEYS[1], tonumber(ARGV[1]))
    timeToExpire = tonumber(ARGV[1])
end
return { totalHits, timeToExpire }
```

```js
const scriptSrc = `...`;

const results: number[] = (await this.redis.call(
    'EVAL',
    scriptSrc,
    1,
    key,
    ttl * 1000,
)) as number[];
```


## Retries

If your request failed — wait a bit and try again. That’s basically it, retrying makes sense, because network might degrade for a moment or GC hit that particular instance your request came to.

**Distinguish retryable errors from non-retryable.** It’s pointless to retry request, when user doesn’t have permissions or payload doesn’t structured properly. Contrary, **retrying request timeouts or 5xx is good**.

**Adopt error budgeting** — this technique, when you **stop making retries if rate of retryable errors exceeds threshold**, e.g. if 20% of interactions with service D results in error, stop retrying it and try to degrade gracefully. Amount of errors might be tracked with rolling window over N last seconds.

**Use retries with exponential backoff** - this technique helps to avoid short and intermittent failures by performing call retries a certain number of times, in case the service was not available only for a short time.

```js
function resolveIps() {
    return new Promise((resolve, reject) => {

        var operation = retry.operation({
            retries: 5, // maximum amount of times to retry 
            factor: 3, // exponential factor
            minTimeout: 1 * 1000, //  milliseconds before starting the first retry.
            maxTimeout: 60 * 1000, // milliseconds between two retries
        });

        operation.attempt(function(currentAttempt) {
            dns.resolve(address, function(err, ips) {

                // Returns false 
                // when no error value is given, or the maximum amount of retries has been reached.
                if (operation.retry(err)) {
                    return;
                }

                err ? reject(operation.mainError()) : resolve(ips);
            });
        });
    })
}
```

**Libs**:
- [node retry](https://www.npmjs.com/package/retry)

## Circuit Breaker 

In this approach, the client process tracks the number of failed requests. If the error rate exceeds a configured limit, a “circuit breaker” trips so that further attempts fail immediately. (If a large number of requests are failing, that suggests the service is unavailable and that sending requests is pointless.) After a timeout period, the client should try again and, if the new requests are successful, close the circuit breaker.

```java
// create once
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
                                    •failureRateThreshold(50)
                                    waitDurationIn0penState(Duration.ofMillis(1000))
                                    .ringBufferSizeInHalf0penState (5)
                                    .ringBufferSizeInClosedState (100)
                                    .build () ;
CircuitBreaker circuitBreaker
CircuitBreaker circuitBreaker = CircuitBreaker.ofDefaults ("paymentService");

// decorate remote call with circuit-breaker
Callable<String> callable = CircuitBreaker.decorateCallable(circuitBreaker, this::makePayment);

// submit the decorated callable
Future<String> future = Executors.newSingleThreadExecutor().submit(callable);
try {
    return future.get();
} catch (CircuitBreakerOpenException ex) {
    return "default-response";
}
```

**Libs**:
- [node - opossum](https://www.npmjs.com/package/opossum)
- [Java - resilience4j](https://resilience4j.readme.io/docs/circuitbreaker)

## Fallback

When the the service request fails after retry, we need an alternative response to the request. Fallback provides an alternative solution during a service request failure. When the circuit breaker trips and the circuit is open, a fallback logic can be started instead. The fallback logic typically does little or no processing, and return value. Fallback logic must have little chance of failing, because it is running as a result of a failure to begin with.

In this approach, the client process performs fallback logic when a request fails, such as returning cached data or a default value. This is an approach suitable for queries, and is more complex for updates or commands.

## Deadlines / distributed timeouts

// TODO

## Asynchronous communication

Use Asynchronous communication (for example, [message-based communication](./messaging.md#broker-based-messaging)) across internal microservices


## Stateless Services

To make sure our services are scalable, we need to make sure we build them in a stateless manner. By stateless, we mean that the service does not retain any state from the previous calls and treats every request as a fresh, new one. The advantage this approach gives us is that we can easily create replicas of the same service and make sure it does not matter which service instance is handling the request.


## Correlation ID

In a typical microservices-based application, several services span different systems, possibly separated by large geographical distances. This means each service must log useful and meaningful data that specifies what it has been doing and details any failures. This requires a third microservices resiliency pattern geared towards service tracking.

A correlation ID pattern creates an identifier for each individual request. This can help you track the complete flow of each HTTP request through all communication channels. You can set the correlation ID as part of the HTTP request header and include it in every log message, which will help you to quickly find errors, warnings and relevant debug messages.

While a correlation ID will illustrate the flow of a request from the source to the destination, a log aggregator pulls together the logs from all your microservices for easier search and analysis. 

Detail: [3 microservices resiliency patterns for better reliability](https://www.techtarget.com/searchapparchitecture/tip/3-microservices-resiliency-patterns-for-better-reliability)

## Refs
- [5 patterns to make your microservice fault-tolerant](https://itnext.io/5-patterns-to-make-your-microservice-fault-tolerant-f3a1c73547b3)
- [Guide to Microservices Resilience Patterns](https://www.jrebel.com/blog/microservices-resilience-patterns)
https://newsletter.grokking.org/p/172-mo-hinh-vach-ngan-bulkhead-pattern-trong-thi-t-k-microservice-617401



