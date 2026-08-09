/*
==> Top 10 OWASP:.
    -   A well-known document by the non-profit OWASP that lists the top 10 
        critical security risks for web applications.
    -   'Open Web Application Security Project' (OWASP)

    -   Defined by OWASP — these are the most critical web app security risks 
        developers must know.
*/
/*
1) Broken Access Control:
    ->  Users can access unauthorized data or actions
    ->  Example: Normal user accessing admin APIs

2)  Cryptographic Failures
    ->  Sensitive data not properly encrypted
    ->  Example: Passwords stored in plain text

3) Injection
    ->  Untrusted input executed as code
    ->  Example: SQL Injection, Command Injection
    -   SQL Injection:
        const query = "SELECT * FROM users WHERE email = '" + email + "'";
        - if user enter email = ' OR '1'='1 the query become:
            SELECT * FROM users WHERE email = '' OR '1'='1';
            Hence all user data is expose because email is given my hacker is code not value.
        -   To prevent it use proper validation with typeorm.

4) Insecure Design
    ->  Security not considered during system design
    ->  Example: No rate-limiting for login APIs

5) Security Misconfiguration
    ->  Weak or default configurations
    ->  Example: Open S3 buckets, debug mode enabled
    
6) Vulnerable and Outdated Components
    ->  Using libraries with known vulnerabilities
    ->  Example: Old Express / Log4j versions

7) Identification and Authentication Failures
    ->  Broken login/session handling
    ->  Example: Weak passwords, no MFA

8) Software and Data Integrity Failures
    ->  Code or updates not verified
    ->  Example: Malicious dependency injection

9)  Security Logging and Monitoring Failures
    ->  Attacks not logged or detected
    ->  Example: No alert on repeated failed logins

10) Server-Side Request Forgery (SSRF)
    ->  Server makes unintended internal requests
    ->  Example: Accessing AWS metadata via URL input
*/