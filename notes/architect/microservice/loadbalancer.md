---
tags: ["Tools", "Performance", "Cache", "Overview"]
---

# Load balancer

<TagLinks />

![Load balancer overview](https://i.pinimg.com/originals/39/79/e7/3979e7fe0e40656655490dddba653486.jpg)

## Use cases
![Load balancer use cases](https://i.pinimg.com/564x/db/4f/eb/db4feb17e82e66ebd4cc2a82ec56f07e.jpg)

- Traffic distribution
- High Availability
- SSL termination
- Session Persistence
- Scalablitity 
- Health Monitoring

## Reverse proxy vs. API gateway vs. load balancer

![compare](https://i.pinimg.com/originals/d5/ec/53/d5ec538270b4b742a47b44ee7f600e9a.jpg)

As modern websites and applications are like busy beehives, we use a variety of tools to manage the buzz. Here we'll explore three superheroes: Reverse Proxy, API Gateway, and Load Balancer.

🔹Reverse Proxy: change identity
- Fetching data secretly, keeping servers hidden.
- Perfect for shielding sensitive websites from cyber-attacks and prying eyes.

🔹API Gateway: postman
- Delivers requests to the right services.
- Ideal for bustling applications with numerous intercommunicating services.

🔹Load Balancer: traffic cop
- Directs traffic evenly across servers, preventing bottlenecks
- Essential for popular websites with heavy traffic and high demand.

In a nutshell, choose a Reverse Proxy for **stealth**, an API Gateway for organized **communications**, and a Load Balancer for **traffic control**.  Sometimes, it's wise to have all three - they make a super team that keeps your digital kingdom safe and efficient.


## Cloud cheatsheet
![Load balancer cloud](https://i.pinimg.com/originals/df/b3/e9/dfb3e9118bf3eb2ec196203ee41c8e53.gif)

## Routing Algorithms 
![Load balancing algorithms](https://i.pinimg.com/originals/0f/14/f0/0f14f06051422509611730ac1b1897c6.jpg)

### LB Techniques

![Load balancing Techniques](https://i.pinimg.com/originals/9e/06/72/9e0672a6bd30e5c46c90baacec6a0c92.webp)


- **Round robin**: The client requests are sent to different service instances in sequential order. The services are usually required to be stateless.
- **Sticky round-robin**: This is an improvement of the round-robin algorithm. If Alice’s first request goes to service A, the following requests go to service A as well.
- **Weighted round-robin**: The admin can specify the weight for each service. The ones with a higher weight handle more requests than others.
- **Hash**: This algorithm applies a hash function on the incoming requests' IP or URL. The requests are routed to relevant instances based on the hash function result.
- **Least connections**: A new request is sent to the service instance with the least concurrent connections.
- **Least response time**: A new request is sent to the service instance with the fastest response time.

## Tools

- **NGINX**: NGINX is a widely used open-source web server and reverse proxy server that can also function as an API Gateway. It offers features like load balancing, caching, SSL termination, and request routing. NGINX can be configured to handle API requests efficiently and provides high performance and scalability.

- **Kong**: Kong is an open-source API Gateway built on top of NGINX. It provides a comprehensive set of features such as request/response transformation, rate limiting, authentication, and more. Kong also supports plugins that extend its functionality, making it highly customizable and flexible.

- **Apigee**: Apigee is a full-featured API management platform that includes an API Gateway. It offers a wide range of capabilities, including security, analytics, developer portal, and monetization. Apigee is a cloud-based solution and provides a user-friendly interface to manage APIs effectively.

- **AWS API Gateway**: AWS API Gateway is a fully managed service provided by Amazon Web Services. It allows you to create, publish, and manage APIs at any scale. AWS API Gateway integrates well with other AWS services and provides features like authentication, authorization, caching, and monitoring.

- **Azure API Management**: Azure API Management is a comprehensive API management solution offered by Microsoft Azure. It includes an API Gateway that enables you to secure, publish, and monitor APIs. Azure API Management also provides features like developer portal, analytics, and developer engagement tools.

- **Tyk**: Tyk is an open-source API Gateway that offers features like rate limiting, authentication, request/response transformation, and more. It can be deployed on-premises or in the cloud and provides a user-friendly dashboard to manage APIs effectively.

## A load balancer for a database?

In a microservice architecture, it is common to have multiple instances of a database to handle the increased load and ensure high availability. However, using a load balancer directly for the database is not a recommended approach.

Load balancers are typically used to distribute incoming network traffic across multiple servers or instances to optimize performance and ensure fault tolerance. They work at the network layer and are designed to handle HTTP requests, TCP connections, or UDP packets.

On the other hand, databases operate at a higher level, dealing with data storage, retrieval, and manipulation. They have their own mechanisms for handling concurrency, consistency, and data integrity. Load balancing at the database level requires a different approach.

Instead of using a load balancer directly for the database, a common practice in a microservice architecture is to use a database clustering or replication mechanism. This involves setting up multiple instances of the database and synchronizing the data between them.

There are different approaches to database clustering, such as master-slave replication or multi-master replication. These mechanisms ensure that the data is replicated across multiple instances, providing fault tolerance and high availability.

To distribute the load across the database instances, you can use a connection pool or a database proxy. A connection pool manages a pool of database connections and distributes the workload among the available instances. A database proxy acts as an intermediary between the application and the database, routing the requests to the appropriate instance based on the load or other criteria.

Using a connection pool or a database proxy allows you to distribute the workload across the database instances without the need for a load balancer. It also provides additional benefits such as connection pooling, query caching, and request routing based on the application's needs.

In summary, while load balancers are not typically used directly for databases in a microservice architecture, you can achieve load balancing and high availability by using database clustering mechanisms and connection pooling or a database proxy. These approaches ensure that the workload is distributed across multiple database instances, providing fault tolerance and scalability.

