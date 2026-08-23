import { Payment } from "../../domain/Payment";

export interface IPaymentRepository{
    save(payment:Payment): void;
    findByTicketId(tickerId: string): Payment
}