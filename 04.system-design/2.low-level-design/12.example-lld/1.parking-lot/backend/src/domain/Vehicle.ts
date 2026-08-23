import { VehicleType } from "../types/VehicleTypes";

export class Vehicle{

    /*
        - Why readonly: id, licensePlat and vehicleType should not change after creation that is why readonly
    */
    constructor(
        public readonly id: string,
        public readonly licensePlate: string,
        public readonly vehicleType: VehicleType
    ){}

    public getId():string{
        return this.id
    }

    public getVehicleType(): VehicleType{
        return this.vehicleType
    }
}