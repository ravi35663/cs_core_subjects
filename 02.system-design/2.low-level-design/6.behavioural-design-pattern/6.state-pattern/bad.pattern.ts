/*
=> Let's assume we are building a food delivery app, we need to manage different states of an order.
*/

class Order{
    private state: string;
    constructor(){
        this.state = 'ORDER_PLACED';
    }

    // Cancel Order
    cancelOrder(){
        if(this.state == 'ORDER_PLACED' || this.state == 'PREPARING'){
            this.state = 'CANCELLED';
            console.log("Order has been cancelled")
        }else{
            console.log("Cannot cancel the order now")
        }
    }

    // Move to next state:
    nextState(){
        if(this.state == 'ORDER_PLACED'){
            this.state = 'PREPARING'
        }else if(this.state == 'PREPARING'){
            this.state = 'OUT_FOR_DELIVERY'
        }else if(this.state == 'OUT_FOR_DELIVERY'){
            this.state = 'DELIVERED'
        }else{
            console.log(`No next state from: ${this.state}`)
            return;
        }
        console.log("Order moved to: ",this.state)
    }

    // Getter:
    getState():string{
        return this.state;
    }
}

// Client code:
const order = new Order();
// initial state
console.log("Initial state: ",order.getState())
// Moving through states:
order.nextState() // ORDER_PLACED -> PREPARING
order.nextState() // PREPARING ->   OUT_FOR_DELIVERY
order.nextState() // OUT_FOR_DELIVERY -> DELIVERED


// Attempt to cancel:
order.cancelOrder() // Not Allowed

// Final State:
console.log("FInal state is: ",order.getState())