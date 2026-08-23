import { IPaymentGatewayAdapter } from "../interfaces/payment/IPaymentGatewayAdapter";

export class StripeAdapter implements IPaymentGatewayAdapter{
    pay(ticketId: string, amount: number): boolean {
        console.log(
            `Processing Stripe payment for ticket ${ticketId}, amount: ${amount}`
        );

        // Dummy implementation
        return true
    }
}