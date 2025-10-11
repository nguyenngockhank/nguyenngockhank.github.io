# Border network protocol

Border Gateway Protocol (BGP) is the standardized **Exterior Gateway Protocol** (EGP) used to exchange routing and reachability information between different **Autonomous Systems** (AS) on the Internet. It is fundamentally what makes the global Internet work by determining the best routes for data transmission.


## Terms 

### AS Number (Autonomous System Number) 

is a globally **unique identifier** assigned to an Autonomous System (AS)—a large, unified group of IP networks and routers under the control of a single administrative entity (like an Internet Service Provider, a large corporation, or a university)

Type | Length 
----- | ------ 
Public ASN | 1–64495 | 
Private ASN | 64512–65534 | 
32-bit ASN (public) | 65536–4294967295 | 

Example: [Google ASN](https://bgp.he.net/AS15169)

## AS Path (Autonomous System Path)

is a **mandatory attribute** in the BGP that consists of an ordered list of AS Numbers that a routing advertisement has traversed to reach a router.

**Key Functions**
- Loop Prevention (Primary Function)
- Best Path Selection
- Policy and Traffic Engineering

## NLRI (Network Layer Reachability Information)

NLRI is the **network prefix** and **its length** (e.g., 192.168.1.0/24).

**The Prefix (Network Address)**
The Prefix is the network address itself, which is 192.168.1.0.
- This is the starting address of the network and is used to identify the entire subnet.
- All devices within this network will have an IP address that starts with **192.168.1.**

**The Length (Subnet Mask)**
The **Length** is the `/24 part`, also known as the **CIDR notation** (Classless Inter-Domain Routing). It tells you how many bits are used for the network portion of the address.
- An IPv4 address has **32 bits**. The /24 means that the first **24 bits are reserved for the network portion**.
- This length directly translates to the traditional Subnet Mask of **255.255.255.0**.


Notation | Binary Representation | Meaning 
-------- | -------------------- | -------
Prefix Length |	24 bits | Network portion (fixed)
Host Bits |	32−24=8 bits  | Host portion (available for devices)
Subnet Mask	| 11111111.11111111.11111111.00000000	| 255.255.255.0


### eBGP, iBGP
- eBGP (External BGP): Used between routers in different Autonomous Systems to exchange routing information with the global Internet. These routers are typically placed at the network boundary (the "border").
- iBGP (Internal BGP): Used between routers within the same Autonomous System to ensure that routing information learned from external peers is distributed internally.

## BGP Functions 

### Route Advertisement

The mechanism where a BGP router informs its neighbors about the networks it can reach using **UPDATE** messages 

E.g: An ISP advertises the network prefix `203.0.113.0/24` to its upstream provider, telling the provider, "Send traffic for this network to me."

### Path Vector Routing

BGP is a path-vector protocol, meaning it includes the **full list of Autonomous Systems** (ASes) a route has traversed. 

E.g: A route to a network includes the AS path: `AS64512 → AS65000 → AS12345`.

### Route Selection 

The multi-step algorithm used by a BGP router to choose the single "best" path when it has multiple routes to the same destination.

E.g: A router receives two routes to `10.1.1.0/24`. It chooses the one with the highest **Local Preference** attribute.

### Policy-based Routing 

The ability to influence the path selection based on business agreements, cost, and administrative rules, rather than technical metrics like speed or hop count.

E.g: A company, multihomed with two ISPs, sets a **Local Preference** to send all outbound traffic through its primary, cheaper ISP.

### Loop Prevention

The primary mechanism to prevent routing loops by checking the **AS_PATH** attribute.

A router in **AS65000** receives a route with the path `AS123→AS65000→AS456`. It discards the route because its own ASN (65000) is in the path.

### Aggregation (Route Summarization)

Combining several specific routes into one broader, summarized route to reduce the size of the global routing table.

E.g: Instead of advertising `203.0.113.0/24`, `203.0.114.0/24`, and `203.0.115.0/24`, a router advertises a single aggregated route: 203.0.112.0/21.

### Route Withdrawal

The process of notifying neighbors that a previously advertised route is no longer valid or reachable.

E.g: If a directly connected network goes down, the router sends an `UPDATE` message with a withdrawal notice for that network prefix.

### Next-Hop Attribute

Identifies the IP address of the adjacent router that should receive the traffic for the advertised network.

E.g: A BGP route for 198.51.100.0/24 specifies the next hop as `192.0.2.1`, which is the neighbor's interface.

### Route Filtering 

Applying rules to `accept` (filter in) or `deny` (filter out) specific routes being exchanged with a neighbor.

E.g: An ISP uses an **inbound filter** to reject any route advertisements from a customer that are longer than a /24 to protect the network from mistakes.

### Route Reflector / Confederation

Mechanisms used within a large single Autonomous System (iBGP) to scale the routing fabric and reduce the number of required BGP peerings.

E.g: In an AS with 50 routers, using a Route Reflector eliminates the need for 1,225 direct iBGP sessions, as each router only peers with the reflector.