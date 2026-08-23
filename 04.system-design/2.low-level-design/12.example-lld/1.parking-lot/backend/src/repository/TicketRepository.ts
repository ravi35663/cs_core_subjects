import { Ticket } from "../domain/Ticket";
import { ITicketRepository } from "../interfaces/repository/ITicketRepository";

export class TicketRepository implements ITicketRepository{
    private tickets: Ticket[] = [];
    save(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    findActiveTickets(): Ticket[] {
        return this.tickets.filter((ticket:Ticket) => ticket.active == true);
    }

    findById(ticketId: string): Ticket | undefined {
        return this.tickets.find((ticket:Ticket) => ticket.id === ticketId )
    }

    deactivateTicket(tickerId: string): void {
        const ticket  = this.tickets.find((ticket:Ticket) => ticket.id == tickerId);
        if(!ticket){
            throw new Error("Invalid ticket:")
        }
        ticket.deactivate(); 
    }
}