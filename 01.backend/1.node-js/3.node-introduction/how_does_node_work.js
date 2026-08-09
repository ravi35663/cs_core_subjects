const os = require('os')
/*
==> How does Node.js work?
   -> Whenever we make requests to a server, first request goes into the event 
      queue which is the part of Node.js

   -> There can we two type of requests 
      1) Blocking request
      2) Non-Blocking request

   -> Node.js has one more important thing present which is known as Event-Loop 
      which will keep track of all the request/events present in the event queue.

   -> Event-loop will check which kind of request user has send and if the 
      request is a asynchronous/non-blocking request then event queue process 
      that request and send response to the user without waiting any other 
      request to complete.

   -> If the request is blocking, request went to the thread-pool which have 
      threads available to perform blocking operations. 
         -  Thread-Pool: It is a collections of threads. Thread is also known as 
            worker

   -> Once the job of blocking operation is completed by the thread, the thread 
      come back to the thread-pool and it will return the result to the request.

   -> whenever you write synchronous code it is always blocking.

   -> asynchronous code are non-blocking and even the result of that line of 
      code is not completed it proceed with next line.
*/

/*
   How Node.js executes requests and CPU intensive tasks?
    index.js
        -> Node process
           -> MainThread: 
                -> init project
                -> Top level code execution
                -> Event callbacks register
                -> Start EventLoop () => Look for 
                    -> 1.Expired timer callbacks
                    -> 2.IO pooling (it is run isolate)
                    -> 3.setImmediate CB
                    -> 4.close callbacks
                    *if any task is pending then event loop repeat execution 
                     otherwise it exits the program any promise is found 
                     between any above process, it can execute anywhere in 
                     between the process

            -> Thread pool (used for handling CPU intensive task)
               -> default 4 thread are allocated
               -> we can increase size of the threads in node.js with 
                  process.env.UV_THREADPOOL_SIZE = any number

*/ 
// Write the code of execution of above things
const fs = require('fs')
console.log("top console")
setImmediate(()=>{
   console.log('Set immediate is called')
})
setTimeout(()=>{
   console.log("Set time")
},0)


fs.writeFile('text.txt',"Hello World this is Ravi from planet Earth.",(err)=>{
   console.log("File is created")
   setTimeout(()=>{
      console.log("Settimeout 2 is called")
   },0)
   setTimeout(()=>{
      console.log("Settimeout 3rd is called")
   },5* 1000)
   setImmediate(()=>{
      console.log("Set immediate 2 is called")
   })
})

console.log("Last line of the code")

/*
==> Code Execution in Node.js
   -> Node.js uses an event-driven, non-blocking I/O model. The execution 
      happens in two key phases:
         1) Synchronous Code: Runs directly in the main thread.
         2) Asynchronous Code: Executes via the 'Event Loop', handling 
            callbacks in specific phases.
      
==> Event Loop Phases:
   1) Timers Phase:
      -> Executes setTimeout and setInterval callbacks whose delay has elapsed.
      
   2) I/O Callbacks Phase:
      -> Handles callbacks for I/O operations, e.g., reading files or receiving 
         data from a socket.
      -  Runs callbacks of “special / delayed” I/O events that were not 
         handled in Poll.
      -  These are callbacks that couldn’t run in Poll phase and are postponed.
      -  This phase run form Deferred / error-related network & socket callbacks
      -  Example:
            Mainly:
               - TCP connection errors
               - Socket close events
               - Connection refused
               - Reset by peer
               - Some DNS failures
            Not for:
               - fs.readFile
               - Normal HTTP success
               - DB success

   3) Idle, Prepare Phase:
      -> Internal system tasks.
      
   4) Poll Phase:
      -> Handles new incoming I/O events and executes their callbacks. 
         Like fs,http, and all.
         
      -> If no callbacks are pending, it waits for new events.
      -  Poll Phase = Normal successful I/O
      
   5) Check Phase:
      -> Executes setImmediate callbacks.
      
   6) Close Callbacks Phase:
      -> Executes callbacks for closed resources like sockets.
      
   7) Microtasks:
      -> Executed immediately after the current operation, before moving to the next phase.
      -> Includes process.nextTick() and resolved Promises (.then/.catch).
*/
const fs = require("fs");

// ==================== MAIN (CALL STACK) ====================
console.log("1: Start of script"); // Sync → Call Stack

// ==================== TIMERS PHASE ====================
setTimeout(() => {
  console.log("2: setTimeout callback"); // Timers Phase
}, 0);

// ==================== CHECK PHASE ====================
setImmediate(() => {
  console.log("3: setImmediate callback"); // Check Phase
});

// ==================== ASYNC I/O → POLL PHASE ====================
fs.readFile(__filename, () => {
  console.log("4: I/O callback"); // Poll Phase (fs, http, db, etc.)

  // ========== MICROTASK QUEUE (Runs Immediately After Callback) ==========
  process.nextTick(() => {
    console.log("7: nextTick inside I/O"); // nextTick Queue (Highest Priority)
  });

  // ========== CHECK PHASE (Next Loop) ==========
  setImmediate(() => {
    console.log("5: setImmediate inside I/O"); // Check Phase
  });

  // ========== TIMERS PHASE (Next Loop) ==========
  setTimeout(() => {
    console.log("6: setTimeout inside I/O"); // Timers Phase
  }, 0);
});

// ==================== MICROTASK QUEUE ====================
process.nextTick(() => {
  console.log("8: nextTick callback"); // nextTick Queue (Before Promises)
});

Promise.resolve().then(() => {
  console.log("9: Promise callback"); // Microtask Queue (Promise)
});

// ==================== MAIN (CALL STACK) ====================
console.log("10: End of script"); // Sync → Call Stack

/*
==> Output:
==> Synchronous Code (Main Thread): Executes first, line by line:
      1:  Start of script
      10: End of script

==> Microtasks (process.nextTick, Promises): Processed before moving to the next Event Loop phase:
      8: nextTick callback
      9: Promise callback

==> Timers Phase: Executes setTimeout callbacks
      2: setTimeout callback

==> Check Phase: 
   -> 3: setImmediate callback (because there is I/O operation available)

==> Poll Phase:
   Executes callbacks for fs.readFile
      4: I/O callback: Console.log is alway synchronous

==> Microtasks inside I/O: Executes immediately after I/O callback:
      7: nextTick inside I/O
   
==> Check-Phase of I/O:
      5: setImmediate inside I/O

==> Timer Phase:
      6: setTimeout inside I/O ==> because it is running with some delay due to IO callback
*/

/*
==> Node Event-Loop-Priority-Task-Phase:
   Task                                   Priority	                        Phase
   process.nextTick()	                  Highest	                        Microtasks Queue
   Resolved Promises	                     High	                           Microtasks Queue
   setTimeout()	                        Medium (after Microtasks)	      Timers Phase
   setInterval()	                        Medium (after Microtasks)	      Timers Phase
   I/O Callbacks (e.g., fs)	            Medium-Low	                     I/O Callbacks Phase or Poll Phase
   setImmediate()	                        Medium-Low (after I/O)	         Check Phase
   Close Callbacks	                     Lowest	                        Close Callbacks Phase

Notes: 
==> Microtasks Always Win
   -> Even if setTimeout() or setImmediate() is ready to execute, Node.js will first complete all 
      pending microtasks (e.g., process.nextTick() and Promises) then move to other tasks:
*/
/*
const fs = require("fs");

console.log("1: Start of script"); // Synchronous

setTimeout(() => console.log("2: setTimeout callback"), 0); // Timer phase

setImmediate(() => console.log("3: setImmediate callback")); // Check phase

setTimeout(() => console.log("4: setTimeout callback"), 3000); // Timer phase

fs.readFile(__filename, () => { // Here po
  console.log("5: I/O callback"); // I/O callbacks phase or Poll-Phase:

  setTimeout(()=> {console.log("6: This will run after 5 second")},5 * 1000)

  setImmediate(() => console.log("7: setImmediate inside I/O")); // Check phase inside I/O

  setTimeout(() => console.log("8: setTimeout inside I/O"), 0); // Timer phase inside I/O

  process.nextTick(() => console.log("9: nextTick inside I/O")); // Microtask inside I/O
});

process.nextTick(() => console.log("10: nextTick callback")); // Microtask

Promise.resolve().then(() => console.log("11: Promise callback")); // Microtask

console.log("12: End of script"); // Synchronous

*/

/*
   Output:
      1: Start of script
      12: End of script
      10: nextTick callback
      11: Promise callback
      2: setTimeout callback
      3: setImmediate callback
      5: I/O callback
      9: nextTick inside I/O
      7: setImmediate inside I/O
      8: setTimeout inside I/O
      4: setTimeout callback
      6: This will run after 5 second
*/

/*
Note:
   The reason setImmediate is executed before setTimeout inside an I/O callback 
   is that the setImmediate queue is processed immediately after the poll phase, 
   while the setTimeout callback must wait for the next iteration of the timers 
   phase.

   Microtasks (run between each phase) → process.nextTick, Promises
   setImmediate works differently in main phase and in inside the other phases 
   (I/O or Poll phase)
   -> ***** "Always remember how phases are executed inside the Node.js."
*/


const net = require("net");

// ==================== MAIN / CALL STACK ====================

// Async socket connection starts (handled by OS/libuv)
const socket = net.createConnection(9999, "127.0.0.1");

console.log("Start"); // Call Stack (Synchronous)

// ==================== EVENT LISTENERS (REGISTERED SYNC) ====================

socket.on("connect", () => {
  console.log("Connected"); 
  // Poll Phase (Normal successful I/O connection)
  // (Usually does NOT run if port is closed)
});

socket.on("error", err => {
  console.log("Socket Error:", err.code);
  // I/O Callbacks Phase (Deferred / Error Network Event)
});

socket.on("close", () => {
  console.log("Connection Closed");
  // I/O Callbacks Phase (Socket Close Event)
});

// ==================== TIMERS ====================

setTimeout(() => {
  console.log("Timer Done");
  // Timers Phase
}, 0);
