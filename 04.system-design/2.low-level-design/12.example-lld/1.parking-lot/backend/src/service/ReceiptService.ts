import { Receipt } from "../domain/Receipt";
import { Ticket } from "../domain/Ticket";
import { PaymentStatus } from "../types/PaymentStatus";

export class ReceiptService{
    generateReceipt(ticket:Ticket, fee: number, paymentSuccess:boolean): Receipt{
        const paymentStatus = paymentSuccess? PaymentStatus.SUCCESS: PaymentStatus.FAILED;
        return new Receipt(crypto.randomUUID(), ticket.id, new Date(), fee, paymentStatus);
    }
}
