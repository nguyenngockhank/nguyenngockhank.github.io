# Amazon Resource Name (ARN)

**Amazon Resource Names (ARNs)** uniquely identify AWS resources. ARNs are required to specify a resource unambiguously across all of AWS


## Format

The ARN has the following **format variations**: 
```
arn:partition:service:region:account-id:resource-id
arn:partition:service:region:account-id:resource-type/resource-id
arn:partition:service:region:account-id:resource-type:resource-id
```

Example
```
Name    my-webserver-alb
ARN     arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/my-webserver-alb/31e9d2ce26643cd8
```

- Partition
    - aws - AWS Regions
    - aws-cn - China Regions
    - aws-us-gov - AWS GovCloud (US) Regions
- Service - Identifies the service
    - ec2
    - s3
    - iam
- Region - which AWS resource
    - us-east-1
    - ca-central-1
- Account ID
    - 121212121212
    - 123456789012
- Resource ID: Could be a number name or **path**:
    - user/Bob
    - instance/i-1234567890abcdefo


## Path
Resource ARNs can include a path. Paths can include a wildcard character, namely an asterisk (`*`)

Examples 

**IAM Policy ARN Path**
```
arn:aws:iam::123456789012:user/Development/product_1234/*
```

**S3 ARN Path**
```
arn:aws:s3:::my_corporate_bucket/Development/*
```