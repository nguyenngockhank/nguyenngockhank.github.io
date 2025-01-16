# Architectual scalability 

## Overview 

Scalability is the ability of a system to handle an increased workload without losing performance

![Crash course Architectual scalability](https://i.pinimg.com/736x/ca/b6/91/cab6918414f243eb10beff0b85894991.jpg)

::: tip
AVOID TIGHT COUPLING
:::


## Scaling Data layer

![Data layer](https://i.pinimg.com/originals/ea/b7/fe/eab7feb3d7f29dbb574e03bb6e6264fd.jpg)

- Replication
    - Leader follower
    - Multi-leader
    - Leaderless
- Sharding
    - Scalability
    - Improved perf
    - Availability
- Distributed cache
    - Cache clusters
    - Key Distribution
    - Cache Invalidation
- CQRS Pattern
    - Optimized perf
    - Scaling reads & writes
    - Flexibility in storage solutions

## DB Scaling

![DB Scaling](https://i.pinimg.com/originals/85/31/93/853193390c22d55b2a9ff1e4b9eebc0b.jpg)

- Denormalization: Reduce complex joins to improve query performance
- Indexing: analyzae the query patterns of the app & create the right index
- Marterizalized views: pre-compute complex query results & store for faster access
- Vertical scaling: boost the DB server by adding more CPU, RAM, ...
- Sharding: Load resources that the page will need before they're needed
- Replication: Create replicas of the primary db on different servers for scaling the reads
- Database caching: Store frequently accessed data in a faster storage layer

## Load balancing
![LB use cases](https://i.pinimg.com/originals/a3/e2/cc/a3e2cc55eb078dfad046b58aca6d3e0e.jpg)

Load balancing use cases: 
- Traffic distribution
- High availability
- SSL termination
- Session persistence
- Scalability
- Health monitoring

## API Gateway 

API Gateway: A Centralized Hub for API Management

![API Gateway use cases](https://i.pinimg.com/originals/f4/6f/12/f46f1212ed3c9840e7e1c8d50d257d06.png)

API Gateway use cases: 
- **Build an ecosystem**: Partners collaborate to provide better integrations in the ecosystem
- **Shareholder for the Economy**: Monetization of APIs for developers & developer teams
- **Multi-platform integration**: Provide seamless compatibility among different platforms


