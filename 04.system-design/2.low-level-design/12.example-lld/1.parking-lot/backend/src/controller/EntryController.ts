import { EntryResult } from "../dto/EntryResult";
import { VehicleType } from "../types/VehicleTypes";
import { Ticket } from "../domain/Ticket";
import { TicketService } from "../service/TicketService";
import { SlotService } from "../service/SlotService";

/**
 * EntryController handles vehicle entry into the parking lot
 * 
 * Flow:
 *   HTTP Request
 *        ↓
 *   EntryController
 *        ↓
 *   TicketService.generateTicket()
 *        ↓
 *   SlotService.allocateSlot()
 *        ↓
 *   EntryResult { success, ticket, message }
 */
export class EntryController {
    constructor(
        private ticketService: TicketService, // TicketService
        private slotService: SlotService    // SlotService
    ) {}

    /**
     * Process vehicle entry - allocates a slot and generates a ticket
     * @param licensePlate - Vehicle license plate
     * @param vehicleType - Type of vehicle (BIKE, CAR, EV, TRUCK)
     * @returns EntryResult with ticket details if successful
     */
    public enterVehicle(licensePlate: string, vehicleType: VehicleType): EntryResult {
        try {
            // Step 1: Allocate an available slot for the vehicle type
            const slot = this.slotService.allocateSlot(vehicleType);
            
            if (!slot) {
                return {
                    success: false,
                    message: `No available slots for vehicle type: ${vehicleType}`
                };
            }

            // Step 2: Generate ticket with entry time
            const ticket = this.ticketService.generateTicket(licensePlate, vehicleType, slot);

            // Step 3: Mark slot as occupied (done in allocateSlot)
            
            return {
                success: true,
                ticket,
                message: `Entry successful. Ticket ID: ${ticket.id}`
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Entry failed';
            return {
                success: false,
                message
            };
        }
    }

    /**
     * Retrieve ticket details by ticket ID
     * @param ticketId - The ticket ID
     * @returns Ticket if found, null otherwise
     */
    public getTicket(ticketId: string): Ticket | null {
        try {
            return this.ticketService.getTicket(ticketId);
        } catch (error) {
            return null;
        }
    }

    /**
     * Get all active tickets (vehicles currently parked)
     * @returns Array of active tickets
     */
    public getActiveTickets(): Ticket[] {
        try {
            return this.ticketService.getActiveTickets();
        } catch (error) {
            return [];
        }
    }
} 