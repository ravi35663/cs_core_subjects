// Abstract Class
abstract class NotificationSender{
    // Template method

    send(to:string, rawMessage:string){
        this.rateLimitCheck(to)

        this.validateRecipient(to)

        const formatted  = this.formatMessage(rawMessage)

        this.preSendAuditLog(to, formatted)

        const composedMessage = this.composedMessage(formatted)

        this.sendMessage(to, composedMessage)

        this.postSendAnalytics(to);
    }

    // Common Steps:
    protected rateLimitCheck(to:string){
        console.log("Check rate limit for : ",to)
    }

    protected validateRecipient(to: string){
        console.log("Validate recipient ",to);
    }

    protected formatMessage(message: string){
        return message.trim();
    }

    protected preSendAuditLog(to:string, message:string){
        console.log("Logging before send: ",message,' to ',to)
    }

    protected abstract composedMessage(formatMessage:string):string;
    protected abstract sendMessage(to: string, message:string): void;

    // Hook method (can be overridden)
    protected postSendAnalytics(to:string){
        console.log("Analytics updated for: ",to)
    }
}

// Email Notification:
class EmailNotification extends NotificationSender{
    protected composedMessage(formatMessage: string): string {
        return `<html><body> ${formatMessage}</body></html>`
    } 
    protected sendMessage(to: string, message: string): void {
        console.log("Sending email to ",to," with content: ",message);
    }
}

class SMSNotification extends NotificationSender{
    protected composedMessage(formatMessage: string): string {
        return `[SMS] ${formatMessage}`
    } 
    protected sendMessage(to: string, message: string): void {
        console.log("Sending SMS to ",to," with content: ",message);
    }

    protected override postSendAnalytics(to: string): void {
        console.log("Custom SMS analytics for : ",to);
    }
}

// Client code:
const emailSender = new EmailNotification()
emailSender.send('john@gmail.com','Hello John');
console.log()

const smsSender = new SMSNotification()
smsSender.send("19191822828","Your OTP is: 1908")
