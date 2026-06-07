/*
=> Problem We Want to Solve with Adaptor pattern:
    - One common payment interface
    - No if/else
    - No SDK dependency
    - Easy extension
    - Clean code
*/

// Target Interface (What Our App Wants)
interface PaymentGateway{
    pay(amount:number):void;
}

// Existing SDKs (Unchanged): We don’t touch these
class Razorpay {
  payINR(amount: number) {
    console.log(`Paid ₹${amount} via Razorpay`);
  }
}

class PayPal {
  sendPayment(amount: number) {
    console.log(`Paid $${amount} via PayPal`);
  }
}

class Stripe {
  makeCharge(amount: number) {
    console.log(`Charged $${amount} via Stripe`);
  }
}

// Create Adapters (MAIN PART)
// Razorpay Adapter
class RazorpayAdaptor implements PaymentGateway{
    private razorpay:Razorpay;
    constructor(){
        this.razorpay = new Razorpay();
    }

    pay(amount: number): void {
        this.razorpay.payINR(amount);
    }
}

// Paypal Adaptor
class PaypalAdaptor implements PaymentGateway{
    private paypal:PayPal;
    constructor(){
        this.paypal = new PayPal();
    }
    pay(amount: number): void {
        this.paypal.sendPayment(amount);
    }
}

// Stripe Adaptor:
class StripeAdaptor implements PaymentGateway{
    private stripe:Stripe
    constructor(){
        this.stripe = new Stripe();
    }
    pay(amount: number): void {
        this.stripe.makeCharge(amount);
    }
}

// Client Code:
class PaymentService {
    constructor(private gateway:PaymentGateway){}

    process(amount:number){
        this.gateway.pay(amount)
    }
}

const paypal = new PaymentService(new PaypalAdaptor());
paypal.process(100);

const stripe = new PaymentService(new StripeAdaptor());
stripe.process(3990)

/*
=> WHY THIS IS GOOD DESIGN:
    1. No if/else logic → Cleaner and scalable code.
    2. Loose coupling → Business logic depends on interface, not SDKs.
    3. Easy extension → Add new gateway without modifying existing code.
    4. Isolated changes → SDK updates affect only its adapter.
    5. Better testing → Can inject mock payment implementations.
    6. Follows Open/Closed Principle → Open for extension, closed for modification.
    7. Maintains Single Responsibility → Each adapter handles only translation logic.
*/