/*
==================== CLAUDE PROJECTS ====================
Projects = Dedicated workspaces for ongoing work.
=>  A Project has:
    - Its own chats/history
    - Knowledge/files
    - Custom instructions
    - Shared context for related work

Think:
    Project = Knowledge + Instructions + Chats

----------------------------------------------------------
1. WHEN TO USE PROJECTS
----------------------------------------------------------
Use a Project when:
    - Work is ongoing, not a one-time question
    - You repeatedly use the same documents
    - Claude should follow consistent rules/style
    - Multiple teammates need the same context

Example:
    "MRC-ITAT Project"
    -> Add project docs, requirements, API docs, coding standards
    -> Every chat can use the same context

----------------------------------------------------------
2. PROJECT INSTRUCTIONS
----------------------------------------------------------
    -> Instructions tell Claude HOW to behave in the project.

    ->  Include:
        - Context: What is this project about?
        - Process: How should Claude approach tasks?
        - Style: Tone/format
        - Rules: Specific requirements

Example:
    "This project is for a Node.js backend.
     Use TypeScript.
     Follow clean-code principles.
     Give concise explanations.
     Always include examples."

Instructions apply to every chat in the project.

----------------------------------------------------------
3. PROJECT KNOWLEDGE
----------------------------------------------------------
    ->  Upload documents Claude should repeatedly reference.
    ->  Examples:
            - Requirements
            - PDFs / DOCX
            - API documentation
            - Reports
            - Meeting notes
            - Code/documentation
            - Templates
            - Guidelines

Example:
    Upload: API-Spec.pdf
            Database-Design.pdf
            Coding-Guidelines.md

Then ask:
    "Based on API-Spec.pdf, design the new endpoint."
Tip:
    Use descriptive filenames:
    "Q4-Sales-Report.pdf" > "report.pdf"

----------------------------------------------------------
4. LARGE KNOWLEDGE BASE / RAG
----------------------------------------------------------
    ->  Projects can handle large amounts of knowledge.
    ->  When the knowledge base becomes too large to load everything at once, Claude uses RAG:
        Your question
            ↓
        Search project knowledge
            ↓
        Find relevant information
            ↓
        Use it in the response

    So you don't need to manually tell Claude which document to use every time.

----------------------------------------------------------
5. PROJECT COLLABORATION
----------------------------------------------------------
    ->  For Claude for Work, projects can be shared with teammates.
    ->  Permissions:
        - Can view → Read/chat only
        - Can edit → Modify instructions/knowledge/project
        - Owner → Full control

    ->  Example:
            Team Project
            ├── Requirements
            ├── Design docs
            ├── Team instructions
            └── Shared chats

    ->  Everyone works from the same context.

----------------------------------------------------------
6. COMMON PROJECT EXAMPLES
----------------------------------------------------------
1) Software Project:
    - Requirements + API docs + coding standards
    - Claude helps with development and documentation.

2) Research Project:
    - Research papers + customer feedback
    - Claude summarizes and finds insights.

3) Client Project:
    - Brand guidelines + previous deliverables
    - Claude creates consistent client content.

4) Event Project:
    - Contracts + speaker details + attendee data
    - Claude creates schedules and communications.

----------------------------------------------------------
7. BEST PRACTICES
----------------------------------------------------------
    - Start with one focused purpose.
    - Keep knowledge/files updated.
    - Write clear, specific instructions.
    - Use descriptive filenames.
    - Reference important documents by name when useful.

    Example:
        "Based on Q3-Customer-Report.pdf, identify the top 3 customer concerns."

----------------------------------------------------------
KEY IDEA
----------------------------------------------------------
Project = Persistent workspace for a specific workstream.

    Project
      ├── Instructions → HOW Claude should behave
      ├── Knowledge    → WHAT Claude should know
      └── Chats        → WHERE you work

Use Projects when you repeatedly need the same context, rules, and documents.
*/