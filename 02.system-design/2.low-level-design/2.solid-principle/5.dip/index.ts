/* ===================== DEPENDENCY INVERSION PRINCIPLE (DIP) =====================
    - Reduces tight coupling between modules
    - High-level modules should not depend on low-level modules
    - Both should depend on abstractions (interfaces)
    - Abstractions must not depend on implementation details
    - Implementation details should depend on abstractions

In simple terms:
    - Depend on interfaces, not concrete classes
*/
/*
=>  Dependency Inversion Principle (DIP):
    -   This is 'D' in SOLID.
    -   High Level of modules should not depends on low level modules, Both should 
        depends on abstraction.
    -   Abstraction should not depends on details
    -   Details should depend on abstractions.
*/
/*
=>  Benefits of DIP:
    -   Loosely coupled to interface
    -   Just add new implementation
    -   Easy to mock unit test
    -   Abstraction controls flow
    -   Fully open/closed friendly
*/