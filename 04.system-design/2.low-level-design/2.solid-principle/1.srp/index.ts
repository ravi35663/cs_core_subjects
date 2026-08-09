/* ===================== SINGLE RESPONSIBILITY PRINCIPLE (SRP) =====================
    - A class should have only one responsibility
    - It should have only one reason to change
    - Each concern should be handled by a separate class

Example:
    - User class → handles user-related logic
    - UserRepository → handles database operations
    - EmailService → handles email sending

    - This separation improves readability, maintainability, and scalability.
*/
/*
=>  Single Responsibility Principle (SRP):
    -   S of SOLID
    -   A class should have only one reason to change. This means that the class should have only one job, 
        one responsibility, one purpose.

    -   If a class takes more than one responsibility, these responsibilities become coupled, and changes 
        to one might break the others.
*/
/*
=>  Why SRP matters?
    -   Example of TUF+ Compiler modules
        -   Add driven code
        -   System processing
        -   Code run with test cases
        -   Store the output in DB
        -   return the necessary things

    -   You should not put all these modules in a single class, because it cause maintenance of the 
        modules.
    -   You should add these modules in different-different classes
    -   Coordinator -> co-ordinates all these modules
    -   Put all classes in Run method to perform the task you have given to the compiler.
*/
/*
=>  Benefits of SRP:
    -   Improved maintainability
    -   Better test coverage
    -   Lower risk in change
    -   reusable modules
*/
/*
=>  Common Mistakes when violating SRP:
    -   Putting DB logic and business logic in the same class.
    -   UI code coupled with logic.
*/
/*
=>  Is, SRP just for classes?
    -   We developers defined it.
    -   It could be a function that doing one thing only, could be a microservice that doing one thing and 
        could be a class that is doing one thing only.
*/