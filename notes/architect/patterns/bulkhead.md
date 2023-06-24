---
tags: [ "ResiliencePattern", "DistributedSystem"]
---

# Bulkhead Pattern

Bulkhead is a concept in microservices architecture that helps to improve the resilience and fault tolerance of a system. It is inspired by the design of ship bulkheads, which are watertight compartments that prevent a ship from sinking even if one compartment is breached.

In the context of microservices, a bulkhead refers to the isolation and containment of failures within a specific service or component. By implementing bulkheads, we can limit the impact of failures and prevent them from cascading to other parts of the system.


## 2 main types of bulkheads

### Thread Pool Bulkhead

This type of bulkhead involves limiting the number of concurrent requests or tasks that a service can handle. By setting a maximum limit, we can prevent a single service from being overwhelmed by a sudden surge in traffic or requests. This helps to ensure that the overall system remains responsive and other services are not affected by the overload.

```java
HystrixCommand.Setter setter = HystrixCommand.Setter
    .withGroupKey(HystrixCommandGroupKey.Factory.asKey("MyService"))
    .andCommandKey(HystrixCommandKey.Factory.asKey("MyCommand"))
    .andThreadPoolKey(HystrixThreadPoolKey.Factory.asKey("MyThreadPool"))
    .andThreadPoolPropertiesDefaults(HystrixThreadPoolProperties.Setter()
        .withCoreSize(10)
        .withMaxQueueSize(100)
        .withQueueSizeRejectionThreshold(50));

HystrixCommand<String> command = new HystrixCommand<String>(setter) {
    @Override
    protected String run() throws Exception {
        // Perform the actual service logic here
        return "Hello, World!";
    }
};
```

In this example, we define a thread pool bulkhead with a core size of 10 threads, a maximum queue size of 100, and a rejection threshold of 50. This means that if the number of requests exceeds the core size, they will be queued up to a maximum of 100. If the queue reaches the rejection threshold, additional requests will be rejected


### Circuit Breaker Bulkhead

This type of bulkhead involves monitoring the health of a service and automatically opening a circuit breaker when the service becomes unavailable or starts to exhibit high error rates. When the circuit breaker is open, requests to the service are immediately rejected, preventing further damage to the system. After a certain period of time or when the service health improves, the circuit breaker can be closed again, allowing requests to flow through.

```java
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
    .failureRateThreshold(50)
    .waitDurationInOpenState(Duration.ofMillis(1000))
    .ringBufferSizeInHalfOpenState(2)
    .ringBufferSizeInClosedState(2)
    .build();

CircuitBreaker circuitBreaker = CircuitBreaker.of("MyService", config);

Supplier<String> supplier = CircuitBreaker.decorateSupplier(circuitBreaker, () -> {
    // Perform the actual service logic here
    return "Hello, World!";
});

String result = Try.ofSupplier(supplier)
    .recover(throwable -> "Fallback")
    .get();
```

## Bulkhead vs Rate Limiter

The key difference between a bulkhead and a rate limiter lies in their objectives and the problems they address:

. | Bulkhead | Rate Limiter
----- | ----- | -----
Limit |  number of concurrent calls at a time | number total calls in given period of time
Focus on | isolating failures and preventing them from spreading across services | controlling the rate of requests or operations.
Concerned with |  system stability and resilience | managing resource consumption and protecting against abuse or overload.
Provide | fault isolation | traffic control

## Example

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