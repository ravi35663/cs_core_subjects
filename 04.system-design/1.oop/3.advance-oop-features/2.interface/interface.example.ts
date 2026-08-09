/*
You are required to design an interface PaymentGateway that defines a common method 
for processing payments. 
Implement two classes, CreditCardPayment and UPIPayment, which provide specific 
implementations of the processPayment() method. 
Use polymorphism to demonstrate how different payment methods can be processed through 
the same interface.

Interface PaymentGateway :
Abstract Method processPayment( double amount ) : This method processes a payment of the specifies amount.

Implementing classes :
CreditCardPayment :
Method :
processPayment( double amount ) : Implements to print "Processing credit card payment of amount".

UPIPayment
Method :
processPayment( double amount ) : Implements to print "Processing UPI payment of amount".

Refer the sample input example to understand about the output format.
Refer the commented code on IDE for output statements.
*/

interface PaymentGateway{
    processPayment(amount: Number): void;
}

class CreditCardPayment implements PaymentGateway{
    processPayment(amount: Number):void{
        console.log(`Processing credit card payment of ${amount}`)
    }
}

class UPIPayment implements PaymentGateway{
    processPayment(amount: Number): void {
        console.log(`Processing UPI payment of ${amount}`)
    }
}