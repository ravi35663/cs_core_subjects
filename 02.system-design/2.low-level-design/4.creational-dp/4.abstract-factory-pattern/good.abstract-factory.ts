/*
=> WHAT PROBLEM ARE WE SOLVING using abstract factory pattern:
    - No if/else
    - No tight coupling
    - Country-based consistency
    - Easy extension
    - Clean architecture
*/

// Create payment interface and invoice interface
interface PaymentGateway{
    pay(amount:number):void;
}

interface Invoice{
    generate(amount:number):void;
}

// Concrete Products: 
// In india
class RazorpayPayment implements PaymentGateway{
    pay(amount: unknown): void {
        console.log("Payment done with Razorpay : ",amount)    
    }
}
class GSTInvoice implements Invoice{
    generate(amount: number): void {
        console.log("Generate invoice: ",amount);
    }
}

// In USA:
class StripePayment implements PaymentGateway{
    pay(amount: number): void {
        console.log("Payment done with Stripe: ",amount);
    }
}


class TaxInvoice implements Invoice{
    generate(amount: number): void {
        console.log("Generate invoice: ",amount);
    }
}

// Abstract factory interface: (main party)
interface CountryFactory{ // Every country must provide payment gateway and invoice:
    createPaymentGateway():PaymentGateway;
    createInvoice():Invoice
}

// Concrete Factories:
class IndianFactory implements CountryFactory{
    createPaymentGateway(): PaymentGateway {
        return new RazorpayPayment();    
    }
    createInvoice(): Invoice {
        return new GSTInvoice();
    }
}

// Concrete USA factory:
class USAFactory implements CountryFactory{
    createPaymentGateway(): PaymentGateway {
        return new StripePayment();
    }
    createInvoice(): Invoice {
        return new TaxInvoice();
    }
}


// Client Code: order service:
class OrderService{
    private payment:PaymentGateway;
    private invoice:Invoice;

    constructor(countryFactory:CountryFactory){
        this.payment = countryFactory.createPaymentGateway();
        this.invoice = countryFactory.createInvoice();
    }

    processOrder(amount:number){
        this.payment.pay(amount);
        this.invoice.generate(amount);
    }
}


// India
const indiaFactory = new IndianFactory();
const indiaOrder = new OrderService(indiaFactory);
indiaOrder.processOrder(1000);

// USA
const usaFactory = new USAFactory();
const usaOrder = new OrderService(usaFactory);
usaOrder.processOrder(50);

// Easy extension:
class UKPayment implements PaymentGateway{
    pay(amount: number): void {
        
    }
}
class VATInvoice implements Invoice{
    generate(amount: number): void {
        
    }
}

class UKFactory implements CountryFactory {
  createPaymentGateway() {
    return new UKPayment();
  }

  createInvoice() {
    return new VATInvoice();
  }
}

/*
=> You only have to do three things:   
    - Create interface
    - Create class and implement interface
    - Create Factory
    - Service should be common
*/ 


/*
    Easy testing:
*/ 

class TestFactory implements CountryFactory {
  createPaymentGateway() {
    return new FakePayment();
  }

  createInvoice() {
    return new FakeInvoice();
  }
}