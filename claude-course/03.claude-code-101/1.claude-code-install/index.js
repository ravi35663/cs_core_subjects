/*
=>  CLAUDE CODE INSTALLATION & SETUP
1. Terminal:
   - macOS/Linux/WSL: Install using curl or Homebrew.
   - Windows PowerShell: Use Invoke-RestMethod.
   - Windows CMD: Use curl.
   - Windows: winget is also available.
   - Homebrew and winget do not support auto-updates.

2. Run Claude Code:
   - Navigate to your project directory.
   - Run: claude
   - Complete initial setup, choose a theme, and sign in using:
     - Claude Pro/Max/Enterprise account
     - API key
   - Select Enterprise if your organization uses it.
   - Claude can access the current directory and its subfolders.

3. IDE Integrations:
   - VS Code: Install the verified Claude Code extension from Anthropic.
     Restart VS Code and open it using Ctrl/Cmd + Shift + P.
   - JetBrains: Install Claude Code from JetBrains Marketplace and restart.

4. Other Options:
   - Desktop: Use Claude Desktop's Code mode to work with local folders
     or cloud environments.
   - Web: Visit https://claude.ai/code to work with GitHub repositories.

5. Which One to Use?
   - Terminal: Best for latest features; updates arrive first.
   - IDE: Best for working directly alongside your code editor.
   - Desktop: Best for background tasks and folder-based projects.
   - Web: Best for remotely working with GitHub repositories.
*/
/*
=>  YOUR FIRST PROMPT IN CLAUDE CODE
1) Auto-Accept vs Approval:
    -   Press Shift + Tab to switch between modes.
    -   Approval Mode: Claude asks permission before every file edit or command.
    -   Auto-Accept Mode: File edits are automatically approved, but commands still require permission.

2) Plan Mode:
    -   Available through the Shift + Tab menu.
    -   Uses read-only tools to analyze the codebase and research implementation.
    -   Asks clarifying questions and creates a detailed implementation plan.
    -   Best for complex features, multi-step changes, and safe code reviews.
    -   Review and approve the plan before execution.

3) Example: Implement Dark Mode
   -    Open your project root and run `claude`.
   -    Press Shift + Tab to enable Plan Mode.
   -    Describe the requirement clearly:
        -   "Implement dark mode across the entire application.
            Add a toggle switch in the header to switch between light and dark modes.
            Choose suitable contrast colors based on the existing light theme."

   -    Review the generated plan.
   -    Approve it and let Claude execute the changes.
   -    Review the changes and approve commands when requested.

4) Best Practices:
    -    Write clear and descriptive prompts.
    -    Use Plan Mode before implementing complex features.
    -    Review the implementation plan before execution.
    -    Use Approval Mode to stay in control of changes.
    -    Review Claude's final changes and conclusions.
*/
