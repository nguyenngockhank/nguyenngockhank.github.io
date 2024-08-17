# Rate limiter Pattern

The rate limiter pattern is a design technique used to control the rate at which incoming requests or actions are processed by a system. It's essentially a mechanism to manage the throughput of a service by limiting the number of requests it can handle within a specific timeframe.  

**Why is it important?**
- **Protects from overload**: Prevents system crashes due to excessive traffic.   
- **Fairness**: Ensures equal access to resources for all users.   
- **API abuse prevention**: Stops malicious attacks like DDoS.
- **Resource management**: Optimizes resource utilization.   


## Algorithms
- **Fixed Window Counter**: Simplest approach, counts requests within a fixed time window.   
- **Sliding Log Window**: Maintains a sliding window of fixed size and counts requests within that window.   
- **Token Bucket**: Continuously generates tokens at a fixed rate. Each request consumes a token.   
- **Leaky Bucket**: Similar to Token Bucket but with a leakage rate, allowing for burstiness. 

## Token bucket

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

## Leaking bucket

Imagine a leaky bucket. Water (packets) is poured into the bucket at an arbitrary rate. However, there's a hole at the bottom, allowing water to leak out at a constant rate. If the water is poured in faster than it can leak out, the bucket will eventually overflow.

### How it Works
In the context of network traffic, the leaky bucket algorithm operates similarly:
- **Bucket**: Represents a buffer to store incoming packets.
- **Input Rate**: Packets arrive at the bucket at a variable rate.
- **Output Rate**: Packets are removed from the bucket and sent at a constant rate.
- **Overflow**: If the bucket fills up before packets can be removed, incoming packets are typically dropped.

### Key Characteristics
- **Smooths traffic**: It ensures a constant output rate regardless of the input burstiness.
- **Simple implementation**: Relatively easy to implement compared to other algorithms.
- **Packet loss**: Can lead to packet loss if the input rate exceeds the output rate for an extended period.


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


## Bulkhead vs Rate Limiter

**Bulkhead**

Limit number of concurrent calls at a time

Ex: Allow 5 concurrent calls at a time 

**Rate Limiter**

Limit number total calls in given period of time

Ex: Allow 5 calls every 2 second.
