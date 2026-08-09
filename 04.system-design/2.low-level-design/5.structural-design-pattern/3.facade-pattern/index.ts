/*
=>  Facade Pattern:
    -   It is a structural design pattern that provides a simplified, unified 
        interface to a set of interfaces in a subsystem.

    -   Facade Pattern provides a simple interface to a complex subsystem.
    -   It hides internal complexity and exposes only what the client needs.
    -   Example:
            One remote control tp operate a complex home theatre system.
*/
/*
=>  Why Do We Use It: We use Facade when
    -   System has many interdependent classes.
    -   Client must know too much about internal flow
    -   Tight coupling exists
    -   Client code become messy.
*/
/*
=>  Facade:
    -   Simplifies client usage
    -   Reduces coupling
    -   Improves readability
    -   Hides complexity
*/
/*
=>  When to use it:
    -   Subsystems are complex (too many classes, too many dependencies)
    -   You want to provide a simple api for the outer world
    -   You want to reduce coupling between subsystem and client code
    -   You want to layer your architecture clearly.
*/

/*
=> Pron and cons:
--Pron                              --Cons
    - Lightweight coupling              - Fragile Coupling
    - Flexibility                       - Hidden Complexity
    - Simplifies client design          - Runtime errors
    - Promotes layered architecture     - Difficult to trace
    - Better testability                - violate SRP
*/
/*
=>  Expert Tip:
    -   Always try to depend on abstracts(interfaces) rather than concrete classes to 
        minimize tight coupling.
*/