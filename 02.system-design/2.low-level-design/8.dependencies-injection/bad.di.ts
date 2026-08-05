/*
=>  Problem:
    1) Hardcoded logic: Tightly couples OrderService with specific implementation
    2) Difficulty to test:  How to test OrderService without hitting payment
    3) Scalability Issues:  What if we want to switch from Stripe to Razorpay
*/

class OrderService{
    private inventory:InventoryService  = new InventoryService()
    private paymentService:PaymentService = new PaymentService()
    private notificationService:NotificationService = new NotificationService()


    checkout(order:Order){
        this.inventory.blockItem(order)
        this.paymentService.process(order)
        this.notificationService(order);
    }
}
class InventoryService{}
class PaymentService{}
class NotificationService{}
