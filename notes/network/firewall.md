# Firewall 

A **firewall** is a **security system** — hardware, software, or both — that **monitors and controls network traffic** based on rules you define.

::: tip
Allow good traffic ✅ and block bad or unauthorized traffic 🚫
:::


A firewall filters packets based on:
- Source & destination IP address
- Source & destination port number
- Protocol (TCP, UDP, ICMP, etc.)
- Direction (inbound, outbound)
- Connection state (new, established, related)

## Use case

![Firewall use cases](https://i.pinimg.com/originals/b4/c0/06/b4c00613f2a4d0d083a77dc288f32402.jpg)

## Comparision 

Concept | 	Function
------- | ------
Firewall | 	Filters traffic (security)
NAT | 	Translates IPs (connectivity)
🔁 Together |	Often combined — `iptables` does both via different tables

## AWS Services

Service	         | Layer    | 	Scope        | 	Stateful?    | 	Primary Use
------------     | -------- | -------------- | ------------- | ---------
[Security Group](../aws/sg/index.md)   | 	3–4	    | Instance / ENI |	✅ Yes       | Allow/block instance traffic
Network ACL      |	3–4	    | Subnet	     | ❌ No	        | Subnet-level control
AWS WAF          |	7	    | HTTP(S) apps   | 	✅ Yes       | Web threat protection
Network Firewall |	3–7	    | VPC            |	✅ Yes       | Deep packet & egress filtering
Firewall Manager |	—   	| Organization   |	—            | Centralized rule management
Shield           |	3–7.    |	Global          |	—        |	DDoS protection
Route 53 DNS Firewall |	7 (DNS) | 	VPC | 	✅ Yes| 	DNS query filtering

