# Load balancers

## Load balancer and API Gateway confusion

API gateway predominately does API management and provides various other key features such as IAM (Identity and Access Management), Rate limiting, circuit breakers. Hence, it mainly eliminates the need to implement API-specific code for functionalities such as security, caching, throttling, and monitoring for each of the microservice. Microservices typically expose the REST APIs for use in front ends, other microservices and 3rd party apps with help of API gateway.

However, normally, the API Management does not include load balancing function, so it should be used in conjunction with a load balancer to achieve the same.

In system architecture based on Azure, there is Azure Application Gateway which is a load balancer that runs on Layer 7 and provides more features than traditional load balancer (Layer 4) in terms of routing traffic using routing decisions based on additional attributes of HTTP request or content of traffic. This can also be termed as an application load balancer. 

It shall be used in conjunction by **Azure API Management** (API gateway). Azure has a **Traffic Manager** for operating at DNS level which uses DNS to direct client requests to the most appropriate service endpoint based on a traffic-routing method and the health of the endpoints. **Traffic manager** also uses the rules configured at the DNS level and enables dstribution of the the load over multiple regions and data centers. Within every region or data center, there shall be **application gateways** coupled with load balancers such that, the application gateways shall help in determining the application server to fetch response from and the load balancer shall help in load balancing.

![images](https://i.stack.imgur.com/Tih2R.png)

## Routing Algorithms 

### Round robin
The client requests are sent to different service instances in sequential order. The services are usually required to be stateless.

### Sticky round-robin
This is an improvement of the round-robin algorithm. If Alice’s first request goes to service A, the following requests go to service A as well.

### Weighted round-robin
The admin can specify the weight for each service. The ones with a higher weight handle more requests than others.

### Hash
This algorithm applies a hash function on the incoming requests' IP or URL. The requests are routed to relevant instances based on the hash function result.

### Least connections
A new request is sent to the service instance with the least concurrent connections.

### Least response time
A new request is sent to the service instance with the fastest response time.

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
