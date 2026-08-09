/*
=>  What is Terraform?
    -   Terraform is an Infrastructure as Code (IaC) tool that lets you define, 
        create, update, and manage cloud infrastructure using code instead of doing 
        things manually.

    -   You write infrastructure in .tf files (declarative syntax), and Terraform 
        provisions resources like:
            - EC2, S3, RDS (AWS)
            - VM, Storage, Network (Azure / GCP)
            - Kubernetes, DNS, Load Balancers, etc.

    -   Terraform state is a file that keeps track of what infrastructure 
        Terraform has already created
*/
/*
=>  Why do we use Terraform?
    -   Because manual infrastructure is slow, error-prone, and not scalable.
    -   Terraform helps you:
            - Automate infrastructure creation
            - Keep infra version-controlled (like application code)
            - Recreate the same infra across dev / staging / prod
            - Avoid “it works on my account” problems

    -   Think of Terraform as Git + automation for infrastructure.
*/
/*
=>  Benefits of Terraform:
1️) Infrastructure as Code (IaC)
    - Infra is written as code
    - Easy to review, test, and track changes
    - Rollback infra just like application code

2️)  Cloud-agnostic
    - One tool for AWS, Azure, GCP, Kubernetes, etc.
    - Same syntax, different providers

3️) Declarative Approach:
    -   You say WHAT you want, not HOW to do it.
    resource "aws_s3_bucket" "logs" {
        bucket = "app-logs"
    }

-   Terraform figures out:
        - Create
        - Update
        - Delete
        - Dependencies

4️) State Management
    -   Terraform keeps a state file that knows:
            What resources exist
            What needs to change
            What must be destroyed or recreated

    This prevents:
        Duplicate resources
        Accidental deletions

5️) Idempotency (Very Important)
    -   Run Terraform multiple times, result stays the same.
        - No duplicate EC2s
        - No extra load balancers

6️) Reusability with Modules
    -   Create reusable infra blocks:
        modules/
        └── vpc
        └── ec2
        └── rds
    -   Use them across projects → DRY infra

7️) Safe Changes with plan
    - Before applying changes:
        -   terraform plan
    -   You can see exactly what will change before it happens.

8️) Easy CI/CD Integration
    -   Terraform fits perfectly into:
            - GitHub Actions
            - Jenkins
            - GitLab CI
            - AWS CodePipeline
*/
/*
=>  One-line interview answer:
    -   Terraform is an Infrastructure as Code tool that helps us provision and 
        manage cloud infrastructure in a consistent, automated, version-controlled, 
        and scalable way.

    -   Terraform is a single tool that lets you manage infrastructure across 
        multiple cloud providers (AWS, Azure, GCP, etc.) using the same syntax.

    -   Terraform itself is not infrastructure.
    -   Terraform is a tool that creates and manages infrastructure
*/

/*
=> Infrastructure:
    -   Infrastructure is everything required to run an application in production — 
        except the application code itself.
    -   Think:
            “All the stuff your code needs to exist and run.”
            Infrastructure = Building Blocks 🧱
    -   Examples:
            - Virtual Machines (EC2)
            - Containers (Docker)
            - Kubernetes nodes

    -   Infrastructure is the underlying resources 
        (servers, networks, storage, security) needed to run an application.
    -   Compute infrastructure provides machines to run code 
        (e.g., EC2, virtual machines).
    -   Storage infrastructure stores data and files 
        (e.g., PostgreSQL, S3).
    -   Networking infrastructure enables communication between services 
        (e.g., VPC, subnets, load balancers).
    -   Security infrastructure controls access and protection 
        (e.g., IAM roles, security groups).
    -   Scalability infrastructure handles traffic growth automatically 
        (e.g., Auto Scaling Groups).
    -   Reliability infrastructure ensures high availability and fault tolerance 
        (e.g., multi-AZ deployments).
    -   Observability infrastructure helps monitor and debug systems 
        (e.g., logs, metrics, alerts).
*/
/*
=> What Terraform really does:
    -   Think of Terraform as an infrastructure planner + executor, not just a 
        script runner

=>  Step-by-step flow:
    1) Reads your .tf files
        → These files describe the desired state of infrastructure
            (servers, DBs, load balancers, IAM, etc.)

    2) Reads current infrastructure (via State):
        → Terraform checks:
            - terraform.tfstate (local/remote)
            - Cloud provider APIs (AWS, GCP, Azure)
    
    3) Calculates a diff (Plan phase)
        Compares:
        -   Desired state (code)
        -   Current state (real infra)
                → Produces an execution plan:
        -   + create
        -   ~ update
        -   - destroy
    
    4) Applies changes safely (Apply phase)
        -   Executes changes in correct order
        -   Handles dependencies automatically
        -   Updates the state file after success

🧠 Core idea (VERY IMPORTANT):
    -   Terraform is a state-driven engine
    -   Terraform does NOT ask:
            “What commands should I run?”

    -   Terraform asks:
            “What should the final infrastructure look like?”

    -   It then figures out how to reach that state.

=>  Mental Model (easy to remember):
    Code (.tf)  → Desired State
    State File  → Current State
    Terraform   → Diff Engine + Executor
*/
/*
=>  Real-world analogy
    => Imagine Git:
        .tf files = your code
        terraform.tfstate = .git/index
        terraform plan = git diff
        terraform apply = git commit
*/

/*
=>  Terraform Core Concepts (Must know):
    | Concept  | Meaning                            |
    | -------- | ---------------------------------- |
    | Provider | Cloud/service Terraform talks to   |
    | Resource | Actual infra object (EC2, S3, VPC) |
    | State    | Terraform’s memory of infra        |
    | Plan     | Preview of infra changes           |
    | Apply    | Executes changes                   |
    | Destroy  | Deletes infra                      |
*/

/*
=> Terraform Workflow (Very Important):
    -   Every Terraform project follows this::
        - terraform init     # download providers
        - terraform plan     # show what will change, kind of compilation of the code
        - terraform apply    # create infra
        - terraform destroy  # cleanup
        - terraform state list # list down service/infrastructures are running
*/

/*
=>  First Real Resource (S3 Bucket):
    - in .tf file
        resource "aws_s3_bucket" "my_bucket" {
            bucket = "ravi-terraform-demo-bucket"
        }

    -   Terraform language is declarative:
            - You say what
            - Terraform decides how
*/

/*
=> Understanding State (Critical 🔥):
    -   Terraform creates:
            terraform.tfstate
    -   This file:
            - Tracks resources
            - Prevents duplication
            - Enables updates

    -   Rule:
            - Never edit state manually
            - Never commit state to Git
->  Later we’ll move it to remote state (S3 + DynamoDB).
*/

/*
=>  Terraform Stack:
    -   A Terraform stack is a logical unit that groups multiple related Terraform 
        components (configs, modules, state, and environments) to manage 
        infrastructure as one cohesive system.

    -   Think of it as “everything needed to run one environment of an app”.
*/
/*
=>  Terraform Stack (simple model):
    Application
     └── Terraform Stack
        ├── Infrastructure code (modules)
        ├── Variables
        ├── State
        ├── Environment (dev / stage / prod)

    ->  A stack = infra + config + state + environment
*/

/*
=>  Why Terraform Stacks exist
    - Before stacks:
        - You manually managed:
            - folders
            - workspaces
            - remote state
            - environments

        -   Easy to mess up prod

    - With stacks:
        - Infrastructure is organized, isolated, and repeatable
        - Each environment is cleanly separated
        - Safer deployments
*/
/*
=> What a Terraform Stack usually contains:
    1) Infrastructure code:
        Resources and modules:
            - aws_vpc
            - aws_ec2
            - aws_rds
            - aws_s3
    2) Input variables:
        - region
        - instance_type
        - environment
    3) State
        - Each stack has its own state
        - No dev/prod collisions

    4) Environment binding:
        Same code
        Different values
            dev stack
            staging stack
            prod stack
*/

/*
=> Real-world example:
    -   E-commerce app stack:
            Dev Stack
                - Small EC2
                - Cheap RDS
                - Test S3 bucket

            Prod Stack
                - Auto Scaling
                - Multi-AZ RDS
                - Encrypted S3
                - CloudWatch alarms
*/
/*
    | Feature          | Stack    | Workspace      |
    | ---------------- | -------- | -------------- |
    | Isolation        | Strong   | Weak           |
    | State            | Separate | Shared backend |
    | Safety           | High     | Risky          |
    | Enterprise-ready | ✅       | ❌            |
*/