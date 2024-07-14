---
tags: ["Performance", "Overview"]
---

# Optimization Overview

<TagLinks />

## Best practices for code

![Best practices for code](https://i.pinimg.com/originals/a9/57/37/a95737bbc12eebbb446c5ef4954e7a86.jpg)
- Use efficient data structures & algorithms
- Avoid unnessessary code execution
- Use caching to improve perf 
- Optimize database query 
- Use profiling tools to identify perf bottlenecks

## FE Performance

### Web Optimization

![Web](https://i.pinimg.com/originals/3a/6b/b0/3a6bb0968b2dd04726d022e830cdf2f0.jpg)



### Web Perf Metrics

![Web Perf Metrics](https://i.pinimg.com/originals/bc/fe/7e/bcfe7e1622c57e02b805b8dd6936e61e.jpg)


### FE Cheatsheet 

![FE](https://i.pinimg.com/originals/16/99/a7/1699a73db8200995e4c12ecc9cbaca42.jpg)

- Compression
- Selective Rendering
- Loading sequence 
- Pritority-based loading 
- Pre-fetching
- Code splitting
- Tree shaking
- Dynamic imports

## API Performance

![API](https://i.pinimg.com/originals/9e/37/63/9e3763e98d29cb7b1b1f8bd3abb75f02.jpg)

### Reduce latency

![latency](https://i.pinimg.com/originals/57/a7/a2/57a7a2dd14780364932d4a19fc6cb71c.jpg)

- DB Indexing
    - Create the right indexes
    - Optimize & refactor slow running queries
- Caching
    - Store frequently accessed data in a cache
    - Minimize costly db lookups
- Load balancing
    - Distribute requests evenly between servers
    - Use the right LB type & the appropriate algorithm
- CDN 
    - Cache static content near the end-users
    - Reduce geographic distance to reduce latency
- Async processing
    - Dont block the request flow for running tasks
    - Execute such task in the background
- Data compression
    - Compress data before sending over network
    - use libs like gZip or zLib

## Database scaling

![DB Scaling](https://i.pinimg.com/originals/85/31/93/853193390c22d55b2a9ff1e4b9eebc0b.jpg)


## Cloud Cost

### Hidden costs
![Hidden costs](https://i.pinimg.com/originals/d9/d3/a8/d9d3a892ab6b5e9b6aa0e1a6f0411d9b.jpg)

### Techniques
![Techniques](https://i.pinimg.com/originals/55/fd/cb/55fdcb3137766587a0cca94cd6c17e56.jpg)