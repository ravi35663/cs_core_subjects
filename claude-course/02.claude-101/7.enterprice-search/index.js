// # Claude Enterprise Search: 
/*
=>  What is Enterprise Search
    -   **Enterprise Search** is designed for organizations to search and summarize knowledge across 
        their company's connected tools and data.

    -   Think of it as a **shared project for the entire organization**, where company knowledge can be 
        searched to answer context-aware questions.

    -   It is available on **Team and Enterprise plans** and must be enabled by a workspace admin.

=>  Enterprise Search vs Regular Connectors
    -   Regular Connectors
        - Connect Claude to specific tools and use them in normal chats.

    -   Enterprise Search
        - Search and synthesize information across multiple company sources.

    -   Example:
        -   "What happened with the Platform project last week?"

    -   Claude can search connected sources such as:
        Slack + SharePoint + Gmail + Google Drive
                    ↓
            Claude searches
                    ↓
            Combined summarized answer
                    ↓
                Sources cited

=> What Can You Ask?
1) Getting Up to Speed:
    - "What happened yesterday while I was out?"
    - "Summarize important company updates from this week."
    - "What are the current blockers on the Platform project?"

2) Policies & Processes
    - "What is our remote work policy?"
    - "How do I submit an expense report?"
    - "What is the process for requesting time off?"

3) Research & Analysis
    - "Summarize discussions about the Q4 roadmap."
    - "What are the main reasons customers choose competitors?"
    - "Find information about our customer onboarding process."

4) New Employee Onboarding
    "How does our authentication system work?"
    "Who can help me learn the billing system?"
    "What tools does engineering use for deployment?"

5) Project & Performance Tracking:
    - "What were the key decisions from last week's leadership meetings?"
    - "Find documents and discussions about the marketing campaign."
    - "Summarize contributions to the Infrastructure initiative."


=> How Enterprise Search Works
    -   When you ask a question, Claude:
        1. Searches connected company sources
        2. Finds relevant information
        3. Combines information from multiple sources
        4. Creates a unified answer
        5. Cites the sources

    -   This is useful when the information is spread across different tools.

    -   Example:
        - Slack → Project discussion
        - Drive → Project document
        - Gmail → Client communication
        - SharePoint → Project guidelines

    -   Claude can combine these into one answer instead of making you search each tool manually.

=>  Setting Up Enterprise Search:
    - Enterprise Search has **two setup steps**:
    - Admin setup → User setup

1) Admin / Owner Setup:
    - The organization owner needs to configure Enterprise Search first.

-   Steps:
        1. Click **Ask Your Org** in the sidebar.
        2. Click **Set up for your org**.
        3. Connect the organization's tools.
        4. Choose connectors for:
            - Documents → Google Drive / SharePoint
            - Chat → Slack / Microsoft Teams
            - Email → Recommended but optional
        5. Add additional connectors if needed.
        6. Customize the project name.
        7. Add a description.
        8. Click **Finish setup**.

    -   After this, Enterprise Search becomes available to organization members.

2) User Setup:
    -   After the admin completes setup:
        1. Open **Ask [Org Name]** from the sidebar.
        2. Follow the onboarding process.
        3. Authenticate with the services you want to search.
        4. Start asking questions about company knowledge.

    -   You can add more connectors later from the project's **Instructions → Connect** section.

    -   Example
        Admin connects:
            Slack
            Google Drive
            Microsoft 365

        User authenticates:
            Slack account
            Google account
            Microsoft account

        User asks:
            "Summarize the latest Platform project updates."

    -   Claude searches the connected sources and provides one summarized answer.

=>  Security & Permissions:
    -   Enterprise Search respects the permissions of the original tools.
    -   Claude only sees what you can access

    -   If you cannot access a document in SharePoint, Claude cannot use that document for you.
        Your permissions
            ↓
        Connected tool
            ↓
        Enterprise Search
            ↓
        Only accessible information

    -   Other important points:
        - Conversations remain private.
        - Connected data isn't separately indexed or stored.
        - Access follows the permissions of the original connected services.

=>  When Should You Use Enterprise Search?
    Use it when:
        - Information is spread across many company tools.
        - You need to get up to speed quickly.
        - You need company policies or processes.
        - You are onboarding to a new team/project.
        - You need to research past discussions and decisions.
        - You want Claude to combine information from multiple sources.

    -   Example:
        - New developer joins the team
        - Instead of asking multiple people: "How does our authentication system work?"

        - Ask Enterprise Search:
            "Explain our authentication system, including the relevant documentation and recent team 
            discussions."

=>  Enterprise Search vs Connectors:
    -   Connector : Gives Claude access to a specific external tool.
    -   Enterprise Search: Uses connected organizational sources to search and synthesize company 
        knowledge.

    -   Think:
        Connector = Access to the tool
        Enterprise Search = Search across company knowledge

=>  Enterprise Search helps Claude become a **company knowledge assistant**.
    Connect company sources
            ↓
    Search organizational knowledge
            ↓
    Combine information
            ↓
    Get a context-aware answer
            ↓
    Verify using cited sources

**Main benefit:** You don't need to manually search Slack, Drive, email, SharePoint, etc. and combine 
the information yourself.
*/