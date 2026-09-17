/* ===================== SINGLE RESPONSIBILITY PRINCIPLE (SRP) =====================
=> SRP:
    - S of SOLID.
    - A class should have only one responsibility or one reason to change.
    - Each concern should be handled separately.
    - Multiple responsibilities create coupling, making changes risky.

=> Example:
    - User class       → User-related logic
    - UserRepository   → Database operations
    - EmailService     → Email sending

=> Why SRP Matters?
    - Example: TUF+ Compiler
        - Add/validate code
        - Process code
        - Run test cases
        - Store output in DB
        - Return result

    - Don't put all these responsibilities in one class.
    - Create separate classes for each responsibility.
    - Use a Coordinator class to manage and execute these modules.

=> Benefits:
    - Better maintainability
    - Better test coverage
    - Lower risk when making changes
    - Reusable modules

=> Common SRP Violations:
    - Mixing DB logic with business logic.
    - Coupling UI code with business logic.

=> Is SRP Only for Classes?
    - No. SRP can apply to:
        - Functions → Do one thing
        - Classes → Handle one responsibility
        - Microservices → Handle one specific responsibility
*/