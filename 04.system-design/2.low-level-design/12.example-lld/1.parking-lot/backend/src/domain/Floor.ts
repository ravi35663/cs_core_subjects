import { ParkingSlot } from "./ParkingSlot";
export class Floor{
    constructor(
        public readonly id: string,
        public readonly floorNumber: number,
        public readonly slots: ParkingSlot[]
    ){}

    public addSlot(slot: ParkingSlot): void{
        this.slots.push(slot);
    }

    public getSlots():ParkingSlot[]{
        return this.slots;
    }
}