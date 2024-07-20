# gRPC in NodeJs

![gRPC](https://i.pinimg.com/originals/2c/eb/38/2ceb38ed0b65baa885b60544791469b1.jpg)


## Concepts

### RPC (Remote Procedure Call)

- A general concept in distributed systems where a program can execute a subroutine on another computer in a network.
- Acts like calling a local function, but across a network connection.
- Various RPC protocols exist, each with its own way of defining messages and data exchange.

### gRPC (gRPC Remote Procedure Calls)

- An open-source, high-performance RPC framework based on HTTP/2.
- Offers a standardized way to create, implement, and consume RPC APIs.
- Key characteristics:
  - **Protocol Buffers**: Uses Protocol Buffers for defining data structures and message formats. Protocol Buffers are language-neutral and efficient for network transmission due to their compact binary format.
  - **HTTP/2**: Leverages HTTP/2 for efficient multiplexing of requests and responses, leading to faster communication compared to traditional HTTP/1.1.
  - **Strongly Typed**: Enforces strong data typing for better code maintainability and catching errors early in development.
  - **Platform Neutral**: Supports various programming languages, making it suitable for heterogeneous environments.

### RPC vs. Traditional RPC

gRPC builds upon the core RPC concept but provides several advantages:

- **Performance**: Protocol Buffers and HTTP/2 improve efficiency and speed compared to text-based formats like JSON used in some RPC protocols.
- **Interoperability**: Language-neutral definition of data structures facilitates communication across different programming languages.
- **Developer Experience**: Strong typing and code generation tools streamline development and reduce errors.

## Example gRPC in Nodejs

[Quick start](https://grpc.io/docs/languages/node/quickstart/)

```bash
# Clone the repository to get the example code
git clone -b v1.56.0 --depth 1 --shallow-submodules https://github.com/grpc/grpc
# Navigate to the node example
cd grpc/examples/node
# Install the example's dependencies
npm install
# Navigate to the dynamic codegen "hello, world" Node example:
cd dynamic_codegen

node greeter_server.js

node greeter_client.js
```

### Code

```proto
syntax = "proto3";

package helloworld;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}

  rpc SayHelloStreamReply (HelloRequest) returns (stream HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
  Gender gender = 2;
}

enum Gender {
  UNKNOWN = 0;
  MALE = 1;
  FEMALE = 2;
}

```

SERVER JS
```js
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var PROTO_PATH = __dirname + '/protos/helloworld.proto';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);


function main() {
    var server = new grpc.Server();
    var hello_proto = grandpc.loadPackageDefinition(packageDefinition).helloworld;

    server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

/** Implements the SayHello RPC method. */
const getEnumByName = function (protoEnum, needle) {
  return protoEnum.type.value.find(p => {
    return p.name === needle
  })
}

function sayHello(call, callback) {
  const response = { 
    message: 'Hello ' + call.request.name, 
    gender: getEnumByName(hello_proto.Gender, 'UNKNOWN') 
  }
  callback(null, response);
}

main();
```

CLIENT

```js
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var PROTO_PATH = __dirname + '/protos/helloworld.proto';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var target = 'localhost:50051';
  var client = new hello_proto.Greeter(target, grpc.credentials.createInsecure());
  var name = "John Doe";

  client.sayHello({ name} , function(err, response) {
    console.log('Greeting:', response.message);
  });
}

main();

```

## Tools 

Using the gRPC request interface

### POSTMan 
[gRPC request interface](https://learning.postman.com/docs/sending-requests/grpc/grpc-request-interface/)

File > New > choose `gRPC` in modal

Choose tab `Service Defination` > `Import .proto file` > ...

## Proto Systax

[Detail protobuf](https://protobuf.dev/)

https://www.npmjs.com/package/@grpc/proto-loader


## Load balancing tools

**gRPC Load Balancing Policies**: gRPC provides built-in load balancing policies that can be used to distribute requests across multiple backend servers. These policies include round-robin, pick-first, and weighted round-robin. These policies are implemented on the client-side, allowing the client to choose the appropriate backend server based on the load balancing policy.

**Envoy Proxy**: Envoy is a high-performance, open-source proxy server that can be used as a load balancer for gRPC. It supports various load balancing algorithms, including round-robin, least connection, and random. Envoy can be deployed as a sidecar proxy alongside gRPC services or as a standalone load balancer in front of gRPC services.

**NGINX**: NGINX is a popular open-source web server that can also be used as a load balancer for gRPC. It supports various load balancing algorithms, including round-robin, least connection, and IP hash. NGINX can be configured to proxy gRPC requests to multiple backend servers, distributing the load evenly across them.

**Kubernetes**: If you are using Kubernetes for container orchestration, it provides built-in load balancing capabilities for gRPC services. Kubernetes uses a round-robin load balancing algorithm by default, but it can be customized to use other algorithms as well. Kubernetes load balancing ensures that incoming gRPC requests are distributed evenly across the available backend pods.

**Consul**: Consul is a service mesh and service discovery tool that can be used for load balancing in gRPC. It provides a built-in load balancer that supports various algorithms, including round-robin, least connection, and random. Consul can be integrated with gRPC services to automatically discover and load balance requests across multiple backend servers.