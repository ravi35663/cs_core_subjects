import { Receipt } from "../domain/Receipt";

export interface ExitResult{
    success: boolean;
    receipt?: Receipt;
    message: string;
}

/*
=> Note:
    I'm intentionally using interfaces for these DTOs instead of classes:
    because EntryResult and ExitResult are primarily data contracts, not domain objects with behavior.
*/ 
