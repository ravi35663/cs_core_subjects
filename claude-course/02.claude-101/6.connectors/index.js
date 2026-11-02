// # Claude Connectors
/*
=>  ## What are Connectors?
    -   Connectors allow Claude to access the tools, data, and context you already use.
    -   Instead of copying information into Claude manually, Claude can connect directly to your 
        applications and, depending on permissions, **read information and perform actions**.

    -   Examples:
        - Search emails in Gmail
        - Read documents from Google Drive
        - Find tasks in Jira/Asana/Linear
        - Search Slack conversations
        - Read Notion/Confluence documentation
        - Analyze business data

    -   Think of it as:
        - Without Connector → You copy/paste information into Claude
        - With Connector    → Claude gets the information directly from the source

=>  ## MCP (Model Context Protocol):
    -   Connectors are powered by **MCP (Model Context Protocol)**.
    -   Think of MCP like **USB-C for AI** — a common standard that allows Claude to connect with many 
        different applications through a consistent interface.

=>  Types of Connectors:
1) Web Connectors
    -   Connect Claude to cloud applications.
    -   Examples:
        - Gmail
        - Google Drive
        - Slack
        - Notion
        - Jira
        - Confluence
        - Asana
        - Linear
        - Stripe

2) Desktop Extensions
    -   Work through the Claude Desktop app and can interact with your local computer.
    -   Examples:
        - Local file access
        - Browser control
        - Native applications such as Figma

=> How to Connect a Connector
1) Web Connector
    1. Open **claude.ai/directory**
     OR go to **+ → Connectors** in a Claude chat.
    2. Find the connector you need.
    3. Click **Connect**.
    4. Sign in to the external service.
    5. Review and **grant permissions**.
    6. Return to Claude.
    7. Test it with a simple request.

    Example:
        Connect Google Drive
                ↓
        Sign in with Google
                ↓
        Grant permissions
                ↓
        Claude can search your Drive
                ↓
        Ask: "Find the latest project documentation"
    > Some connectors can both read data and perform actions, depending on the permissions granted.

2) Desktop Extension
    1. Install the **Claude Desktop** app.
    2. Open **Settings → Extensions**.
    3. Find the extension.
    4. Click **Install**.
    5. Complete any required setup.
    6. Use it from Claude Desktop.

=>  How to Use Connectors
    Once connected, simply ask Claude for information or actions related to that tool.

==> Examples:
    1) Project Management
        "What are my highest-priority Jira tasks due this week?"
        "Create a task for reviewing the Q4 budget proposal."
        "Summarize the status of our product launch."

    2) Communication
        "Find the email thread about the vendor contract."
        "Draft a reply to the latest Slack message."
        "What did the team decide about the timeline yesterday?"

    3) Documentation:
        "Search our Confluence documentation for the API guidelines."
        "Summarize last week's product review notes."
        "What does our style guide say about contractions?"

4) Business Data:
        "Show me revenue trends for the past quarter."
        "List recent transactions over $1,000."

=>  Using Multiple Connectors
    -   One of the biggest benefits is combining information from different tools.
    -   Example:
        "Check the latest Jira status, find the related Slack discussion, and summarize the current 
        project status."

    -   Claude can use information from the connected sources instead of asking you to manually collect 
        and paste everything.

=>  Security & Permissions:
    - **Scoped access:** Connectors only get the permissions you grant.
    - **Claude sees what you see:** Claude can only access data that your connected account has access to.
    - **Revocable:** You can disconnect a connector later from Claude settings or the connected service.
    - **Trusted sources:** Only install connectors from sources you trust.

    -   Example:
            Connecting your work Gmail
                    ↓
            Claude can access your permitted Gmail data
                    ↓
            It does NOT automatically get access to your CEO's inbox.

=>  When Should You Use Connectors?
    Use connectors when:
        - You repeatedly copy/paste information into Claude.
        - The information lives in another application.
        - You need Claude to search your work data.
        - You want Claude to perform actions in connected tools.
        - You need information from multiple applications.

    =>  Example:
        Before:
            Jira → Copy task details → Claude
            Slack → Copy discussion → Claude
            Google Drive → Copy document → Claude

        With Connectors:
            Claude → Jira + Slack + Google Drive → Answer

=> Connectors vs Projects vs Skills vs Artifacts
    Project   → What Claude should know
    Skill     → How Claude should perform a task
    Connector → Where Claude can get/use external information
    Artifact  → What Claude creates

Example:
    Project     → Contains your company's project knowledge
    Connector   → Connects Jira, Slack and Google Drive
    Skill       → Defines your project-status-report process
    Artifact   → Creates the final status report

=>  Key Idea
    -   Connectors turn Claude from an assistant that only knows what you provide into a collaborator 
        that can work with your actual tools and data.
    ->  
        Connect → Give Claude access
        Ask     → Tell Claude what you need
        Review  → Check the information/action
        Iterate → Refine the result
*/