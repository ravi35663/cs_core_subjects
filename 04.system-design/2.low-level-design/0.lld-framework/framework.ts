/*
=>  Step: 1
    => Functional Requirements: LLD
    Note:   
        -   You can think of cases like some server failure, where we may need a human to override 
            instead of automate gates working by themselves.

    => Non Functional Requirement (HLD):
        -   Scalability:
        -   Consistency:
        -   Availability:
        -   Latency:
        -   Extensibility:
        -   Security:

    =>  Edge - Cases:
*/

/*
=>  Step 2:
    =>  Identify core entities:
    =>  DTO's: API that are going to use:
*/

/*
=>  Step 3:
    =>  Discuss interaction flow: (SDLC of the system)
*/

/*
=>  Step 4: Discuss class structures and relationships
    =>  Architecture Layers:
        Client/UI -> Controller Layer(HTTP/API) -> Service Layer -> Repository Layer -> Domain Layer        
    =>  Controllers:
    =>  Services:
    =>  Repositories:
    =>  Interfaces
    =>  Implementations:
*/

/*
=>  Step 5:
    =>  Core use cases and methods:
*/

/*
=> Step 6:
    => OOP Principles and design patterns:
        ->  Design patterns used
        ->  OOP Principle applied
*/

/*
=> Step 7: Handle Edge cases: (Discussions only):
    =>  Edge cases solutions;
    =>  Implementation Strategies
*/

/*
=>  Step 8: Class diagram and package structure:
    1)  Association:    I work with you
    2)  Aggregation:    I have you, but you are not mine
    3)  Composition:    You are mine and only mine:
*/

/*
=>  Step 9:  Future requirement: Optional
    => Future functional Requirement:
*/

// More optimal framework:
/*
===============================================================================
                UNIVERSAL LLD DESIGN FRAMEWORK
===============================================================================
*/
/*
===============================================================================
=> STEP 1: REQUIREMENTS
===============================================================================

=> Functional Requirements:
    - Who are the actors?
    - What can each actor do?
    - What are the main business capabilities?
    - What is explicitly out of scope?

=> Assumptions / Clarifications:
    - Clarify ambiguous requirements.
    - Define important business rules.
    - Define limits where required.

=> Non-Functional Requirements:
    - Scalability
    - Consistency
    - Availability
    - Latency
    - Extensibility
    - Security

=> Edge Cases:
    - What can go wrong?
    - Invalid input?
    - Resource unavailable?
    - Duplicate request?
    - External dependency failure?

NOTE:
    Don't overdo NFRs in LLD.
    Discuss only NFRs that influence the design.
*/


/*
===============================================================================
=> STEP 2: DOMAIN MODEL
===============================================================================

=> Identify Core Entities:
    - Entities
    - Value Objects
    - Enums
    - Domain concepts

=> For each entity identify:
    - Identity
    - Attributes
    - State
    - Behavior

=> Identify Relationships:
    - Association
    - Aggregation
    - Composition

=> Identify Cardinality:
    - 1 : 1
    - 1 : N
    - N : N

=> Identify Ownership:
    - Who owns whom?
    - What is the lifecycle dependency?

=> DTOs:
    - Request DTOs
    - Response DTOs
    - Command / Query objects where useful
*/


/*
===============================================================================
=> STEP 3: USE CASES / INTERACTION FLOWS
===============================================================================

=> Convert functional requirements into business flows.

Example:

    User
      ↓
    Controller
      ↓
    Service
      ↓
    Domain
      ↓
    Repository / External System
      ↓
    Response

For each major use case:
    - Input
    - Validation
    - Business operation
    - Persistence
    - External interaction
    - Output
    - Failure scenarios

Example:

    Create Order
        ↓
    Validate request
        ↓
    Check inventory
        ↓
    Create order
        ↓
    Save order
        ↓
    Publish event
        ↓
    Return response
*/


/*
===============================================================================
=> STEP 4: STATE + BUSINESS RULES
===============================================================================

=> Identify important state machines.

Example:

    CREATED
       ↓
    CONFIRMED
       ↓
    COMPLETED

=> Define invariants:

    - What must ALWAYS be true?
    - What states are invalid?
    - What transitions are allowed?

Example:

    - A completed order cannot be cancelled.
    - A resource cannot be allocated twice.
    - A successful payment cannot be charged again.

This step is extremely important for correct LLD.
*/


/*
===============================================================================
=> STEP 5: RESPONSIBILITIES
===============================================================================

For every class ask:

    "Who should be responsible for this behavior?"

=> Domain responsibilities:
    - State changes
    - Business rules
    - Domain validation

=> Service responsibilities:
    - Orchestrate use cases
    - Coordinate multiple entities
    - Manage transactions

=> Repository responsibilities:
    - Persistence
    - Querying
    - Data access abstraction

=> Controller responsibilities:
    - API input/output
    - Request validation
    - Authentication/authorization boundary

Avoid:
    - God classes
    - Business logic inside controllers
    - Database logic inside domain entities
    - One service doing everything
*/


/*
===============================================================================
=> STEP 6: CLASS STRUCTURE + APIs
===============================================================================

=> Controllers:
    - Public API / entry points

=> Services:
    - Application/business use cases

=> Domain:
    - Entities
    - Value objects
    - Domain rules

=> Repositories:
    - Persistence abstraction

=> Interfaces:
    - Only where abstraction/variation is required

=> Implementations:
    - Concrete database adapters
    - External service adapters
    - Strategy implementations

Define:
    - Method name
    - Input
    - Output
    - Responsibility
    - Error behavior
*/


/*
===============================================================================
=> STEP 7: IDENTIFY VARIATIONS
===============================================================================

Ask:

    "What is likely to change?"

Common variations:

    - Payment methods
    - Pricing algorithms
    - Notification channels
    - Storage implementations
    - Search algorithms
    - Allocation algorithms
    - Authentication providers
    - External APIs

Then decide:

    Does this require an abstraction?

If YES:
    → Interface
    → Strategy
    → Factory
    → Adapter
    → etc.

If NO:
    → Keep it simple.


IMPORTANT:

    Don't start with design patterns.

    Requirement
        ↓
    Variation
        ↓
    Abstraction
        ↓
    Design Pattern (if useful)
*/


/*
===============================================================================
=> STEP 8: SOLID + OOP + DESIGN PATTERNS
===============================================================================

=> OOP:
    - Encapsulation
    - Abstraction
    - Inheritance
    - Polymorphism

=> SOLID:
    - Single Responsibility
    - Open/Closed
    - Liskov Substitution
    - Interface Segregation
    - Dependency Inversion

=> Common Patterns:

    Creation:
        - Factory
        - Builder

    Structural:
        - Adapter
        - Decorator
        - Facade
        - Composite
        - Proxy

    Behavioral:
        - Strategy
        - Observer
        - State
        - Command
        - Chain of Responsibility
        - Template Method

Use a pattern ONLY when it solves an actual design problem.
*/


/*
===============================================================================
=> STEP 9: DATA + TRANSACTIONS
===============================================================================

Ask:

    - What needs to be persisted?
    - What are the important database entities?
    - What are the relationships?
    - What needs a transaction?
    - What operations must be atomic?
    - What needs a unique constraint?
    - What needs optimistic/pessimistic locking?

Example:

    Read resource
        +
    Reserve resource

may need to be atomic.

Also consider:

    - Idempotency
    - Duplicate requests
    - Transaction boundaries
*/


/*
===============================================================================
=> STEP 10: CONCURRENCY + FAILURE HANDLING
===============================================================================

=> Concurrency:
    - Two users modifying the same resource
    - Race conditions
    - Duplicate operations
    - Resource allocation conflicts

Ask:

    "What happens if two requests arrive at exactly the same time?"

Possible mechanisms:

    - Database transaction
    - Optimistic locking
    - Pessimistic locking
    - Atomic update
    - Unique constraint
    - Idempotency key
    - Distributed lock (only if actually required)

=> Failure:
    - Database failure
    - Network failure
    - External API failure
    - Timeout
    - Partial failure
    - Retry

Ask:

    "What happens if operation A succeeds but operation B fails?"
*/


/*
===============================================================================
=> STEP 11: EXTENSIBILITY / FUTURE REQUIREMENTS
===============================================================================

Ask:

    "What happens if the interviewer adds a new requirement?"

Examples:

    - Add a new payment method
    - Add a new pricing algorithm
    - Add a new notification channel
    - Add a new vehicle type
    - Add a new storage implementation

Check:

    - Will existing code need modification?
    - Can we add a new implementation?
    - Are responsibilities well separated?
    - Are abstractions at the correct boundaries?

Don't over-engineer for hypothetical requirements.
*/


/*
===============================================================================
=> STEP 12: CLASS DIAGRAM + PACKAGE STRUCTURE
===============================================================================

Show:

    - Entities
    - Interfaces
    - Services
    - Repositories
    - External adapters
    - Relationships
    - Dependencies

Typical structure:

    domain/
        entities/
        value-objects/
        enums/

    application/
        services/
        dto/

    infrastructure/
        repositories/
        adapters/

    interfaces/
        controllers/

Don't blindly use this structure.
Use only what the problem requires.
*/


/*
===============================================================================
=> STEP 13: TESTING
===============================================================================

Identify important tests:

=> Happy path:
    - Main business flow works.

=> Validation:
    - Invalid input rejected.

=> Business rules:
    - Correct state transitions.
    - Correct calculations.

=> Failure:
    - External service failure.
    - Database failure.
    - Payment failure.

=> Concurrency:
    - Same resource cannot be allocated twice.

=> Idempotency:
    - Duplicate request doesn't duplicate side effects.

Focus on testing behavior rather than getters/setters.
*/


/*
===============================================================================
=> STEP 14: IMPLEMENTATION
===============================================================================

Implement in this order:

    1. Domain entities
    2. Interfaces
    3. Core business logic
    4. Services / use cases
    5. Repository abstractions
    6. External adapters
    7. Controllers
    8. Tests

During implementation continuously check:

    - SOLID
    - Encapsulation
    - Low coupling
    - High cohesion
    - Testability
    - Extensibility
*/


/*
===============================================================================
=> STEP 15: DESIGN REVIEW
===============================================================================

Before finishing, ask:

    1. Is every requirement covered?

    2. Does every class have a clear responsibility?

    3. Is business logic in the correct place?

    4. Are dependencies pointing in the right direction?

    5. What can change without breaking existing code?

    6. What happens during concurrent requests?

    7. What happens when an external dependency fails?

    8. Are important operations atomic?

    9. Is the design unnecessarily complex?

   10. Can I explain every abstraction I introduced?
*/
