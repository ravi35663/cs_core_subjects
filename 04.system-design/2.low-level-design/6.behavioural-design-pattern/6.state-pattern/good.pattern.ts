// State interface:
interface OrderState{
    next(context: OrderContext):void;
    cancel(context:OrderContext):void;
    getStateName():string;
}

class OrderContext{
    private currentState: OrderState;
    constructor(){
        this.currentState = new OrderPlacedState();
    }

    setState(state:OrderState):void{
        this.currentState = state
    }

    next(){
        return this.currentState.next(this)
    }

    cancel(){
        return this.currentState.cancel(this)
    }
    getCurrentState(){
        return this.currentState.getStateName();
    }
}

// Order Placed State
class OrderPlacedState implements OrderState{
    next(context: OrderContext): void {
        context.setState(new PreparingState());
        console.log("Order is now being prepared")
    }

    cancel(context: OrderContext): void {
        context.setState(new CancelledState());
        console.log("Order has been cancelled")
    }

    getStateName(): string {
        return 'ORDER_PLACED'   
    }
}

// Preparing state
class PreparingState implements OrderState{
    next(context: OrderContext): void {
        context.setState(new OutForDeliveryState());
        console.log("Order is out for delivery");
    }

    cancel(context: OrderContext): void {
        context.setState(new CancelledState())
        console.log("Order is being cancelled")
    }

    getStateName(): string {
        return 'PREPARING'
    }
}

// Out For Delivery state:
class OutForDeliveryState implements OrderState{
    next(context: OrderContext): void {
        context.setState(new DeliveredState());
        console.log("Order has been delivered")
    }

    cancel(context: OrderContext): void {
        console.log("Order is out for delivery: cannot cancel")
    }

    getStateName(): string {
        return "OUT_FOR_DELIVERY"
    }
}

// Delivered state:
class DeliveredState implements OrderState{
    next(context: OrderContext): void {
        console.log('Order is already delivered')
    }

    cancel(context: OrderContext): void {
        console.log("Cannot cancel a delivered order")
    }

    getStateName(): string {
        return 'DELIVERED'
    }
}

// Cancelled State:
class CancelledState implements OrderState{
    next(context: OrderContext): void {
        console.log("Cancelled order cannot move to next state")
    }

    cancel(context: OrderContext): void {
        console.log("Order is already cancelled")
    }

    getStateName(): string {
        return 'CANCELLED'
    }
}

// Client Code:
const order = new OrderContext();
console.log("Current state is: ",order.getCurrentState());

order.next() // ORDER_PLACED -> PREPARING
order.next() // PREPARING -> OUT_FOR_DELIVERY
order.cancel() // Cannot cancel
order.next() // OUT_FOR_DELIVERY -> DELIVERED
order.cancel() // Cannot cancel

console.log("Final State: ",order.getCurrentState())
