/*
=> Good Example (Follows DIP)
    ->  Introduce an abstraction (e.g., PaymentMethod) to decouple the PaymentProcessor class from the 
        specific payment methods.
*/

// Abstraction means no implementation of the method only body would be there but there will be no implementation
class PaymentMethod{
    processPayment(amount){
        throw new Error('Throw some error if this method is not implemented')
    }
}

class PayPal extends PaymentMethod{
    processPayment(amount){
        console.log("Processing payment with paypal",amount);
    }
}

class Stripe extends PaymentMethod{
    processPayment(amount){
        console.log("Processing payment with stripe",amount)
    }
}

// High-level module depends on abstraction
class PaymentProcessor{
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    process(amount){
        this.paymentMethod.processPayment(amount);
    }
}

const payPal = new PayPal()
const stripe = new Stripe()

const processPayment = new PaymentProcessor(payPal)
processPayment.process(100) // Payment with paypal

const processPaymentStripe = new PaymentProcessor(stripe);
processPaymentStripe.process(200) // Payment with stripe

/*
=> Advantages:
    ->  The PaymentProcessor class depends on the abstraction (PaymentMethod), not the concrete 
        implementations (PayPal, Stripe).

    ->  Adding new payment methods (e.g., Razorpay) doesn’t require changes to the PaymentProcessor class, 
        adhering to the Open/Closed Principle.
        
    ->  Code is more flexible, testable, and maintainable.

Note: By following DIP, the system becomes modular and easily extensible.
*/


