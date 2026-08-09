/* ===================== INTERFACE SEGREGATION PRINCIPLE (ISP) =====================
    - Classes should not be forced to implement methods they don’t use
    - Large, general interfaces should be split into smaller, specific ones
    - Each interface should serve a focused client need
    - Improves maintainability, flexibility, and testability

In simple terms:
    - Prefer many small interfaces over one large interface
*/
/*
=>  Interface Segregation Principle (ISP):
    -   This is 'I' stand for 'SOLID'.
    -   Clients should not be forced to depend on interfaces they don't use.
    -   Don't create large, bloated interfaces
    -   Break them into smaller and more specific ones.
*/
/*
=>  Benefits of ISP:
    -   Modularity & flexibility
    -   Improve testability. (easy to mock smaller interfaces)
    -   Prevent accidental implementation of irrelevant methods.
    -   Make code easier to understand.
*/
/*
=>  When to apply ISP?
    -   When your interface is doing too many things.
    -   When some classes implementing an interface throw errors.
*/