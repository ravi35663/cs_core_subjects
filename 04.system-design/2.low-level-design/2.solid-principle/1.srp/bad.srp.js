/*
=> Bad SRP Example:
    -   In this example, the Order class handles both order management and payment processing, violating 
        SRP.
*/

// Bad SRP: Order class handles both order and payment logic
class Order{
    constructor(orderId, amount){
        this.orderId = orderId;
        this.amount = amount;
    }
    placeOrder(){
        console.log(`Order ${this.orderId} placed with amount $${this.amount}`);
    }
    processPayment(){
        console.log(`Processing payment of $${this.amount} for order ${this.orderId}`)
    }
}

const order = new Order(1,100);
order.placeOrder();
