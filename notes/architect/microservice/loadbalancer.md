# Load balancers

## Load balancer and API Gateway confusion

API gateway predominately does API management and provides various other key features such as IAM (Identity and Access Management), Rate limiting, circuit breakers. Hence, it mainly eliminates the need to implement API-specific code for functionalities such as security, caching, throttling, and monitoring for each of the microservice. Microservices typically expose the REST APIs for use in front ends, other microservices and 3rd party apps with help of API gateway.

However, normally, the API Management does not include load balancing function, so it should be used in conjunction with a load balancer to achieve the same.

In system architecture based on Azure, there is Azure Application Gateway which is a load balancer that runs on Layer 7 and provides more features than traditional load balancer (Layer 4) in terms of routing traffic using routing decisions based on additional attributes of HTTP request or content of traffic. This can also be termed as an application load balancer. 

It shall be used in conjunction by **Azure API Management** (API gateway). Azure has a **Traffic Manager** for operating at DNS level which uses DNS to direct client requests to the most appropriate service endpoint based on a traffic-routing method and the health of the endpoints. **Traffic manager** also uses the rules configured at the DNS level and enables dstribution of the the load over multiple regions and data centers. Within every region or data center, there shall be **application gateways** coupled with load balancers such that, the application gateways shall help in determining the application server to fetch response from and the load balancer shall help in load balancing.

![images](https://i.stack.imgur.com/Tih2R.png)

## Reverse proxy vs. API gateway vs. load balancer

![compare](https://lh3.googleusercontent.com/pw/ABLVV85NUp0j2suINAld47fvfH8_q-_YA3rrLxL_3f4xqhafrNjr33Jtzim_WZfUVtvvPhNVmc-SWhkcZvr66LMdi4CHi9EstF6EPlanVgdEpd__94stjtrdnSf6Y72c5ae2gR38FpJICxpg-wOHOmd1STwd7x3AvDfj-YKeo97a8dMG2ZrcImmS15orO8Y_3NsdBgUi5oXqm8OSzqwIhvQYeFehfsDG9Wux86n1BlKLKMmDk6BwolyyxFOZVoY4ouDfRM3fXZSg5KSsUXF9iwKuQ7QXfaoP53gdekQCW56A62HiQWSpLgnFRIaSusIAbEwyVw2CncetHhVSxRx_tHKxvl6jDzB3agkUnf7vKJ7O4X1fgpB9IfviauPGgq2u1nOR9rI72Bs7I_5srGuyYCsBWGcH2ldmsRb3LV3zd0vb1HM5hEXogn_6YjzC2yaEO3Xqd30RXnfVBSNo6avxoYFwe-Ac7_9tAEAUKa2PjcWOoqUt3mEPqfCrHTEtYotSVhWio1lyKmrCoT0UxRhNY9eBMtOoYIaYODZZNElUD6bGMVkv3tNo8UElDngHXeO2oQC07EH8gMidDW1QBRtHfRn7lDoSxqMdrXwEkOvToNFhJfCEPJZZbETmUHcc2fz53QNyt5uNZ6Wy4QS2nTLKTNqRPwPF7JsnSbJrKoQx3OhWpiMzqqKI8Qim0wdvf6ziVmMAztru95qDt5AfLUH13mBsBHmN1ujcC4NkFd1jwgCSS2OTxd5X8rVk6BKE8YNJWsx6nIBmc_8oIqquVg-OJuCrQNGju3LLnNRiG2hdfhbOoSCGqTcx2UVn-D0WVoObJ5Os63aaNsScsSbh9t8AHnPwvL1DkxqWvydbnUPfLwvrjyaUreVSulWMBKKzTBDwTS5v2rmmiOvug9CyLjdZFjjpEy3FSovPojrQ6iSBJbgoZg=w783-h925-s-no-gm)

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

In a nutshell, choose a Reverse Proxy for stealth, an API Gateway for organized communications, and a Load Balancer for traffic control.  Sometimes, it's wise to have all three - they make a super team that keeps your digital kingdom safe and efficient.

## Routing Algorithms 

![techniques](https://lh3.googleusercontent.com/pw/ABLVV86Qi57-XGwhzrNhBWSPLtDPHYqsHdvThHM-3TrDAgRUNXTi9YyJKc3zz2P7DMLcAhBgQCjBHJJRfTOwzHcBgBNCE-X5786FB-h09lU9ssglsVyNr5vNjDF1I2lOOt_1ECda3tPlOPtASei4fwmRXkVCHcb63jExAfg2JVpbQme502zq84HNFFkj3O1eUQRkTcnobvtklc9UVSbxyRlQ_TzmG8sSesbfvWnTUK_LNU9FjBh5-h8KOmbYVVlRg4s6-yUb8UvuTtZsXnOp5gYKl93Dgb5pjaSaVlIQn1HgZbhTTgNqojKhygclXfjR0-LRLQ735GSxUIvzughwLrvcagcsXEjEF_EXM318k_Zz04QBca0p4vlC0UfY_FcEfhx8gBi2dC7mzm41BnMsd18uo9uVOmGnF-aw0gRj8lHvJgjBE3yoiNSJ-QzDNChyiDEyiGEzfb5xM2n4B6bx1COXHuaba0B8bVOQF9t33sv40rpcdjmzxZDeGOEqTJ0YK48RDZF3yE1XvtzfX0t839uLK3y3Onl0TFKDIfR48M909bvxK3_8scx9jS-m5AcB6NCGq3uEQDxSdLnWjYBAfkAcFiqCPyVH3qqEwoGGU1k0TfQMHw9WflRjSF_AjgW3lwSExfjaUOrMt9iLav8sNd9aJ3xzAkQfvOXCe9YmQatxSzfoDDuJufc5PQpoFEhT82pT9QbFEWmWsqgkk70JwoqvHCzOGURXlr5UpSHhDcLVvcsQywAUl6ZtPwiH-yAUqVUxst02L29I6aJ8gkThuRqlhYbKgXVuCFmsANTUV_niYXbxHer69HzfkYONIP0GNltOsmWeL-QH7ZS8dQkdC52whJ6cNT1HwdVywNzzlshg6KiQ26soXNcAqWFKA0f1QEnN7xhotvlEVxjOqmgx-l1NNUatNmp9lVb7f_8G76TRzg=w720-h900-s-no-gm)

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

