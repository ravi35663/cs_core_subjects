# Terraform block: defines required providers and their versions
terraform {

    # Specifies which providers Terraform needs
    required_providers {

        # AWS provider configuration
        aws = {
            source  = "hashicorp/aws"   # Provider source (official AWS provider)
            version = "~> 5.0"           # Compatible with any 5.x version (>=5.0, <6.0)
        }
    }
}

# Provider block: configures how Terraform connects to AWS
provider "aws" {
    region = "us-east-2"                # AWS region (Ohio)
}

# Resource block: defines an AWS S3 bucket to be created
resource "aws_s3_bucket" "demo" {

    # Globally unique name for the S3 bucket
    bucket = "my-terraform-demo-bucket-123454321"

    # Tags applied to the S3 bucket
    tags = {
        Environment = "dev"             # Tag used to identify environment
    }
}
