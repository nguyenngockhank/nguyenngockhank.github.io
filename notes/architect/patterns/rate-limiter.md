# Rate limiter 


**Algorithms**: 
- Token bucket
- Leaking bucket
- Fixed window counter 
- Sliding window log
- Sliding window counter

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


## Bulkhead vs Rate Limiter

**Bulkhead**

Limit number of concurrent calls at a time

Ex: Allow 5 concurrent calls at a time 

**Rate Limiter**

Limit number total calls in given period of time

Ex: Allow 5 calls every 2 second.
