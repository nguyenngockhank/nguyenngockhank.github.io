(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1358:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elastic-compute-cloud-ec2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elastic-compute-cloud-ec2"}},[t._v("#")]),t._v(" Elastic Compute Cloud (EC2)")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("ul",[s("li",[t._v("EC2 is one of the most popular of AWS’ offering")]),t._v(" "),s("li",[t._v("It mainly consists in the capability of :\n"),s("ul",[s("li",[t._v("Renting virtual machines (EC2)")]),t._v(" "),s("li",[t._v("Storing data on virtual drives (EBS)")]),t._v(" "),s("li",[t._v("Distributing load across machines (ELB)")]),t._v(" "),s("li",[t._v("Scaling the services using an auto-scaling group (ASG)")])])]),t._v(" "),s("li",[t._v("Knowing EC2 is fundamental to understand how the Cloud works")])]),t._v(" "),s("h3",{attrs:{id:"ec2-sizing-configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ec2-sizing-configuration-options"}},[t._v("#")]),t._v(" EC2 sizing & configuration options")]),t._v(" "),s("ul",[s("li",[t._v("Operating System (OS): Linux, Windows or Mac OS")]),t._v(" "),s("li",[t._v("How much compute power & cores (CPU)")]),t._v(" "),s("li",[t._v("How much random-access memory (RAM)")]),t._v(" "),s("li",[t._v("How much storage space:\n"),s("ul",[s("li",[t._v("Network-attached ("),s("strong",[t._v("EBS")]),t._v(" & "),s("em",[t._v("EFS")]),t._v(")")]),t._v(" "),s("li",[t._v("hardware ("),s("strong",[t._v("EC2 Instance Store")]),t._v(")")])])]),t._v(" "),s("li",[t._v("Network card: speed of the card, Public IP address")]),t._v(" "),s("li",[t._v("Firewall rules: "),s("strong",[t._v("security group")])]),t._v(" "),s("li",[t._v("Bootstrap script (configure at first launch): EC2 User Data")])]),t._v(" "),s("h3",{attrs:{id:"ec2-user-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ec2-user-data"}},[t._v("#")]),t._v(" EC2 User Data")]),t._v(" "),s("ul",[s("li",[t._v("It is possible to bootstrap our instances using an EC2 User data script.")]),t._v(" "),s("li",[t._v("bootstrapping means launching commands when a machine starts")]),t._v(" "),s("li",[t._v("That script is only run once at the instance first start")]),t._v(" "),s("li",[t._v("EC2 user data is used to automate boot tasks such as:\n"),s("ul",[s("li",[t._v("Installing updates")]),t._v(" "),s("li",[t._v("Installing software")]),t._v(" "),s("li",[t._v("Downloading common files from the internet")]),t._v(" "),s("li",[t._v("Anything you can think of")])])]),t._v(" "),s("li",[t._v("The EC2 User Data Script runs with the root user")])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use this for your user data (script from top to bottom)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install httpd (Linux 2 version)")]),t._v("\nyum update -y\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y httpd\nsystemctl start httpd\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" httpd\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<h1>Hello World from '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" -f"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('</h1>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /var/www/html/index.html\n")])])]),s("h2",{attrs:{id:"ec2-instance-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ec2-instance-types"}},[t._v("#")]),t._v(" EC2 Instance Types")]),t._v(" "),s("p",[t._v("You can use different types of EC2 instances that are optimised for different "),s("a",{attrs:{href:"https://aws.amazon.com/ec2/instance-types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("use cases"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Naming convention")]),t._v("\nAWS has the following naming convention: "),s("code",[t._v("m5.2xlarge")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("m")]),t._v(": instance class")]),t._v(" "),s("li",[s("code",[t._v("5")]),t._v(": generation")]),t._v(" "),s("li",[s("code",[t._v("2xlarge")]),t._v(": size within the instance class")])]),t._v(" "),s("h3",{attrs:{id:"general-purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-purpose"}},[t._v("#")]),t._v(" General Purpose")]),t._v(" "),s("ul",[s("li",[t._v("Great for a diversity of workloads such as web servers or code repositories")]),t._v(" "),s("li",[t._v("Balance between:\n"),s("ul",[s("li",[t._v("Compute")]),t._v(" "),s("li",[t._v("Memory")]),t._v(" "),s("li",[t._v("Networking")])])])]),t._v(" "),s("h3",{attrs:{id:"compute-optimized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compute-optimized"}},[t._v("#")]),t._v(" Compute optimized")]),t._v(" "),s("p",[t._v("Great for compute-intensive tasks that require high performance processors:")]),t._v(" "),s("ul",[s("li",[t._v("Batch processing workloads")]),t._v(" "),s("li",[t._v("Media transcoding")]),t._v(" "),s("li",[t._v("High performance web servers")]),t._v(" "),s("li",[t._v("High performance computing (HPC)")]),t._v(" "),s("li",[t._v("Scientific modeling & machine learning")]),t._v(" "),s("li",[t._v("Dedicated gaming servers")])]),t._v(" "),s("h3",{attrs:{id:"memory-optimized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memory-optimized"}},[t._v("#")]),t._v(" Memory optimized")]),t._v(" "),s("p",[t._v("Fast performance for workloads that process large data sets in memory")]),t._v(" "),s("p",[s("strong",[t._v("Use cases:")])]),t._v(" "),s("ul",[s("li",[t._v("High performance, relational/non-relational databases")]),t._v(" "),s("li",[t._v("Distributed web scale cache stores")]),t._v(" "),s("li",[t._v("In-memory databases optimized for BI (business intelligence)")]),t._v(" "),s("li",[t._v("Applications performing real-time processing of big unstructured data")])]),t._v(" "),s("h3",{attrs:{id:"storage-optimized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-optimized"}},[t._v("#")]),t._v(" Storage optimized")]),t._v(" "),s("p",[t._v("Great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage")]),t._v(" "),s("p",[s("strong",[t._v("Use cases:")])]),t._v(" "),s("ul",[s("li",[t._v("High frequency online transaction processing (OLTP) systems")]),t._v(" "),s("li",[t._v("Relational & NoSQL databases")]),t._v(" "),s("li",[t._v("Cache for in-memory databases (for example, Redis)")]),t._v(" "),s("li",[t._v("Data warehousing applications")]),t._v(" "),s("li",[t._v("Distributed file systems")])]),t._v(" "),s("h3",{attrs:{id:"instace-types-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instace-types-examples"}},[t._v("#")]),t._v(" Instace types examples")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Instance")]),t._v(" "),s("th",[t._v("vCPU")]),t._v(" "),s("th",[t._v("Mem (GiB)")]),t._v(" "),s("th",[t._v("Storage")]),t._v(" "),s("th",[t._v("Network Performance")]),t._v(" "),s("th",[t._v("EBS Bandwidth (Mbps)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("t2.micro")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("EBS-Only")]),t._v(" "),s("td",[t._v("Low to Moderate")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("t2.xlarge")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("16")]),t._v(" "),s("td",[t._v("EBS-Only")]),t._v(" "),s("td",[t._v("Moderate")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("c5d.4xlarge")]),t._v(" "),s("td",[t._v("16")]),t._v(" "),s("td",[t._v("32")]),t._v(" "),s("td",[t._v("1 x 400 NVMe SSD")]),t._v(" "),s("td",[t._v("Up to 10 Gbps")]),t._v(" "),s("td",[t._v("4,750")])]),t._v(" "),s("tr",[s("td",[t._v("r5.16xlarge")]),t._v(" "),s("td",[t._v("64")]),t._v(" "),s("td",[t._v("512")]),t._v(" "),s("td",[t._v("EBS Only")]),t._v(" "),s("td",[t._v("20 Gbps")]),t._v(" "),s("td",[t._v("13,600")])]),t._v(" "),s("tr",[s("td",[t._v("m5.8xlarge")]),t._v(" "),s("td",[t._v("32")]),t._v(" "),s("td",[t._v("128")]),t._v(" "),s("td",[t._v("EBS Only")]),t._v(" "),s("td",[t._v("10 Gbps")]),t._v(" "),s("td",[t._v("6,800")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://instances.vantage.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full of list ec2 instances.vantage.sh"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"purchasing-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purchasing-options"}},[t._v("#")]),t._v(" Purchasing Options")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("On-Demand Instances")]),t._v(" – short workload, predictable pricing, pay by second")]),t._v(" "),s("li",[s("strong",[t._v("Reserved")]),t._v(" (1 & 3 years)\n"),s("ul",[s("li",[s("strong",[t._v("Reserved Instances")]),t._v(" – long workloads")]),t._v(" "),s("li",[s("strong",[t._v("Convertible Reserved Instances")]),t._v(" – long workloads with flexible instances")])])]),t._v(" "),s("li",[s("strong",[t._v("Savings Plans")]),t._v(" (1 & 3 years) – commitment to an amount of usage, long workload")]),t._v(" "),s("li",[s("strong",[t._v("Spot Instances")]),t._v(" – short workloads, cheap, can lose instances (less reliable)")]),t._v(" "),s("li",[s("strong",[t._v("Dedicated Hosts")]),t._v(" – book an entire physical server, control instance placement")]),t._v(" "),s("li",[s("strong",[t._v("Dedicated Instances")]),t._v(" – no other customers will share your hardware")]),t._v(" "),s("li",[s("strong",[t._v("Capacity Reservations")]),t._v(" – reserve capacity in a specific AZ for any duration")])]),t._v(" "),s("h3",{attrs:{id:"on-demand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-demand"}},[t._v("#")]),t._v(" On Demand")]),t._v(" "),s("ul",[s("li",[t._v("Pay for what you use:\n"),s("ul",[s("li",[t._v("Linux or Windows - billing per second, after the first minute")]),t._v(" "),s("li",[t._v("All other operating systems - billing per hour")])])]),t._v(" "),s("li",[t._v("Has the highest cost but no upfront payment")]),t._v(" "),s("li",[t._v("No long-term commitment")]),t._v(" "),s("li",[t._v("Recommended for "),s("strong",[t._v("short-term")]),t._v(" and "),s("strong",[t._v("un-interrupted workloads")]),t._v(", where you can't predict how the application will behave")])]),t._v(" "),s("h3",{attrs:{id:"reserved-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reserved-instances"}},[t._v("#")]),t._v(" Reserved Instances")]),t._v(" "),s("ul",[s("li",[t._v("Up to 72% discount compared to On-demand")]),t._v(" "),s("li",[t._v("You reserve a specific instance attributes (Instance Type, Region, Tenancy, OS)")]),t._v(" "),s("li",[s("strong",[t._v("Reservation Period")]),t._v(" – 1 year (+discount) or 3 years (+++discount)")]),t._v(" "),s("li",[s("strong",[t._v("Payment Options")]),t._v(" – No Upfront (+), Partial Upfront (++), All Upfront (+++)")]),t._v(" "),s("li",[s("strong",[t._v("Reserved Instance’s Scope")]),t._v(" – Regional or Zonal (reserve capacity in an AZ)")]),t._v(" "),s("li",[t._v("Recommended for steady-state usage applications (think database)")]),t._v(" "),s("li",[t._v("You can buy and sell in the Reserved Instance Marketplace")]),t._v(" "),s("li",[s("strong",[t._v("Convertible Reserved Instance")]),t._v(" "),s("ul",[s("li",[t._v("Can change the EC2 instance type, instance family, OS, scope and tenancy")]),t._v(" "),s("li",[t._v("Up to 66% discount")])])])]),t._v(" "),s("h3",{attrs:{id:"savings-plans"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#savings-plans"}},[t._v("#")]),t._v(" Savings Plans")]),t._v(" "),s("ul",[s("li",[t._v("Get a discount based on long-term usage (up to 72% - same as RIs)")]),t._v(" "),s("li",[t._v("Commit to a certain type of usage ($10/hour for 1 or 3 years)")]),t._v(" "),s("li",[t._v("Usage beyond EC2 Savings Plans is billed at the On-Demand price")]),t._v(" "),s("li",[t._v("Locked to a specific instance family & AWS region (e.g., M5 in us-east-1)")]),t._v(" "),s("li",[t._v("Flexible across:\n"),s("ul",[s("li",[t._v("Instance Size (e.g., m5.xlarge, m5.2xlarge)")]),t._v(" "),s("li",[t._v("OS (e.g., Linux, Windows)")]),t._v(" "),s("li",[t._v("Tenancy (Host, Dedicated, Default)")])])])]),t._v(" "),s("h3",{attrs:{id:"spot-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spot-instances"}},[t._v("#")]),t._v(" Spot Instances")]),t._v(" "),s("ul",[s("li",[t._v("Can get a discount of up to 90% compared to On-demand")]),t._v(" "),s("li",[t._v("Instances that you can “lose” at any point of time if your max price is less than the current spot price")]),t._v(" "),s("li",[t._v("The "),s("strong",[t._v("MOST cost-efficient")]),t._v(" instances in AWS")]),t._v(" "),s("li",[s("strong",[t._v("Useful for workloads that are resilient to failure")]),t._v(" "),s("ul",[s("li",[t._v("Batch jobs")]),t._v(" "),s("li",[t._v("Data analysis")]),t._v(" "),s("li",[t._v("Image processing")]),t._v(" "),s("li",[t._v("Any "),s("strong",[t._v("distributed")]),t._v(" workloads")]),t._v(" "),s("li",[t._v("Workloads with a flexible start and end time (resilient to failures)")])])]),t._v(" "),s("li",[s("strong",[t._v("Not suitable for critical jobs or databases")])])]),t._v(" "),s("h4",{attrs:{id:"spot-instances-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spot-instances-requests"}},[t._v("#")]),t._v(" Spot Instances Requests")]),t._v(" "),s("ul",[s("li",[t._v("Define "),s("strong",[t._v("max spot price")]),t._v(" and get the instance while "),s("strong",[t._v("current spot price < max")]),t._v(" "),s("ul",[s("li",[t._v("The hourly spot price varies based on offer and capacity")]),t._v(" "),s("li",[t._v("If the current spot price > your max price you can choose to "),s("strong",[t._v("stop")]),t._v(" or "),s("strong",[t._v("terminate")]),t._v(" your instance with a 2 minutes grace period.")])])]),t._v(" "),s("li",[t._v("Other strategy: "),s("strong",[t._v("Spot Block")]),t._v(" ("),s("code",[t._v("NO SUPPORT ANYMORE")]),t._v(")\n"),s("ul",[s("li",[t._v("“block” spot instance during a specified time frame (1 to 6 hours) without interruptions")]),t._v(" "),s("li",[t._v("In rare situations, the instance may be reclaimed")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(572),alt:"spot price"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://console.aws.amazon.com/ec2sp/v1/spot/home?region=us-east-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Detail link"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"terminate-sspot-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminate-sspot-instances"}},[t._v("#")]),t._v(" Terminate Sspot instances")]),t._v(" "),s("p",[s("img",{attrs:{src:a(573),alt:"cancel Sspot"}})]),t._v(" "),s("ul",[s("li",[t._v("You can only cancel Spot Instance requests that are "),s("strong",[t._v("open")]),t._v(", "),s("strong",[t._v("active")]),t._v(", or "),s("strong",[t._v("disabled")]),t._v(".")]),t._v(" "),s("li",[t._v("Cancelling a Spot Request does not terminate instances")]),t._v(" "),s("li",[t._v("You must first cancel a Spot Request, and then terminate the associated Spot Instances")])]),t._v(" "),s("h4",{attrs:{id:"spot-fleets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spot-fleets"}},[t._v("#")]),t._v(" Spot fleets")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Spot Fleets = set of Spot Instances + (optional) On-Demand Instances")])]),t._v(" "),s("li",[t._v("The Spot Fleet will try to meet the target capacity with price constraints\n"),s("ul",[s("li",[t._v("Define possible launch pools: instance type (m5.large), OS, Availability Zone")]),t._v(" "),s("li",[t._v("Can have multiple launch pools, so that the fleet can choose")]),t._v(" "),s("li",[t._v("Spot Fleet stops launching instances when reaching capacity or max cost")])])]),t._v(" "),s("li",[t._v("Strategies to allocate Spot Instances:\n"),s("ul",[s("li",[t._v("lowestPrice: from the pool with the lowest price (cost optimization, short workload)")]),t._v(" "),s("li",[t._v("diversified: distributed across all pools (great for availability, long workloads)")]),t._v(" "),s("li",[t._v("capacityOptimized: pool with the optimal capacity for the number of instances")]),t._v(" "),s("li",[s("strong",[t._v("priceCapacityOptimized (recommended)")]),t._v(": pools with highest capacity available, then select the pool with the lowest price (best choice for most workloads)")])])]),t._v(" "),s("li",[t._v("Spot Fleets allow us to automatically request Spot Instances with the lowest price")])]),t._v(" "),s("h3",{attrs:{id:"dedicated-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dedicated-hosts"}},[t._v("#")]),t._v(" Dedicated Hosts")]),t._v(" "),s("ul",[s("li",[t._v("A physical server with EC2 instance capacity fully dedicated to your use")]),t._v(" "),s("li",[t._v("Allows you address "),s("strong",[t._v("compliance requirements")]),t._v(" and "),s("strong",[t._v("use your existing server- bound software licenses")]),t._v(" (per-socket, per-core, pe—VM software licenses)")]),t._v(" "),s("li",[t._v("Purchasing Options:\n"),s("ul",[s("li",[s("strong",[t._v("On-demand")]),t._v(" – pay per second for active Dedicated Host")]),t._v(" "),s("li",[s("strong",[t._v("Reserved")]),t._v(" - 1 or 3 years (No Upfront, Partial Upfront, All Upfront)")])])]),t._v(" "),s("li",[t._v("The most expensive option")]),t._v(" "),s("li",[t._v("Useful for software that have complicated licensing model (BYOL – Bring Your Own License)")]),t._v(" "),s("li",[t._v("Or for companies that have strong regulatory or compliance needs")])]),t._v(" "),s("h3",{attrs:{id:"dedicated-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dedicated-instances"}},[t._v("#")]),t._v(" Dedicated Instances")]),t._v(" "),s("ul",[s("li",[t._v("Instances run on hardware that’s dedicated to you")]),t._v(" "),s("li",[t._v("May share hardware with other instances in same account")]),t._v(" "),s("li",[t._v("No control over instance placement (can move hardware after Stop / Start)")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Characteristic")]),t._v(" "),s("th",[t._v("Dedicated Instances")]),t._v(" "),s("th",[t._v("Dedicated Hosts")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Enables the use of dedicated physical servers")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Per instance billing (subject to a $2 per region fee)")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Per host billing")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Visibility of sockets, cores, host ID")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Affinity between a host and instance")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Targeted instance placement")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Automatic instance placement")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")])]),t._v(" "),s("tr",[s("td",[t._v("Add capacity using an allocation request")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✅")])])])]),t._v(" "),s("h3",{attrs:{id:"capacity-reservations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capacity-reservations"}},[t._v("#")]),t._v(" Capacity Reservations")]),t._v(" "),s("ul",[s("li",[t._v("Reserve On-Demand instances capacity in a specific AZ for any duration")]),t._v(" "),s("li",[t._v("You always have access to EC2 capacity when you need it")]),t._v(" "),s("li",[s("strong",[t._v("No time commitment")]),t._v(" (create/cancel anytime), "),s("strong",[t._v("no billing discounts")])]),t._v(" "),s("li",[t._v("Combine with Regional Reserved Instances and Savings Plans to benefit from billing discounts")]),t._v(" "),s("li",[t._v("You’re charged at On-Demand rate whether you run instances or not")]),t._v(" "),s("li",[t._v("Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ")])]),t._v(" "),s("h3",{attrs:{id:"which-option-is-right-for-me"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which-option-is-right-for-me"}},[t._v("#")]),t._v(" Which option is right for me?")]),t._v(" "),s("ul",[s("li",[t._v("On demand: coming and staying in resort whenever we like, we pay the full price")]),t._v(" "),s("li",[t._v("Reserved: like planning ahead and if we plan to stay for a long time, we may get a good discount.")]),t._v(" "),s("li",[t._v("Savings Plans: pay a certain amount per hour for certain period and stay in any room type (e.g., King, Suite, Sea View, …)")]),t._v(" "),s("li",[t._v("Spot instances: the hotel allows people to bid for the empty rooms and the highest bidder keeps the rooms. You can get kicked out at any time")]),t._v(" "),s("li",[t._v("Dedicated Hosts: We book an entire building of the resort")]),t._v(" "),s("li",[t._v("Capacity Reservations: you book a room for a period with full price even you don’t stay in it")])]),t._v(" "),s("h3",{attrs:{id:"price-comparison"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#price-comparison"}},[t._v("#")]),t._v(" Price Comparison")]),t._v(" "),s("p",[t._v("Example – "),s("code",[t._v("m4.large")]),t._v(" – "),s("code",[t._v("us-east-1")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Price")]),t._v(" "),s("th",[t._v("Type Price (per hour)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("On-Demand")]),t._v(" "),s("td",[t._v("$0.10")])]),t._v(" "),s("tr",[s("td",[t._v("Spot Instance (Spot Price)")]),t._v(" "),s("td",[t._v("$0.038 - $0.039 (up to 61% off)")])]),t._v(" "),s("tr",[s("td",[t._v("Reserved Instance (1 year)")]),t._v(" "),s("td",[t._v("$0.062 (No Upfront) - $0.058 (All Upfront)")])]),t._v(" "),s("tr",[s("td",[t._v("Reserved Instance (3 years)")]),t._v(" "),s("td",[t._v("$0.043 (No Upfront) - $0.037 (All Upfront)")])]),t._v(" "),s("tr",[s("td",[t._v("EC2 Savings Plan (1 year)")]),t._v(" "),s("td",[t._v("$0.062 (No Upfront) - $0.058 (All Upfront)")])]),t._v(" "),s("tr",[s("td",[t._v("Reserved Convertible Instance (1 year)")]),t._v(" "),s("td",[t._v("$0.071 (No Upfront) - $0.066 (All Upfront)")])]),t._v(" "),s("tr",[s("td",[t._v("Dedicated Host")]),t._v(" "),s("td",[t._v("On-Demand Price")])]),t._v(" "),s("tr",[s("td",[t._v("Dedicated Host Reservation")]),t._v(" "),s("td",[t._v("Up to 70% off")])]),t._v(" "),s("tr",[s("td",[t._v("Capacity Reservations")]),t._v(" "),s("td",[t._v("On-Demand Price")])])])]),t._v(" "),s("h2",{attrs:{id:"placement-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups"}},[t._v("#")]),t._v(" Placement Groups")]),t._v(" "),s("ul",[s("li",[t._v("Sometimes you want control over the EC2 Instance placement strategy")]),t._v(" "),s("li",[t._v("That strategy can be defined using placement groups")]),t._v(" "),s("li",[t._v("When you create a placement group, you specify one of the following strategies for the group:\n"),s("ul",[s("li",[s("em",[t._v("Cluster—clusters")]),t._v(" instances into a low-latency group in a "),s("strong",[t._v("single Availability Zone")])]),t._v(" "),s("li",[s("em",[t._v("Spread—spreads")]),t._v(" instances across underlying hardware (max 7 instances per group per AZ)")]),t._v(" "),s("li",[s("em",[t._v("Partition—spreads")]),t._v(" instances across many different partitions (which rely on different sets of racks) within an AZ. Scales to 100s of EC2 instances per group (Hadoop, Cassandra, Kafka)")])])])]),t._v(" "),s("h3",{attrs:{id:"placement-groups-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups-cluster"}},[t._v("#")]),t._v(" Placement Groups Cluster")]),t._v(" "),s("p",[s("a",{attrs:{href:"./pgcluster.png"}},[t._v("placement group cluster")])]),t._v(" "),s("ul",[s("li",[t._v("✅ Pros: Great network (10 Gbps bandwidth between instances with Enhanced Networking enabled - recommended)")]),t._v(" "),s("li",[t._v("❌ Cons: If the rack fails, all instances fails at the same time")])]),t._v(" "),s("p",[s("strong",[t._v("Use case")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Big Data job that needs to complete fast")]),t._v(" "),s("li",[t._v("Application that needs extremely low latency and high network throughput")])]),t._v(" "),s("h3",{attrs:{id:"placement-groups-spread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups-spread"}},[t._v("#")]),t._v(" Placement Groups Spread")]),t._v(" "),s("p",[s("a",{attrs:{href:"./pgspread.png"}},[t._v("placement group spread")])]),t._v(" "),s("ul",[s("li",[t._v("✅ Pros:\n"),s("ul",[s("li",[t._v("Can span across Availability Zones (AZ)")]),t._v(" "),s("li",[t._v("Reduced risk is simultaneous failure")]),t._v(" "),s("li",[t._v("EC2 Instances are on different physical hardware")])])]),t._v(" "),s("li",[t._v("❌ Cons: Limited to 7 instances per AZ per placement group")])]),t._v(" "),s("p",[s("strong",[t._v("Use case")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Application that needs to maximize high availability")]),t._v(" "),s("li",[t._v("Critical Applications where each instance must be isolated from failure from each other")])]),t._v(" "),s("h3",{attrs:{id:"placement-groups-partition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placement-groups-partition"}},[t._v("#")]),t._v(" Placement Groups Partition")]),t._v(" "),s("p",[s("a",{attrs:{href:"./pgpartition.png"}},[t._v("placement group Partition")]),t._v("\neach partition represent a rack in AWS")]),t._v(" "),s("ul",[s("li",[t._v("Up to 7 partitions per AZ")]),t._v(" "),s("li",[t._v("Can span across multiple AZs in the same region")]),t._v(" "),s("li",[t._v("Up to 100s of EC2 instances")]),t._v(" "),s("li",[t._v("The instances in a partition do not share racks with the instances in the other partitions")]),t._v(" "),s("li",[t._v("A partition failure can affect many EC2 but won’t affect other partitions")]),t._v(" "),s("li",[t._v("EC2 instances get access to the partition information as metadata")])]),t._v(" "),s("p",[s("strong",[t._v("Use case")]),t._v(": HDFS, HBase, Cassandra, Kafka")]),t._v(" "),s("h2",{attrs:{id:"hibernate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hibernate"}},[t._v("#")]),t._v(" Hibernate")]),t._v(" "),s("p",[t._v("We know we can stop, terminate instances")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Stop")]),t._v(" – the data on disk (EBS) is kept intact in the next start")]),t._v(" "),s("li",[s("strong",[t._v("Terminate")]),t._v(" – any EBS volumes (root) also set-up to be destroyed is lost")])]),t._v(" "),s("p",[t._v("On start, the following happens:")]),t._v(" "),s("ul",[s("li",[t._v("First start: the OS boots & the EC2 User Data script is run")]),t._v(" "),s("li",[t._v("Following starts: the OS boots up")]),t._v(" "),s("li",[t._v("Then your application starts, caches get warmed up, and that can take time!")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(574),alt:"hibernate"}})]),t._v(" "),s("h3",{attrs:{id:"overview-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("ul",[s("li",[t._v("The in-memory (RAM) state is preserved")]),t._v(" "),s("li",[t._v("The instance boot is much faster! (the OS is not stopped / restarted)")]),t._v(" "),s("li",[t._v("Under the hood: the RAM state is written to a file in the root EBS volume")]),t._v(" "),s("li",[t._v("The root EBS volume must be encrypted")])]),t._v(" "),s("p",[t._v("Use cases:")]),t._v(" "),s("ul",[s("li",[t._v("Long-running processing")]),t._v(" "),s("li",[t._v("Saving the RAM state")]),t._v(" "),s("li",[t._v("Services that take time to initialize")])]),t._v(" "),s("h3",{attrs:{id:"good-to-know"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#good-to-know"}},[t._v("#")]),t._v(" Good to know")]),t._v(" "),s("ul",[s("li",[t._v("Supported Instance Families – C3, C4, C5, I3, M3, M4, R3, R4, T2, T3, …")]),t._v(" "),s("li",[t._v("Instance RAM Size – must be less than 150 GB.")]),t._v(" "),s("li",[t._v("Instance Size – not supported for bare metal instances.")]),t._v(" "),s("li",[t._v("AMI – Amazon Linux 2, Linux AMI, Ubuntu, RHEL, CentOS & Windows…")]),t._v(" "),s("li",[t._v("Root Volume – must be EBS, encrypted, not instance store, and large")]),t._v(" "),s("li",[t._v("Available for On-Demand, Reserved and Spot Instances")]),t._v(" "),s("li",[t._v("An instance can NOT be hibernated more than 60 days")])]),t._v(" "),s("h2",{attrs:{id:"ec2-instance-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ec2-instance-store"}},[t._v("#")]),t._v(" EC2 Instance Store")]),t._v(" "),s("ul",[s("li",[t._v("Provide temporary block level storage for instance.")]),t._v(" "),s("li",[t._v("The storage is a disk that physically attached to host.")]),t._v(" "),s("li",[t._v("Good for buffer / cache / scratch data / temporary content")]),t._v(" "),s("li",[t._v("Ideal workload: buffers, caches, scratch data, temporary content")]),t._v(" "),s("li",[t._v("Data is lost when:\n"),s("ul",[s("li",[t._v("Underlying disk drive fails")]),t._v(" "),s("li",[t._v("Instance stop / hibernates / terminates")])])]),t._v(" "),s("li",[t._v("Backups and Replication are your responsibility")]),t._v(" "),s("li",[t._v("Very high IOPS: up to million IOPS (Eg: i3.16xlarge 3.3M read and 1.4M write IOPS).  If you need a high-performance hardware disk, use EC2 Instance Store")])]),t._v(" "),s("p",[s("strong",[t._v("Ref")]),t._v(": "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/storage-optimized-instances.html#storage-instances-diskperf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Better I/O performance"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"amazon-machine-image-ami"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-machine-image-ami"}},[t._v("#")]),t._v(" Amazon Machine Image (AMI)")]),t._v(" "),s("ul",[s("li",[t._v("AMI are a "),s("strong",[t._v("customization")]),t._v(" of an EC2 instance\n"),s("ul",[s("li",[t._v("You add your own software, configuration, operating system, monitoring…")]),t._v(" "),s("li",[t._v("Faster boot / configuration time because all your software is pre-packaged")])])]),t._v(" "),s("li",[t._v("AMI are built for a "),s("strong",[t._v("specific region")]),t._v(" (and can be copied across regions)")]),t._v(" "),s("li",[t._v("You can launch EC2 instances from:\n"),s("ul",[s("li",[t._v("A Public AMI: AWS provided")]),t._v(" "),s("li",[t._v("Your own AMI: you make and maintain them yourself")]),t._v(" "),s("li",[t._v("An AWS Marketplace AMI: an AMI someone else made (and potentially sells)")])])])]),t._v(" "),s("h3",{attrs:{id:"ami-process-from-an-ec2-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ami-process-from-an-ec2-instance"}},[t._v("#")]),t._v(" AMI Process (from an EC2 instance)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(575),alt:"ami"}})]),t._v(" "),s("ul",[s("li",[t._v("Start an EC2 instance and customize it")]),t._v(" "),s("li",[t._v("Stop the instance (for data integrity)")]),t._v(" "),s("li",[t._v("Build an AMI – this will also create EBS snapshots")]),t._v(" "),s("li",[t._v("Launch instances from other AMIs")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hiepsharing.com/tao-ami-tu-ec2-instance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tạo AMI từ EC2"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports},572:function(t,e,a){t.exports=a.p+"assets/img/spot-instance-price.1f17ef42.png"},573:function(t,e,a){t.exports=a.p+"assets/img/spot-instance-terminate.707e3f17.png"},574:function(t,e,a){t.exports=a.p+"assets/img/hibernation-flow.f1a3780e.png"},575:function(t,e){t.exports="data:image/png;base64,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"}}]);