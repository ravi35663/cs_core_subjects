const emitter = require('events')
/*
=> Event Emitters:
    ->  EventEmitter is a class that helps us create a publisher-subscriber pattern 
        in NodeJS.
    ->  with the event emitter we can raise any event and we can listen that raised 
        event in different part of the application.
*/
// Creating event emitter:
const eventEmitter = new emitter();
// console.log("eventEmitter:",eventEmitter)

/*
=> Publishing Events and Listening to Them
    -> on(eventName) used to listen published event
    -> emit(eventName) used to publish event
    -> you always have to listen event before emitting them otherwise you'll not get the 
        listener.

*/

eventEmitter.on('event1',()=>{
    console.log("event 1 is listening")
})

eventEmitter.on('event2',()=>{
    console.log("event 2 is listening")
})

eventEmitter.emit("event2");
eventEmitter.emit("event1")

/*

==> EventEmitter Instance Should Be Singleton for a Single Event Name:
    ->  In other words, the on() and the emit() functions must be called on the same 
        EventEmitter instance
    ->  The listeners won’t work if registered on a separate EventEmitter instance.
        in the above code 'eventEmitter' is an instance of EventEmitter

    -> below code won't do anything because they are on different instances
        const eventEmitter1 = new EventEmitter();
        eventEmitter1.on('myEvent', () => {
            console.log('Listener');
        });

        const eventEmitter2 = new EventEmitter();
        eventEmitter2.emit('myEvent');
*/

//Maintaining a Single Event-Emitter Instance Application wise
/*
    ->  A node application is generally 100s of files. This gets challenging to 
        maintain by a single copy of the EventEmitter instance throughout the application.

    ->  There is a simple strategy to create and maintain a singleton copy for an 
        EventEmitter instance.
    ->  you can set any key in your application's object so that you can access it 
        anywhere in your application
    e.g.
        const eventEmitter = require('events)
        const express = require('express')
        const app = express()

        app.set('eventEmitter',new eventEmitter()) 
        // app.set(key,value) :- it will store any key-value in your app's object


        *access it from any module of the application
        console.log(app.get('eventEmitter'));
*/

/*
    Is an Event Emitter Synchronous or Asynchronous?
    const EventEmitter = require('events');
    const eventEmitter = new EventEmitter();
    console.log("Line A")
    eventEmitter.on('event_a',()=>{
        console.log("Line B")
    })
    console.log("Line C")
    eventEmitter.emit('event_a')
    console.log("Line D")

    Output:
        Line A
        Line C
        Line B
        Line D
    -> hence the event emitter is synchronous 
*/
/*
    How and Where NodeJS Internally uses Event Emitters
    -> NodeJs internally uses event emitters widely across its environment. 
       The first example we can think of is streams.
    -> Streams extend event emitters. Streams are built on top of event emitters that raise 
       predefined events like open, end, data, etc.

    -> The following code snippet is a simple example of a stream — explaining the resemblance 
       with event emitters.

let chunkIndex = 0;
const readStream = createReadStream("./data.txt");

readStream.on("open", () => {
    console.log("Started Reading...");
});

readStream.on("end", () => {
    console.log("Completed Reading...");
});

readStream.on("data", chunk => {
    console.log("Chunk: " + ++chunkIndex);
    console.log("-----------------------------------------");
    console.log(chunk);
    console.log("\n");
});
view raw

*/ 

const fs = require('fs');
const { EventEmitter } = require('stream');
let chunkIndex = 0;
const readStream = fs.createReadStream('./data.txt')
readStream.on("open",()=>{
    console.log("start reading.......:")
})

readStream.on("end",()=>{
    console.log("Completed reading.....")
})

readStream.on("data",chunk=>{
    console.log("Chunk: "+ ++chunkIndex)
    console.log("...................................")
    console.log(chunk)
    console.log("\n");
})

// once: if some event fires more than one time then 'once' will always that event only once.
const ee2 = new EventEmitter()
ee2.on("ee2_event",(data)=>{
    console.log("Data in on ee2_event: ",data)
})

ee2.once("ee2_event",(data)=>{
    console.log("Listening event in once: ",data)
})

ee2.emit("ee2_event","Message 1")
ee2.emit("ee2_event","Message 2")
ee2.emit("ee2_event","Message 3")
ee2.emit("ee2_event","Message 4")
/*
    Notice here the once listener was only called once. After getting called for the first 
    time, it’ll be discarded for further use.
*/

/*
    eventNames(): get all active events
    Notice after the once event gets triggered, calling eventNames() doesn’t give its event name.
*/
console.log("Active events of instance : ee2:",ee2.eventNames())

/*
    addListener()
    It’s exactly the same as on(). It’s just an alias for event.on().
*/

/*
    removeListener()
    -> This is used to remove a listener.
    
    const eventEmitter = new EventEmitter();

    function func1(): void {
        console.log("EVENT TRIGGERED");
    }

    eventEmitter.on("myEvent", func1);
    eventEmitter.on("myEvent2", func1);

    console.log(eventEmitter.eventNames());
    eventEmitter.removeListener("myEvent", func1);
    console.log(eventEmitter.eventNames());

    Output:
        [ 'myEvent', 'myEvent2' ]
        [ 'myEvent2' ]

    Note: To remove a listener, we need to pass the same function reference in the second 
          parameter that was used to create a listener.

*/
/*
    ==> removeAllListeners()
    This is used to remove all active event listeners from an EventEmitter instance.

    eventEmitter.on("myEvent", func1);
    eventEmitter.on("myEvent2",func1);

    eventEmitter.removeAllListeners();
    console.log(eventEmitter.eventNames());
*/

