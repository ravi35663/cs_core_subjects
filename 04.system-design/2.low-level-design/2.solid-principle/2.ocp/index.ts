/* ===================== OPEN–CLOSED PRINCIPLE (OCP) =====================
=> OCP:
    - O of SOLID.
    - Software entities (classes, modules, functions) should be:
        - Open for extension
        - Closed for modification
    - Add new behavior through extension without changing existing code.
    - Helps prevent breaking tested code and improves scalability.

=> Example:
    - Add new features using inheritance or composition.
    - Existing code remains unchanged.

=> Real-Life Analogy:
    - Adapter, e.g., MacBook adapter.

=> When to Apply OCP?
    - Business rules are likely to change or expand.
    - Building a plug-in system.
    - Code is becoming a "God Class" with many conditions.

=> Common Misconceptions:
    - "Never modify old code"
        → No. Existing code can be refactored to support OCP.

    - "Extra classes are overkill"
        → Extra classes are fine if they improve maintainability.

    - "OCP makes code harder to read"
        → Not if implemented properly; it provides flexibility.
*/