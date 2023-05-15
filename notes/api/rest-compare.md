---
tags: ['Comparison', 'DistributedSystem']
---
# RESTful Comparison

<TagLinks />

## Overall

![img](./api-architecture-style-comparison.jpeg)

Read more [soap-vs-rest-vs-graphql-vs-rpc](https://blog.bytebytego.com/p/soap-vs-rest-vs-graphql-vs-rpc)

## RESTful vs RPC


Communication between different software systems can be established using either RPC (Remote Procedure Call) or RESTful (Representational State Transfer) protocols, which allow multiple systems to work together in distributed computing.

Feature |  REST    | RPC 
--------| ---------| --------
Coupling | ✅ Weak coupling | ❌ Strong coupling 
Data format | text, XML, JSON  | Binary thirft, protobuf, Avro
Communication Protocol | HTTP | TCP
Performance |  ❌ Lower than RPC | ✅ High
Interface definition languge (IDL) | Swagger | thrift, protobuf
Client code generation | Auto-generated stub | Auto-generated stub
Language Framework  | SpringMVC, ... | gRPC, thrift
Developer friendness | ✅ human readable, easy to debug | ❌ human unreadable, hard to debug

When choosing between RPC and RESTful, consider your application's needs. RPC might be a better fit if you require a **more action-oriented approach** with custom operations, while RESTful would be a better choice if you prefer a **standardized, resource-based approach** that utilizes HTTP methods.

## RESTful vs GraphQl

Feature |  REST    | GraphQL 
--------| ---------| --------
Client-Server Arch | ✅ | ✅
Tooling Server | ✅ | ✅
Tooling Client | ❌ | ✅
Declarative data fetching | ❌ | ✅
Stateless | ✅ | ✅
Cacheable | ✅ | ❌ 
Format  | JSON, XML, HTML, Plain text | JSON
Methods | GET, POST, PUT, PATCH, DELETE, OPTIONS | Query & Mutation  & Subscription
Protocols Used | HTTP | HTTP, Websocket
Use cases | Public APIs | Mobile APIs, complex, nested data dependencies 

