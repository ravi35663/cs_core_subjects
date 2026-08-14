import { Ticket } from "../domain/Ticket";
import { IPricingRuleRepository } from "../interfaces/repository/IPricingRuleRepository";
import { ISlotRepository } from "../interfaces/repository/ISlotRepository";

export class PricingService{
    constructor(
        private readonly pricingRuleRepository: IPricingRuleRepository,
        private readonly slotRepository: ISlotRepository
    ){}

    calculateFee(ticket: Ticket): number{
        const slot = this.slotRepository.findById(ticket.slotId);
        if(!slot){
            throw new Error("Slot not found for ticket");
        }

        const pricingRule = this.pricingRuleRepository.findByVehicleType(slot.slotType);
        if(!pricingRule){
            throw new Error(`Pricing rule is not found for vehicle type: ${slot.slotType}`);
        }

        const currentTime = new Date();
        const durationInMilliseconds = currentTime.getTime() - ticket.entryTime.getTime();
        const durationInHours = Math.ceil(durationInMilliseconds/ (1000 * 60 * 60));
        const hourlyFee = durationInHours * pricingRule.ratePerHour;
        const minFee = Math.min(hourlyFee, pricingRule.flatRate);
        return minFee;
    }
}
