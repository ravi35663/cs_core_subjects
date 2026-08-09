#Config Input
variable "aws_region"{
    description = "AWS region"
    type = string
    default = "us-east-2"
}

variable "bucket_name" {
    description = "Unique S3 bucket name"
    type = string
}

variable "environment" {
    description = "Environment name"
    type = string
    default = "dev"
}

variable "instance_type" {
    type = string
    default = "t2.micro"
}
