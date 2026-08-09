# Useful Outputs
output "bucket_name"{
    value = aws_s3_bucket.app_bucket.bucket
}

output "bucket_arn" {
    value = aws_s3_bucket.app_bucket.arn
}


output "ec2_public_ip" {
  value = aws_instance.tf_demo_ec2.public_ip
}

output "lambda_name" {
  value = aws_lambda_function.demo_lambda.function_name
}
