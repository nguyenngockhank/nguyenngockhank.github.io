# Rate limitting

[Bài viết tham khảo](https://nghethuatcoding.com/2019/06/15/thiet-ke-api-rate-limiting/)

2 Thuật toán cơ bản: **Fixed Window**, **Sliding Window**

- Fixed Window:  Request được tính trong khung thời gian cố định 
- Sliding Window: Khung thời gian được tính khi request được gửi đến 


## Implemented by Khank

Thuật toán dựa trên nhu cầu cá nhân, không theo sách vở

Structure `user_limitter` trong Redis

```
user_id: {count, start_time}
``` 

```javascript
const FIX_FRAME_TIME = 60000; // 1 mins
const MAX_REQUEST_PER_MIN = 100; 

const requested_time = Date.time() ; 

/// grab `user_limitter` from redis instead of random value
//  example after get: user_limitter =  { count: 111, start_time: 11111111}; 

if(requested_time - user_limitter.start_time >= FIX_FRAME_TIME) {
    /// valid request 
    /// reset user_limitter
    user_limitter = { count: 1, start_time: requested_time};
} else if (user_limitter.count > MAX_REQUEST_PER_MIN) {
    /// valid request 
    user_limitter.count++;
} else {
    //// this case: request will be rejected
    res.header(429); // too many request 
}
```

Nếu phân tán Redis, thì nhớ [RedisLock](https://redis.io/topics/distlock)