import { Ticket } from "../domain/Ticket";

export interface EntryResult{
    success: boolean;
    ticket?: Ticket,
    message: string
}
