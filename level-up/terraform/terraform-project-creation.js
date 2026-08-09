/*
=>  Working with terraform:
    -   Install Terraform 
        → Install AWS CLI 
        → Configure AWS 
        → Run an AWS service (S3 bucket)
*/

/*
=> Steps to do that:
# 1️⃣ Install Terraform
    winget install --id HashiCorp.Terraform -e

# 2️⃣ Install AWS CLI
    winget install --id Amazon.AWSCLI -e

# 3️⃣ Verify installations
    terraform -version
    aws --version

# 4️⃣ Configure AWS credentials (use IAM access keys)
    aws configure
    # Enter:
    # AWS Access Key ID
    # AWS Secret Access Key
    # Default region: us-east-1
    # Output format: json

# 5️⃣ Verify AWS access
    aws sts get-caller-identity

# 6️⃣ Create Terraform project
    mkdir terraform-aws
    cd terraform-aws
    notepad main.tf

# 7️⃣ Terraform config to create an S3 bucket
    @'
    terraform {
    required_providers {
        aws = {
        source  = "hashicorp/aws"
        version = "~> 5.0"
        }
    }
    }

    provider "aws" {
    region = "us-east-1"
    }

    resource "aws_s3_bucket" "demo" {
    bucket = "my-terraform-demo-bucket-12345"
    }
    '@ | Out-File main.tf -Encoding utf8

# 8️⃣ Initialize Terraform
    terraform init

# 9️⃣ Preview changes
    terraform plan

# 🔟 Apply and create AWS resource
    terraform apply -auto-approve
*/

// Here aws-s3 bucket is used as infrastructure.