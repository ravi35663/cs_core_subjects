import { Floor } from "../domain/Floor";
import { ParkingSlot } from "../domain/ParkingSlot";
import { IFloorRepository } from "../interfaces/repository/IFloorRepository";
import { IPricingRuleRepository } from "../interfaces/repository/IPricingRuleRepository";
import { ISlotRepository } from "../interfaces/repository/ISlotRepository";
import { VehicleType } from "../types/VehicleTypes";
import { PricingRule } from "../domain/PricingRule";
import { PricingRuleType } from "../types/PricingRuleType";

export class AdminService{
    constructor(
        private readonly floorRepository:IFloorRepository,
        private readonly slotRepository: ISlotRepository,
        private readonly pricingRuleRepository: IPricingRuleRepository
    ){}

    addFloor(floorNumber: number): void{
        const existingFloor = this.floorRepository.findByFloorNumber(floorNumber);
        if(existingFloor){
            throw new Error(`Floor already exists`)
        }
        const floor = new Floor(crypto.randomUUID(), floorNumber, []);
        this.floorRepository.save(floor);
    }

    addSlot(floorNumber:number, slotType: VehicleType): void{
        const floor = this.floorRepository.findByFloorNumber(floorNumber);
        if(!floor){
            throw new Error("Floor not found");
        }

        const slot = new ParkingSlot(crypto.randomUUID(), slotType, false, floorNumber);
        floor.addSlot(slot);
        this.slotRepository.save(slot);
    }

    updatePricing(vehicleType: VehicleType, ratePerHour: number, flatRate: number): void {
        try {
            const rule = this.pricingRuleRepository.findByVehicleType(vehicleType);
            rule.updatePricing(ratePerHour, flatRate);
        } catch (err) {
            const newRule = new PricingRule(
                crypto.randomUUID(),
                vehicleType,
                ratePerHour,
                flatRate,
                PricingRuleType.HOURLY
            );

            this.pricingRuleRepository.save(newRule);
        }
    }

    updateFlatPricing(vehicleType: VehicleType, flatRate: number): void {
        try {
            const rule = this.pricingRuleRepository.findByVehicleType(vehicleType);
            rule.updateFlatRate(flatRate);
        } catch (err) {
            throw new Error("Pricing rule not found");
        }
    }

    updateHourlyPricing(vehicleType: VehicleType, ratePerHour: number): void {
        try {
            const rule = this.pricingRuleRepository.findByVehicleType(vehicleType);
            rule.updateHourlyRate(ratePerHour);
        } catch (err) {
            throw new Error("Pricing rule not found");
        }
    }
}