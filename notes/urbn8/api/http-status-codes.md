# HTTP Status Codes

Every API **MUST** use the appropriate [HTTP Status Codes](https://github.com/for-GET/know-your-http-well/blob/master/status-codes.md) to communicate the result of a request operation.

Every API designer, implementer and consumer **MUST** understand the semantic of the HTTP Status Code she is using.



In general, the status code are officially divided into 5 kinds:

* `1xx` - [Informational](http://httpwg.org/specs/rfc7231.html#status.1xx) (also a _non-final_ response)
* `2xx` - [Successful](http://httpwg.org/specs/rfc7231.html#status.2xx)
* `3xx` - [Redirection](http://httpwg.org/specs/rfc7231.html#status.3xx)
* `4xx` - [Client error](http://httpwg.org/specs/rfc7231.html#status.4xx)
* `5xx` - [Server error](http://httpwg.org/specs/rfc7231.html#status.5xx)



Some specific usecases:

* 200 OK - Response to a successful REST API action.
* 301 Moved Permanently tells the client that the resource has moved, and it can create a new request if it wishes.
* 400 Bad Request - The request is malformed, such as message body format error.
* 401 Unauthorized - Wrong or no authentication ID/password provided.
* 403 Forbidden - It's used when the authentication succeeded but authenticated user doesn't have permission to the requested resource
* 404 Not Found - When a non-existent resource is requested. Caches will often perform so-called “negative caching” (i.e., assigning heuristic freshness lifetime to it), and automated agents like Web crawlers will use it as a signal that the resource isn’t there any more.
* 405 Method Not Allowed - The error checking for unexpected HTTP method. For example, the RestAPI is expecting HTTP GET, but HTTP PUT is used.
* 429 Too Many Requests - The error is used when there may be DOS attack detected or the request is rejected due to rate limiting
