# DNS Records

## Record types

- How you want to route traffic for a domain
- Each record contains:
    - **Domain/subdomain Name** – e.g., example.com
    - **Record Type** – e.g., A or AAAA
    - **Value** – e.g., 12.34.56.78
    - **Routing Policy** – how Route 53 responds to queries
    - **TTL** – amount of time the record cached at DNS Resolvers
- Route 53 supports the following DNS record types:
    - (must know) A / AAAA / CNAME / NS
    - (advanced) CAA / DS / MX / NAPTR / PTR / SOA / TXT / SPF / SRV


| Record Type | Description | Example (for `example.com`) |
| :--- | :--- | :--- |
| **A** | Maps a domain to an **IPv4** address. | `example.com` → `93.184.216.34` |
| **AAAA** | Maps a domain to an **IPv6** address. | `example.com` → `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| **CNAME** | Creates an **alias** from one domain to another. | `www.example.com` → `example.com` |
| **MX** | Specifies the **mail server** for a domain. | `example.com` → `mail.example.com` (with a priority number) |
| **TXT** | Stores **text-based data**, often for security. | `example.com` → `v=spf1 include:_spf.google.com ~all` (an SPF record) |
| **NS** | Lists the **authoritative name servers** for a domain. | `example.com` → `ns1.example-dns.net` |
| **SOA** | Holds **administrative info** for a DNS zone. | `example.com` (contains info like the primary nameserver and administrator's email) |
| **PTR** | Performs a **reverse DNS lookup**, mapping an IP address back to a domain name. | `93.184.216.34` → `example.com` |


### Common CNAME Examples

| **Record Name** | **Record Type** | **Value/Target** | **Purpose** |
| :--- | :--- | :--- | :--- |
| `www.example.com` | `CNAME` | `example.com` | Redirects the "www" version of a site to the root domain. |
| `blog.example.com` | `CNAME` | `blogs-provider.com` | Points a subdomain to an external service like a blog hosting platform. |
| `shop.example.com` | `CNAME` | `store.shopify.com` | Directs a subdomain to an e-commerce platform. |
| `ghs.googlehosted.com` | `CNAME` | `example.com` | Used to verify domain ownership with Google services. |
| `cdn.example.com` | `CNAME` | `cdnprovider.net` | Routes traffic to a Content Delivery Network (CDN) for faster content loading. |
| `old-domain.com` | `CNAME` | `new-domain.com` | Redirects visitors from an old domain to a new one during a migration. |

## Aws notes

### Records TTL (Time To Live)

- **High TTL** – e.g., 24 hr
    - Less traffic on Route 53
    - Possibly outdated records
- **Low TTL** – e.g., 60 sec.
    - More traffic on Route 53 ($$)
    - Records are outdated for less time
    - Easy to change records
- **Except for Alias records, TTL is mandatory for each DNS record**

### CNAME vs Alias

- AWS Resources (Load Balancer, CloudFront...) expose an AWS hostname:
    - `lb1-1234.us-east-2.elb.amazonaws.com` and you want `myapp.mydomain.com`
- **CNAME**:
    - Points a hostname to any other hostname. (`app.mydomain.com` => `blabla.anything.com`)
    - **ONLY FOR NON ROOT DOMAIN** (aka. `something.mydomain.com`)
- **Alias**:
    - Points a hostname to an AWS Resource (`app.mydomain.com` => `blabla.amazonaws.com`)
    - **Works for ROOT DOMAIN and NON ROOT DOMAIN** (aka `mydomain.com`)
    - Free of charge
    - Native health check 

### Alias Records

- **Maps a hostname to an AWS resource**
- An extension to DNS functionality
- Automatically recognizes changes in the resource’s IP addresses
- Unlike CNAME, it can be used for the top node of a DNS namespace (Zone Apex), e.g.: `example.com`
- Alias Record is always of type **A/AAAA** for AWS resources (IPv4 / IPv6)
- **You can’t set the TTL**

Record Name | Type | Value 
---- | ---- | ----
`example.com` | A | `MyALB-123456789.useast1.elb.amazonaws.com`

**Alias Records Targets**
- Elastic Load Balancers
- CloudFront Distributions
- API Gateway
- Elastic Beanstalk environments
- S3 Websites
- VPC Interface Endpoints
- Global Accelerator accelerator
- Route 53 record in the same hosted zone
- **You cannot set an ALIAS record for an EC2 DNS name**

## Email-Related DNS Records 

| **Record Type** | **Purpose / Description** |
|------------------|----------------------------|
| **MX** | Specifies which mail server receives incoming emails for the domain. |
| **A** | Maps the mail server’s hostname to its IPv4 address. |
| **AAAA** | Maps the mail server’s hostname to its IPv6 address. |
| **TXT (SPF)** | Defines which mail servers are authorized to send emails for the domain (anti-spoofing). |
| **TXT (DKIM)** | Publishes a public key used to verify that outgoing emails haven’t been tampered with. |
| **TXT (DMARC)** | Tells receiving mail servers how to handle messages that fail SPF/DKIM checks and where to send reports. |
| **PTR** | Provides reverse DNS lookup — ensures the mail server’s IP matches its domain (used for spam prevention). |
| **TXT (MTA-STS)** | Announces that the domain enforces secure SMTP delivery using TLS. |
| **CNAME (DKIM selector)** | Delegates DKIM key hosting to another mail provider or subdomain. |

**Quick Notes**:
- TTL (Time To Live): How long DNS resolvers cache the record (in seconds).
- Priority: Only applies to MX (lower = higher priority).
- SPF, DKIM, DMARC are all stored as TXT records even though they serve different authentication functions.
    - SPF: Sender Policy Framework
    - DKIM:  DomainKeys Identified Mail
    - DMARC: Domain-based Message Authentication, Reporting, and Conformance
- PTR must be configured by the mail server’s IP owner (ISP or hosting provider).
- MTA-STS (and newer TLS-RPT) enhance secure SMTP delivery over TLS.
