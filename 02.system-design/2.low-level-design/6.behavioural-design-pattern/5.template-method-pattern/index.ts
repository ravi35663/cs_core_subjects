/*
=> Template Method Pattern:
    -   It is a behavioral design pattern that defines the skelton of an algorithm in the superclass but 
        let's subclass override specific steps of the algorithm without changing its structure.

=> Key steps:
    - Template method (Final method in base class)
    - Primitive Operations (Abstract methods)
    - Concrete Operations 
    - Hooks (Optional methods with default behavior)
*/

/*
=> When do we use Template Method pattern:
    -   You have multiple classes that follow the same overall algorithm, but differ in few steps
    -   You want to avoid code duplication of common steps
    -   You want to enforce a fixed order of steps
    -   You want to provide optional customizations.
    -   Don't call us, we'll call you.
*/