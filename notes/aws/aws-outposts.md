# Outposts

is a fully managed service that offers the same AWS infrastructure, AWS services, APIs, & tools to virtually any datacenter, co-location space, or on-premises facility for a truly consistent hyrid experience.

![Full document](https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html)

## What?
- fully managed service
- ideal for workloads: low latency access to on-premise system, local data processing, data residency
- run locally AWS compute, storage, database and others
- available 42U rack (scale 1-96 racks)
- 2021 avaible 1U & 2U form factors
- support VMware Cloud on AWS Outposts

## Use cases
- Low latency compute
- Local data processing
- Data Residency
- Migration & Modernization

## Benefits
- Run AWS Services on premises
- Store & process data on premises
- Truly consistent hybrid experience
- Fully managed infrastructure

## AWS Services on Outposts

- AWS Compute:
    - M5 / M5d => General purpose
    - C5 / C5d => Compute 
    - R5 / R5d => RAM
    - G4dn => Graphic
    - I3en => IO
    - Coming soon: ...
- AWS Storage:
    - S3 (another tier S3 Outposts)
    - S3 Optional: 26TB, 48TB, 96TB, 240TB, 380TB
    - ESB Snapshot
- AWS Networking:
    - ALB (single subnet)
    - Local Gateway (LGW)
    - VPC Extension
    - Private Connectivity (Service Link)
- AWS Container:
    - ECS
    - EKS
- AWS Databases:
    - RDS (MSSQL, MySQL, Postgres)
    - ElasticCache
- AWS Analytics: EMR
- Other tools: CloudWatch, CloudTrail, Elastic Beanstalk, CloudFormation, Cloud9, ....

## Security & Compliance
- Build on AWS Nitro sytem
- Data encryption at rest as default (EBS, S3)
- Data encryption in transit via Service Link
- Compliance cert: HIPAA, PCI, SOC, ISMAP, IRAP, FINMA, ISO, CSA STAR

## Pre-requisites
- Subscribe Enterprise Support
- Direct Connect (link from Outposts to Cloud)

