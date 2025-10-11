# NACL (Network Access Control List)

A Network ACL (NACL) is a stateless, subnet-level firewall in AWS. It **controls inbound and outbound traffic** for each **subnet** in your VPC.

You can apply only one NACL per subnet, but one NACL can cover **multiple subnets**.

## Rule Basics

Each rule has:
- Rule number (priority; lower = evaluated first)
- Protocol (TCP, UDP, ICMP, etc.)
- Port range
- Source/Destination
- Allow or Deny action

Rules are evaluated in ascending order until a match is found.

## Example 

### Example: Public Subnet NACL (Web Tier)


Rule # |	Direction |	Protocol |	Port Range |	Source/Destination|	Action|	Description
----- | ------- | ------- | ------ | ------- | ------ | ----- | -----
100	| Inbound	| TCP  |	80      | 0.0.0.0/0 | 	ALLOW | 	HTTP
110	| Inbound	| TCP  |	443	    | 0.0.0.0/0 | 	ALLOW | 	HTTPS
120	| Inbound	| TCP  |	1024–65535 |	0.0.0.0/0 | 	ALLOW | 	Ephemeral ports for return traffic
130	| Inbound	| All  |	All       |	0.0.0.0/0 | 	DENY | 	Deny all else
100	| Outbound	| TCP  |	1024–65535 |	0.0.0.0/0 | 	ALLOW | 	Responses to web requests
110	| Outbound	| TCP  |	80|	0.0.0.0/0 | 	ALLOW | 	Outbound HTTP
120	| Outbound	| TCP  |	443	| 0.0.0.0/0 | 	ALLOW | 	Outbound HTTPS
130	| Outbound	| All  |	All	| 0.0.0.0/0 | 	DENY | 	Deny  all else

✅ Effect:
- The public subnet allows inbound HTTP/HTTPS,
- Allows outbound responses and updates,
- Blocks everything else explicitly.

### Example: Private Subnet NACL (App/DB Tier)

Rule # |	Direction |	Protocol |	Port Range |	Source/Destination|	Action|	Description
----- | ------- | ------- | ------ | ------- | ------ | ----- | -----
100 |	Inbound	    | TCP  |	3306	    | App Subnet CIDR	| ALLOW  | 	DB access from app subnet
110 |	Inbound	    | TCP  |	1024–65535	| App Subnet CIDR	| ALLOW  | 	Response traffic
120 |	Inbound	    | All  |	All	        | 0.0.0.0/0	        | DENY	  | Deny all other inbound
100 |	Outbound	| TCP  |	1024–65535	| App Subnet CIDR	| ALLOW  | 	Response to app
110 |	Outbound	| TCP  |	3306	    | App Subnet CIDR	| ALLOW  | 	Initiate DB connection
120 |	Outbound	| All  |	All	        | 0.0.0.0/0	        | DENY	  | Deny all else

✅ Effect:
- Only app servers in the app subnet can reach the database.
- All other traffic is dropped.

## Default NACL
- Every VPC starts with a **default NACL**, which:
    - Allows all inbound and outbound traffic.
    - Is attached to all subnets initially.
- You can modify or replace it with custom NACLs per subnet.