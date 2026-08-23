import { Payment } from "../domain/Payment";
import { IPaymentRepository } from "../interfaces/repository/IPaymentRepository";

export class PaymentRepository implements IPaymentRepository{
    private payments: Payment[] = [];

    save(payment: Payment): void {
        this.payments.push(payment)
    }

    findByTicketId(tickerId: string): Payment {
        const payment = this.payments.find((item:Payment) => item.ticketId == tickerId);

        if(!payment){
            throw new Error("Invalid ticket id")
        }
        return payment;
    }

}