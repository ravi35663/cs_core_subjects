import { ParkingSlot } from "../domain/ParkingSlot";
import { ISlotRepository } from "../interfaces/repository/ISlotRepository";
import { VehicleType } from "../types/VehicleTypes";

export class SlotService{
    constructor(
        private readonly slotRepository: ISlotRepository
    ){}

    allocateSlot(vehicleType: VehicleType): ParkingSlot{
        const slot = this.slotRepository.findAvailableSlot(vehicleType);
        if(!slot){
            throw new Error(`No parking slot available for this vehicle Type : ${vehicleType}`);
        }
        slot.occupy();
        this.slotRepository.save(slot);
        return slot;
    }

    releaseSlot(slotId:string): void{
        const slot  = this.slotRepository.findById(slotId);
        if(!slot){
            throw new Error("Invalid slot")
        }
        slot.release();
        this.slotRepository.save(slot);
    }
}
