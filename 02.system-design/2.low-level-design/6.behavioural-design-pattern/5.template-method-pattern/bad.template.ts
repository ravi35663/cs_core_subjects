/*
    Problem:
        Let's assume we are building a Notification Service where we need to send notifications via 
        multiple channels, such as Email and SMS. 
        - Below is a simple way of how it might be implemented.
*/

// Email Notification:
class EmailNotification{
    send(to:string, message:string){
        console.log("Checking rate limiting for: ",to);
        console.log("Validating email recipient: ", to);

        const formatted = message.trim();
        console.log("Logging before send: ",formatted, ' to ',to);
        // Compose email
        const composedMessage = `<html><body> <p>${formatted}</p></body></html>`
        // Send Email:
        console.log(`Sending EMAIL to ${to} with content: \n ${composedMessage}`);

        // Analytics:
        console.log("Analytics updated for: ",to);
    }
}

//SMS Notification:
class SMSNotification{
    send(to:string, message:string){
        console.log("Checking rate limiting for: ",to);
        console.log("Validating email recipient: ", to);

        const formatted = message.trim();
        console.log("Logging before send: ",formatted, ' to ',to);
        // Compose email
        const composedMessage = `[SMS] ${formatted}`
        // Send Email:
        console.log(`Sending EMAIL to ${to} with content: \n ${composedMessage}`);

        // Analytics:
        console.log("Analytics updated for: ",to);
    }
}

// Client Code:
const emailNotification = new EmailNotification()
const smsNotification = new SMSNotification();

// Sending Email:
emailNotification.send('example@gmail.com','You parcel has been placed')

console.log()

// Sending SMS:
smsNotification.send("123456789",'Your OTP is 1000');

/*
=>  Issues with above code:
    1) Code Duplication:
        -   Both EmailNotification and SMSNotification repeats the same logic for rate limiting, 
            formatting,  logging and analytics which violating the DRY principle.

    2) Hardcoded Behavior:
        -   The send() method is tightly coupled for each notification type, making it difficult to add 
            new types like Push Notifications, Whatsapp Notification and all.
    3) Poor Extensibility:
        - Changes to common logic (rate limiting, logging, analytics) must be made in every notification class.
    4) High Maintenance:
        - Adding new notification types increase duplicate code, making the system harder to maintain. 
*/

/*
=> Solution:
    Use the Template Method Pattern to remove duplicate logic by defining the common workflow in a 
    base class, while allowing subclasses to implement specific steps like message composition and 
    message.

    See in the good example:
*/