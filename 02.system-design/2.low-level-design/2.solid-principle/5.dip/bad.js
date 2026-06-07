/*
==> Bad Example (Violates DIP)
    ->  Here, the high-level 'PaymentProcessor' class directly depends on the low-level 
        implementation of PayPal.
*/

class PayPal{
    processPayment(amount){
        console.log(`Processing payment of $${amount} via PayPal.`);
    }
}

class PaymentProcessor{
    constructor(){
        this.payPal = new PayPal();
    }
    process(amount){
        this.payPal.processPayment(amount); // Tightly coupled to PayPal
    }
}

// Usage:
const paymentProcessor = new PaymentProcessor();
paymentProcessor.process(100); // 
/*
==> Problems:
1)  The PaymentProcessor class is tightly coupled to the PayPal implementation.
2)  Adding a new payment method (e.g., Stripe) would require modifying the PaymentProcessor 
    class, violating the Open/Closed Principle.
*/  