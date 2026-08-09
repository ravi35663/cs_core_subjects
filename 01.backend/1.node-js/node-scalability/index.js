/*
    Node.js is also designed to be highly scalable, meaning it can handle large amounts of 
    traffic and requests without sacrificing performance or reliability. 
    This is achieved through a combination of techniques, including clustering, 
    load balancing and caching.
*/
/*
Clustering:
    ->  Clustering involves creating multiple instances of a Node.js process, allowing the 
        application to take advantage of multiple cores on the server.
        -> number of cores === number of cpus
        -> os.cpus().length -> it will gives you number of cpus in your system/server
    ->  Using the cluster module in Node.js has one main goal:
    ->  To utilize all CPU cores of your machine and scale your Node.js application across 
        them.
*/
/*
    Here’s an example of how to implement clustering in Node.js using the cluster module:
*/
/*
=> Note: database run outside the node application (other instance):
=> When created multiple instances of node using cluster.
    | Resource          | Shared? |
    | ----------------- | ------- |
    | Memory            |  No     |
    | Variables         |  No     |
    | Cache (in-memory) |  No     |
    | DB                |  Yes    |
*/

const cluster = require("cluster")
const os = require('os')
const http = require('http')

if(cluster.isMaster){
    const workers = os.cpus().length;
    for(let i=0; i<workers; i++){
        cluster.fork()
        /*
            ->  It creates child processes AKA worker processes and in each child 
                process node.js uses 1 single thread.
            ->  Each child process has their own memory, thread, event-loop and other 
                stuff and node will use 1 thread in each process.
            ->  Because node.js uses single thread by default
        */
    }
    /*
        The primary purpose of using cluster.fork() is to enable a Node.js 
        application to take advantage of multiple CPU cores and distribute the 
        workload across multiple processes.
    */

    // Listen for worker exit events
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died`)
        /*
            fork a new worker to replace the terminated one so that rest of the load goes to 
            newly created child process
        */
       cluster.fork(); //// Restart a new worker if one dies
       /*
        ->  Kill a worker process manually: kill -9 <worker_pid>, then you'll see one process 
            is died and new will be created
       */
    })
}else{
    // Worker process code:
    console.log(`Worker ${process.pid} started`)
    // Create server here
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end("Hello World")
    }).listen(3000);// Listening server on port 3000
}

/*
    In the above example, the master process forks/start multiple worker processes, each 
    handling incoming HTTP requests. If a worker process terminates, the master process 
    automatically spawns/replace a new worker to replace it.
*/
/*
    In this example, we use the cluster module to create multiple instances of the Node.js 
    process, each running on a separate core of the server. 
    The "cluster.isMaster" condition checks if the current process is the master process, 
    and if so, forks the required number of worker processes. 
    The "cluster.on" event handler listens for worker processes that have died and restart them 
    as needed.
*/

/*
==> Key Benefits of Using cluster Module:
1) Utilize Multi-Core CPUs (Performance Boost)
    ->  Node.js runs on a single thread by default. Even if your machine has 8 or 16 cores, 
        it only uses one. Using the cluster module allows you to create multiple worker 
        processes (one per CPU core), each running a separate instance of your app.

    ->  Result: Handles more traffic, better parallelism, and uses system resources 
        efficiently.

2)  Better Throughput (More Requests per Second):
    ->  Each worker process can handle its own set of requests, which means:
            -> More requests handled concurrently
            -> Fewer slowdowns under heavy load
    ->  Example: If 1 worker handles 100 RPS(Request-Per-Second), 8 workers can handle 
        ~800/sec.

3) Crash Isolation (Fault Tolerance):
    ->  If one worker crashes due to an unhandled exception:
            -> The master process stays alive.
            -> You can restart the crashed worker automatically.
    ->  Keeps your app running without total failure.

4) Scalable Architecture:
    ->  You can build a production-ready server that distributes load to multiple child 
        processes, similar to what a reverse proxy (like Nginx) does.
    ->  Works well in high-traffic web servers, real-time APIs, etc.

5) Zero-Downtime Restarts (with extra setup):
    ->  Using cluster + process managers (like PM2), you can:
            -> Restart workers one at a time
            -> Update code without dropping traffic
*/
/*
==> Analogy:
    ->  Imagine Node.js is a chef with one hand (single thread).
    ->  By default, you get 1 chef.
    ->  With cluster.fork(), you hire 10 more chefs (processes) — each with one hand. 
        Now 10 dishes can be cooked at the same time — not because a chef grew more hands 
       (threads), but because you got more chefs.
*/
/*
Load Balancing:
    Load balancing involves distributing incoming requests across multiple servers or 
    instances of the application, to ensure that no single server or instance becomes 
    overwhelmed.
*/
/*
Caching:
    Caching involves storing frequently accessed data in memory or on disk, to reduce the 
    amount of time it takes to access the data.
*/

/*
==> child_process in Node.js:
    ->  The child_process module lets you spawn new external processes from your Node.js 
        app — like running shell commands, Python scripts, or even another Node process.
    ->  Think of it as:
        "Node.js calling something outside of itself (OS-level command)"

==> Use Cases:
    Use Case	                                Example
    Run shell commands	                        ls, mkdir, curl, etc.
    Call Python scripts / Java / PHP	        python myscript.py
    Execute other Node.js scripts	            node script.js
    Automate builds, Git tasks, deployments	    git, npm run, etc.
    CPU-heavy tasks in separate process	        Offload work from main thread


==> Available Methods:
    Method	        Description
    exec	        Runs a command in a shell, buffers output
    spawn	        Launches a new process with a stream
    fork	        Special case of spawn for Node.js scripts
    execFile	    Runs an executable file directly
*/

// Example 1: exec — Run Shell Command
const {exec} = require('child_process')
exec('ls -l',(err,stdout,stderr)=>{
    if(err){
        console.log("Error is: ",err);
        return
    }
    console.log("Output is: ",stdout)
})
//Use exec for simple commands. Be cautious with large output (buffer limit).


// Example 2: spawn — Stream Output (no buffering)
const { spawn } = require('child_process');

const ls = spawn('ls', ['-l']);

ls.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

ls.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});
//Use spawn for streaming large data (e.g., file I/O, logs).

//Example 3: fork — Run Another Node.js Script// parent.js
const {fork} = require('child_process');
const child = fork('./child.js')

child.send("Hello from parent")
child.on('message',(msg)=>{
    console.log("Message from child",msg)
})
// Best for Node-to-Node communication (IPC using send()).


/*
    Difference from worker_threads
    Feature	                    child_process	                        worker_threads
    Process/Thread	            New process	                            New thread in same process
    Memory	                    Separate memory	                        Shared memory possible
    Use case	                Run external programs	                Heavy CPU in same app
    Communication	            Slower, via send()	                    Fast, via postMessage
*/
/*
==> When to Use child_process
    1)  Running shell commands (e.g., automation,mkdir,ls,..etc)
    2)  Offloading CPU-bound or blocking tasks to a different process
    3)  Executing external scripts in Python, Java, etc.
    4)  Node script communication (fork)
*/