# Access Keys

Access Keys is a key & secret required to have programmatic access to AWS resources when interacting with the AWS API outside of the AWS Management Console

An Access Key is commonly referred to as **AWS Credentials**

A user must be granted access to use Access Keys

::: warning Notes
- Never share your access keys
- Never commmit access keys to a **codebase**
- You can have 2 active Access keys
- You can deactivate Access keys
- Access keys have whatever access a user has to AWS resources
:::

## Stored path

Access Keys are to be store in **~/.aws/credentials** and follow a TOML file format

```sh
[default]
aws_access_key_id=AKIAI0SFODNN7EXAMPLE 
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
[exampro]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPRfiCYEXAMPLEKEY 
region=ca-central-1
```

- **Default** will be the access key used when no profile is specified.
- You can store multiple access keys by giving the **profile** names.
- You can use the **aws configure** CLI command to populate the credential file.

```sh
aws configure

AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: walrUtnFEMI/K7MDENG/bPXRfiCYEXAMPLEKEY
Default region name [None]: us-west-2
Default output format [None]: json
```


## Env Var

The AWS SDK will automatically read from these environment variables.

This is the safe way of using an Access Key within your code.

```sh
export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE 
export AWS_SECRET_ACCESS_KEY=wJalrUtnFEMI/K7MDENG/bPRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
```