/*
=> Good example (Observer Pattern):
    - We introduce:
        - Subject   -> Channel
        - Observer  -> Subscriber
*/
// Step 1: Observer interface:
interface Observer{
    update(videoTitle: string): void;
}

// Step 2: Subject interface:
interface Subject{
    subscribe(observer:Observer): void;
    unsubscribe(observer:Observer):void;
    notify(videoTitle:string): void;
}

//Step 3: Concrete Subject (Youtube channel):
class YoutubeChannel implements Subject{
    private observers: Observer[] = [];
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        // Logic can vary
        this.observers = this.observers.filter(obj=> obj !== observer);
    }
    notify(videoTitle: string): void {
        for(const obs of this.observers){
            obs.update(videoTitle);
        }
    }

    uploadVideo(videoTitle: string):void{
        console.log('New video uploaded: ',videoTitle);
        this.notify(videoTitle)
    }
}

// Step 4: Concrete Observers: 
// User notification:
class UserSubscribe implements Observer{
    constructor(private name: string){}
    update(videoTitle: string): void {
        console.log(`${this.name} got notified about: ${videoTitle}`);
    }
}
// Email Notification
class EmailSubscriber implements Observer{
    constructor(private email:string){}
    update(videoTitle: string): void {
        console.log(`Email sent to ${this.email} for video: ${videoTitle}`);
    }
}

// SMS Notification
class SMSSubscriber implements Observer{
    constructor(private phone: string){}
    update(videoTitle: string): void {
        console.log(`SMS sent to ${this.phone} for video: ${videoTitle}`);
    }
}

//  Client Code:
const channel = new YoutubeChannel();
const user1 = new UserSubscribe("Ravi")

const emailUser = new EmailSubscriber('ravi@gmail.com')
const smsUser = new SMSSubscriber("9292871272727");


channel.subscribe(user1);
channel.subscribe(emailUser);
channel.subscribe(smsUser);

channel.uploadVideo('Observer pattern');

/*
=> Why this is good design:
    - Channel does not know subscriber types
    - New subscriber type can be added without modifying channel
    - Support multiple notification systems
    - Follows open/closed principle
    - Loose coupling
*/
/*
=> When youtube video uploaded:
    - Push notification
    - Email
    - Bell Notification
    - App Notification
    - Recommendation feed

All these are observers
*/