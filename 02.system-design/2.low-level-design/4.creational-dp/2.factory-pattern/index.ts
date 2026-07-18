/*
=>  Factory Pattern:
    -   It is a creational design pattern that lets you create objects without telling your code 
        exactly which class to use.
        
    -   Factory Pattern creates objects without exposing creation logic.
    -   Client depends on abstraction, not concrete classes.

=>  Why use it?
    -   When the client does not knows what exact class of the object it needs.
    -   To decouple object creation logic from client code.
    -   When object creation is complex or depends on same conditions

=>  Real life analogy:
    -   Ask factory to create laptop for me without knowing how they do it.
*/
/*
===================== FACTORY PATTERN: PROS & CONS =====================
+----------------------+------------------------------------+------------------------------------+
| Aspect               | Pros                               | Cons                               |
+----------------------+------------------------------------+------------------------------------+
| Object Creation      | Centralizes creation logic         | Factory can become complex         |
| Coupling             | Reduces tight coupling             | Adds extra abstraction layer       |
| Maintainability      | Easier to manage & modify          | Changes may still touch factory    |
| Extensibility        | Supports adding new types easily   | Violates OCP if switch-case grows  |
| Abstraction          | Client depends on interfaces       | Harder to understand for beginners|
| Code Reuse           | Avoids duplicate creation code     | More files / boilerplate           |
| Testing              | Easier to mock products            | Factory itself needs testing       |
| Scalability          | Good for complex object creation   | Overkill for simple objects        |
+----------------------+------------------------------------+------------------------------------+
*/
