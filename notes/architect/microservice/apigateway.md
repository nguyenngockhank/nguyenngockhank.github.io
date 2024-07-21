# API Gateway


## What does API Gateway do?

![API Gateway do](https://i.pinimg.com/originals/5e/94/35/5e94357c0c9d77000b237df663cdd4ee.jpg)
- Parameter validation
- Allow-list / Deny-list
- Authentication / Authorization
- Rate limit
- Dyammic routing
- Service Discovery
- Protocol Conversion
- Error handling
- Circuit break
- Logging / monitoring
- Cache

### Use cases
![API Gateway use cases](https://i.pinimg.com/originals/f4/6f/12/f46f1212ed3c9840e7e1c8d50d257d06.png)

## Ingress Controller vs API Gateway

### Ingress Controller
An Ingress Controller is a component of the Kubernetes ecosystem that manages external access to services within a cluster. It acts as a reverse proxy and load balancer, routing incoming traffic to the appropriate services based on the rules defined in the Ingress resource.

The primary purpose of an Ingress Controller is to handle HTTP and HTTPS traffic at the application layer. It provides features like SSL termination, path-based routing, and request/response transformations. Ingress Controllers are typically deployed within the Kubernetes cluster and are responsible for routing traffic to services running inside the cluster.

### API Gateway
An API Gateway, on the other hand, is a standalone component that acts as a single entry point for all client requests. It sits between the clients and the microservices, providing a unified interface for accessing multiple services. The API Gateway is responsible for handling authentication, authorization, rate limiting, caching, and other cross-cutting concerns.

Unlike an Ingress Controller, an API Gateway is not limited to a specific container orchestration platform like Kubernetes. It can be used in any architecture, including monolithic and microservices. API Gateways are often deployed as separate services or as part of a service mesh.

### Key Differences
The main differences between an Ingress Controller and an API Gateway are as follows:

1. **Scope**: An Ingress Controller is specific to Kubernetes and is responsible for routing traffic within a cluster. An API Gateway, on the other hand, can be used in any architecture and provides a unified interface for accessing multiple services.

2. **Functionality**: An Ingress Controller primarily focuses on routing HTTP and HTTPS traffic within a cluster, while an API Gateway provides additional features like authentication, authorization, rate limiting, and caching.

3. **Deployment**: Ingress Controllers are typically deployed within the Kubernetes cluster, while API Gateways can be deployed as separate services or as part of a service mesh.

4. **Flexibility**: An API Gateway offers more flexibility in terms of customization and extensibility. It allows you to implement custom logic and policies for handling requests and responses.

5. **Ecosystem**: Ingress Controllers are tightly integrated with the Kubernetes ecosystem and leverage Kubernetes-specific features like Ingress resources. API Gateways, on the other hand, have a broader ecosystem and can be integrated with various tools and frameworks.

## API gateway in the Kubernetes ecosystem 

Implementing an API gateway in the Kubernetes ecosystem is crucial for managing and securing microservices-based architectures. It acts as a single entry point for all incoming requests and provides various functionalities such as routing, load balancing, authentication, and rate limiting. There are several ways to implement an API gateway in the Kubernetes ecosystem, and I will discuss a few popular options below:

**Ingress Controllers**: Kubernetes Ingress is a built-in resource that allows you to define rules for routing external traffic to services within the cluster. Ingress controllers, such as Nginx Ingress Controller or Traefik, can be deployed in the cluster to handle incoming requests and route them to the appropriate microservices based on the defined rules. Ingress controllers also support SSL termination, load balancing, and other advanced features.

**API Gateway as a Sidecar**: Another approach is to deploy an API gateway as a sidecar container alongside each microservice. This allows each microservice to handle its own API gateway responsibilities, such as authentication and rate limiting. This approach provides more fine-grained control over each microservice's gateway configuration but can increase the complexity of managing multiple gateways.

**Service Mesh**: A service mesh, such as Istio or Linkerd, provides a dedicated infrastructure layer for managing service-to-service communication within a Kubernetes cluster. It includes features like traffic routing, load balancing, and security. Service meshes can also act as an API gateway by configuring routing rules and policies at the mesh level. This approach centralizes the management of API gateways and provides additional observability and control over the traffic flow.

**Custom API Gateway**: If none of the above options meet your requirements, you can build a custom API gateway using frameworks like Express.js or Spring Cloud Gateway. This approach gives you complete control over the gateway's functionality and allows you to tailor it to your specific needs. However, building a custom gateway requires more development effort and ongoing maintenance.