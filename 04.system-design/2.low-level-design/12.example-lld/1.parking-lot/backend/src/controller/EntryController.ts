import { EntryResult } from "../dto/EntryResult";
import { VehicleType } from "../types/VehicleTypes";

export class EntryController{
    public enterVehicle(licensePlate: string, vehicleType: VehicleType): EntryResult{
        // Will Entry/VehicleService
        throw new Error("Not implemented")
    }
}

/*
HTTP Request
     ↓
EntryController
     ↓
Entry business logic
     ↓
EntryResult
*/ 