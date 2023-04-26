# Websocket Notes

The WebSocket protocol is a modern chat messaging protocol. 

It provides a persistent channel that sends text and binary data in **both directions** (full-duplex). 

The data can even be sent simultaneously, if needed. 

While originally designed to facilitate the communication between a server and browser, WebSocket can be (and widely are) used in **mobile apps**.

## WS vs HTTP

HTTP and WebSocket both are communication protocols used in client-server communication. 

Connection via WS | Connection via HTTP
------------------| --------------------
Bi-directional communication | Unidirectional communication 
Connection is kept alive untile terminated by client or server| Connection is terminated after request/response
Real time data is received on a single communication channel & can be continuously updated | HTTP data requests use simple RESTfull API. They send a ome-tine current state response for a query
Best used for applications in need of quick connections & realtime data | Best used for applications that dont reqire quick, 2-way connections
E.g: crypto market cap, multiplayer game, collaborative platform, messaging app | E.g: Browser search, email, social media updates, final game scores, ...

## WS vs XMPP

**XMPP** (Extensible Messaging and Presence Protocol) is an open standard communications protocol that allows for transmitting XML fragments between a server and client. A client, in this case, would be a browser or a mobile app. XMPP is one of the oldest and most widely supported instant messaging protocols. It has been in use for more than two decades.


Pros of XMPP      | Pros of WS 
------------------| --------------------
An open, decentralized standard that makes it extensible & flexible | A persistent connection which makes it one of fastest transfer protocols
Great securtiy features such as authentication, authorization, and encryption | Multiple users can be connected through a single connection - lowering latency
Two decades of use & widespread support | can send any binary or text-based data type
Can stack with other protocols such as Websocket to remove some limitations | Extensible & flexible - can connect multiple types of protocols together


Cons of XMPP      | Cons of WS 
------------------| --------------------
Not optimized for transfering binary data | Fewer built-int security measures than XMPP
Decentralized architecture emans slower transmission speed | Doesnt provide any messaging or presense functionality & requires an additional chat protocol to provide these functionalities

- [XMPP is not dead.](https://www.reddit.com/r/xmpp/comments/3gssk2/is_xmpp_dead/)
- [Why XMPP failed and SMTP didn't?](https://news.ycombinator.com/item?id=31519122)


## Horizontal Scalable 

### Issue #1: State

Start with the HAProxy 

```
defaults
  mode http
  option http-server-close
  timeout connect     5s
  timeout client      30s
  timeout client-fin  30s
  timeout server      30s
  timeout tunnel      1h
  default-server inter 1s rise 2 fall 1 on-marked-down shutdown-sessions
  option forwardfor

frontend all
  bind 127.0.0.1:8080
  default_backend backends

backend backends
  server srv1 127.0.0.1:8081 check
  server srv2 127.0.0.1:8082 check
```

By default, HAProxy is using a **round-robin** strategy 

**Most REST APIs are stateless.** It means that nothing related to a single user making a request is saved on an instance itself. The thing is, it is not the same case with WebSockets.

![issue1](./img/websocket-load-balancing-issue.png)

#### Solution: Sticky sessions

**Sticky sessions**  (sticky connection)

```
backend backends
  balance leastconn
  cookie serverid insert
  server srv1 127.0.0.1:8081 check cookie srv1
  server srv2 127.0.0.1:8082 check cookie srv2
```

- Instead of using `round-robin`,  go with `leastconn` => new user is connected to the instance with the lowest overall number of connections.
- Sign every request from a single user with a cookie. It will contain the name of the backend to be used.

### Issue #2 Broadcasting

The WebSocket Server **knows only about clients connected to this specific instance**

#### Solution: Pub/Sub

The easiest option is to introduce communication between different instances. All of them could be subscribed to a specific channel and handle upcoming messages.

There are many ready-to-go solutions, like Redis, Kafka, or Nats.

## Refs

- [How to scale WebSocket – horizontal scaling](https://tsh.io/blog/how-to-scale-websocket/)