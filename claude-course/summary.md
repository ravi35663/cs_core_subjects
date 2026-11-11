# MCP server primitives: summary

MCP servers offer three primitives. Each one is controlled by a different part of your stack.

| Primitive | Controlled by | Purpose | Our project example | Use it when |
|---|---|---|---|---|
| **Tools** | Claude (the model) | Give Claude actions it can take on its own | `read_doc_contents`, `edit_document` | You need Claude to act or compute |
| **Resources** | Your app | Fetch data for the UI or to add context | `docs://documents`, `docs://documents/{doc_id}` | Your code needs data for autocomplete or the prompt |
| **Prompts** | The user | Predefined workflows the user starts on demand | `format` prompt | You want a repeatable workflow, started from a menu, button, or `/` command |

## How to choose

- Need to give Claude new capabilities? Use a **tool**.
- Need data inside your app? Use a **resource**.
- Want a workflow users can start? Use a **prompt**.

## Key points

- **Tools serve the model.** Claude decides when to call them.
- **Resources serve the app.** Your code decides when to fetch them, for example when a user types `@deposition.md`.
- **Prompts serve the user.** The user picks the workflow, and the server's template supplies the instructions.
- **Tools change data; resources and prompts do not.** Resources are read-only, and a prompt only returns messages.