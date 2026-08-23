import { VehicleType } from "../types/VehicleTypes";
import { Floor } from "../domain/Floor";
import { PricingRule } from "../domain/PricingRule";
import { PricingRuleType } from "../types/PricingRuleType";

/**
 * AdminController handles administrative operations for the parking lot
 * - Floor and slot management
 * - Pricing rule configuration
 * - Parking status monitoring
 * - Manual overrides for edge cases
 */
export class AdminController {
    constructor(
        private floorRepository: any,        // IFloorRepository
        private slotRepository: any,        // ISlotRepository
        private pricingRuleRepository: any, // IPricingRuleRepository
        private ticketService: any,         // TicketService
        private slotService: any            // SlotService
    ) {}

    // ========== FLOOR MANAGEMENT ==========
    /**
     * Add a new floor to the parking lot
     * @param floorNumber - Floor number
     */
    public addFloor(floorNumber: number): void {
        try {
            // Check if floor already exists
            const existingFloor = this.floorRepository.findByFloorNumber(floorNumber);
            if (existingFloor) {
                throw new Error(`Floor ${floorNumber} already exists`);
            }

            const floor = new Floor(
                `floor_${floorNumber}_${Date.now()}`,
                floorNumber,
                []
            );

            this.floorRepository.save(floor);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get all floors
     * @returns Array of floors
     */
    public getAllFloors(): Floor[] {
        try {
            return this.floorRepository.findAll();
        } catch (error) {
            throw error;
        }
    }

    // ========== SLOT MANAGEMENT ==========
    /**
     * Add a new slot to a specific floor
     * @param floorNumber - Floor number
     * @param slotType - Type of slot (BIKE, CAR, EV, TRUCK)
     */
    public addSlot(floorNumber: number, slotType: VehicleType): void {
        try {
            // Verify floor exists
            const floor = this.floorRepository.findByFloorNumber(floorNumber);
            if (!floor) {
                throw new Error(`Floor ${floorNumber} not found`);
            }

            // Create and save slot
            this.slotService.createAndSaveSlot(floor, slotType);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get current parking status
     * @returns Parking status with available and occupied slots
     */
    public getParkingStatus(): any {
        try {
            const allSlots = this.slotRepository.findAll();
            
            const status = {
                totalSlots: allSlots.length,
                occupiedSlots: allSlots.filter((s: any) => s.isOccupied).length,
                availableSlots: allSlots.filter((s: any) => !s.isOccupied).length,
                byType: {} as Record<VehicleType, any>
            };

            // Group by vehicle type
            for (const vehicleType of Object.values(VehicleType)) {
                const typeSlots = allSlots.filter((s: any) => s.slotType === vehicleType);
                status.byType[vehicleType as VehicleType] = {
                    total: typeSlots.length,
                    occupied: typeSlots.filter((s: any) => s.isOccupied).length,
                    available: typeSlots.filter((s: any) => !s.isOccupied).length
                };
            }

            return status;
        } catch (error) {
            throw error;
        }
    }

    // ========== PRICING MANAGEMENT ==========
    /**
     * Update pricing rule for a vehicle type (both flat and hourly rates)
     * @param vehicleType - Vehicle type
     * @param ratePerHour - Hourly rate
     * @param flatRate - Flat rate
     */
    public updatePricing(vehicleType: VehicleType, ratePerHour: number, flatRate: number, ruleType:PricingRuleType): void {
        try {
            const existingRule = this.pricingRuleRepository.findByVehicleType(vehicleType);

            if (existingRule) {
                // Update existing rule
                existingRule.ratePerHour = ratePerHour;
                existingRule.flatRate = flatRate;
                this.pricingRuleRepository.save(existingRule);
            } else {
                // Create new rule
                const rule = new PricingRule(
                    `pricing_${vehicleType}_${Date.now()}`,
                    vehicleType,
                    ratePerHour,
                    flatRate,
                    ruleType
                );
                this.pricingRuleRepository.save(rule);
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Update only the flat rate for a vehicle type
     * @param vehicleType - Vehicle type
     * @param flatRate - Flat rate
     */
    public updateFlatPricing(vehicleType: VehicleType, flatRate: number): void {
        try {
            const rule = this.pricingRuleRepository.findByVehicleType(vehicleType);

            if (!rule) {
                throw new Error(`Pricing rule for ${vehicleType} not found`);
            }

            rule.flatRate = flatRate;
            this.pricingRuleRepository.save(rule);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Update only the hourly rate for a vehicle type
     * @param vehicleType - Vehicle type
     * @param ratePerHour - Hourly rate
     */
    public updateHourlyPricing(vehicleType: VehicleType, ratePerHour: number): void {
        try {
            const rule = this.pricingRuleRepository.findByVehicleType(vehicleType);

            if (!rule) {
                throw new Error(`Pricing rule for ${vehicleType} not found`);
            }

            rule.ratePerHour = ratePerHour;
            this.pricingRuleRepository.save(rule);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get all pricing rules
     * @returns Array of pricing rules
     */
    public getAllPricingRules(): PricingRule[] {
        try {
            return this.pricingRuleRepository.findAll();
        } catch (error) {
            throw error;
        }
    }

    // ========== MANUAL OVERRIDE (For edge cases) ==========
    /**
     * Manual exit override for lost tickets, system failures, etc.
     * @param vehicleId - Vehicle ID
     * @param reason - Reason for override
     * @returns Result object with success status
     */
    public manualExitOverride(vehicleId: string, reason: string): { success: boolean; message: string } {
        try {
            // Find active ticket for the vehicle
            const activeTickets = this.ticketService.getActiveTickets();
            const ticketToRelease = activeTickets.find((t: any) => t.vehicleId === vehicleId);

            if (!ticketToRelease) {
                return {
                    success: false,
                    message: `No active ticket found for vehicle: ${vehicleId}`
                };
            }

            // Release the slot
            this.slotService.releaseSlot(ticketToRelease.slotId);

            // Deactivate the ticket
            this.ticketService.deactivateTicket(ticketToRelease.id);

            // Log the override for audit purposes
            console.log(`[ADMIN OVERRIDE] Vehicle ${vehicleId} released. Reason: ${reason}`);

            return {
                success: true,
                message: `Vehicle ${vehicleId} has been manually released from the parking lot`
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Manual override failed';
            return {
                success: false,
                message
            };
        }
    }
}

