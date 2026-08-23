import { IPaymentGatewayAdapter } from "../interfaces/payment/IPaymentGatewayAdapter";

export class RazorpayAdapter implements IPaymentGatewayAdapter{
    pay(ticketId: string, amount: number): boolean {
        console.log("Processing razorpay payment for ticket: ",ticketId,amount)
        return true;
    }
}
