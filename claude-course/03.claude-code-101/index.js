/*
=>  What is Claude Code:
    **Claude Code** is an agentic coding tool that understands your codebase and helps you complete 
    development tasks.
    -   It can:
        - Read and understand your codebase.
        - Edit files across your project.
        - Run terminal commands.
        - Execute tests and build scripts.
        - Connect with external tools.
        - Search the web for documentation and API references.

    -   You can use Claude Code in:
        - Terminal
        - Visual Studio Code
        - JetBrains IDEs
        - Claude Desktop
        - Web

=>  Claude.ai vs Claude Code:
    -   The main difference is how they interact with your code.

=>  Claude.ai:
    - You provide code or upload files.
    - Claude analyzes the information you provide.
    - You usually copy the suggested code back into your project.

=>  Claude Code:
    - Has direct access to your project files and terminal.
    - Can understand your entire codebase by exploring relevant files.
    - Can modify files directly.
    - Can run commands and tests.
    - Can use command output to decide the next step.

    -   Example:
        Claude.ai:
        You → Copy code → Claude → Get solution → Copy solution → Your project

        Claude Code:
        You → Give task → Claude Code
                        ↓
                Reads codebase
                        ↓
                Updates files
                        ↓
                Runs tests
                        ↓
                Shows results

    -   **Key Difference:** 
        Claude Code works directly with your development environment instead of relying on manual 
        copy-paste.

=>  What is an AI Agent:
    -   An **AI Agent** is software that uses an AI model to interact with its environment and perform 
        actions to achieve a specific goal.

    -   An agent can:
        - Understand a task.
        - Plan the steps.
        - Use tools and external services.
        - Perform actions.
        - Observe the results.
        - Decide what to do next.

=>  How an AI Agent Works:
    User gives a goal
          ↓
    AI understands the task
          ↓
    Plans the next action
          ↓
    Uses available tools
          ↓
    Observes the result
          ↓
    Decides the next action
          ↓
    Repeats until the goal is completed

-   Example:
    Task:
        "Fix the login API bug and run the tests."

    Agent:
        1. Finds the login API.
        2. Reads the related code.
        3. Identifies the issue.
        4. Updates the code.
        5. Runs the tests.
        6. Checks the test results.
        7. Fixes any remaining issues.

    -   This ability to use tools and continue working based on results makes Claude Code an AI Agent.

=>  What Can Claude Code Do:
1) Read and Understand Your Codebase
    -   Ask Claude Code to explain features, trace API flows, or understand how different modules work.

    -   Example:
        "Explain how authentication works in this project. Trace the flow from the login API to the 
        frontend."

2) Edit Files Across Your Project:
    -   Claude Code can refactor functions and update related files.

    -   Example:
        "Rename getUserDetails to fetchUserDetails. and update all references across the project."

3) Run Terminal Commands:
    -   It can execute commands, run tests, build applications, and use the output to decide what to do 
        next.

    -   Example:
        "Run the backend tests, identify failures, and fix the failing test cases."

4) Search the Web:
    -   Claude Code can look up documentation and API references when external information is needed.
    -   Example:
        "Check the latest NestJS documentation. and explain how to implement guards."

=>  Using Claude Code Effectively:
    -   Keep these three concepts in mind:

1) Context Window:
    -   The **context window** is Claude's working memory. It determines how much information Claude 
        can consider at a time.

    -   A large codebase cannot always fit entirely into the context window.
    -   Claude Code handles this by exploring relevant files and finding the information needed for the 
        current task instead of loading everything at once.

    -   Example:
            "Find the payment module and explain, how payment processing works."

    -   Claude searches relevant files instead of loading the entire project.

2) Permission and Control:
    -   By default, Claude Code asks for permission before running commands or making changes.
    -   You remain in control and can review or approve its actions.
    -   Example:
        Claude wants to run:
        npm install
        It asks for permission before executing the command.

3) It Can Make Mistakes:
    -   Claude Code is not perfect. It may:
        - Misunderstand requirements.
        - Introduce bugs.
        - Modify unrelated files.
        - Over-engineer a solution.

    -   Always review the changes and test the application.

    -   Example:
        Task:
        "Add pagination to the users API."

        Claude may implement pagination correctly but accidentally change the existing response format.

        Review the changes before accepting them.

=>  Key Idea:
    -   Claude Code is an **AI Agent for software development**. It can understand your codebase, make 
        changes, execute commands, and use the results to continue working.

    -   Understand → Plan → Execute → Observe → Improve

=>  **Main Difference:**
    Claude.ai   → Helps you write and understand code.
    Claude Code → Works directly with your codebase to complete development tasks.
*/

/*
=>  How Claude Code Works
    -   Claude Code works through an **Agentic Loop**, allowing it to understand a task, take action, 
        and verify the results.

1) Agentic Loop:
    -   The agentic loop has five steps:
        1. **Prompt:** You provide a task to Claude Code.
        2. **Gather Context:** Claude collects the required information by reading files or interacting 
            with tools.
        3. **Take Action:** It performs actions such as editing files or running commands.
        4. **Verify Results:** It checks whether the results meet your requirements.
        5. **Repeat or Finish:** If the task is incomplete, it repeats the process. Otherwise, it finishes.

    -   You can add context, interrupt, or guide Claude at any point.

2) Context Window:
    -   The context window stores conversation history, file contents, command outputs, and other 
        information Claude needs.

    -   It has a limited capacity.
    -   When the limit is reached, Claude Code **compacts the conversation** by summarizing or removing 
        information to free up space.

3)  Tools:
    -   Tools allow Claude Code to perform actions instead of only generating text.
    -   Examples include reading files, running commands, and searching the web.
    -   Claude determines when to use a tool and how to use its output to complete the task.

4) Permissions:
    -   Claude Code provides different permission modes:
    -   **Default Mode:** Asks for permission before editing files or running shell commands.
    -   **Auto-Accept Mode:** Edits files without asking, but commands still require approval.
    -   **Plan Mode:** Uses read-only tools to create a plan before making changes.

    -   **Important:** Be careful when skipping permissions. Unrestricted command execution can make 
        mistakes harder to catch.

=>  Key Takeaway
    -   Claude Code combines four main concepts:
        - **Agentic Loop:** Gather context → Take action → Verify results.
        - **Context Window:** Stores the information needed to complete tasks.
        - **Tools:** Allow Claude to interact with files, commands, and other capabilities.
        - **Permissions:** Control which actions Claude can perform.

    -   Unlike a normal chat window, Claude Code can directly interact with your codebase, perform 
        development tasks, and verify its work.
*/