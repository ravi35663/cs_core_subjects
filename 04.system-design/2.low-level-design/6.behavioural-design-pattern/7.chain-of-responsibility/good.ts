// Abstract handler:
abstract class SupportHandler{
    protected nextHandler: SupportHandler | null = null;
    setNextHandler(nextHandler:SupportHandler){
        this.nextHandler = nextHandler;
    }

    abstract handlerRequest(requestType: string): void;
}

// General Support 
class GeneralSupport extends SupportHandler{
    handlerRequest(requestType: string): void {
        if(requestType == 'general'){
            console.log("GeneralSupport: Handling general query");
        }else if(this.nextHandler){
            this.nextHandler.handlerRequest(requestType);
        }
    }
}

// Billing support:
class BillingSupport extends SupportHandler{
    handlerRequest(requestType: string): void {
        if(requestType == 'refund'){
            console.log("Billing Support: handle refund request")
        }else if(this.nextHandler){
            this.nextHandler.handlerRequest(requestType)
        }
    }
}

// Technical Support:
class TechnicalSupport extends SupportHandler{
    handlerRequest(requestType: string): void {
        if(requestType == 'technical'){
            console.log("Technical support: handling technical issue")
        }else if(this.nextHandler){
            this.nextHandler.handlerRequest(requestType)
        }
    }
}

// Technical Support:
class DeliverySupport extends SupportHandler{
    handlerRequest(requestType: string): void {
        if(requestType == 'delivery'){
            console.log("Delivery support: handling delivery support")
        }else if(this.nextHandler){
            this.nextHandler.handlerRequest(requestType)
        }
    }
}

// Client code:
const general = new GeneralSupport();
const billing = new BillingSupport();
const technical = new TechnicalSupport();
const delivery = new DeliverySupport();

// Setting up the chain: General -> Billing -> Technical -> Delivery
general.setNextHandler(billing)
billing.setNextHandler(technical);
technical.setNextHandler(delivery);


// Testing:
general.handlerRequest('refund') // Billing Support: Handling refund
general.handlerRequest('delivery') // Delivery Support: Handling delivery issue
general.handlerRequest('unknown') // Delivery Support: No handler found for the request
