/*
CLAUDE.md — PROJECT MEMORY
1) What is CLAUDE.md?
    -   A Markdown file that provides Claude Code with persistent project context.
    -   Automatically read when starting a session.
    -   Acts as an onboarding guide for your codebase.
    -   Helps Claude understand the architecture, dependencies, features, commands, and coding 
        conventions without repeatedly exploring everything.

2)  What Should It Contain?
    -   Project: Tech stack, architecture, and project overview.
    -   Commands: Development, testing, build, and lint commands.
    -   Code Style: Naming conventions, formatting, and coding standards.
    -   Guidelines: Folder structure, API patterns, and implementation rules.

3)  Types of CLAUDE.md:
    -   Project-level: Located in the project root and shared with the team through version control.
    -   User-level: Located in your configuration folder and applies your personal preferences across 
        projects.

4. Best Practices:
    -   Keep CLAUDE.md committed to Git so the entire team benefits.
    -   Save frequently repeated corrections and instructions.
    -   Reference existing documentation using @file-path (e.g., @README.md).
    -   Keep it short and focused; avoid unnecessary information.
    -   Start without CLAUDE.md and identify recurring corrections first.
    -   Use `/init` to generate an initial CLAUDE.md file.

5)  Example:

    # Project
    - Next.js 15, Tailwind CSS, Drizzle ORM.

    # Commands
    - Development: pnpm dev
    - Tests: pnpm test
    - Lint: pnpm lint

    # Code Style
    - Use 2-space indentation.
    - Prefer named exports.
    - Use server actions instead of API routes where possible.

6. KEY TAKEAWAY:
    -   CLAUDE.md provides persistent project knowledge.
    -   Include your tech stack, commands, coding standards, and guidelines.
    -   Keep it concise, update it with recurring corrections, and share project-level instructions 
        with your team.
*/
/*
Here's what a typical CLAUDE.md file looks like:

This CLAUDE.md file

# Project

This is a Next.js 15 app using the App Router, Tailwind, and Drizzle ORM.

# Commands
- Dev server: `pnpm dev`
- Run tests: `pnpm test`
- Lint: `pnpm lint`

# Code Style
- Use 2-space indentation
- Prefer named exports
- All API routes go in app/api/
- Use server actions instead of API routes where possible
*/


/*
SUBAGENTS IN CLAUDE CODE
1. What are Subagents?
    -   Subagents are independent agents that handle specific tasks delegated by the main Claude agent.
    -   Each subagent has its own isolated context window.
    -   They can run tasks in parallel and return summarized findings to the main agent.
    -   Useful for codebase exploration, research, testing, and code reviews.

2) Why Use Subagents?
    -   Codebase exploration, tool calls, and web searches consume context.
    -   Not all information discovered during exploration is relevant to the main task.
    -   Subagents handle this work independently and return only the relevant results.
    -   Keeps the main context clean and improves context management.

3)  How to Create a Subagent?
    -   Run `/agents` in Claude Code.
    -   Select "Create new agent".
    -   Configure:
        - Scope: Where the agent can work.
        - Purpose: What task it should perform.
        - Tools: Which tools it can access.
        - Color: Visual identification.
    -   Claude generates the agent's name, description, and prompt.
    -   The description helps Claude decide when to use that agent.

4)  Example Use Cases:
   A. Codebase Exploration:
        Ask the subagent:
        "Explore the codebase and identify where authentication endpoints, middleware, and services are 
        implemented."

        Result: Returns a summary without filling the main context with all exploration details.

   B. Code Review:
      Ask the subagent:
      "Review my recent changes for bugs, security issues, and code quality. Do not modify any files."

      Result: Returns identified issues and recommendations.

   C. Test Case Generation:
      Ask the subagent:
      "Analyze the user authentication module and suggest test
       cases for its functions and edge cases."

      Result: Returns relevant test scenarios to the main agent.

5) Further Customization:
   - Persistent Memory:
     Allows subagents to retain useful information across conversations.
     Useful when repeatedly working on the same project.

   - Preload Skills:
        Add the `skill` key in the subagent configuration and list the required skills by name.
    -   Note: Unlike skills in the main conversation, the entire skill is loaded into the subagent's 
        context.

6)  KEY TAKEAWAY:
    -   Use subagents to delegate independent tasks.
    -   Each subagent has its own context window.
    -   They can work in parallel and return summarized results.
    -   Use them for exploration, research, testing, and code reviews.
    -   Customize them with persistent memory and preloaded skills.
    -   Keep the main agent focused on the primary task.
*/

/*
MCP (MODEL CONTEXT PROTOCOL) IN CLAUDE CODE

1. What is MCP?
   - MCP is an open standard that connects Claude Code to external tools
     and data sources.
   - It bridges the gap between your codebase and external systems
     such as databases, productivity apps, and public repositories.
   - Claude automatically identifies when external tools can help
     answer a query or complete a task.

2. What Are Tools in Agentic AI?
   - Tools allow AI agents to perform actions instead of just generating
     text responses.
   - They help agents interact with external systems and complete tasks.

3. What Can MCP Do? (Examples)

   A. Linear MCP:
      - Connect Claude Code to Linear.
      - Retrieve project details, issues, and tickets.

      Example:
      "Get the details of Linear ticket MEN-12 and explain
       its requirements."

   B. Context7 MCP:
      - Provides up-to-date documentation for dependencies.
      - Helps Claude use the correct APIs and implementation patterns.

      Example:
      "Find the latest shadcn/ui documentation and help me
       implement a Dialog component."

4. Adding MCP Servers:
   - Use `claude mcp add` to add MCP servers.
   - Two main types:

     A. HTTP Servers:
        - Connect to remote services over the network.
        - Hosted by external service providers.

     B. Stdio Servers:
        - Run local processes directly on your machine.
        - Communicate through standard input/output.

   - Use `/mcp` inside Claude Code to:
     - View connected servers.
     - Check server status.
     - View available tools.
     - Reconnect or disable servers.

5. MCP Server Scopes:

   A. Local:
      - Available only in the current project.
      - Only accessible to you.

   B. User:
      - Available across all your projects.

   C. Project:
      - Configured using `.mcp.json`.
      - Committed to Git so the entire team can use the same
        MCP server configuration.

6. Context Costs:
   - MCP servers add tool definitions to Claude's context window,
     even when they are not actively being used.
   - Too many MCP servers consume valuable context space.

   Best Practices:
   - Use `/mcp` to check connected servers.
   - Disable servers that are not currently needed.
   - Prefer CLI tools when available (e.g., `gh` for GitHub,
     `aws` for AWS) because they don't add persistent MCP
     tool definitions.
   - Consider using Skills when appropriate.

7. MCP vs Skills:
   - MCP: Connects Claude to external tools and data sources.
   - Skills: Provide specialized instructions and workflows.
   - Skills initially load their name and description; full
     instructions are loaded when Claude determines they are needed.
   - Useful for reducing unnecessary context consumption.

8. Tool Search Mode:
   - When MCP tool definitions exceed 10% of the context window,
     Claude Code automatically switches to tool search mode.
   - It discovers relevant tools on demand, although discovery
     may be less reliable.

9. KEY TAKEAWAY:
   - MCP connects Claude Code with external systems.
   - Use `claude mcp add` to add servers.
   - Use HTTP for remote services and Stdio for local processes.
   - Use `.mcp.json` to share project-level configurations.
   - Use `/mcp` to manage connected servers.
   - Disable unused servers to save context.
   - Prefer CLI tools or Skills when they are more context-efficient.
*/

/*
HOOKS IN CLAUDE CODE

1. What are Hooks?
   - Hooks let you execute commands at specific points in Claude Code's lifecycle.
   - Hooks are deterministic, meaning they run every time the configured
     event occurs.
   - Unlike CLAUDE.md instructions, hooks are not dependent on Claude
     remembering to follow an instruction.

2. Why Use Hooks?
   Common use cases:
   - Auto-format files after every edit.
   - Log executed commands for compliance.
   - Block dangerous operations (e.g., modifying production files).
   - Send notifications when Claude finishes a task.

3. How Hooks Work:
   - Hooks are configured in `settings.json`.
   - Each hook defines an event, optional tool matcher, and command.
   - Configure them using `/hooks` inside Claude Code or edit
     `settings.json` directly.

4. Important Hook Events:

   A. PreToolUse:
      - Runs before a tool executes.
      - Can validate or block dangerous operations.

   B. PostToolUse:
      - Runs after a tool call completes.
      - Useful for formatting, logging, and validation.

   C. UserPromptSubmit:
      - Runs when you submit a prompt, before Claude processes it.

   D. Stop:
      - Runs when Claude finishes responding.

   E. Notification:
      - Runs when Claude sends a notification.

5. Practical Example: Auto-format After File Edits

   - Configure a PostToolUse hook with matcher:
     `Edit|MultiEdit|Write`

   - Whenever Claude modifies a file, the hook runs the formatter
     based on its file extension.

   Examples:
   - TypeScript/JavaScript: Prettier
   - Go: gofmt

   This ensures files are formatted automatically after edits.

6. Blocking Operations with PreToolUse:

   - PreToolUse hooks can block tool calls before execution.
   - The hook receives the tool name and input as JSON through stdin.

   Exit Codes:
   - Exit code 0: Allow the operation.
   - Exit code 2: Block the operation and send the stderr message
     back to Claude as feedback.
   - Any other exit code: Show a non-blocking error; execution continues.

   Examples:
   - Block modifications to production config directories.
   - Block Bash commands containing `rm -rf`.
   - Block commits directly to the main branch.

7. Sharing Hooks with Your Team:

   - Configure project-level hooks in `.claude/settings.json`.
   - Commit the configuration to Git so the entire team gets
     the same hooks.
   - Use `CLAUDE_PROJECT_DIR` to reference project scripts.
     This ensures scripts work regardless of Claude's current
     working directory.

8. KEY TAKEAWAY:
   - Hooks provide deterministic control over Claude Code.
   - PostToolUse: Run actions after tool execution (formatting/logging).
   - PreToolUse: Validate or block dangerous operations.
   - UserPromptSubmit: Execute actions before prompt processing.
   - Stop: Run actions when Claude finishes responding.
   - Notification: Handle Claude notifications.
   - Use `/hooks` or `settings.json` to configure hooks.
   - Share project-level hooks through Git.

   IMPORTANT:
   If something must happen every time without fail, don't rely
   on a prompt or CLAUDE.md instruction. Configure a hook.
*/