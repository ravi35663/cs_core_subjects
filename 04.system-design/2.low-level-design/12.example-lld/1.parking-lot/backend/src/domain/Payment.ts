import { PaymentGateway } from "../types/PaymentGateway";
import { PaymentStatus } from "../types/PaymentStatus";

export class Payment{
    constructor(
        public readonly id: string,
        public readonly ticketId: string,
        public readonly amount: number,
        public readonly gateway: PaymentGateway,
        public status: PaymentStatus = PaymentStatus.PENDING
    ){}

    public markSuccess(): void{
        this.status = PaymentStatus.SUCCESS
    }

    public markFailed(): void{
        this.status = PaymentStatus.FAILED;
    }

    public isSuccessful(): boolean{
        return this.status == PaymentStatus.SUCCESS;
    }
}
