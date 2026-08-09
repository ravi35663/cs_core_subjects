/* ===================== AMAZON CONNECT =====================
=> What is Amazon Connect?
    - Amazon Connect is a cloud-based contact center service by AWS
    - Used to handle customer interactions via voice, chat, and tasks
    - Fully managed, scalable, and pay-as-you-go
    - Built on the same technology used by Amazon’s own customer service

------------------------------------------------------------

=> Why do companies use Amazon Connect?
1) No infrastructure required
   - No physical call center hardware
   - Everything runs on AWS cloud

2) Scalability
   - Easily scale up/down based on call volume
   - Ideal for seasonal traffic (sales, support peaks)

3) Cost-effective
   - Pay only for what you use (per minute / per message)
   - No upfront licensing cost

4) Quick setup
   - Can set up a working contact center in minutes

5) AWS ecosystem integration
   - Works seamlessly with Lambda, S3, DynamoDB, CloudWatch, Lex, Polly, etc.

------------------------------------------------------------

==> Core Features of Amazon Connect
1) Omnichannel Support
   - Voice calls
   - Chat
   - Tasks (tickets / follow-ups)

2) Interactive Voice Response (IVR)
   - Build call flows visually using drag & drop
   - No coding required for basic flows

3) Call Routing
   - Route calls based on:
     → customer input
     → agent availability
     → skills
     → business rules

4) Real-time & Historical Analytics
   - Dashboards for:
     → call volume
     → wait time
     → agent performance
     → customer experience

5) Call Recording & Monitoring
   - Record calls for quality and compliance
   - Live monitoring of agents

------------------------------------------------------------

=> Important AWS Integrations (Very Important for Interview)
1) AWS Lambda
   - Run backend logic during calls
   - Fetch customer data
   - Validate inputs
   - Trigger workflows

2) Amazon Lex
   - Chatbots & voice bots
   - Natural language understanding (NLU)

3) Amazon Polly
   - Text-to-speech for IVR prompts

4) Amazon S3
   - Store call recordings & logs

5) Amazon DynamoDB / RDS
   - Store customer data, tickets, call history

6) Amazon CloudWatch
   - Monitoring, logs, alarms

------------------------------------------------------------

==> Amazon Connect Architecture (High Level)
Customer
   ↓
Amazon Connect
   ↓
Contact Flow (IVR)
   ↓
AWS Lambda (Business Logic)
   ↓
CRM / Database / External APIs
   ↓
Agent OR Automated Response

------------------------------------------------------------

==> Key Components You Must Know

1) Contact Flows
   - Visual call flow designer
   - Defines IVR logic

2) Queues
   - Holds incoming calls until an agent is available

3) Routing Profiles
   - Determines which queues an agent can receive calls from

4) Agents
   - Users who answer customer calls/chats

5) Prompts
   - Audio messages played to customers

------------------------------------------------------------
=> Real-World Use Cases
- Customer support centers
- Tele-sales
- Banking & insurance helplines
- Healthcare appointment systems
- E-commerce support

------------------------------------------------------------
==> Advantages
✔ Highly scalable
✔ Low cost
✔ Easy integration with AWS
✔ Quick deployment
✔ Secure & compliant

==> Limitations
❌ AWS-dependent
❌ UI customization is limited
❌ Complex logic requires Lambda knowledge

------------------------------------------------------------

==> Interview One-Liners (Very Important)

1️⃣ What is Amazon Connect?
👉 “Amazon Connect is a cloud-based contact center service by AWS that enables 
    businesses to handle customer interactions without managing infrastructure.”

2️⃣ Why use Amazon Connect?
👉 “It offers scalability, low cost, quick setup, and deep AWS integration.”

3️⃣ How is business logic handled?
👉 “Using AWS Lambda integrated with contact flows.”

4️⃣ How are bots implemented?
👉 “Using Amazon Lex for conversational AI.”

------------------------------------------------------------

=> When should you choose Amazon Connect?
- When you want a fast, scalable, cloud-native contact center
- When you already use AWS services
- When you want to avoid heavy infrastructure management
*/