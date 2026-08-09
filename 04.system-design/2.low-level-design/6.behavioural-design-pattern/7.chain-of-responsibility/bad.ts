/*
=>  Assume we're building a customer support system for an e-commerce platform, where users can raise 
    tickets that can be of various types.
*/

class SupportService{
    // handle request
    handleRequest(type:string){
        if(type == 'general'){
            console.log("Handled by general support")
        }else if(type == 'refund'){
            console.log("Handled by Billing Team")
        }else if(type == 'technical'){
            console.log("Handled by technical support")
        }else if(type == 'delivery'){
            console.log("Handled by Delivery team")
        }else{
            console.log("No handler available")
        }
    }
}

// Client Code:
const supportService = new SupportService();
supportService.handleRequest('general')
supportService.handleRequest('refund')
supportService.handleRequest('delivery')
supportService.handleRequest('unknown')

/*
=> Issues with above code:
    -   Violates Open-Closed Principle: Every time a new type is added, the method must be edited
    -   Monolithic code: All logic is in a single class
    -   Not flexible or Scalable: Cannot change the order of processing without modifying core logic.
*/