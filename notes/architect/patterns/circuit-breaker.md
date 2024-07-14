---
tags: ['Pattern', "ResiliencePattern"]
---

# Circuit Breaker Pattern

The Circuit Breaker Pattern is a design pattern used in software development to handle and prevent failures in distributed systems. It is especially useful in scenarios where services or components communicate with each other over a network, such as in microservices architectures.

The Circuit Breaker Pattern is inspired by the electrical circuit breaker, which is designed to protect electrical circuits from damage caused by excessive current. Similarly, in software development, the Circuit Breaker Pattern is used to protect the system from failures and prevent cascading failures when a service or component becomes unavailable or starts to perform poorly.

The main idea behind the Circuit Breaker Pattern is to add a layer of protection between the calling code and the service or component being called. This layer monitors the health and availability of the service and can automatically open the circuit (similar to tripping a circuit breaker) if the service is not responding or is experiencing errors.

When the circuit is open, subsequent calls to the service are not made, and instead, a fallback mechanism is triggered. This fallback mechanism can be used to return a default value, provide cached data, or invoke an alternative service. By doing so, the Circuit Breaker Pattern helps to isolate the failure and prevent it from affecting the entire system.

Once the service or component recovers and becomes available again, the circuit can be closed, allowing subsequent calls to be made. However, the Circuit Breaker Pattern also introduces a mechanism to gradually close the circuit by allowing a limited number of test requests to be made. If these test requests fail, the circuit remains open, indicating that the service is still not fully recovered.

![Circuit Breaker Pattern](https://i.pinimg.com/originals/99/c6/7e/99c67e6d1d72684d57252529f48e4111.png)

## Implementing

Implementing the Circuit Breaker Pattern typically involves the following components:

1. State: The circuit breaker has three states: closed, open, and half-open. The closed state allows normal requests to be made to the service. The open state prevents requests from being made and triggers the fallback mechanism. The half-open state allows a limited number of test requests to be made to check if the service has recovered.

2. Monitoring: The circuit breaker continuously monitors the health and availability of the service. It tracks the number of failures and the response times of the service. If the number of failures or the response times exceed a certain threshold, the circuit breaker opens the circuit.

3. Fallback: When the circuit is open, the circuit breaker invokes a fallback mechanism to handle the request. This mechanism can be customized based on the specific requirements of the system.

4. Automatic Recovery: After a certain period of time, the circuit breaker allows a limited number of test requests to be made to check if the service has recovered. If these test requests succeed, the circuit is closed again, allowing normal requests to be made.


The Circuit Breaker Pattern provides several benefits, including fault tolerance, resilience, and improved system stability. It helps to prevent cascading failures, reduces the load on the failing service, and provides a fallback mechanism to handle failures gracefully.

## Example

In this approach, the client process tracks the number of failed requests. If the error rate exceeds a configured limit, a “circuit breaker” trips so that further attempts fail immediately. (If a large number of requests are failing, that suggests the service is unavailable and that sending requests is pointless.) After a timeout period, the client should try again and, if the new requests are successful, close the circuit breaker.

```java
// create once
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
                                    •failureRateThreshold(50)
                                    .waitDurationIn0penState(Duration.ofMillis(1000))
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
