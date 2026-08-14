export interface IPaymentGatewayAdapter{
    pay(ticketId: string, amount: number): boolean;
}