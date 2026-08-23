import { Ticket } from "../../domain/Ticket";

export interface ITicketRepository{
    save(ticket:Ticket): void;
    findById(tickerId: string): Ticket | undefined;
    findActiveTickets(): Ticket[] | undefined;
    deactivateTicket(tickerId: string): void;

}