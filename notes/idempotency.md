# Idempotency

https://www.youtube.com/watch?v=4OuaONkZw1I&ab_channel=HusseinNasser


https://zongwb.medium.com/idempotency-a-three-step-approach-d607895c2b93


## Idempotency Important for Messaging

## Idempotency != Safety


## 3 step approach

Would idempotency issues arise in **concurrent** applications?

Yes. Reasons include duplicate messages, duplicate requests.

Would idempotency issues arise in **single-threaded** applications?
Yes. Ditto.

Hence, as a general solution, we need to

**3 steps approach to idempotency**
- Step 1: Lock Resource
- Step 2: Check for the duplication
- Step 3: Execute Logic


## How to uniquely identify a request/operation?

We need an **idempotency key**

Typically

idempotency key = request_id + resource_id


https://www.cockroachlabs.com/blog/idempotency-and-ordering-in-event-driven-systems/



https://awesome-architecture.com/microservices/resiliency/idempotency/


https://betterprogramming.pub/architecting-distributed-systems-the-importance-of-idempotence-138722a6b88e