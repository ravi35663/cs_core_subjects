/*
=> Proxy Pattern:
    -   Proxy pattern is a structural pattern
    -   Provides a surrogate or placeholder for another object to central access.
    -   Think of it like a security guard who control access to the real VIP.
    -   Proxy pattern is very important for performance, security and system design.
    -   Proxy Pattern = A class that controls access to another real object
*/
/*
=> Analogy:
    -   In proxy pattern you don't talk directly to the real object.
    -   You only talk to middleman (Proxy):
    -   That Middleman decide:
        -   Should i allow
        -   Should i cache
        -   Should i log
        -   Should i delay
        -   Should i block 
*/
/*
=> Key Ideas:
    -   Instead of interacting with the real object directly, clients interact with a 
        proxy that acts on behalf of the real object.

    -   Example:
        - Firewall, filtering, caching, privacy and security, protection layer and so on..
*/
/*
=>  Real-Life Example:
    -   Think of ATM:
        You --> ATM --> Bank Server
    -   ATM =  Proxy & Bank = Real Object
    -   Here In ATM case you never talk directly to bank server and happens in software.
*/
/*
=>  Why Do We Use Proxy Pattern:
    -   We use proxy when:
        - Real object is expensive
        - Needs Security
        - Needs caching
        - Needs lazy loading
        - Needs logging
    -  So, proxy adds extra behavior without changing real class.
*/
/*
=> Benefits of Proxy Pattern:
    -   Performance:    ->  Caching/lazy load
    -   Security:       ->  Access Control
    -   Separation:     ->  Clear responsibilities
    -   Maintainable:   ->  No code duplication
    -   Extendable:     ->  Easy to add features 
*/
/*
=> Types of Proxies:
    -   Virtual proxy : Lazy Loading -> Control access to resource that is expensive to create
    -   Protection Proxy : Security -> Control access based on permissions
    -   Caching Proxy: Cache result -> 
    -   Logging Proxy       ->  Track usage
    -   Remote Proxy        ->  Network call -> Controls access to an object located remotely
*/
/*
=>  Example:
    Video downloader: 
    We have:
        A class that downloads video from server
        Download is slow and costly
        So we put proxy in between

    Example:
        - API clients
        - DB connections
        - Video streaming
        - File systems
        - Microservices
*/