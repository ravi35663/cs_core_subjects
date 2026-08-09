/* 
=============================== CLEAN ARCHITECTURE ===============================
=> What is Clean Architecture?
    - Organizes code into well-defined layers
    - Each layer has a single responsibility
    - Dependencies always point inward
    - Core business logic is independent of frameworks, UI, and databases
    - Results in clean, maintainable, and testable code

=> Dependency Rule (MOST IMPORTANT):
    - Outer layers can depend on inner layers
    - Inner layers must NOT depend on outer layers
    - Business logic remains isolated and stable

===================== LAYERS OF CLEAN ARCHITECTURE ===================== 
1) Entity Layer (Domain Layer)
   - Innermost and most important layer
   - Contains core business entities (classes, interfaces)
   - Independent of frameworks, databases, and UI
   - Knows nothing about other layers
   - Only Use Case layer can depend on it

2) Use Case Layer (Application Layer)
   - Contains application-specific business rules
   - Coordinates actions between entities
   - Applies business logic and workflows
   - Acts as a bridge between controller and infrastructure
   - Depends only on Entity layer

3) Controller Layer (Interface / Delivery Layer)
   - Handles incoming requests (HTTP, API, UI events)
   - Validates and adapts input data
   - Sends valid data to Use Case layer
   - Prevents invalid data from entering core logic

4) Infrastructure Layer
   - Handles technical details
   - Database access, APIs, email, payment gateways
   - Implements interfaces defined in inner layers
   - Depends on Use Case and Entity layers

5) Outermost Layer (UI / Framework Layer)
   - External-facing layer (UI, Web framework, CLI)
   - Depends on all inner layers
   - Inner layers never depend on this layer
   - Easy to replace without affecting business logic

===================== KEY BENEFITS ===================== 
   - Loose coupling
   - High testability
   - Easy to maintain and extend
   - Framework-independent business logic
   - Clear separation of concerns

===================== INTERVIEW ONE-LINER =====================
   -  Clean Architecture structures code into independent layers with inward 
      dependencies, keeping business logic isolated, testable, and 
      framework-agnostic.
*/