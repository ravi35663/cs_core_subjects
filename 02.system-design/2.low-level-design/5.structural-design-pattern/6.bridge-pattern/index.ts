/*
=>  Bridge Pattern:
    -   Bridge Pattern is structural design pattern.
    -   Bridge Pattern separates abstraction from implementation so both can evolve 
        independently.
        
    -   Bridge Pattern = Decouple "What" from "How"
*/
/*
=> Why do we use Bridge Pattern:
    - We use it when:
        - Class explosion is happening
        - Multiple dimensions of variation exist
        - We want runtime flexibility
        - We want composition over inheritance.
*/
/*
=>  Problem Bridge Pattern Solves:
    - Suppose we have 
    - VideoType:  
        - Netflix Video
        - Prime Video
        - YouTube Video
    - Video Quality:
        - HD
        - UltraHD
        - 4K
    - If we combine them using inheritance, they become:
        - NetflixHD
        - NetflixUltraHD
        - Netflix4K
        - YouTubeHD
        - YouTubeUltraHD
        - Youtube4K
        - PrimeHD
        - PrimeUltraHD
        - Prime4K
            .... So here class Explosion and this problem is known as Cartesian problem
    - If we add tomorrow:
        - 8K tomorrow 
        - Disney+ tomorrow

    - Then class become like:
        - NetflixHD
        - NetflixUltraHD
        - Netflix4K
        - Netflix8K
        - YouTubeHD
        - YouTubeUltraHD
        - Youtube4K
        - Youtube8K
            ........and so on
            and system become unmaintainable.
*/
/*
=>  Real World Examples of Bridge Pattern:
    System          |       Abstraction:        | Implementation
    Remote Control  |       Remote              |   TV Brands
    Payment Gateway |       Payment type        |   Bank API
    Messaging       |       Message             |   Sender (Email/sms)
    UI Framework    |       Button              |   Render Engine
    Video Streaming |       Platform            |     Quality Engine 
*/
/*
=> Real Example (Netflix Internally):
    Device Type     --> Mobile/TV/Laptop
    Quality Engine  --> HD/ HDR/ 4K/ Dolby Vision
    Codec   -> H264 / AV1

-   They cannot create classes for every combination.
*/