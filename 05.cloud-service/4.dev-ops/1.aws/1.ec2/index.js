/*
What is AWS EC2:
    ->  AWS EC2 (Elastic Compute Cloud) is a virtual server service
    ->  You get a real machine (VM) in the cloud
    ->  Full control over OS, runtime, ports, processes
    ->  Provided by Amazon Web Services
*/

/*
==> Parts of EC2:
    1)  Instance type:  Select the hardware capacity (e.g., CPU, memory)
    2)  AMI (Amazon machine image): choose the operating system and software (linux, mac,window)
    3)  Storage: Configure the type and size of storage (e.g: EBS volume).
    4)  Security Groups: Set up firewall rules to control inbound/outbound traffic
    5)  Key pair: Create or use an existing key pair for SSH access. 
        -> You can use the virtual instances using your personal laptop using SSH key.
*/

/*
==> Security Groups:
    ->  Network firewall rules that control inbound and outbound traffic for instances

==> What problems do Security Groups solve:
    =>  Security Groups provide cloud-level firewall security by preventing below things:
        ->  Exposing servers to the internet accidentally
        ->  Unauthorized SSH / HTTP / DB access
        ->  Poor network-level security
        ->  Manual firewall configuration on servers

=>  Inbound Rules (Incoming traffic):   Defines who can access your EC2:

=>  Outbound Rules (Outgoing traffic):  Defines where EC2 can send traffic:
    ->  By default: All traffic allowed
    ->  You can restrict if needed

*/
/*
==> Important points about security groups:
    ->  Region specific
    ->  Only 'Allow' rule(but not deny rule)
    ->  All inbound traffic blocked and outbound allowed by default
    ->  You defined rules for specific:
        ->  Protocol (like HTTP, HTTPS, SSH,..etc)
        ->  Port numbers (e.g. port 80 for HTTP, port 22 for SSH)
        ->  IP Address and ranges (e.g., allow traffic only from a specific IP ir range of IPs)
    ->  If you allow incoming traffic on a specific port (e.g. port 80 for HTTP), the outbound response traffic is automatically allowed without an explicit outbound rule. 
*/

/*
==>  Some ports you should be aware of :
    1) HTTP(port 80): Unencrypted web traffic
    2) HTTPS(Port 443): Encrypted web traffic (SSL/TLS)
    3) SSH (port 22): Secure remote access to servers (Linux/Unix)
    4) FTP (Port 21): File transfer protocol(Unsecure)
    5) SFTP (Port 22): Secure file transfer protocol (Email sending)
    6) RDP (port 3389): Remote Desktop Protocol (Windows remote access)
    7) Mysql (port 3306): Mysql Database connection
    8) Postgresql(5432): Postgresql database connection
    9) DNS (port 53 ): Domain Name System (Converts domain names to IP addresses) 
*/

/*
Note: You can create your own security groups according to your requirements and you can apply then into your instances.
*/

/*
==> How to SSH into EC2 instance:
    ->  SSH allows you to control/access a remote machine.
    ->  If you want to access the server on aws, click on 'connect' and start using the server.
    ->  If you want to access EC2 instance in your system:
        # 1. Go to folder where your EC2 key (.pem) is stored
        cd ~/Downloads

        # 2. Give required permission to the key file
        chmod 400 my-key.pem

        # 3. Connect to EC2 (Amazon Linux)
        ssh -i my-key.pem ec2-user@<PUBLIC_IP>

        # ---- OR ----

        # 3. Connect to EC2 (Ubuntu)
        ssh -i my-key.pem ubuntu@<PUBLIC_IP>

==> How to open (connect) EC2 next time?
    ->  Just run the same SSH command again 👇:
        cd ~/Downloads
        ssh -i my-key.pem ec2-user@<PUBLIC_IP>
==> Think of EC2 like this
    1) EC2 = Remote computer
    2) SSH = Remote login
    3) exit = Logout
*/

/*
Can we deploy a server on AWS EC2?
    => YES — absolutely
        You deploy and run servers on EC2.
            ->  Express / Nest / Django / Spring servers
            ->  app.listen(3000) → ✅ allowed
            ->  Web servers (Nginx, Apache)
            ->  Databases, background workers, cron jobs
    ->  EC2 = traditional server in the cloud
*/

/*
Why do we use AWS EC2?
    When we need full control
    When apps are long-running
    When workloads are heavy or stateful
    When Lambda limitations don’t fit
*/
/*
What problems does EC2 solve?
    =>  EC2 solves all of these:
        ->  No control in serverless (Lambda)
        ->  Long-running tasks (>15 min)
        ->  Need custom OS / native libraries
        ->  Persistent connections (WebSockets, TCP)
*/

/*
How AWS EC2 works (simple flow)
    ->  Launch an EC2 instance
    ->  Choose:
        OS (Linux / Windows)
        CPU, RAM, Storage
    ->  SSH into the machine
    ->  Install software (Node, Docker, DB, etc.)
    ->  Run your server 24/7
*/
/*
=>  EC2 VS Lambda:
    | Feature      | EC2                   | Lambda            |
    | ------------ | --------------------- | ----------------- |
    | Server       | ✅ Yes                 | ❌ No             |
    | Long running | ✅ Yes                 | ❌ No             |
    | Scaling      | Manual / Auto Scaling | Automatic         |
    | Cost         | Pay for uptime        | Pay per execution |
    | Control      | Full                  | Limited           |
*/

/*
==> Create user data:
    #!/bin/bash
    sudo yum update -y

    #install apache web server (httpd)
    sudo yum install -y httpd
    sudo systemctl start httpd
    sudo systemctl enable httpd

    # Create a simple HTML file to verify the web server is running
    echo "<html><h1>Welcome to Apache Web Server on Amazon Linux!</h1></html>"
    /var/www/html.index.html
*/

/*
==> Instance Types:
    1) General Purpose:
        Case1: Small website or blog
            Suitable type: t3.micro or t3.small
        Case2: E-Commerce Application
            Suitable type: m5.large or m5.xlarge
    2) Compute Optimized
    3) Memory Optimized
    4) Accelerated Computing
    5) Storage Optimize
        ...etc:
*/
