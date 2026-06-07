/*
=> What is Exception handling in ts:
    ->  Exception handling in TypeScript is the mechanism to handle runtime errors 
        gracefully without crashing the application.
    ->  It allows a program to detect, handle, and recover from unexpected situations.
*/
/*
Why Exception Handling is Needed
    ->  Prevents application crashes
    ->  Provides meaningful error messages
    ->  Separates normal flow from error flow
    ->  Makes code robust & maintainable
*/
//Basic Syntax:
try{
    console.log("Write code to execute");
}catch(err){  
    console.log("Catch the error happens in try block");
}finally{
    //Used for cleanup (closing files, DB connections, etc.)
    console.log("This block is optional but if you write it, it will execute in both try and catch case condition")
}

// Example:
function divide(a:number,b:number):number{
    if(b == 0){
        // throw used to explicitly raise an exception.
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(err){
    console.log("Error is: ",(err as Error).message);
}finally{
    console.log("Code executed");
}

// Custom Exception:
class InvalidAgeError extends Error{
    constructor(message:string){
        super(message);
        this.name = "InvalidAgeError";
    }
}

function vote(age:number){
    if(age < 18){
        throw new InvalidAgeError("Age must be 18 or above");
    }
}

try{
    vote(15);
}catch(err){
    if(err instanceof InvalidAgeError){
        console.log((err as InvalidAgeError).message);
    }
}
/*
Exception Handling in OOP Context
    1) Errors are treated as objects
    2) Can be extended, inherited, and categorized
    3) Promotes Single Responsibility Principle
*/
/*
=> Important Notes (TypeScript-specific):
    ->  TypeScript does not enforce checked exceptions (unlike Java)
    ->  All exceptions are runtime
    ->  catch error type is unknown (best practice)
*/
/*
    | Keyword   | Purpose          |
    | --------- | ---------------- |
    | `try`     | Wrap risky code  |
    | `catch`   | Handle exception |
    | `throw`   | Raise exception  |
    | `finally` | Cleanup code     |
*/
/*
==> Real life example of exceptional handling:
    1)  ATM Machine (Classic & Best Example):
        ->  throw new InsufficientBalanceError("Insufficient balance");
        ->  throw new InvalidPinError("Incorrect PIN entered");
        ->  throw new NetworkError("Unable to connect to bank server");

    2)  Online Payment System:
        ->  throw new PaymentFailedError("Payment failed due to bank issue");
        ->  throw new CardExpiredError("Your card has expired");
        ->  throw new InvalidCvvError("Invalid CVV entered");

    3)  Login System:
        ->  throw new AuthenticationError("Invalid username or password");
        ->  throw new AccountLockedError("Account locked due to multiple failed attempts");
        ->  throw new UserNotFoundError("User does not exist");
        
    4)  Elevator (Lift) System:
        ->  throw new OverloadError("Weight limit exceeded");
        ->  throw new DoorBlockedError("Door obstruction detected");
        ->  throw new MechanicalFailureError("Lift malfunction detected");

    5) Railway / Flight Booking System:
        ->  throw new SeatUnavailableError("No seats available for selected date");
        ->  throw new PaymentTimeoutError("Payment session timed out");
        ->  throw new BookingFailedError("Ticket booking failed");
*/
/*
=> Summary:
    ->  Exception handling in TypeScript is the process of catching and handling 
        runtime errors using try–catch–finally blocks to prevent application crashes.
*/