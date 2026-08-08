/*
=> Problem first:   Payment gateway in amazon
    -   We always design happy paths. (Discuss what happens on a successful checkout)
    -   Problem: After entering the OTP, the screen shows "Something went wrong"

=>  Impacts:
    -   Failed transaction
    -   Angry customer
    -   Cart abandonment
    -   Bad PR

=>  Good exception handling:
    -   Show a proper error
    -   Log the root cause
    -   Trigger alert(Slack/teams/gmail)
    -   Retry in safe flows
    -   Fail gracefully
*/

/*
=> Fail fast
    -   Detect and stop at first sign of failure
    -   Example: NPE(null-pointer-exception) on missing user profile
    -   Data integrity - critical systems

=>  Fail safe:
    -   Try to recover, continue working if possible
    -   Guest User (Apple website)
    -   User-experience centric flows
*/

/*
=>  Checked Exceptions:
    -   TypeScript does not have checked exceptions. Exceptions are runtime behavior, and the compiler 
        does not force functions to declare or handle thrown exceptions. We can optionally handle them 
        using try...catch or propagate them to higher-level error handlers.
    -   TypeScript doesn't complain that you didn't use try-catch.
*/

/*
=> Note:
=> Exceptions in TypeScript:
    - TypeScript does not have checked exceptions.
    - TypeScript does not have a compile-time checked/unchecked exception hierarchy like Java.
    - Exceptions are runtime values that can be thrown using `throw`.
    - try-catch is optional from the compiler's perspective.
    - Errors can be handled locally with try-catch or propagated to a global error handler.
*/

/*
=> Custom Exceptions:
    -   In TypeScript, you can create custom exceptions/errors by extending the built-in Error class.
*/
// Basic Exceptions
class UserNotFoundError extends Error{
    constructor(message: string){
        super(message);
        this.name = 'UserNotFoundError'
    }
}
// Handle it:
try {
    throw new UserNotFoundError("User not found");
} catch (error) {
    console.log(error);
}

// Enterprise-style Custom Error:
class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(
        message: string,
        statusCode: number,
        isOperational = true
    ) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}
class UserNotFoundErrorOne extends AppError {
    constructor() {
        super("User not found", 404);
    }
}

class InvalidCredentialsError extends AppError {
    constructor() {
        super("Invalid email or password", 401);
    }
}
const user = null;
if (!user) {
    throw new UserNotFoundErrorOne();
}
const validPassword = null;
if (!validPassword) {
    throw new InvalidCredentialsError();
}

/*
=> When to use custom exceptions:
    1)  Want to response a specific domain layers (UserNotFoundException)
    2)  Want to provide clear separation of business logic and error handling.
    3)  Building an API and want structural responses.
*/