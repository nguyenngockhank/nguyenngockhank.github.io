# NAT

NAT = Network Address Translation
RFC 1631, 1918, 2663


it’s a method used by routers and firewalls to modify the IP address information in network packets as they pass through.

**Functions**: 
- Imcomming: change the destination
- Ougoing: change the source

![functions](https://upload.wikimedia.org/wikipedia/commons/c/c7/NAT_Concept-en.svg)

**Terms** 

- Local network = inside
- Public internet = outside

## How NAT works

![How NAT works](https://i.pinimg.com/originals/3a/5a/a2/3a5aa24001f8de43f3c28e332a760919.jpg)


## Types

![NAT types](https://i.pinimg.com/564x/3e/12/3b/3e123b3a05bef70ef1b9f82105cee47c.jpg)

### Static (1-to-1 Mapping)

➡️ Private IP ↔ Public IP (fixed pair)

Private IP	| Public IP
------- | ------
192.168.1.10 |	203.0.113.10

- Your internal web server (`192.168.1.10`) always maps to `203.0.113.10`.
- Anyone on the Internet who visits `203.0.113.10` gets routed directly to your server.
- The mapping never changes.

🟢 **Use case**: Hosting a public service (like a website) inside your private LAN.

### Dynamic NAT (Many-to-Many Mapping from a Pool): 

➡️ Private IP ↔ Public IP (dynamic, from a pool)

Public IP pool: `203.0.113.10` – `203.0.113.20`

Private network:
- `192.168.1.10` (Laptop)
- `192.168.1.11` (Phone)

Private IP	| Assigned Public IP
------- | ------
192.168.1.10 |	203.0.113.10
192.168.1.11 |	203.0.113.11

- The router assigns available public IPs dynamically from the pool.
- When the session ends, the public IP can be reused for another private host.

🟢 **Use case**: Large enterprise networks with multiple available public IPs.

### PAT (Port Address Translation) a.k.a NAT Overload:

➡️ Many Private IPs share ONE Public IP using different ports (home routers usually use)

Private IP:Port	| Translated to (Public IP:Port)
------- | ------
192.168.1.10:1234 |	203.0.113.5:50001
192.168.1.11:1234 |	203.0.113.5:50002
192.168.1.12:1234 |	203.0.113.5:50003

- The router keeps a translation table of which private IP/port maps to which public port.
- Responses come back to the right device based on port number.
- Concurrent connection

🟢 **Use case**: Home routers and small offices — the most common NAT type today.


## NAT Overlapping

**NAT overlapping** happens when **two networks use the same IP address range**, and you need them to communicate with each other.

::: tip
**The private IP subnets “overlap”** — meaning the same IPs exist in both places — so routing normally won’t work.

NAT is then used to **translate** one side’s IPs into a **different**, **non-conflicting range** so the networks can talk.
:::


🟢 **Real-World Use Case**
Use Case | 	Example
------- | --------
Corporate VPNs |	Two branches using same private subnet
Mergers / Acquisitions |	Combine networks with duplicate IPs
Multi-tenant Data Centers |	Isolated customers using identical private ranges
Cloud ↔ On-prem |	Both sides accidentally use same subnet

## Linux tools

### iptables

`iptables` is the Linux firewall and packet filter tool.

It can:
- Allow/deny traffic
- Track connections (**stateful firewall**)
- And importantly: perform **NAT** (Network Address Translation)

```
  Incoming Packet
        |
  [PREROUTING]  --->  DNAT (if needed)
        |
 Routing Decision
        |
  [POSTROUTING] --->  SNAT / MASQUERADE (if needed)
        |
    Outgoing
```

Type	| Chain | 	Action	| Example
------- | ----- | -------- | -------- 
SNAT	| POSTROUTING | 	Change source IP | 	Outbound traffic (static IP)
MASQUERADE | 	POSTROUTING | 	Dynamic source IP |	Outbound traffic (dynamic IP)
DNAT	| PREROUTING | 	Change destination IP |	Port forwarding / inbound traffic

### nftables

The **modern replacement** for iptables, introduced by the Linux kernel in 3.13 (2014). It uses the **nf_tables** subsystem.

### Summary


Tool	| Performs NAT | 	Type | 	Layer | 	Typical Use
------- | ------ | ----- | ----- | ----
iptables *(low-level)* |	✅ Yes |	SNAT, DNAT, MASQUERADE |	Kernel (netfilter) |	Legacy / still common
nftables  *(low-level)* |	✅ Yes |	SNAT, DNAT, MASQUERADE |	Kernel (nf_tables) |	Modern replacement
firewalld *(high-level wrapper)* |	✅ Yes |	SNAT, DNAT |	Front-end for iptables/nftables |	Enterprise Linux
ufw *(high-level wrapper)* |	✅ Yes |	MASQUERADE |	Front-end for iptables |	Ubuntu / Debian
VyOS |	✅ Yes |	SNAT, DNAT |	Router OS (uses iptables/nftables) |	Network appliances

## AWS Services 

which AWS services perform NAT (Network Address Translation), what type of NAT they do, and when you’d use each.

### NAT Gateway

A fully managed AWS service that provides **outbound Internet access** for instances in a **private subnet**.
It performs **Source NAT** (SNAT) — changes the source private IP → to a public IP (Elastic IP).

```
Private EC2 (10.0.1.10)
      ↓
Route table → NAT Gateway
      ↓
Internet Gateway → Internet
```

### AWS PrivateLink / VPC Endpoint (Interface or Gateway)

Not exactly “NAT” in the traditional sense, but functionally similar:

Allows **private communication** between your VPC and AWS services **without using public IPs or the Internet**.

It effectively does **AWS-managed network address translation behind the scenes** to route traffic into AWS internal network.

Type: 
- **Gateway Endpoint** → for S3 / DynamoDB (uses AWS internal routing)
- **Interface Endpoint** (PrivateLink) → for other services

### Transit Gateway (TGW) with NAT Option

Transit Gateway can perform inter-VPC NAT (Network Address Translation) in some designs:
- To connect overlapping CIDR VPCs
- To translate IP ranges between connected VPCs

This is similar to **NAT Overlapping** in enterprise setups.

**Type of NAT**: **Bidirectional NAT** (configurable in routing attachments)

🟢 **Use case:**
Two VPCs both use `10.0.0.0/16`, and you still need them to talk → TGW performs translation between `10.0.0.0/16` and `172.16.0.0/16`.

### AWS Network Firewall (Advanced NAT use)

Network Firewall can perform **stateful packet filtering** and also **NAT** inside inspection rules.

🟢 **Use case:**: 
- When you need deep inspection + NAT
- For hybrid or multi-VPC security appliances

### Summary 
Service	 | Performs NAT? |	Type | 	Typical Use Case
------- | ------ | ----- | -----
NAT Gateway	| ✅ Yes|	SNAT (private → Internet)|	Outbound Internet access for private subnets
NAT Instance| 	✅ Yes|	SNAT (iptables MASQUERADE)|	Custom / legacy NAT configuration
PrivateLink (VPC Endpoint)|	⚙️ Internal AWS NAT|	AWS-managed internal NAT|	Private access to AWS APIs
Transit Gateway (with NAT) |	✅ Yes|	Bidirectional / Overlapping NAT |	Connect overlapping VPCs
Network Firewall |	✅ Optional|	SNAT/DNAT|	Advanced routing & security inspection