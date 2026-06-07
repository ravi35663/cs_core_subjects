// concrete classes:
// Payment gateways: 

interface Payment{
    pay(amount:number):void;
}

interface Tax{
    generate(amount:number):void;
}

class RazorpayPayment implements Payment{
    pay(amount:number){
        console.log("Amount : ",amount," is paid");
    }
}

class StripePayment implements Payment{
    pay(amount:number){
        console.log("Payment made with stripe: ",amount);
    }
}


// Invoice: gen
class GSTInvoice implements Tax{
    generate(amount:number){
        console.log("Generate GST invoice: ",amount)
    }
}

class TaxInvoice implements Tax{
    generate(amount:number){
        console.log("Generate tax invoice: ",amount);
    }
}

// Client code:
class OrderService{
    private payment:Payment;
    private invoice:Tax;

    constructor(county:string){
        if(county == 'india'){
            this.payment = new RazorpayPayment();
            this.invoice = new GSTInvoice();
        }else if(county == 'usa'){
            this.payment = new StripePayment();
            this.invoice = new TaxInvoice();
        }
    }

    processOrder(amount:number){
        this.payment.pay(amount);
        this.invoice.generate(amount);
    }
}


const order1 = new OrderService("india")
order1.processOrder(100);

const order2 = new OrderService("usa")
order2.processOrder(2000);

/*
=> Problems here are:
    if new country introduced then we have to make changes in OrderService
    1) Too Many if/else:
        if 'uk' comes the we have to make changes in OrderService again.
        
    2) Tight Coupling:
        OrderService knows:
            RazorpayPayment'
            StripePayment
            GSTInvoice
            TaxInvoice
        -   Business logic is mixed with creation logic
        -   Business logic is to make payment of amount.
        -   Creating instances of class is creational logic
    3) No Family Guarantee:
        Bug-prone code::
            this.payment = new RazorpayPayment();
            this.invoice = new TaxInvoice(); // This is wrong combination.
    4) Hard to Test
    5)  Violates Open/Closed Principle and SRP as well by combining two logic together that is creational and business.
*/