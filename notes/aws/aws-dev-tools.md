# AWS Developement Kit

## AWS Command Line Interface (CLI)

A Command Line Interface (CLI) processes commands to a computer program in the form of lines of text. Operating systems implement a command-line interface in a shell.

:::: tabs

::: tab Terminal
A terminal is a text only interface (input output environment)
:::

::: tab Console
A console is a physical computer to physically input information into a terminal
:::

::: tab Shell
A shell is the command line program that users interact with to input commands. Popular shell programs:
- Bash
- Zsh
- PowerShell
:::
::::



AWS Command Line Interface (CLI) allows users to programmatically interact with the AWS API via entering **single or multi-line commands** into a shell or terminal

- The AWS CLI is a Python executable program. *Python is required to install AWS CLI*
- The AWS CLI can be installed on Windows, Mac or Linux/Unix The name of the CLI program is **aws**

```py
aws ec2 describe-instances \
    --filters Name=tag-key, Values=Name \
    --query 'Reservations[*].Instances[*].{Instance:InstanceId, AZ:Placement.AvailabilityZone, Name:Tags[?Key==`Name`]|[0].value}' \
    --output table
```


[Install/Update](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)



### AWS CloudShell

**AWS CloudShell** is a **browser-based shell** built into the AWS Management Console. AWS CloudShell is scoped per region, Same credentials as logged in user. Free Service!

**Preinstalled Tools**: AWS CLI, Python, Node.js git, make, pip, sudo, tar, tmux, vim, wet, and zip and more

**Storage included**: 1 GB of storage free per AWS region

**Saved files and settings**: Files saved in your home directory are available in future sessions for the same
AWS region

**Shell Environments**: Seamlessly switch between `Bash`, `PowerShell`, `7sh`

## Software Development Kit (SDK)

A Software Development Kit (SDK) is a collection of software development tools in **one installable package**.

You can use the **AWS SDK** to programmatically create, modify, delete or interact with AWS resources.

Example
```ruby
S3 = Aws::S3::Resource.new({
    region: aws_default_region, 
    credentials: Aws::Credentials.new(
        aws_access_key_id, 
        aws_secret_access_key
    )
})
bucket = s3.bucket s3_bucket
file = File.open file_path
md5 = Digest::MD5.hexdigest file.read
md5 = Base64.encode64( [md5].pack("H*")).strip

attrs = {
    kev: data[ "path"], 
    body: I0.read(file), 
    content_md5: md5
}
resp = bucket.put_object(attrs)
```

## Infrastructure as Code (IaC)
You write a configuration script to **automate creating, updating or destroying** cloud infrastructure.
- IaC is a blueprint of your infrastructure.
- IaC allows you to easily **share, version or inventory** your cloud infrastructure.


![AWS CloudFormation](./img/Arch_AWS-CloudFormation_64.png)
**AWS CloudFormation (CFN)**: 
- Declarative
- What you see is what you get. **Explicit**
- More verbose, but zero chance of mis-configuration
- Uses scripting languages eg. JSON, YAML, XML

![AWS CDK](./img/Arch_AWS-Cloud-Development-Kit_64.png)
**AWS Cloud Development Kit (CDK)**:
- Imperative
- You say what you want, and the rest is filled in. **Implict**
- Less verbose, you could end up with misconfiguration
- Does more than Declarative
- Uses programming languages eg. Python, Ruby, JavaScript


### CloudFormation (CFN)

AWS CloudFormation allows you to write Infrastructure as Code (laC) as either a **JSON** or **YAML** file.

Example
```yml
Ec2Instance:
    Type: AWS::EC2::Instance
    Properties:
        ImageId:
            Fn::FindInMap:
                - "RegionMap"
                - Ref: "AWS::Region"
                - "AMI"
    KeyName:
        Ref: "KeyName"
    NetworkInterfaces: 
        - AssociatePublicIpAddress: "true"
            DeviceIndex: "O"
            GroupSet:
                - Ref: "myVPCEC2SecurityGroup"
            SubnetId:
                Ref: "PublicSubnet"
```

CloudFormation is simple but it can lead to **large files** or is limited in some regard to creating dynamic or repeatable infrastructure compared to CDK.

CloudFormation can be easier for DevOps Engineers who do not have a background in web programming languages.

Since CDK generates out CloudFormation its still important to be able to read and understand CloudFormation in order to debug *IaC* stacks.

### Cloud Development Kit

AWS CDK allows you to use your favorite programming language to write Infrastructure as Code (laC)

Example: 
```ts
const bucket = new Bucket(this, 'MyBucket') ;
const result = bucket. addToResourcePolicy(new iam.PolicyStatement({
    actions: ['s3:GetObject'],
    resources: [bucket.arnForobjects('file.txt')],
    principals: [new am.AccountRootPrincipal()],
}));
```

- CDK is powered by CloudFormation (it generates out CloudFormation templates)
- CDK has a large library of reusable cloud components called CDK Construct [constructs.dev](https://constructs.dev/)
- CDK comes with its own CLI
- CDK Pipelines to quickly setup I/CD pipelines for CDK projects
- CDK has a testing framework for Unit and Integration Testing

::: tip Note
AWS SDK looks similar, but the key difference is CDK ensures Idempotent of your Infrastructrue
:::

## AWS Toolkit for VSCode

[AWS Toolkit](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode)

- AWS Explorer
- AWS CDK Explorer
- Amazon Elastic Container Service
- Serverless Application
