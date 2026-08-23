export class Ticket{
    constructor(
        public readonly id: string,
        public readonly vehicleId: string,
        public readonly slotId: string,
        public readonly entryTime: Date,
        public active: boolean = true
    ){}

    public deactivate(): void{
        this.active = false
    }

    public isActive(): boolean{
        return this.active;
    }
}