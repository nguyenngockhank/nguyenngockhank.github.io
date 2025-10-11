# Socket 

A socket is basically an **endpoint for sending or receiving data across a network**. It’s an **abstraction** that allows programs to communicate over TCP/IP (or other protocols) without worrying about the low-level details of packets, IP addresses, or hardware.


## Definition
A socket is a **software structure** (usually provided by the operating system) that allows an application to:
- Connect to another machine on the network.
- Send and receive data.
 
It’s like a door on your computer: you send data out, receive data in, and the socket manages how it flows over the network.


## Structure

> Socket = IP address + Port number

A socket is identified by:
- IP address – which device to talk to.
- Port number – which application/service on that device.
- Protocol – usually TCP (reliable) or UDP (fast, connectionless).

Example: `192.168.1.10:80` is a socket endpoint for HTTP on a device.

## Types of sockets
Type | 	Description
-------- | --------
Stream socket (TCP) |	Connection-oriented, reliable, guarantees order and delivery.
Datagram socket (UDP) |	Connectionless, faster, no guarantee of delivery or order.
Raw socket	 | Gives direct access to lower layers (used for ICMP/ping, custom protocols).

- `SOCK_STREAM` → TCP
- `SOCK_DGRAM` → UDP


## Things work without sockets

- Most application-level network communication uses sockets.
- Not all network communication involves sockets—hardware, protocols, and OS-level packet forwarding can happen entirely below the socket layer.

Scenario | 	How it works
---------- | ---------
Routing protocols (OSPF, BGP)   |	Routers exchange packets directly at Layer 3/4, often without using OS-level socket APIs.
Network devices (switches, NICs) |	Use MAC addresses and hardware logic (Layer 2), not sockets.
Low-level network tools	            | Tools like ping send ICMP packets, which can bypass standard TCP/UDP sockets via raw sockets.
Kernel-level communication |	OS kernel or drivers may move packets between layers without involving sockets at all.
Embedded devices / IoT |	Sometimes send/receive packets via microcontroller registers, not high-level socket APIs.


## Application Ports

In networking, different ports are used for various purposes. Generally, these port ranges can be divided into three categories. Below, you can find these port ranges:
- Well-Known Ports ( 1 to 1024 )
- Registered Ports ( 1025 to 49151 )
- Private Ports ( 49152 to 65535 )
