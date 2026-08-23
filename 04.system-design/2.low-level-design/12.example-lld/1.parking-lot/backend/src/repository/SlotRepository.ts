import { ParkingSlot } from "../domain/ParkingSlot";
import { ISlotRepository } from "../interfaces/repository/ISlotRepository";
import { VehicleType } from "../types/VehicleTypes";

export class SlotRepository implements ISlotRepository{
    private slots: ParkingSlot[] = [];
    save(slot: ParkingSlot): void {
        this.slots.push(slot);
    }

    findById(slotId: string): ParkingSlot {
        const slot = this.slots.find((item:ParkingSlot)=> item.id == slotId);
        if(!slot){
            throw new Error("Invalid parking slot")
        }

        return slot;
    }

    findAvailableSlot(vehicleType: VehicleType): ParkingSlot {
        const slot = this.slots.find((item: ParkingSlot) => item.slotType == vehicleType);
        if(!slot){
            throw new Error("No slot available")
        }
        return slot;
    }
}