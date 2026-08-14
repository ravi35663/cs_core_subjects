import { VehicleType } from "../types/VehicleTypes";
// import { VehicleType } from "../types/VehicleType";

export class ParkingSlot{
    constructor(
        public readonly id: string,
        public readonly slotType: VehicleType,
        public occupied: boolean,
        public readonly floorNumber: number
    ){}

    public getSlotType():VehicleType{
        return this.slotType;
    }

    public getId(): string{
        return this.id
    }

    public occupy(): void{
        this.occupied = true;
    }

    public release(): void{
        this.occupied = false
    }
    
    public isAvailable(): boolean{
        return !this.occupied
    }

    public getFloorNumber(): number{
        return this.floorNumber;
    }
}