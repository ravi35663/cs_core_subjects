import { PricingRule } from "../domain/PricingRule";
import { IPricingRuleRepository } from "../interfaces/repository/IPricingRuleRepository";
import { VehicleType } from "../types/VehicleTypes";

export class PricingRuleRepository implements IPricingRuleRepository{
    private pricingRules: PricingRule[] = [];
    save(rule: PricingRule): void {
        this.pricingRules.push(rule)
    }

    findByVehicleType(vehicleType: VehicleType): PricingRule {
        const priceRule = this.pricingRules.find((item:PricingRule) => item.vehicleType == vehicleType);
        if(!priceRule){
            throw new Error("Invalid vehicle type")
        }
        return priceRule;
    }
}