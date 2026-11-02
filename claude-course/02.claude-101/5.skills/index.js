// # Claude Skills
/*
=>  What are Skills?
    -   Skills are reusable packages of:
        - Instructions
        - Scripts
        - Resources

    -   They teach Claude **how to perform specialized tasks consistently**.

    -   Think:
        - Project = What Claude should know
        - Skill   = How Claude should perform a task

    -   Examples:
        - Create Excel spreadsheets
        - Create Word documents
        - Create PowerPoint presentations
        - Create PDFs
        - Perform a company's specific analysis workflow
        - Follow a brand or compliance process

Note:   Claude automatically selects a relevant Skill when needed.

=>  Types of Skills
1) Anthropic Skills
    -   Built and maintained by Anthropic.

    -   Examples:
        - Excel creation
        - Word document creation
        - PowerPoint creation
        - PDF creation

    -   You normally don't need to manually trigger them.

    -   Example:
        - "Create an Excel sheet tracking monthly expenses with formulas for totals."

    -   Claude can automatically use the appropriate Skill.

2) Custom Skills
    -   Created by you or your organization for specific workflows.

    - Examples:
        - Company brand guidelines
        - Quarterly business review process
        - Meeting-note formatting
        - Data analysis workflow
        - Compliance checklist

    -   Example:
            - "Create a quarterly business review."
            - A custom Skill could make Claude always:
                1. Analyze revenue
                2. Compare with previous quarter
                3. Identify major changes
                4. Create charts
                5. Follow the company's report format

=>  Enabling Skills
    -   Skills require Claude's:
        - Code execution
        - File creation

    -   To enable them:
        Settings
        ↓
        Capabilities
        ↓
        Enable "Code execution and file creation"
        ↓
        Skills
        ↓
        Enable required Skills

    -   Enterprise users may need an organization Owner/Admin to enable these capabilities.


=>  Using Skills:
    -   Usually, you don't manually select a Skill. Claude determines which Skill is relevant based on 
        your request.

    -   Examples:
        "Create an Excel financial model with scenario analysis."
        "Turn these meeting notes into a PowerPoint."
        "Generate a PDF report from this data."
    
    -   Claude can automatically invoke the appropriate Skill.

=>  Skills Can Work With Real Files
    -   Claude can work with files such as:
        - .xlsx
        - .pptx
        - .docx
        - .pdf

    -   Example:
            Upload: 
                Quarterly-Sales.xlsx
            Ask:
                "Analyze this spreadsheet and create a summary with charts."

    -   Claude can work on the file in a contained environment and create an updated/new version.
    -   Your original uploaded file is not edited in place.


=>  Creating Custom Skills:
    -   You don't need to manually code a Skill.
    -   You can ask Claude to create one.

### Step 1
    Start a new conversation: "I want to create a Skill for writing quarterly business reviews."

### Step 2
    Claude asks questions such as:
    - What should the Skill do?
    - What makes a good output?
    - What steps should always be followed?
    - Can you provide examples?

### Step 3
    Upload useful references:
    - Templates
    - Guidelines
    - Examples
    - Brand assets

### Step 4
    - Claude generates the Skill files.
    - Save the Skill and it becomes available in your Skills list.
    - Later, Claude can automatically use it when the task matches.
    - You can also ask Claude to improve/update the Skill.

=>  Skills vs Projects
    - This is one of the most important concepts.
        PROJECTS = WHAT Claude should know
        SKILLS   = HOW Claude should work

### Project Example:
    - Customer Support Project contains:
        customer-profiles.pdf
        product-docs.pdf
        meeting-notes.pdf

    -   Claude uses these files as knowledge.

### Skill Example
    -   "Customer Call Preparation Skill"
    -   It tells Claude to:
            1. Read customer profile
            2. Review previous issues
            3. Identify open problems
            4. Prepare questions
            5. Create meeting summary

    -   The Project provides the **information**. 
    -   The Skill provides the **process**.

## Projects + Skills Together
    -   They complement each other.

    -   Example:
        - Project
            ├── Customer profiles
            ├── Product documentation
            └── Previous meetings

                    +

        - Skill
            └── Customer Call Preparation Process

                    ↓

            Claude prepares the customer call using the project's knowledge and following the Skill's workflow.

# Simple Comparison
| Projects              | Skills |
|                       | 
| Store knowledge       | Define processes
| Provide context       | Provide methodology
| Reference materials   | Repeatable workflows
| Long-term context     | Consistent execution
| "What?"               | "How?"


=>  # When to Use What?
    -   Use a **Project** 
    -   when: "Claude needs to know these documents/context."

    -   Example:
        - Product requirements + API docs + meeting notes

=> Use a **Skill** 
    - when:
        "Claude needs to follow these steps every time."

    - Example:
        Analyze data → Create charts → Write summary → Apply company format

    - Use **both** when you need:
        Project = Knowledge
        Skill   = Process

=> Key Idea:
    - Skills are like reusable expertise packages.
        Request
        ↓
        Claude identifies relevant Skill
        ↓
        Skill provides instructions/process
        ↓
        Claude performs the task
        ↓
        Consistent output

Remember:
    PROJECT = What Claude knows
    SKILL   = How Claude performs
    ARTIFACT = What Claude creates
*/