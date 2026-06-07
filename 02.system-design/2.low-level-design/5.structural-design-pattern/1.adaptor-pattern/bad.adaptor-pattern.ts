// Razorpay SDK
class Razorpay{
    payINR(amount:number){
        console.log(`Paid ${amount} via razorpay`)
    }
}

class Paypal{
    sendPayment(amount:number){
        console.log(`Paid ${amount} via paypal`)
    }
}

class Stripe{
    makeCharge(amount:number){
        console.log(`Paid ${amount} via stripe`)
    }
}

// Client code:
class PaymentService{
    processPayment(gateway:string,amount:number){
        if(gateway == 'razorpay'){
            const r = new Razorpay();
            r.payINR(amount);
        }else if(gateway == 'stripe'){
            const s = new Stripe();
            s.makeCharge(amount)
        }else if(gateway == 'paypal'){
            const p = new Paypal();
            p.sendPayment(amount);
        }
    }
}

const service = new PaymentService();

service.processPayment("razorpay", 1000);
service.processPayment("paypal", 50);


/*
=> Problems with this implementation:
    -   Too Many if/else
    -   Tight Coupling: Business logic depends on SDKs
            - Razorpay
            - PayPal
            - Stripe
    -   Hard to Maintain:
        - If PayPal changes API: sendPayment → sendMoney
        -   You must change everywhere
    -   No Common Interface:
        -   Each gateway is different.
*/