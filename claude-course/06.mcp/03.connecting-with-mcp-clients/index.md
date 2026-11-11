# Part 1: The MCP client, resources, and prompts

## The client: `MCPClient`

**What it is:** A class you write to manage the connection to an MCP server.

**Why we wrap it:** The SDK's `ClientSession` must be opened and closed correctly. If you forget to close it, the server process can keep running. The `MCPClient` class uses `AsyncExitStack` to close everything for you, and you can use it with `async with`.

```python
async with MCPClient(command=sys.executable, args=["mcp_server.py"]) as client:
    tools = await client.list_tools()
# Connection and server process are closed here automatically
```

**Benefits:**
- Cleanup happens automatically, even when an error occurs.
- Your CLI or app code stays short.
- You can add more methods later without changing how connections work.

## 1. `list_tools()`: "What can you do?"

**What it does:** Asks the server for its tool list. Each tool has a name, a description, and an input schema.

**Why:** Claude needs this list to decide which tool to use. Your app sends the list to Claude with the user's question.

```python
tools = await client.list_tools()
# [read_doc_contents, edit_document]
```

**Benefit:** You do not hard-code tool names. A new tool on the server appears in your app without changes.

## 2. `call_tool()`: "Do this action"

**What it does:** Runs one tool on the server and returns the result.

**Why:** When Claude says "use `read_doc_contents` with `report.pdf`", your app passes that request to the server.

```python
result = await client.call_tool("read_doc_contents", {"doc_id": "report.pdf"})
print(result.content[0].text)
# The report details the state of a 20m condenser tower.
```

**Benefit:** Claude decides what to do, and the server does the work. Your app only passes messages.

## 3. Resources: "Give me this data"

**Simple idea:** A resource is read-only data with an address (a URI). It works like a GET request in a web server. A tool performs an action, such as edit. A resource returns information, such as "read the document."

**Two kinds:**

| Type | Example URI | Use it when |
|---|---|---|
| Direct | `docs://documents` | The address never changes (a list of all document IDs) |
| Templated | `docs://documents/{doc_id}` | The address has a changing part (one document) |

**Server side:**

```python
@mcp.resource("docs://documents", mime_type="application/json")
def list_docs() -> list[str]:
    return list(docs.keys())

@mcp.resource("docs://documents/{doc_id}", mime_type="text/plain")
def fetch_doc(doc_id: str) -> str:
    return docs[doc_id]
```

**Client side:**

```python
ids = await client.read_resource("docs://documents")
text = await client.read_resource("docs://documents/deposition.md")
```

**Why we need the MIME type:** The MIME type says what kind of data came back. `read_resource` uses it:
- `application/json` is parsed into a Python list or dictionary.
- `text/plain` is returned as a string.

**Why resources matter:** When a user types `@deposition.md`, your app puts the document text into the prompt before Claude starts. Claude does not have to call a tool to get it. That saves a round trip and makes the answer faster.

**Benefit:** The data is clearly read-only. Tools are for changes, and resources are for reading.

## 4. Prompts: "Ready-made instructions"

**Simple idea:** A prompt is a template the server owns. It fills in values and returns the messages to send to Claude.

**Why:** Users can type "reformat report.pdf in markdown," but a tested prompt gives better results every time. You write the instructions once, and every client benefits.

**Server side:**

```python
@mcp.prompt(name="format", description="Rewrites the document in Markdown.")
def format_document(doc_id: Annotated[str, Field(description="Id of the document")]) -> list[base.Message]:
    return [base.UserMessage(f"Reformat document {doc_id} in markdown. Use edit_document.")]
```

**Client side:**

```python
prompts = await client.list_prompts()          # shows "format" in a / menu
messages = await client.get_prompt("format", {"doc_id": "spec.txt"})
```

The `{"doc_id": "spec.txt"}` dictionary fills the function's `doc_id` argument.

**Benefits:**
- Consistent results for every user.
- Experts encode their knowledge once.
- Every client that connects can use the same prompts.

## Quick comparison

| | Tool | Resource | Prompt |
|---|---|---|---|
| Purpose | Do an action | Read data | Provide instructions |
| Changes data? | Can | No | No |
| Who triggers it | Claude decides | Your app, from user input (`@`) | User picks it (`/`) |
| Client method | `call_tool` | `read_resource` | `get_prompt` |
| Like a... | POST/PUT | GET | Template |

## Key points

- **Keep the client as one class** that owns the connection.
- **Always call `list_*` first** rather than guessing names.
- **Set the MIME type correctly.** The client's parsing depends on it.
- **Use `<2` for `mcp` in Python** because `FastMCP` was renamed in 2.x.
- **Test each piece** with `example_usage.py` or the MCP Inspector.