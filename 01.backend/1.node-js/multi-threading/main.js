const {Worker} = require('worker_threads');

console.log("Main Thread started")

const worker = new Worker('./heady-task.js');
worker.on('message',(result)=>{
    console.log("Result from worker: ",result);
})

worker.on('error',(err)=>{
    console.log("Error is: ",err);
})

worker.on('exit',(code)=>{
    console.log("Worker exited with code: ",code);
})

/*
What Actually Happens
    ->  The main thread spawns(released) a worker thread.
    ->  That worker runs heavyTask.js in parallel (on a separate thread).
    ->  The main thread doesn't block and can handle other work (like HTTP requests).
*/

/*
==> When to Use worker_threads vs cluster?
Scenario        	            Use
    Handle HTTP traffic	            cluster
    Heavy computation	            worker_threads
    External scripts	            child_process
*/