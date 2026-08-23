import { ParkingSlot } from "../../domain/ParkingSlot";
import { VehicleType } from "../../types/VehicleTypes";

export interface ISlotRepository{
    save(slot: ParkingSlot): void;
    findById(slotId: string): ParkingSlot;
    findAvailableSlot(vehicleType: VehicleType): ParkingSlot;
}