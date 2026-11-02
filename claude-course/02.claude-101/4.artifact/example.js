/*
# Artifact Example — Team Task Management Dashboard

## Problem

Build a Team Task Management Dashboard for a software development team.

Requirements:
- Create tasks
- Assign tasks to developers
- Set priority: Low / Medium / High
- Set status: Todo / In Progress / Done
- Search tasks
- Filter by status and priority
- Update task status
- Delete tasks
- Show summary statistics

---

## Step 1 — Analyze Requirements

Ask Claude:

"Analyze this problem and create an artifact containing:

1. Actors
2. Entities
3. Functional requirements
4. Non-functional requirements
5. Main user flows

Do not write the final code yet."

---

## Step 2 — Design Architecture

Ask Claude:

"Add the application architecture to the artifact.

Include:
- Frontend
- Backend
- Database
- API layer
- Important services/components

Create an architecture diagram and briefly explain
why each component exists."

---

## Step 3 — Design Database

Ask Claude:

"Add the database design to the artifact.

Developer:
- id
- name
- email

Task:
- id
- title
- description
- priority
- status
- developerId
- createdAt

Show the relationship:

Developer 1 -------- * Task

Also create an ER diagram."

---

## Step 4 — Design APIs

Ask Claude:

"Add the API design to the artifact.

APIs:

POST   /tasks
GET    /tasks
GET    /tasks/:id
PATCH  /tasks/:id
DELETE /tasks/:id

For each API include:
- Purpose
- Request example
- Response example
- Validation
- Error response"

---

## Step 5 — Create UI Prototype

Ask Claude:

"Create an interactive UI artifact for this application.

Include:
- Dashboard
- Statistics cards
- Task table
- Search
- Status filter
- Priority filter
- Create task form
- Edit task
- Delete confirmation
- Status update

Use realistic sample data and make it look
like a production application."

---

## Step 6 — Review and Iterate

After the artifact is created, ask:

"Add loading, error, and empty states."

"Make the dashboard more professional."

"Add dark mode."

"Add an architecture diagram."

"Add API request/response examples."

"Improve the UI for a software development team."

---

## Step 7 — Move to Claude Code

Open the actual project in Claude Code and ask:

"I have designed this application using a Claude Artifact.

Before writing code:
1. Inspect the existing codebase.
2. Understand the current architecture.
3. Compare it with the artifact design.
4. Identify conflicts or missing pieces.
5. Create an implementation plan.

Do not modify the code yet."

Then implement step by step:

1. Database
2. Backend
3. APIs
4. Frontend
5. Tests

---

## Final Workflow

Problem
   ↓
Requirements
   ↓
Architecture Artifact
   ↓
Database Design
   ↓
API Design
   ↓
UI Prototype
   ↓
Review + Iterate
   ↓
Claude Code
   ↓
Implement
   ↓
Test
   ↓
Final Application
*/