import { PricingRule } from "../../domain/PricingRule";
import { VehicleType } from "../../types/VehicleTypes";

export interface IPricingRuleRepository{
    save(rule: PricingRule): void;
    findByVehicleType(vehicleType: VehicleType):PricingRule
}