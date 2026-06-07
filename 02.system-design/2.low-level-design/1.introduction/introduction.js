/*
=> Design patterns:
    ->  Design patterns are the foundation of good software design.
    ->  They provide reusable solutions to recurring problems, improving code structure 
        and quality.

    ->  A design pattern is a general approach to solve a common problem in a specific 
        context.
        Example: Undo-Redo functionality in text editors, games, or code editors can 
                follow a standard pattern.

    ->  Patterns act as blueprints, not direct code, focusing on object interactions, 
        system architecture, and class communication.
*/      
/*
=> Benefits of Design Patterns:  
    1) Code Reusability: Promotes using existing solutions across projects.  
    2) Maintainability: Makes code easier to update and manage.  
    3) Communication: Provides a common language for developers to understand designs.  
    4) Scalability: Structures code to handle future growth with minimal refactoring.  
    5) Efficiency: Saves time by using proven, well-tested solutions instead of reinventing. 
*/ 
/*
=> Why LLD is important?
    -   Avoid rework
    -   Improve collaboration
    -   Promotes Scalability
    -   Encourage Best practices
*/
/*
=> Principles of software design:
    -> We'll be not avoiding these principle while designing a good softwares.
        -   DRY
        -   KISS
        -   YAGNI
*/
/*
=> DRY (Don't repeat yourself):
    -   It means that each piece of knowledge or logic should have a single, 
        unambiguous representation within the system.
<<<<<<< HEAD:low-level-design/1.introduction/introduction.js
        
=======

>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/1.introduction/introduction.js
    -   Example:
        If you're using multiple functions and all those functions implements the same 
        code. So, instead of writing the same code in each function, you can get 
        repeated code in some function and call that function in each functions.

=>  Importance:
        1) Reduces redundancy
        2) Easier maintenance: 
            - if that code logic is change then you only have to make single point change.
        3) Single point of change


=>  How do we apply the DRY principle ?
    -   Identify the repeating code
    -   Extract common functionality
    -   Leverage libraries and frameworks
    -   Refactor code regularly

=>  When not to use DRY principle ?
    -   Premature(too early) Abstraction
    -   Sacrificing readability
    -   Legacy Code
    -   Performance Critical Code
*/
/*
=>  KISS(Keep it simple, stupid) Principle:
    -   A design should be kept as simple as possible, complexity should only be 
        introduced when absolutely necessary.
        
    -   Example:
            Don't just apply designing principle just because you know them. 
            If it is required do it else leave it.

=>  Importance:
    -   Easier debugging
    -   Improved readability
    -   Better maintenance
    -   Faster development
*/
/*
=>  YAGNI(You Aren't Gonna Need It):
    -   Always implements things when you actually need them, never when you just force 
        that you might need them.
    -   Just remember, Do it if you need it other than that skip it.
    -   Example:
            Start with simple payment
        
=>  Importance:
    -   Reduced waste
    -   Simplified codebase
    -   Faster development

=>  When not to follow?
    -   Well known requirement
    -   Performance critical areas
*/