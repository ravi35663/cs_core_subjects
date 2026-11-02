// => # Claude Research
/*
=>  What is Research?
    -   **Research** turns Claude from a normal conversational assistant into a 
        **systematic investigator**.

=>  Instead of doing one search, Claude:
    - Plans what it needs to investigate
    - Performs multiple searches
    - Explores different angles
    - Follows useful leads
    - Combines information from many sources
    - Provides citations so you can verify the findings

    -   Think of it as having a **research assistant** who investigates a topic and prepares a 
        comprehensive report for you.

    -   Research usually takes longer than a normal search because Claude performs multiple 
        investigation steps.

=>  How Research Works:
    -   Research is an **agentic, multi-step process**.

    1) Step 1 — Plan
        -   Claude first thinks about the question and breaks it into smaller areas.
            Complex question
                ↓
            Break into smaller questions
                ↓
            Decide what information is needed

    2) Step 2 — Search
        -   Claude performs multiple searches and decides what to investigate next based on what it finds.
        -   It can explore different sources and fill information gaps automatically.

    3) Step 3 — Synthesize
        -   Claude combines the findings into one structured and comprehensive answer.
        -   It can use:
            - Web sources
            - Connected integrations
            - Gmail
            - Google Drive
            - Google Calendar
            - Other connected data

    4) Step 4 — Cite:
        -   Research provides citations for its findings.
        -   This allows you to:
            - Verify information
            - Open the original source
            - Explore the topic further

=>  When Should You Use Research?
    -   Use Research when you need:
        - A comprehensive report
        - Information from many sources
        - In-depth investigation
        - Competitor or vendor comparison
        - Current and verified information
        - Research that would normally take hours manually

=>  Good Examples
    -   "Analyze the EV battery market, including key players, technology trends, and supply-chain 
        challenges."

    -   "Compare three vendors based on pricing, features, reliability, and customer reviews."

    -   "Research the latest trends in AI coding tools and prepare a comparison report."

=> Research vs Other Claude Features:
    1) Research
        -   Use when you need **deep, multi-source investigation**.
        -   Example:
            "Analyze the AI coding assistant market and compare the major competitors."

    2) Web Search:
        -   Use when you need a **quick specific fact**.
        -   Example:
                "What is the current stock price of Apple?"

    3)  Thinking
        -   Use when the problem requires **deep reasoning**, but not external information.
        -   Example:
                "Debug this algorithm and explain why it fails."

    4) Enterprise Search
        -   Use when you need information from **your organization's internal knowledge**.
        -   Example:
            -   "What is our company's authentication process?"

=>  Simple Rule
    Quick fact          → Web Search
    Deep reasoning      → Thinking
    Company knowledge   → Enterprise Search
    Deep investigation  → Research


# How to Enable Research
    1. Click the **+** button in the chat.
    2. Select **Research**.
    3. Make sure **Web Search** is enabled.
    4. Enter your research prompt.
    5. Submit the request.
    6. Claude will show progress while researching.

Note: Research requires Web Search to be enabled.

=>  How to Write Good Research Prompts
    -   Research can take several minutes, so give Claude a clear objective.
    1) Be Specific
        -   Bad:
            "Tell me about the EV market."
        -   Better:
            "Analyze the EV battery market.
            Identify key players, technology trends,
            supply-chain challenges, and factors
            that could affect investment decisions."

    2) Define the Output Structure
        -   Tell Claude what sections you want.
        -   "Compare three team-offsite venues based on:
            - Location and accessibility
            - Meeting space
            - Amenities
            - Catering
            - Pricing"

        -   This helps Claude organize the research around your requirements.

    3) Add Constraints
        -   Include things such as:
            - Budget
            - Timeline
            - Location
            - Technology requirements
            - Company size
            - Other important limitations

        -   Example:
            "Find cloud solutions for a 10-person startup, budget below $500/month, available in the US, 
            and compare pricing and scalability."

    4) Use Connected Tools
        -   Research becomes more powerful when combined with your connected integrations.
        -   Example:
                Internal information
                    ↓
                Google Drive + Gmail + Slack
                    ↓
                Research external industry information
                    ↓
                Combine everything
                    ↓
                Final report

        -   You can explicitly tell Claude:
            "Pull relevant context from my Google Drive and recent emails, then research industry 
            best practices."

=>  Practical Example
    -   Goal: You want to evaluate a new technology for your team.
    -   Prompt
            "Research whether our team should adopt Tool X.
            Use:
            - Our internal project documents
            - Recent team discussions
            - Current documentation
            - Recent industry information

    -   Compare:
        1. Features
        2. Pricing
        3. Developer experience
        4. Security
        5. Scalability
        6. Competitors

    -   Provide a recommendation and cite your sources."

=>  What Claude does
    Internal sources
          +
    Web research
          ↓
    Multiple searches
          ↓
    Compare findings
          ↓
    Identify gaps
          ↓
    Comprehensive report
          ↓
    Citations + recommendation

=> Key Idea:
    Research is best for **complex questions that require investigation across multiple sources**.
    Plan
      ↓
    Search
      ↓
    Explore
      ↓
    Synthesize
      ↓
    Cite
      ↓
    Verify

**Think:**
    Web Search = Find something
    Research   = Investigate something
*/