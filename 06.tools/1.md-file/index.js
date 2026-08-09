/*
=>  What is a .md File?
    -   A .md file is a Markdown file.
    -   Markdown is a lightweight markup language used to format plain text in a 
        simple and readable way.
*/
/*
=> Example:
    # My Project

    This is a simple project.

    ## Features
    - Login
    - Signup
    - Dashboard
*/

/*
=>  When rendered, it looks like:
    My Project

    This is a simple project.

    Features
        Login
        Signup
        Dashboard
*/
/*
=>  Why was Markdown created?
    - Before Markdown, creating formatted documents required HTML:
    - Example:
        <h1>My Project</h1>
        <p>This is a simple project.</p>
*/
/*
=>  Markdown makes writing much simpler:
    - The goal was:
        Easy to read
        Easy to write
        Easy to convert to HTML
*/

/*
=> Why do we use .md files?
1. Documentation:
    - Most software projects contain: README.md
    - Example:
        # E-Commerce Application

        ## Installation
        npm install

        ## Run
        npm run dev
    - Used by developers to understand a project.

2. AI Agent Instructions:
    - Since you're interested in AI Agents:
    - Example:
        # Angular to React Migration Agent

        ## Role
        You are an expert React developer.

        ## Responsibilities
        - Analyze Angular components
        - Convert them into React
        - Maintain functionality

        ## Rules
        - Use TypeScript
        - Use functional components
        - Use hooks

    - An AI system can read this file and use it as instructions.

3. Knowledge Base:
    - Store project knowledge:
    - Example:
        # Authentication Module

        ## Flow
        1. User logs in
        2. JWT generated
        3. Token returned

4. Notes:
    - Developers use Markdown for:
    - Example:
        Meeting Notes
        Design Documents
        Project Planning
        Architecture Notes

5. GitHub Documentation:
    - GitHub automatically renders
        - README.md
        - CONTRIBUTING.md
        - CHANGELOG.md
    - as beautiful documentation.
*/
/*
=> Common Markdown Syntax:
1. Heading:
    # Heading 1
    ## Heading 2
    ### Heading 3

2. Bold:
    **Bold Text**

3. Italic:
    - *Hello World*

4. List:
    - Apple
    - Mango
    - Banana

5.Numbered List:
    1. Login
    2. Dashboard
    3. Logout

6.Code Block:
    ```js
        console.log("Hello");
    ```

7.LINK:
    [Google](https://google.com)

8.Table:
    | Name | Age |
    |------|-----|
    | Ravi | 28 |
    | John | 30 |
*/

/*
=> Why AI Agents often use .md files?
    - Because .md files are:
        Human readable
        AI readable
        Easy to version control with Git
        Easy to modify
        Easy to organize
    - Example:
        agents/
        ├── planner.md
        ├── analyzer.md
        ├── angular-migration.md
        ├── react-generator.md
        └── reviewer.md
    - Each file contains:
        # Role
        React Migration Expert

        # Goal
        Convert Angular code to React.

        # Rules
        - Use TypeScript
        - Use Hooks
        - No Class Components

        # Output
        Generate React Component   

    - The AI framework reads the file and creates the agent's behavior.
*/

/*
# Example:
=>  In Your Angular → React Migration Project:
    - You could have:
        agents/
        ├── planner.md
        ├── angular-analyzer.md
        ├── react-generator.md
        ├── code-reviewer.md
        ├── dependency-mapper.md
        ├── routing-migrator.md
        └── integration-agent.md

    - Each .md file would define:
        - Agent Role
        - Responsibilities
        - Rules
        - Input Format
        - Output Format
        - Examples

    -   The AI orchestration system then loads these files and executes the agents 
        accordingly.
*/