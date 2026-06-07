/*
=> Adapter Pattern:
    -   It is a structural design pattern that allows two incompatible interfaces to 
        work with each other. It is acts as a bridge between the interface a client 
        expects and the actual interface of an existing class.

    -   Adapter Pattern converts one interface into another interface that the client 
        expects.

=> In simple words:
    - When two systems don’t match: Your Code and Payment SDK
    - Adapter acts like a translator: Your code - Adaptor - Payment SDK
*/

/*
=> Actual Meaning:
    - Example: Each payment gateway has different APIs:
        | Gateway  | Method        |
        | -------- | ------------- |
        | Razorpay | payINR()      |
        | PayPal   | sendPayment() |
        | Stripe   | makeCharge()  |

    - But you want pay() method for each gateway to implement. Adapter makes this possible.
*/