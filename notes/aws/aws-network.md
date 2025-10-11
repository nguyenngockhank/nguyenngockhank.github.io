# Aws network 


## Key services

Category	| Service | 	Purpose
:-------- | ------ | --------
Core Networking	| [Amazon VPC](./vpc/index.md) (Virtual Private Cloud) |	Define your own network (subnets, route tables, gateways).
Connectivity	| Internet Gateway	| Provides outbound internet access for public subnets.
- 	| NAT Gateway	| Enables outbound internet from private subnets.
- 	| VPC Peering |	Connect two VPCs directly.
- 	| AWS Transit Gateway|	Connect multiple VPCs and on-prem networks.
- 	| AWS Direct Connect|	Dedicated private link from on-prem to AWS.
- 	| VPN (Site-to-Site / Client)|	Encrypted connections from on-prem or clients.
Security |	[Security Groups](./sg/index.md) |	Instance-level firewall.
-   | Network ACLs |	Subnet-level firewall.
-   | AWS Network Firewall| 	Managed stateful firewall for VPCs.
-   | AWS Shield / WAF |	DDoS and application-level protection.
-   | Route 53 Resolver DNS Firewall |	Filter DNS queries at the VPC level.
Performance / Delivery | 	Elastic Load Balancer (ALB, NLB, GLB) |	Distribute incoming traffic.
-   | Amazon CloudFront |	CDN for caching and global content delivery.
-   | AWS Global Accelerator |	Optimized routing over AWS backbone.



## Security Group vs NACLs

Feature | SG    | NACL 
--------| ----- | -------
Operates at | instance level | subnet level
Apply to | `associated` instances | all instances deployed in associated subnet
Support |  **Allow** rules only | **Allow & Deny** rules
Rules are evaluted | before deciding allow traffic | in order, start with lowest numbered rule when deciding allow traffic
State | **Stateful**. Return traffic is allowed, regardless of the rules | **Stateless**. Return traffic must be explicitly allowed by rules
Relationship | SG & resource is `n - n`  | NACL & subnet is `n - 1`

**NOTE**:
- **Stateful**:	The firewall **remembers the connection state**. If you allow an inbound request, the return traffic is automatically allowed — no need for a separate outbound rule.
- **Stateless**:	The firewall **does not remember connections**. You must **explicitly** allow both inbound and outbound traffic for a session to work.

