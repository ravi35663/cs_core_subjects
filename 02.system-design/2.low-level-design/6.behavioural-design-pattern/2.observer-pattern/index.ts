/*
=>  Observer Design Pattern:
    -   It is behavioral design pattern that defines one-to-many dependency between objects 
        so that when one object changes state, all its dependents are notified and updated 
        accordingly.

    -   Observer patterns defined one-to-many dependency, all its dependents are 
        automatically notified
    -   When one object changes state, all its dependents are automatically notified.
*/

/*
=> When do we use Observer pattern:
    - A change in one object should automatically notify other
    - You want to decouple the subject from the observers.
    - Dynamic subscription/un-subscription
*/
/*
=> When to avoid it:
    - You have too many observers (Celebrity goes live with 10M followers):Use event queues, pub-sub system
    - Tight control over notification timing is required: (Use message broker to publish events)

Note:   It work really well with small number of observers, but to scale, we need to move 
        to event driven architecture.
*/

/*
=> Pros and cons:
    Pros:                                                   Cons:
    Promotes loose coupling, observers and subject          Unexpected update sequences
    are decoupled, they interact via an interface only      Performance issues on scale

    Open for extension                                      Memory leaks

    Dynamic subscription                                    Difficult debugging

    encourage reusability                                   Tightly timing coupling

*/