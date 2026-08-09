/*
=> How to approach a LLD interview & common doubts:
    1) Clarify Requirements:
        -   Clearly list functional requirements (main features, flows, constrains)
        -   Include non-functional requirements (Scalability, latency, availability ...etc)
        -   Highlight edge cases and real world behaviors the system must handle
    
    2)  Identify core entities: (Like User, Movies ..etc)
        -   Define all core domain entities relevant to system
        -   Include attributes, responsibilities and relationships between entities
        -   Mention auxiliary/supporting entities if required

    3)  Visualize interaction flow:
        -   Describe who interact with whom during interaction
        -   Use Sequence flows, flowcharts  to show:
            -   System interaction with user
            -   Internal service - service calls
            -   External system calls (Payment gateway)
    
    4)  Define class Structure and relationships   
        -   Use OOP and SOLID principle
        -   Includes:
            -   interfaces, abstract classes, and concrete implementation
            -   Domain models, services, gateways/adopter, DTOs
            -   Separation of concerns between layers
                    (controller -> Service -> repository) 

        -   Apply design principle for scalability and extensibility:
            -   Loose coupling, high cohesion
            -   abstractions for third party integration
            -   modularity for business logic
        -   Prepare the design for production scale.

    5)  Define core use cases and methods:
        -   For every major feature, define:
            -   method responsibility
            -   i/o modules
            -   collaborating classes
            -   transaction flow

        -   Include use cases like:
            -   Create, Update, Delete, Fetch Operations
            -   Real-time flows (example: BookMyShow: seat locking, order status updates and all)
            -   Background tasks

    6) Apply Design Patterns:
        -   Mention clearly which design pattern and why
        -   Reinforce adherence to clear code proactive

    7)  Handle Edge cases:
        -   Discuss edge cases, failure scenarios and system limits
            -   Concurrency issue
            -   Stale state
            -   Partial failure
            -   retry handling and idempotency

        -   Discuss mitigation strategies like:
            -   locks, cache invalidations, compensation logics
            -   Consistency vs availability trade off

    8)  Class diagram and package structure
    9)  Discuss future add - on's
*/

/*
=> FAQs:
    -   How much details I go into?
    -   Should I write code or discuss?
    -   How much business logic should you implement?
    -   Which pattern to use?
            -   Strategy    -   Pricing
            -   Factory     -   Object creation
            -   Observer    -   Event Handling
            -   Repository  -   Data Access
            -   Adapter     -   Third party
            
    -   What interviewers judge for on?
        -   Handling edge cases
        -   OOP, SOLID, Design
        -   Working Solutions

*/