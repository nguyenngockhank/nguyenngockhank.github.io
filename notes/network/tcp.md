# Transport layers (L4)

## TCP - Transmission Control Protocol
- Type: Connection-oriented, reliable.
- Key features:
    - Handshake: 3-way handshake to establish a connection.
    - Reliable delivery: Guarantees packets arrive in order, retransmits lost packets.
    - Flow control: Prevents sender from overwhelming receiver. (windowing)
    - Error checking: Uses checksums for data integrity.
- Use cases: HTTP/HTTPS, FTP, SMTP, Telnet — anywhere you need reliable communication.

### TCP connections

When a client connects to a server, the client uses a **random high (ephemeral) port** for its side of the connection

That’s why **response traffic** comes from a **different port range (1024–65535)** — `not the same one` used by the server.

Example:

Role |	IP | 	Port |	Direction
----- | ----- | ------ | ---
Client (App server) |	10.0.1.10 |	TCP 45,678|	→ outbound
Server (DB) |	10.0.2.20	| TCP 3,306| 	← inbound

#### ephemeral ports

> “Ephemeral” = short-lived.

When a client (e.g. browser, app, EC2 instance) initiates an outbound TCP connection,
the OS automatically picks a **temporary high-numbered port** (typically between 1024–65535)
to uniquely identify that session.

**This allows thousands of simultaneous connections to different servers or ports.**

#### Socket 

> Socket = IP address + Port number

Imagine a web server:

```
Server socket = 203.0.113.5:443
```

And your browser on your laptop:

```
Client socket = 192.168.1.10:51823
```

When they connect, together they form a **TCP connection** defined by **4-tuple:**: 

```
(Client IP, Client Port, Server IP, Server Port)
```

This 4-tuple is **unique** — it identifies one specific **TCP session**.

**Why this matters**
- Multiple clients can connect to the same server port (e.g. 443) because each has a different source port.
-  A single client can also open multiple simultaneous connections to the same server
(each with a different ephemeral port).


### TCP-3 way handshaking

Step |	Who Sends |	What | 	Purpose
----- | -------- | ----- | -------
1	 | Client → Server  |	`SYN` with `ISN` |	Client wants to open a connection and tells server its starting sequence number.
2  |	Server → Client | 	`SYN-ACK` | 	Server acknowledges client’s SYN and sends its own sequence number.
3	 | Client → Server	 | `ACK` |	Client acknowledges server’s SYN; connection is established.

- ISN: initial sequence number  
- SYN: Synchronize
- SYN-ACK: Synchronize + Acknowledge


```
Client                                Server
  | ----- SYN (seq=m)           ------> |
  | <---- SYN-ACK (seq=n, ack=m+1) ---- |
  | ----- ACK (ack=n+1).          ----> |
Connection Established ✅
```

![3 way handshaking](https://afteracademy.com/images/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-establishing-connection-6a724e77ba96e241.jpg)

https://afteracademy.com/blog/what-is-a-tcp-3-way-handshake-process/


### Header Format 

![Header format](https://www.lifewire.com/thmb/irn835md4Hf2FmoEbh1rdAVNjTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tcp-headers-f2c0881ea4c94e919794b7c0677ab90a.jpg)

### TCP Protocols 


Protocol / App	|   Port |  	Use Case | 	Why UDP
----------- | ------- | ------ | --------
HTTP	| 80	| Web browsing |	Reliable delivery of web pages
HTTPS	| 443 |	Secure web browsing |	Encrypted, reliable delivery
HLS  | 80/443 | Streaming video/audio | Uses HTTP over TCP for reliable segment delivery
WebSocket | 80 / 443 | Real-time bidirectional communication | Runs over TCP, reliable and ordered delivery
FTP (Data) | 	20	    | File transfer (data)	| Reliable file transfer
FTP (Control) | 	21	| File transfer (commands)	| Connection-oriented, reliable
SFTP | 115 | Secure file transfer over SSH | Reliable and encrypted
SSH |	22	| Secure remote login | 	Reliable, encrypted connection
Telnet	| 23 |	Remote login |	Reliable terminal access
SMTP	| 25 |	Sending email | 	Reliable delivery of messages
POP3	| 110 |	Receiving email |	Ensures email integrity
IMAP	| 143 |	Email management |	Reliable access to mailboxes
MySQL	| 3306 |	Database communication	Reliable query/response
PostgreSQL |	5432 |	Database communication	Reliable query/response
Microsoft SQL Server |	1433 |	Database communication	Reliable query/response
LDAP |	389	 | Directory services |	Reliable directory queries
SMB / CIFS |	445	| File sharing |	Reliable file transfer and access
RDP |	3389 |	Remote desktop |	Reliable remote desktop sessions



## UDP - User Datagram Protocol

- **Type**: Connectionless, unreliable (best-effort).
- **Key features**:
    - No handshake: Just sends packets.
    - No guarantee: Packets may arrive out of order or get lost.
    - Low overhead: Very fast, minimal headers.
- **Use cases**: DNS queries, VoIP, video streaming, online gaming — anywhere speed is more important than reliability.

### UDP Protocols 

Protocol / App	|   Port |  	Use Case | 	Why UDP
----------- | ------- | ------ | --------
DNS	        | 53	    | Name resolution |	Fast, small queries
DHCP & BOOTP server |	67	| IP address assignment |	Simple request/response
BOOTP User (Client) |	68	| IP address request	| Simple request/response
TFTP	            | 69	| File transfer (simple) |	Lightweight, low overhead
NTP                 | 123	| Time synchronization |	Frequent, small updates
ISAKMP	             | 500	 | VPN key exchange  |	Fast, connectionless negotiation
SNMP	             | 161	 | Network device monitoring	 | Lightweight management queries
SNMP Trap	             | 162	 | Network alerts	 | Asynchronous notifications, low overhead
Syslog                     |	512  |	Log messages	 | Fast, fire-and-forget logging
RTP / RTSP	 | dynamic	 | Live streaming	 | Low latency, tolerant to loss
WebRTC	 | dynamic	 | Video/audio calls |	Real-time, tolerant to loss
Online games  |	dynamic  |	Multiplayer game updates |	Fast, low latency
IPTV multicast  |	varies  |	Broadcast TV |	Efficient multi-recipient delivery

*Note*: 
- BOOTP:  Bootstrap Protocol
- RTP: Real-time Transport Protoco
- RTSP:  Real Time Streaming Protocol

### UDP & Security 

Security is less common but possible, using specialized protocols (like DTLS or SRTP):
- DTLS (Datagram Transport Layer Security) → TLS-like security over UDP.
    - Used in WebRTC, some VPNs, VoIP.
- IPSec in transport mode → can secure UDP traffic.

Security on UDP is harder because you can’t assume packet delivery or ordering. 


## TCP vs UDP

Feature	| TCP |	UDP
------- | ----- | ------
Connection	|  ✅ | 	No
Reliability |	 ✅ Guaranteed |	No
Secure |  ✅  |	Not common
Order |  ✅	Maintained | 	Not guaranteed
Speed	| Slower |	 ✅ Faster
Header size	| 20 bytes |	8 bytes

![TCP vs UDP](https://ipcisco.com/wp-content/uploads/2018/10/tcp-vs-udp-comparison-ipcisco.com_.png)

- Checksum
- Acknowledgement
- Re-transmission (timeout & ACK dup)
