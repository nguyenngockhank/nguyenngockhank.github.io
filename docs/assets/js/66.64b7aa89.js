(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1384:function(e,t,a){"use strict";a.r(t);var i=a(7),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"miscellaneous"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),i("h2",{attrs:{id:"lambda"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[e._v("#")]),e._v(" Lambda")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Serverless")]),e._v(" compute service")]),e._v(" "),i("li",[e._v("Memory: 128MB-10GB.")]),e._v(" "),i("li",[e._v("Supported: Node.is, python, Go, C#, Ruby, Powershell, Docker, Java.")]),e._v(" "),i("li",[e._v("Architect: ×86, arm.")]),e._v(" "),i("li",[e._v("AWS Lambda is SOC, HIPAA, PCI, ISO Compliant")]),e._v(" "),i("li",[e._v("Quotas:\n"),i("ul",[i("li",[e._v("Concurrent executions: 1,000 (up to 10,000)")]),e._v(" "),i("li",[e._v("Storage for uploaded functions (zip) and layers: 75GB (up to TB)")]),e._v(" "),i("li",[e._v("Timeout: "),i("strong",[e._v("15min")])]),e._v(" "),i("li",[e._v("Layers: 5")]),e._v(" "),i("li",[e._v("Deployment package (zip): 50MB zipped, 250MB unzipped")]),e._v(" "),i("li",[e._v("Container image code package size: 10GB")]),e._v(" "),i("li",[e._v("Test event: 10")]),e._v(" "),i("li",[e._v("/tmp directory storage: 512MB")])])])]),e._v(" "),i("h2",{attrs:{id:"security-group"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security-group"}},[e._v("#")]),e._v(" Security Group")]),e._v(" "),i("ul",[i("li",[e._v("Security Group is a Firewall")]),e._v(" "),i("li",[e._v("Working Level: Instance (Network Interfaces)")]),e._v(" "),i("li",[e._v("Allow Only")]),e._v(" "),i("li",[e._v("Stateful (incoming OR outgoing explicitly)")]),e._v(" "),i("li",[e._v("Audit all rules")]),e._v(" "),i("li",[e._v("Max:\n"),i("ul",[i("li",[e._v("2,500 NACLs per Region")]),e._v(" "),i("li",[e._v("60 Rules per Security Group Separately")]),e._v(" "),i("li",[e._v("5 Security Groups per Network Interface")])])])]),e._v(" "),i("h2",{attrs:{id:"network-access-control-list-nacl"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#network-access-control-list-nacl"}},[e._v("#")]),e._v(" Network Access Control List (NACL)")]),e._v(" "),i("ul",[i("li",[e._v("Network ACL: is a "),i("strong",[e._v("Firewall")])]),e._v(" "),i("li",[e._v("Working Level: "),i("strong",[e._v("Subnet")]),e._v(" (one subnet => one NACL)")]),e._v(" "),i("li",[e._v("Allow & Deny")]),e._v(" "),i("li",[e._v("Stateless (incoming AND outgoing explicitly)")]),e._v(" "),i("li",[e._v("Audit rules by orders (lowest is highest)")]),e._v(" "),i("li",[e._v("Max:\n"),i("ul",[i("li",[e._v("200 NACLs per VPC")]),e._v(" "),i("li",[e._v("20 Rules per NACL separately.")])])])]),e._v(" "),i("h2",{attrs:{id:"route-table"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#route-table"}},[e._v("#")]),e._v(" Route table")]),e._v(" "),i("ul",[i("li",[e._v("Determine where network traffic from your subnet or gateway is directed")]),e._v(" "),i("li",[e._v("Route table will be attached to SUBNET/AZ in a VPC")]),e._v(" "),i("li",[e._v("One subnet only has ONE route table")]),e._v(" "),i("li",[e._v("One route table can be attached to many subnet")]),e._v(" "),i("li",[e._v("Route table is belong to VPC")]),e._v(" "),i("li",[e._v("Quotas:\n"),i("ul",[i("li",[e._v("Route tables per VPC: 200")]),e._v(" "),i("li",[e._v("Routes per route table: 50")]),e._v(" "),i("li",[e._v("BGP advertised routes per route table: 100")])])])]),e._v(" "),i("p",[i("img",{attrs:{src:a(608),alt:"sample route table"}})]),e._v(" "),i("p",[i("strong",[e._v("Blackhole at Route Table")])]),e._v(" "),i("ul",[i("li",[e._v("Record in Route table become "),i("strong",[e._v("Blackhole")]),e._v(" when assigned NAT deleted.")])]),e._v(" "),i("h2",{attrs:{id:"nat-gateways"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateways"}},[e._v("#")]),e._v(" NAT Gateways")]),e._v(" "),i("ul",[i("li",[e._v("Use case: private instances can connect services outside your VPC, but external services cannot initiate a connection with those instances.")]),e._v(" "),i("li",[e._v("Public NAT & Private NAT (do not require IGW to operate)")]),e._v(" "),i("li",[e._v("Pricing: by available hour & each GiB of processed data")]),e._v(" "),i("li",[e._v("HA in AZ Scope and is a managed service.")]),e._v(" "),i("li",[e._v("Supported protocols: TCP, UDP, IMP")]),e._v(" "),i("li",[e._v("Bandwidth: 5Gbps and can scale to 45 Gbps")])]),e._v(" "),i("h2",{attrs:{id:"aws-web-application-firewall-waf"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aws-web-application-firewall-waf"}},[e._v("#")]),e._v(" AWS Web Application Firewall (WAF)")]),e._v(" "),i("ul",[i("li",[e._v("Protects your web app from common web exploits (Layer7)")]),e._v(" "),i("li",[e._v("Apply to ALB, API Gateway, CloudFront, AppSync")]),e._v(" "),i("li",[e._v("Web ACL (Access Control List):\n"),i("ul",[i("li",[e._v("Common attacks: SQL injection, XSS")]),e._v(" "),i("li",[e._v("DDoS protection (Rate based rules)")]),e._v(" "),i("li",[e._v("Block countries (geo-match)")]),e._v(" "),i("li",[e._v("Rules can include: IP Address, HTTP headers, HTTP body, URI string.")])])]),e._v(" "),i("li",[e._v("Pricing: Web ACL (5$/month), Rule ($1/month), Request ($0.6/1 M)")]),e._v(" "),i("li",[e._v("Quotas (per Region):\n"),i("ul",[i("li",[e._v("Web ACLs: 100")]),e._v(" "),i("li",[e._v("Web ACL capacity Unit (WCUs) per Web ACL: 1,500")]),e._v(" "),i("li",[e._v("WCUs per rule group: 1,500")]),e._v(" "),i("li",[e._v("Requests per second for WebACL (ALB): 25,000")])])]),e._v(" "),i("li",[e._v("Ref: "),i("a",{attrs:{href:"https://docs.aws.amazon.com/waf/latest/developerguide/limits.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("waf"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"amazon-guardduty"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-guardduty"}},[e._v("#")]),e._v(" Amazon GuardDuty")]),e._v(" "),i("ul",[i("li",[e._v("Protect your AWS accounts with intelligent threat detection")]),e._v(" "),i("li",[e._v("Pricing (30-day free trial):\n"),i("ul",[i("li",[e._v("CloudTrail management event analysis")]),e._v(" "),i("li",[e._v("CloudTrail S3 data event analysis")]),e._v(" "),i("li",[e._v("Amazon EKS audit log analysis")]),e._v(" "),i("li",[e._v("VPC Flow Log & DNS query log analysis (per GB)")])])])]),e._v(" "),i("h2",{attrs:{id:"amazon-inspector"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-inspector"}},[e._v("#")]),e._v(" Amazon Inspector")]),e._v(" "),i("ul",[i("li",[e._v("Automated and continual near real-time vulnerability management at scale")]),e._v(" "),i("li",[e._v("Scan: Amazon EC2 & container images on ECR")]),e._v(" "),i("li",[e._v("Integrate AWS Security Hub and Amazon EventBridge to automate workflows and ticket routing")]),e._v(" "),i("li",[e._v("Required: SSM Agents, EC2 instances are managed by SSM")]),e._v(" "),i("li",[e._v("15 day Free trial")]),e._v(" "),i("li",[e._v("Pricing:\n"),i("ul",[i("li",[e._v("Avg scanned instances per month")]),e._v(" "),i("li",[e._v("Scanned container images on ECR per month")]),e._v(" "),i("li",[e._v("No of automated rescans for container images in ECR")])])]),e._v(" "),i("li",[e._v("Ref: https://aws.amazon.com/inspector/?nc=sn&loc=0")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Inspector")]),e._v(" "),i("th",[e._v("GuardDuty")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Enhance security")]),e._v(" "),i("td",[e._v("Enhance security")])]),e._v(" "),i("tr",[i("td",[e._v("Security assessments of the app's settings & configuration")]),e._v(" "),i("td",[e._v("Analyse the entirety of AWS accounts for potential threats")])]),e._v(" "),i("tr",[i("td",[e._v("EC2 instance, container images on ECR")]),e._v(" "),i("td",[e._v("CloudTrail event, EKS audit log, VPC flow log, DNS query log")])]),e._v(" "),i("tr",[i("td",[e._v('Done based on "rules"')]),e._v(" "),i("td",[e._v("Done by Machine Learning")])]),e._v(" "),i("tr",[i("td",[e._v("SSM Agent")]),e._v(" "),i("td",[e._v("N / A")])]),e._v(" "),i("tr",[i("td",[e._v("Free-tier eligible")]),e._v(" "),i("td",[e._v("Free-tier eligible")])])])]),e._v(" "),i("h2",{attrs:{id:"public-ip-vs-aws-elastic-ip-eip"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#public-ip-vs-aws-elastic-ip-eip"}},[e._v("#")]),e._v(" Public IP vs AWS Elastic IP (EIP)")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Feature")]),e._v(" "),i("th",[e._v("Public IP")]),e._v(" "),i("th",[e._v("Elastic IP")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("WHAT")]),e._v(" "),i("td",[e._v("A public IP is assigned from Amazon's pool of IPv4, not associate with your Account")]),e._v(" "),i("td",[e._v("Static public IP Address, and associated with vour account")])]),e._v(" "),i("tr",[i("td",[e._v("COST")]),e._v(" "),i("td",[e._v("Free")]),e._v(" "),i("td",[e._v("Charged if not associate or instance stopped")])]),e._v(" "),i("tr",[i("td",[e._v("Static or Dynamic")]),e._v(" "),i("td",[e._v("Dynamic. Changed every time if stop and start")]),e._v(" "),i("td",[e._v("Static")])]),e._v(" "),i("tr",[i("td",[e._v("No IP per instance")]),e._v(" "),i("td",[e._v("1")]),e._v(" "),i("td",[e._v("Can add more than one. Additional EIP will be charged")])]),e._v(" "),i("tr",[i("td",[e._v("Quotas")]),e._v(" "),i("td",[e._v("Unlimited")]),e._v(" "),i("td",[e._v("5")])]),e._v(" "),i("tr",[i("td",[e._v("Share publicity")]),e._v(" "),i("td",[e._v("✅, but not recommended.")]),e._v(" "),i("td",[e._v("✅")])]),e._v(" "),i("tr",[i("td",[e._v("Recovery")]),e._v(" "),i("td",[e._v("❌")]),e._v(" "),i("td",[e._v("You may get it back if not associate to someone else")])])])]),e._v(" "),i("h2",{attrs:{id:"nat-gateway-vs-internet-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateway-vs-internet-gateway"}},[e._v("#")]),e._v(" NAT Gateway vs Internet Gateway")]),e._v(" "),i("p",[e._v("In AWS, both NAT Gateway and Internet Gateway are used to enable communication between resources in a Virtual Private Cloud (VPC) and the internet. However, they serve different purposes and have distinct functionalities.")]),e._v(" "),i("h3",{attrs:{id:"nat-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateway"}},[e._v("#")]),e._v(" NAT Gateway")]),e._v(" "),i("p",[e._v("A NAT Gateway, short for Network Address Translation Gateway, is a managed service provided by AWS that allows resources within a private subnet to access the internet while keeping their private IP addresses hidden. It acts as a bridge between the private subnet and the internet, translating the private IP addresses of the resources into public IP addresses.")]),e._v(" "),i("p",[e._v("Key features of NAT Gateway include:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Outbound traffic: NAT Gateway primarily handles outbound traffic from the private subnet to the internet. It allows resources within the private subnet to initiate connections with external services, such as accessing software updates, downloading packages, or making API calls.")])]),e._v(" "),i("li",[i("p",[e._v("Elastic IP: NAT Gateway requires an Elastic IP (EIP) address, which is a static public IP address assigned to the NAT Gateway. This EIP is used for communication with the internet and remains associated with the NAT Gateway even if it fails or is replaced.")])]),e._v(" "),i("li",[i("p",[e._v("High availability: NAT Gateway is designed to be highly available and automatically scales to handle increased traffic. AWS manages the underlying infrastructure, ensuring reliability and availability.")])]),e._v(" "),i("li",[i("p",[e._v("Security: NAT Gateway provides an additional layer of security by acting as a barrier between the private subnet and the internet. It helps protect the resources within the private subnet by preventing direct inbound connections from the internet.")])])]),e._v(" "),i("h3",{attrs:{id:"internet-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#internet-gateway"}},[e._v("#")]),e._v(" Internet Gateway")]),e._v(" "),i("p",[e._v("An Internet Gateway, often referred to as an IGW, is another managed service provided by AWS that enables communication between a VPC and the internet. It serves as the entry and exit point for traffic between the VPC and the internet.")]),e._v(" "),i("p",[e._v("Key features of Internet Gateway include:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Inbound and outbound traffic: Unlike NAT Gateway, an Internet Gateway handles both inbound and outbound traffic. It allows resources within the VPC to communicate with the internet and vice versa.")])]),e._v(" "),i("li",[i("p",[e._v("Public IP addresses: Internet Gateway enables resources within the VPC to have public IP addresses, which are accessible from the internet. This allows external services or users to initiate connections with resources within the VPC.")])]),e._v(" "),i("li",[i("p",[e._v("Routing: Internet Gateway is responsible for routing traffic between the VPC and the internet. It uses route tables to determine the destination of the traffic and forwards it accordingly.")])]),e._v(" "),i("li",[i("p",[e._v("Security: While Internet Gateway provides connectivity to the internet, it does not provide any security features by itself. Additional security measures, such as Network Access Control Lists (NACLs) and Security Groups, need to be implemented to control inbound and outbound traffic.")])])]),e._v(" "),i("h2",{attrs:{id:"amazon-ecs-lifecycle-event-hooks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-ecs-lifecycle-event-hooks"}},[e._v("#")]),e._v(" Amazon ECS - Lifecycle event hooks")]),e._v(" "),i("ul",[i("li",[e._v("Is a lambda function that specified after the name of the lifecycle event")]),e._v(" "),i("li",[e._v("Each hook is executed once per deployment")]),e._v(" "),i("li",[e._v("5 Lifecycle events:\n"),i("ul",[i("li",[e._v("BeforeInstall")]),e._v(" "),i("li",[e._v("Afterinstall")]),e._v(" "),i("li",[e._v("AfterAllow TestTraffic")]),e._v(" "),i("li",[e._v("BeforeAllowTraffic")]),e._v(" "),i("li",[e._v("AfterAllowTraffic")])])]),e._v(" "),i("li",[e._v("Ref: https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html")])]),e._v(" "),i("h2",{attrs:{id:"elastic-network-interfaces-eni"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#elastic-network-interfaces-eni"}},[e._v("#")]),e._v(" Elastic Network interfaces (ENI)")]),e._v(" "),i("ul",[i("li",[e._v("Logical component in a VPC that represents a "),i("strong",[e._v("virtual network card")])]),e._v(" "),i("li",[e._v("The ENI can have the following attributes:\n"),i("ul",[i("li",[e._v("Primary private IPv4, one or more secondary IPv4")]),e._v(" "),i("li",[e._v("One Elastic IP (IPv4) per private IPv4")]),e._v(" "),i("li",[e._v("One Public IPv4")]),e._v(" "),i("li",[e._v("One or more security groups")]),e._v(" "),i("li",[e._v("A MAC address")])])]),e._v(" "),i("li",[e._v("You can create ENI independently and attach them on the fly ("),i("strong",[e._v("move them")]),e._v(") on EC2 instances for failover")]),e._v(" "),i("li",[e._v("Bound to a specific availability zone (AZ)")])]),e._v(" "),i("h2",{attrs:{id:"storage-comparison"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#storage-comparison"}},[e._v("#")]),e._v(" Storage Comparison")]),e._v(" "),i("p",[i("img",{attrs:{src:a(609),alt:"img"}})]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("S3")]),e._v(": Object Storage")]),e._v(" "),i("li",[i("strong",[e._v("S3 Glacier")]),e._v(": Object Archival")]),e._v(" "),i("li",[i("strong",[e._v("EBS volumes")]),e._v(": Network storage for one EC2 instance at a time")]),e._v(" "),i("li",[i("strong",[e._v("Instance Storage")]),e._v(": Physical storage for your EC2 instance (high IOPS)")]),e._v(" "),i("li",[i("strong",[e._v("EFS")]),e._v(": Network File System for Linux instances, POSIX filesystem")]),e._v(" "),i("li",[i("strong",[e._v("FSx for Windows")]),e._v(": Network File System for Windows servers")]),e._v(" "),i("li",[i("strong",[e._v("FSx for Lustre")]),e._v(": High Performance Computing Linux file system")]),e._v(" "),i("li",[i("strong",[e._v("FSx for NetApp ONTAP")]),e._v(": High OS Compatibility")]),e._v(" "),i("li",[i("strong",[e._v("FSx for OpenZFS")]),e._v(": Managed ZFS file system")]),e._v(" "),i("li",[i("strong",[e._v("Storage Gateway")]),e._v(": S3 & FSx File Gateway, Volume Gateway (cache & stored), Tape Gateway")]),e._v(" "),i("li",[i("strong",[e._v("Transfer Family")]),e._v(": FTP, FTPS, SFTP interface on top of Amazon S3 or Amazon EFS")]),e._v(" "),i("li",[i("strong",[e._v("DataSync")]),e._v(": Schedule data sync from on-premises to AWS, or AWS to AWS")]),e._v(" "),i("li",[i("strong",[e._v("Snowcone / Snowball / Snowmobile")]),e._v(": to move large amount of data to the cloud, physically")]),e._v(" "),i("li",[i("strong",[e._v("Database")]),e._v(": for specific workloads, usually with indexing and querying")])]),e._v(" "),i("h2",{attrs:{id:"amazon-mq"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-mq"}},[e._v("#")]),e._v(" Amazon MQ")]),e._v(" "),i("ul",[i("li",[e._v("SQS, SNS are “cloud-native” services: proprietary protocols from AWS")]),e._v(" "),i("li",[e._v("Traditional applications running from on-premises may use open protocols such as: MQTT, AMQP, STOMP, Openwire, WSS")]),e._v(" "),i("li",[e._v("When migrating to the cloud, instead of re-engineering the application to use SQS and SNS, we can use Amazon MQ")]),e._v(" "),i("li",[e._v("Amazon MQ is a managed message broker service for RabbitMQ / ActiveMQ")]),e._v(" "),i("li",[e._v("Amazon MQ doesn’t “scale” as much as SQS / SNS")]),e._v(" "),i("li",[e._v("Amazon MQ runs on servers, can run in Multi-AZ with failover")]),e._v(" "),i("li",[e._v("Amazon MQ has both queue feature (~SQS) and topic features (~SNS)")])]),e._v(" "),i("h2",{attrs:{id:"amazon-macie"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#amazon-macie"}},[e._v("#")]),e._v(" Amazon Macie")]),e._v(" "),i("p",[i("img",{attrs:{src:a(610),alt:"Amazon Macie"}})]),e._v(" "),i("ul",[i("li",[e._v("Fully managed data security & data privacy service")]),e._v(" "),i("li",[e._v("Use ML and pattern matching to discover, protect sensitive data on AWS")]),e._v(" "),i("li",[e._v("Macie inventory: unencrypted buckets, public buckets, and buckets shared with other AWS Account")]),e._v(" "),i("li",[e._v("Capability: alert sensitive data such as PII")]),e._v(" "),i("li",[e._v("Help to meet compliance: HIPAA, GDPR")]),e._v(" "),i("li",[e._v("30-days Free trial for Inventory, bucket level security, access control assessment at no cost (sensitive data discovery is not included)")]),e._v(" "),i("li",[e._v("Pricing (Singapore Region):")]),e._v(" "),i("li",[e._v("Number of Amazon S3 buckets ($0.1 / S3 bucket)")]),e._v(" "),i("li",[e._v("Data processed: $1.35 per GB for First 50TB per month")]),e._v(" "),i("li",[e._v("Ref: "),i("a",{attrs:{href:"https://aws.amazon.com/macie/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/macie/"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"nitro-system"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nitro-system"}},[e._v("#")]),e._v(" Nitro System")]),e._v(" "),i("p",[e._v("AWS has completely re-imagined our virtualization infrastructure.")]),e._v(" "),i("p",[e._v("Traditionally, hypervisors protect the physical hardware and bios, virtualize the CPU, storage, networking, and provide a rich set of management capabilities.")]),e._v(" "),i("p",[e._v("With the Nitro System, we are able to break apart those functions, offload them to dedicated hardware and software, and reduce costs by delivering practically all of the resources of a server to your instances.")]),e._v(" "),i("ul",[i("li",[e._v("Divided in parts: Nitro Card, Nitro Security Chip, Nitro Hypervisor, Nitro Enclaves, NitroTPM (in 2022)")]),e._v(" "),i("li",[e._v("In Development since 2013")]),e._v(" "),i("li",[e._v("Launched in Nov 2017")]),e._v(" "),i("li",[e._v("All new launches use Nitro")])]),e._v(" "),i("h2",{attrs:{id:"chip-aws-gravion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#chip-aws-gravion"}},[e._v("#")]),e._v(" Chip AWS Gravion")]),e._v(" "),i("ul",[i("li",[e._v("Best price performance for workloads in Amazon EC2")]),e._v(" "),i("li",[e._v("Supported services: Amazon Aurora, Amazon ElastiCache, Amazon MR, AWS Lambda, AWS Fargate")]),e._v(" "),i("li",[e._v("Eg: M6g, M6gd, T4g, C7g, C6g, R6g, X2gd, Im4gn, G5g")]),e._v(" "),i("li",[e._v("AWS Graviton2 supports up to 40% better price performance compared current generation ×86-based instance.")]),e._v(" "),i("li",[e._v("AWS Graviton3: 25% better compute performance, up to 2x higher floating-point performance, up to 2x faster cryptographic workload compare to AWS Graviton2 processors.")]),e._v(" "),i("li",[e._v("Graviton3 delivery up to 3x better performance compared to Graviton2 for ML workload, including support bfloat16")]),e._v(" "),i("li",[e._v("Graviton3 support DDR5 with 50% more memory bandwidth compared to DDR4")]),e._v(" "),i("li",[e._v("Customers: Epic Games, DIRECTV, Intuit, Lyft, Formula 1")]),e._v(" "),i("li",[e._v("Ref: "),i("a",{attrs:{href:"https://aws.amazon.com/ec2/graviton/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/ec2/graviton/"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"creating-a-multi-region-application-with-aws-services"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-multi-region-application-with-aws-services"}},[e._v("#")]),e._v(" Creating a Multi-Region Application with AWS Services")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://aws.amazon.com/blogs/architecture/creating-a-multi-region-application-with-aws-services-part-1-compute-and-security/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1, Compute, Networking, and Security"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://aws.amazon.com/blogs/architecture/creating-a-multi-region-application-with-aws-services-part-2-data-and-replication/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Part 2, Data and Replication"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports},608:function(e,t,a){e.exports=a.p+"assets/img/sampleroutetable.5a84069d.png"},609:function(e,t,a){e.exports=a.p+"assets/img/storage-options.80a24181.png"},610:function(e,t){e.exports="data:image/png;base64,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"}}]);