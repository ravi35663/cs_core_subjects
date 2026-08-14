import { ExitResult } from "../dto/ExitResult";

export class ExitController{
    public exitVehicle(tickerId: string): ExitResult{
        // Will add exit vehicle service:
        throw new Error("Not implemented")
    }
}

/*
Driver presents ticket
        ↓
ExitController
        ↓
Exit business logic
        ↓
calculate fee
        ↓
payment
        ↓
release slot
        ↓
deactivate ticket
        ↓
generate receipt
        ↓
ExitResult
*/