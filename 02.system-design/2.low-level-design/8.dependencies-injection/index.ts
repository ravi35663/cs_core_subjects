/*
=> Dependencies Injections:
    -   Dependencies injection is design pattern in which an object receives its dependencies from an 
        external source rather than creating them itself.
    -   In simple term: Don't new the dependencies, inject it.
*/

/*
=> When  DI is not needed:
    -   Tiny classes with zero dependencies
    -   Static utility classes
    -   One off scripts or tools
*/

/*
=> When to use DI:
    Symptoms:                                               Fix with DI:
        -   Classes new for internal collaborations         -   Constructor Injection   
        -   Cannot mock services in test                    -   Inject dependencies via interface
        -   Adding features break old code                  -   Use abstraction and inject
        -   Too many if/switch for service type             -   Inject Strategy implementation

-> Do not do manual DI use frameworks like Nest.js (DI)
*/