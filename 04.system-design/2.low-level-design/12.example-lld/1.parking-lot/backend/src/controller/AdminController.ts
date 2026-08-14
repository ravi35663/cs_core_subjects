import { VehicleType } from "../types/VehicleTypes";

export class AdminController{
    public addFloor(floorNumber: number): void{
        throw new Error("Not implemented yet")
    }

    public addSlot(floorNumber: number,slotType: VehicleType): void{
        throw new Error('Not implemented yet')
    }

    public updatePricing(vehicleType:VehicleType, ratePerHour: number, flatRate: number): void{
        throw new Error("Not implemented yet")
    }

    public updateFlatPricing(vehicleType:VehicleType,flatRate: number): void{
        throw new Error("Not implemented yet")
    }

    public updateHourlyPricing(vehicleType:VehicleType,ratePerHour: number): void{
        throw new Error("Not implemented yet")
    }
}

