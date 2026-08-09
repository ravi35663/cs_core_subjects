/*
=> Open/Close Principle (OCP):
    ->  Classes should be open for extension but closed for modification.
*/

// Bad OCP: (modify existing code)
class PaymentService{
    pay(type:string){
        // We are changing code every time a new payment method is being added.
        if(type === "UPI"){}
        if(type === "CARD"){}
        if(type === "CASH"){}
    }
}

// Good OCP: (extend behavior):
interface Payment{
    pay(): void;
}

class UPIPayment implements Payment{
    pay(): void {
        console.log("UPI payment");
    }
}

class CardPayment implements Payment{
    pay(): void {
        console.log("Card payment is done");
    }
}

class CashPayment implements Payment{
    pay(): void {
        console.log("Cash payment is done");
    }
}

/*
Note:
    Add new payment → no existing code change
*/