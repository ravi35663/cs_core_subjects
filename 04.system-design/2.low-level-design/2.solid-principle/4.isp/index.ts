/* ===================== INTERFACE SEGREGATION PRINCIPLE (ISP) =====================
=> ISP:
    - I of SOLID.
    - Clients should not be forced to depend on methods they don't use.
    - Avoid large, bloated interfaces.
    - Split large interfaces into smaller, focused interfaces.

=> In Simple Terms:
    - Prefer many small, specific interfaces over one large interface.

=> Benefits:
    - Better modularity and flexibility.
    - Easier testing and mocking.
    - Prevents implementation of irrelevant methods.
    - Makes code easier to understand and maintain.

=> When to Apply ISP?
    - When an interface has too many responsibilities.
    - When implementing classes don't need all interface methods.
    - When some classes are forced to implement methods they don't use.
*/