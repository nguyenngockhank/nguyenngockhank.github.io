
# Web Service 

## Web Service API Styles

### RPC API

*How can clients execute remote procedures over HTTP?*

Define messages that identify the remote procedures to execute and also include a fixed set of elements that map directly into the parameters of remote procedures. 

Have the client send the message to a Uniform Resource Identifier (URI) designated for the procedure.


### Message API

*How can clients send commands, notifications, orother information to remote systems over HTTP while avoiding direct coupling to remote procedures?*

Define messages that are not derived from the signatures of remote procedures. 

These messages may carry information on specific topics, tasks to execute, and events. 

Have the client send the message to a designated URI. 

Once the message is received at the server, examine its contents to determine the correct procedure to execute.

### Resource API

*How can client manipulate data managed by a remote system, avoid direct coupling to remote procedures, and minimize the need for domain-specific APIs?*

Assign all procedures, instances of domain data, and files a URI.

Leverage HTTP as a complete application protocol to define standard service behaviors. 

Exchange information by taking advantage of standardized media types and status codes when possible.



## Client-Service Interaction Styles

**Request/Response**: 

**Request/Acknowledge**:

**Media Type Negotiation**:

**Linked Service**:

## Request and Response Management