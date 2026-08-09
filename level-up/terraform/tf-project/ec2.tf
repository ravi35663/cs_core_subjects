data "aws_ami" "amazon_linux" {
    most_recent = true
    filter {
        name = "name"
        values = ["al2023-ami-*-x86_64"] # Uses latest Amazon Linux AMI
    }
    owners = ["amazon"]
}

resource "aws_instance" "tf_demo_ec2"{
    ami = data.aws_ami.amazon_linux.id
    instance_type = var.instance_type

    tags = {
        Name = "terraform -ec2"
        Environment = var.environment
    }
}