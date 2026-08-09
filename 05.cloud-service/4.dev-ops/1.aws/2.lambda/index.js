/*
AWS Lambda:
    ->  AWS Lambda is a serverless compute service
    ->  You write small functions (code) → upload to AWS
    ->  AWS automatically runs the code when an event occurs
        -> Example:
            You can run the aws lambda function on certain event like when file is 
            uploaded on s3 then an event occurs, we can call the lambda on that event 
            and similarly you can call that function of below events: 
            ->  HTTP request (API Gateway)
            ->  File upload (S3)
            ->  Database change (DynamoDB)
            ->  Message (SQS / SNS)
                and many more.
    ->  No server provisioning, no infrastructure management
    ->  aws lambda Function runs on demand.
    ->  Note:  You only focus on code, AWS handles servers, scaling, OS, patches
*/

/*
Why do we use AWS Lambda?
    ->  To run backend logic without managing servers
    ->  To build event-driven and scalable applications
    ->  To reduce cost, complexity, and operational overhead
*/

/*
What problems does AWS Lambda solve?
    ->  Lambda solves all of these automatically
        ->  Managing servers & scaling
        ->  Paying for idle servers
        ->  Handling traffic spikes manually
        ->  Complex deployment & infra setup
*/

/*
How AWS Lambda works (simple flow):
    1)  An event occurs
        ->  HTTP request (API Gateway)
        ->  File upload (S3)
        ->  Database change (DynamoDB)
        ->  Message (SQS / SNS)
    2) AWS triggers the Lambda function
    3) Lambda executes your code
    4) AWS scales up/down automatically
    5)  You pay only for execution time
*/

/*
Benefits of using AWS Lambda:
    1)  No Server Management
        ->  No EC2
        ->  No OS updates
        ->  No patching
    2) Auto Scaling
        ->  Handles 1 request or 1 million requests
        ->  Scaling is instant & automatic
    3) Pay-as-you-go
        ->  Pay only for:
            ->  Number of executions
            ->  Execution time (ms)
        ->  No cost when idle

    4) High Availability
        ->  Runs across multiple AZs
        ->  Fault-tolerant by default

    5) Faster Development
        ->  Focus only on business logic
        ->  Easy CI/CD & deployments

    6) Event-Driven Architecture
        Perfect for:
            APIs
            Background jobs
            Cron jobs
            Data processing
*/

/*
What use cases does AWS Lambda fit best?
    ->  REST APIs (with API Gateway)
    ->  Authentication & authorization
    ->  Image/video processing
    ->  File uploads handling
    ->  Cron jobs (scheduled tasks)
    ->  Webhooks
    ->  Microservices
    ->  Real-time data processing
*/

/*
When NOT to use AWS Lambda?
    ->  Long-running tasks (>15 minutes)
    ->  Heavy CPU/GPU workloads
    ->  Applications needing persistent connections
    ->  Very low-latency systems (cold start sensitive)
*/

/*
Summary of lambda:
    ->  AWS Lambda is a serverless compute service that runs code in response to events 
        and automatically manages scaling, availability, and infrastructure, allowing 
        developers to focus only on business logic.
*/

/*
==> Exercise:
    ->  Create a lambda function on aws, create a s3 bucket. Call the lambda function 
        whenever any CRUD operation on files on s3 bucket.
*/