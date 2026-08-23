import { PaymentStatus } from "../types/PaymentStatus";

export class Receipt{
    constructor(
        public readonly id: string,
        public readonly ticketId: string,
        public readonly exitTime: Date,
        public readonly totalFee: number,
        public readonly paymentStatus: PaymentStatus
    ){}
}
