/*
=> AWS SES:
    -   Amazon Simple Email Service (Amazon SES) is a cloud-based email sending 
        service.
    -   Used to send marketing, notification, and transactional emails.
    -   Designed for developers and digital marketers.
    -   Reliable and cost-effective solution.
    -   Suitable for businesses of all sizes.
    -   Helps companies stay connected with customers via email.
*/
/*
=>  Best features of AWS SES:
    - Highly scalable email sending service for transactional, notification, and marketing emails
    - Low cost with pay-as-you-go pricing (no upfront fees)
    - High deliverability backed by Amazon’s email infrastructure
    - Supports SMTP and AWS SDK/API integration
    - Email and domain verification for security
    - Bounce, complaint, and delivery tracking
    - DKIM, SPF, and DMARC support for sender reputation
    - Integration with AWS services (Lambda, SNS, CloudWatch)

=>  How to set up AWS SES:
    - Open Amazon SES in AWS Console and choose a region
    - Verify sender email address or domain
    - (Optional) Request production access to move out of sandbox
    - Configure DKIM/SPF for better deliverability
    - Create IAM role/policies for sending emails
    - Use SMTP or AWS SDK (commonly via Lambda) to send emails

=>  Benefits of using AWS SES:
    - Reliable and secure email delivery at scale
    - Cost-effective compared to traditional email providers
    - Easy integration with serverless and cloud applications
    - Full control over email sending, monitoring, and reputation
    - Suitable for startups to large-scale enterprise systems
*/

/*
=>  Verified Identities (Email / Domain)
    What it means:
        - SES only allows sending emails from verified identities.
        - An identity can be:
            a) An email address (quick start)
            b) A domain (recommended for production)

    Why it’s required:
        - Prevents spam and email spoofing.
        - Confirms you own the sender email/domain.

    Example:
        - Verify email: sender@company.com
        - SES sends a verification email → click link → verified
        - Now Lambda/SDK can send emails using:
        - Source: sender@company.com

    Best practice:
        - Use domain verification (company.com) instead of single emails.
*/

/*
=>  Rate Limits (Sending Limits)
    What it means:
        - SES limits how many emails you can send to prevent abuse.

    Key limits:
        - Sending rate: emails per second
        - Daily sending quota: emails per 24 hours

    Example (sandbox):
        - 200 emails/day
        - 1 email/second

    Example (production):
        - 50,000 emails/day
        - 14 emails/second (varies by account)

    What happens if you exceed:
        - SES throttles requests
        - You get "ThrottlingException"

    Best practice:
        - Use batch sending
        - Add retry with exponential backoff
*/

/*
=> Bounces (Basic)
    What it means:
        - A bounce happens when an email cannot be delivered.

    Types:
        - Hard bounce → invalid email (user@wrongdomain.com)
        - Soft bounce → temporary issue (mailbox full, server down)

    Example:
        - Sending to abc@notexist.com → Hard bounce
        - Sending to valid user but inbox full → Soft bounce

    Why it matters:
        - High bounce rate damages sender reputation
        - Can cause SES account suspension

    Best practice:
        - Remove bounced emails from mailing list
        - Track bounces using SNS notifications
*/