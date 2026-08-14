import { VehicleType } from "../types/VehicleTypes";
import { PricingRuleType } from "../types/PricingRuleType";

export class PricingRule{
    constructor(
        public readonly id: string,
        public readonly vehicleType: VehicleType,
        public ratePerHour: number,
        public flatRate: number,
        public ruleType: PricingRuleType
    ){}

    public updateFlatRate(flatRate: number): void{
        this.flatRate = flatRate;
    }

    public updateHourlyRate(hourlyRate:number): void{
        this.ratePerHour = hourlyRate;
    }

    public updatePricing(ratePerHour: number,flatRate: number): void{
        this.flatRate = flatRate;
        this.ratePerHour = ratePerHour;
    }
}