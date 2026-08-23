import { IPaymentGatewayAdapter } from "../interfaces/payment/IPaymentGatewayAdapter";

export class PaymentService{
    constructor(
        private readonly paymentGateway: IPaymentGatewayAdapter
    ){}

    processPayment(ticketId: string, amount: number): boolean{
        return this.paymentGateway.pay(ticketId, amount)
    }
}
