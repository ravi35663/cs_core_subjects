# Example: connecting an MCP client to the document server

## Files

| File | Purpose |
|---|---|
| `mcp_server.py` | Document server with tools, resources, and a prompt |
| `mcp_client.py` | `MCPClient` class: connect, list, call, read, and clean up |
| `example_usage.py` | Runs every client function once and prints the results |

## Setup

```bash
pip install "mcp[cli]>=1.8.0,<2"
```

The `<2` pin matters. `mcp` 2.x renamed `FastMCP` to `MCPServer`, and this code uses `FastMCP`.

Or with uv, from this folder:

```bash
uv run example_usage.py
```

## Run

```bash
python mcp_client.py     # connects and lists the tools
python example_usage.py  # runs tools, resources, and prompts
```

## Notes

- The client starts `mcp_server.py` as a subprocess over stdio. You do not run the server yourself.
- Edits made with `edit_document` last only while that server process runs.
- `read_resource` returns plain text for `text/plain`, and a parsed object for `application/json`. A binary resource would need separate handling.
