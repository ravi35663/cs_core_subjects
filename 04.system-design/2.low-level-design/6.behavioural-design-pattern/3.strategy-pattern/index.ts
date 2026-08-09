/*
=>  Strategy Pattern:
    -   Strategy pattern is behavioral design pattern that define a family of algorithms, puts each of 
        them in a separate class, and makes their objects interchangeable.
    
    -   It is about how we change the behavior of an object at runtime without changing its classes.
*/

/*
=> Instead of writing :
    if (condition)
        doA()

    else if (...)
        doB()

    else if (...)
        doC()

=> You can write separate strategies:
    1) Strategy A
    2) Strategy B
    3) Strategy C

    - Then choose any of them dynamically.
Think of like Payment methods on Amazon.
    - Credit card
    - UPI payment
    - Cash Payment
    - David card 
            ... and so on
- The checkout process doesn't care how payment is made. it simply call: paymentStrategy.pay(amount)
*/

/*
=>  When to use strategy pattern:
    -   If you have multi-interchangeable algorithms
    -   If you can to follow the open close principle (OCP)
    -   If you want to avoid if-else or switch
    -   If you want to isolate unit testing behavior-wise
    -   If you want to select behavior at runtime
*/
/*
=> Pros and Cons:
    -   Pron:                                           Cons:
    -   Support OCP                                 Can lead to many small classes
    -   Easy to add new behaviors                   Client must know about all available strategies
    -   Behavior change at runtime                  overhead of using interfaces
    -   encourages composition over inheritance     Slightly more complex than if-else
*/