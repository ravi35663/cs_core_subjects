---
description: Add a new DSA implementation to 02.dsa using the dsa-problem skill
argument-hint: <topic-folder> <file-name>
---

Add a new DSA implementation for: $ARGUMENTS

Arguments are `<topic-folder> <file-name>`, for example `14.heap 5.heap-visualiser`. The topic folder is relative to `02.dsa/`.

1. Use the `dsa-problem` skill to write the file under `02.dsa/<topic-folder>/`.
2. If the topic folder does not exist, stop and ask before creating it.
3. Run the file with `node` and confirm the output.
4. Report the file path, complexity, and the run output.
