# Internet Protocol 

- Routable & routed protocol
- Used at layer 3 (Network) 
- IP is the most widely used implementation of a hierarchical network-addressing scheme
- IP is a connectionless, unreliable, best-effort delivery protocol. Layer 
- Packet includes **header** - addressing & other control information + **actual data** - whatever is passed down from the higher layers.

## Connection oriented network services
- A connection is established between the sender & the recipient before any data is transfered

**Circuit switched**
- all packets travel sequentially across the same physical circuit, or more commonly, across the same virtual circuit

## Connectionless network services
- they treat packet separately
- IP is a connectionless system

**Packket switched**
- When the packets (datagram) pass from source to destination, they can:
    - switch to different paths
    - arrive out of order
- Devices (routers) make the path determination for each packet based on a variety of criteria. Some of the criteria may differ from packet to packet.

## Anatomy of an IP packet

![Anatomy](./img/anatomy-ip-packet.svg)

- Length: 4 bits - Header length
- Service type: 8 bits - how the datagram should be handled by the routers
- Packet length: 16 bits => 2<sup>16</sup> = 65535 bytes
- Identification: 16 bits, used to distinguish the fragments of a datagram from those of others, help in reassembling the datagram fragments
- DF: 1 bit - **Dont Fragment Flag** this datagram
- MF: 1 bit - **More Fragments Flag** if 1 and 0 if the last
- Fragment Offset: 13 bits - sequence of fragment from 0 => n
- Time to live: counter decreases to 0, avoid datagrams from looping endlessly
- Transport: 8 bits - indicates which upper-layer protocol
    - 06: TCP
    - 17: UDP
    - 01: ICMP (Ping)
    - 08: EGP
- Header checksum: 16 bits, ensure header integrity
- Options:
    - source route
    - record route  + timestamp
    - securtiy
- Padding: fulfill 0s

[Read more](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:routing-with-redundancy/a/ip-packets)

## IP Routing Protocols

- Routing is an OSI layer 3 function
- find the most efficient path 
- Primary device is the Router
    - maintain routing tables & make sure other routers know of changes in the network topology
    - router switches to packets to appropriate interface, adds the necessary framing infor for the interface, and then transmits the frame


### Router functions 
- **Path determination** choose the **next hop** in the path for packet to travel based on **routing metrics**
    - bandwidth
    - hop count
    - delay / tick
    - load
    - cost
    - ...
- **Packet switching**  **re-encapsulates** the packet in the protocol needed for the specified port then swiches the packet out that port.


### Routing protocol design goals
- optimization
- simplicity & low overhead
- robustness & stability
- flexibility
- rapid covergence

### Metrics
- routing algorithm generates a number, called the **metric value**
- typically, the smaller metric value, the better the path 
- metrics based on:
    - single characteristic of a path
    - combination of several characteristics

### IGP vs EGP
- IGP: Interior Gateway Protocol - used within an autonomous system
- EGP: Exterior Gateway Protocol - used to route between autonomous systems

## Link state vs distance vector
- Distance vector: 
    - hop count
    - interval update
- Link state: use tree / graph structure to sync data => Shortest Path First algorithm 
    - event trigger update
    - state connection