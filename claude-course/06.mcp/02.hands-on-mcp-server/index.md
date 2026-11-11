# Building an MCP server with the Python SDK

## What you are building

A document server with two tools, backed by an in-memory dictionary:
- `read_doc_contents`: returns a document's text by ID.
- `edit_document`: replaces text inside a document.

## Step 1: Install the SDK

```bash
pip install "mcp[cli]"
```

The `[cli]` extra includes the `mcp dev` command used in Step 5.

## Step 2: Create the server file

Save this as `mcp_server.py`.

```python
# A document MCP server with two tools: read a document and edit it.
from typing import Annotated

from mcp.server.fastmcp import FastMCP
from pydantic import Field

mcp = FastMCP("DocumentMCP", log_level="ERROR")

docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditures",
    "outlook.pdf": "This document presents the projected future performance of the system",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment"
}


@mcp.tool(
    name="read_doc_contents",
    description="Read the contents of a document and return it as a string."
)
def read_document(
    doc_id: Annotated[str, Field(description="Id of the document to read")]
) -> str:
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    return docs[doc_id]


@mcp.tool(
    name="edit_document",
    description="Edit a document by replacing a string in the document's content with a new string."
)
def edit_document(
    doc_id: Annotated[str, Field(description="Id of the document that will be edited")],
    old_str: Annotated[str, Field(description="The text to replace. Must match exactly, including whitespace.")],
    new_str: Annotated[str, Field(description="The new text to insert in place of the old text.")]
) -> str:
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    docs[doc_id] = docs[doc_id].replace(old_str, new_str)
    return f"Updated {doc_id}"


if __name__ == "__main__":
    mcp.run()
```

Notes on the code:
- The lesson's `doc_id: str = Field(...)` form is the older style. `Annotated[str, Field(...)]` is the form the current SDK expects.
- The `-> str` return types and the `"Updated ..."` message make the edit tool report success instead of returning nothing.

## Step 3: Understand what the decorators do

| Part | Job |
|---|---|
| `@mcp.tool(name=..., description=...)` | Registers the function as a tool and sets what Claude sees |
| Type hints (`str`) | Become the argument types in the generated schema |
| `Field(description=...)` | Becomes the description of each argument |
| `raise ValueError` | Sent back to the client as a tool error |

You never write the JSON schema yourself.

## Step 4: Check that the server runs

```bash
python mcp_server.py
```

It waits for a client on standard input. Stop it with `Ctrl+C`. This only confirms the file has no syntax errors.

## Step 5: Test it in the MCP Inspector

```bash
mcp dev mcp_server.py
```

1. Open the local URL the command prints, usually `http://127.0.0.1:6274`.
2. Click **Connect**. The status changes from "Disconnected" to "Connected".
3. Open **Tools** and click **List Tools**. Both tools should appear.
4. Select `read_doc_contents`, enter `deposition.md`, and click **Run Tool**. Expect the deposition text.
5. Select `edit_document`, enter `doc_id` = `plan.md`, `old_str` = `plan outlines`, `new_str` = `plan describes`, and click **Run Tool**. Expect `Updated plan.md`.
6. Run `read_doc_contents` on `plan.md` again. The text should show "plan describes".
7. Try an unknown ID such as `missing.md`. Expect the "not found" error.

The inspector keeps the server running between calls, so the edit in step 5 is still there in step 6. Restarting the server resets the dictionary.

## Step 6: Connect it to Claude Code

Add a `.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "documents": {
      "command": "python",
      "args": ["mcp_server.py"]
    }
  }
}
```

Use the full path to `mcp_server.py` if Claude Code starts in another folder. Then ask Claude, "Read deposition.md," and it will call `read_doc_contents`.

## Important points

- **Use type hints and `Annotated[..., Field(...)]`.** The SDK builds the schema from them.
- **Write clear descriptions.** Claude chooses tools from these texts.
- **Raise errors for bad input.** Do not return silent failures.
- **Test with `mcp dev` first,** then connect to Claude Code.
- **In-memory data resets on restart.** Use a file or database for real data.
- **Keep the server file under version control** so the team shares it.