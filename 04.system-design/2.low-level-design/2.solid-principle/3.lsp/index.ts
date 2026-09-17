/* ===================== LISKOV SUBSTITUTION PRINCIPLE (LSP) =====================
=> LSP:
    - L of SOLID.
    - A subclass should be replaceable with its superclass without breaking the program.
    - Subclasses must respect the behavior and expectations of the base class.

=> In Simple Terms:
    -   If B extends A, B should work anywhere A is expected.
    -   B should not violate A's behavior.
    -   A is parent here and B is child

=> Why LSP Matters?
    - Prevents broken functionality when replacing parent with child.
    - Avoids fragile inheritance hierarchies.
    - Reduces hard-to-detect bugs.
    - Prevents client code from being tightly coupled to specific types.

=> How to Spot LSP Violations?
    - Subclass throws unexpected exceptions for base-class methods.
    - Subclass changes behavior so much that existing code fails.

=> Key Principles:
    - Follow the contract of the base class.
    - Avoid excessive inheritance; prefer composition when appropriate.
    - Refactor violations early.
*/