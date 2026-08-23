import { ParkingSlot } from "../domain/ParkingSlot";
import { Ticket } from "../domain/Ticket";
import { Vehicle } from "../domain/Vehicle";
import { ITicketRepository } from "../interfaces/repository/ITicketRepository";

export class TicketService{
    constructor(private readonly ticketRepository: ITicketRepository){}

    generateTicket(vehicle: Vehicle, slot: ParkingSlot):Ticket{
        const ticket = new Ticket(
            crypto.randomUUID(),
            vehicle.id,
            slot.id,
            new Date(),
            true)
        this.ticketRepository.save(ticket);
        return ticket;
    }

    getTicket(ticketId:string): Ticket{
        const ticket = this.ticketRepository.findById(ticketId);
        if(!ticket){
            throw new Error("Invalid ticket")
        }
        return ticket;
    }
}