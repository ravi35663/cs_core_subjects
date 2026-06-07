/*
=> Good SRP Example
    -   Now we separate payment processing into a PaymentService class, so each class has 
        a single responsibility.
*/

// Good SRP: Separate classes for Order and PaymentService
class Order{
    constructor(orderId,amount){
        this.orderId = orderId;
        this.amount = amount;
    }
    placeOrder(){
        console.log(`Order ${this.amount.orderId} place with amount $${this.amount}`);
    }
}
class PaymentService{
    processPayment(order){
        console.log(`Processing payment of $${order.amount} for order ${order.orderId}`);
    }
}
// Usage
const order = new Order(1,100);
const paymentService = new  PaymentService();
order.placeOrder()
paymentService.processPayment(order);