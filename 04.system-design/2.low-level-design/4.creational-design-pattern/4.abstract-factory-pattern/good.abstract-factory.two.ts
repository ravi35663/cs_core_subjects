// Payment gateway interface:
interface PaymentGateway {
  pay(amount: number): void;
}


// Concrete gateway:
// For india:
class RazorpayPayment implements PaymentGateway {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via Razorpay`);
  }
}

class PaytmPayment implements PaymentGateway {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via Paytm`);
  }
}

// For USA:
class StripePayment implements PaymentGateway {
  pay(amount: number) {
    console.log(`Paid $${amount} via Stripe`);
  }
}

class PayPalPayment implements PaymentGateway {
  pay(amount: number) {
    console.log(`Paid $${amount} via PayPal`);
  }
}

// Invoice interface:
interface Invoice {
  generate(amount: number): void;
}

// Concrete interface:
class GSTInvoice implements Invoice {
  generate(amount: number) {
    console.log(`GST Invoice for ₹${amount}`);
  }
}

class TaxInvoice implements Invoice {
  generate(amount: number) {
    console.log(`Tax Invoice for $${amount}`);
  }
}

// Gateway Selector (Factory Inside Factory)
interface GatewaySelector{
    getGateway(type:string):PaymentGateway;
}


// In india:
class IndiaGatewaySelector implements GatewaySelector{
    getGateway(type: string): PaymentGateway {
        switch(type){
            case "razorpay":
                return new RazorpayPayment();
            case "paytm":
                return new PaytmPayment();
            default:
                throw new Error("Invalid gateway type")
        }
    }
}
// Fur USA:
class USAGatewaySelector implements GatewaySelector{
    getGateway(type: string): PaymentGateway {
        switch(type){
            case "paypal":
                return new PayPalPayment();
            case "stripe":
                return new StripePayment();
            default:
                throw new Error("Invalid gateway type")
        }
    }
}

// Country Abstract Factory:
interface CountryFactory{
    gatewaySelector():GatewaySelector;
    createInvoice():Invoice;
}

// Create india factory:
class IndiaFactory implements CountryFactory{
    gatewaySelector(): GatewaySelector {
        return new IndiaGatewaySelector();
    }
    createInvoice(): Invoice {
        return new GSTInvoice();
    }
}

// Create USA factory
class USAFactory implements CountryFactory{
    gatewaySelector(): GatewaySelector {
        return new USAGatewaySelector()
    }
    createInvoice(): Invoice {
        return new TaxInvoice()
    }
}

// Order Service:
class OrderService{
    private gatewaySelector:GatewaySelector;
    private invoice:Invoice;

    constructor(factory:CountryFactory){
        this.gatewaySelector = factory.gatewaySelector();
        this.invoice = factory.createInvoice();
    }

    processOrder(amount:number,gatewayType:string){
        const gateway = this.gatewaySelector.getGateway(gatewayType);
        gateway.pay(amount);
        this.invoice.generate(amount);
    }
}


// India + Razorpay
const indiaOrder = new OrderService(new IndiaFactory());
indiaOrder.processOrder(1000, "razorpay");

// India + Paytm
indiaOrder.processOrder(500, "paytm");

// USA + PayPal
const usaOrder = new OrderService(new USAFactory());
usaOrder.processOrder(100, "paypal");