# Terraform notes

## Workflow 

![Workflow](https://i.pinimg.com/736x/0c/36/0c/0c360c0676ebb7f1046c653a83888895.jpg)

```
terraform init
terraform plan
terraform apply
terraform destroy
```

## Aws 

### How terraform authenticate Aws
- Environment Variables: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
- Parameters in the provider config (hard code)
- Shared Credentials and Configuration Profile (path to creds)
- through AWS CLI
- EC2 Instance Profiles
- Assuming Roles with Assume Role

[Watch more](https://www.youtube.com/watch?app=desktop&v=JZRMA1NyNlE)

## Snippets


### Store state in S3

```
terraform {
  backend "s3" {
    bucket = "terraform-state" # create before init
    key    = "global/partizan/dev/terraform.tfstate"
    region = "ap-southeast-1"
    encrypt = true
  }
}
```

### Remove a resource from state

```
terraform state list
terraform state rm <resource-id>
```

hen you need to delete the associated configuration from your codebase & run `plan` to check

[Read more](https://stackoverflow.com/questions/61297480/how-can-i-remove-a-resource-from-terraform-state)