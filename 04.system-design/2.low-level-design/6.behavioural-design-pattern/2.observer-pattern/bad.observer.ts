
// Bad Example (No Observer Pattern)
// Channel directly manages subscribers.

class Subscriber{
    constructor(public name:string){}

    notify(videoTitle:string){
        console.log(`${this.name} got notification new video - ${videoTitle}`);
    }
}
class YoutubeChannel{
    private subscribers: Subscriber[] = [];
    addSubscriber(sub:Subscriber){
        this.subscribers.push(sub);
    }

    uploadVideo(videoTitle: string){
        // Here channel directly notifies all its subscribers
        for(let sub of this.subscribers){
            sub.notify(videoTitle);
        }        
    }
}
/*
=> Problems with bad example:
    - Channel tightly coupled with subscriber
    - Can't add new notification types (EMail, SMS etc..)
    - Channel must know everything about observers
    - Violates Open/Closed Principle and SRP
*/ 
/*
=> Example:
    If tomorrow we add:
        -   EmailSubscriber
        -   SMSSubscriber
        -   PushNotificationSubscriber
    then channel must change which is wrong
*/