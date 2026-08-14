import { ExitResult } from "../dto/ExitResult";
import { Receipt } from "../domain/Receipt";

/**
 * ExitController handles vehicle exit from the parking lot
 * 
 * Flow:
 *   Driver presents ticket
 *        ↓
 *   ExitController.exitVehicle()
 *        ↓
 *   TicketService.getTicket()
 *        ↓
 *   PricingService.calculateFee()
 *        ↓
 *   PaymentService.processPayment()
 *        ↓
 *   SlotService.releaseSlot()
 *        ↓
 *   ReceiptService.generateReceipt()
 *        ↓
 *   ExitResult { success, receipt, message }
 */
export class ExitController {
    constructor(
        private ticketService: any,      // TicketService
        private pricingService: any,     // PricingService
        private paymentService: any,     // PaymentService
        private slotService: any,        // SlotService
        private receiptService: any      // ReceiptService
    ) {}

    /**
     * Process vehicle exit - calculates fee, processes payment, releases slot
     * @param ticketId - The parking ticket ID
     * @returns ExitResult with receipt if successful
     */
    public exitVehicle(ticketId: string): ExitResult {
        try {
            // Step 1: Retrieve the ticket
            const ticket = this.ticketService.getTicket(ticketId);
            
            if (!ticket) {
                return {
                    success: false,
                    message: `Ticket not found: ${ticketId}`
                };
            }

            if (!ticket.isActive()) {
                return {
                    success: false,
                    message: `Ticket is no longer active. Exit already processed.`
                };
            }

            // Step 2: Calculate parking fee (minimum of flat and hourly pricing)
            const fee = this.pricingService.calculateFee(ticket);

            // Step 3: Process payment through payment gateway
            const paymentSuccess = this.paymentService.processPayment(ticketId, fee);

            if (!paymentSuccess) {
                return {
                    success: false,
                    message: `Payment processing failed. Please retry or contact support.`
                };
            }

            // Step 4: Release the parking slot
            this.slotService.releaseSlot(ticket.slotId);

            // Step 5: Deactivate the ticket
            this.ticketService.deactivateTicket(ticketId);

            // Step 6: Generate receipt
            const receipt = this.receiptService.generateReceipt(ticket, fee, true);

            return {
                success: true,
                receipt,
                message: `Exit successful. Receipt ID: ${receipt.id}`
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Exit processing failed';
            return {
                success: false,
                message
            };
        }
    }

    /**
     * Retrieve receipt by ticket ID
     * @param ticketId - The ticket ID
     * @returns Receipt if found, null otherwise
     */
    public getReceipt(ticketId: string): Receipt | null {
        try {
            return this.receiptService.getReceiptByTicketId(ticketId);
        } catch (error) {
            return null;
        }
    }

    /**
     * Retry payment for failed exit transactions
     * Useful for handling temporary payment gateway failures
     * @param ticketId - The ticket ID
     * @returns ExitResult with updated status
     */
    public retryPayment(ticketId: string): ExitResult {
        try {
            const ticket = this.ticketService.getTicket(ticketId);
            
            if (!ticket) {
                return {
                    success: false,
                    message: `Ticket not found: ${ticketId}`
                };
            }

            // Recalculate fee (in case of time-based pricing, fee might have increased)
            const fee = this.pricingService.calculateFee(ticket);

            // Retry payment
            const paymentSuccess = this.paymentService.processPayment(ticketId, fee);

            if (!paymentSuccess) {
                return {
                    success: false,
                    message: `Payment retry failed. Please try again later.`
                };
            }

            // Release slot and deactivate ticket
            this.slotService.releaseSlot(ticket.slotId);
            this.ticketService.deactivateTicket(ticketId);

            // Generate receipt
            const receipt = this.receiptService.generateReceipt(ticket, fee, true);

            return {
                success: true,
                receipt,
                message: `Payment successful after retry. Receipt ID: ${receipt.id}`
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Payment retry failed';
            return {
                success: false,
                message
            };
        }
    }
}