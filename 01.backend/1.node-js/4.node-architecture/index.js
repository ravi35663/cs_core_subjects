//Explain Node.js web application architecture.
/*
==> Node.js is combination  of two things:
      1) V8-Engine
      2) LIBUV
    
   ==> V8-Engine:
      -> It is developed by google chrome's engineers
      -> V8 engine is the fundamental part of the Node.js
      -> Without V8 engine there is no way to identify javascript in node.js
      -> V8 engine help node.js to identify javascript in node.js and convert that 
         javascript code into C++ machine level code that can be understood by machine.
    
   ==> LIBUV:
      -> Libuv is an open-source library designed to handle asynchronous I/O
      -> Libuv library provide access to Node.js to use computer os, file system and 
         networking
      -> There are so many features that is provided by the Libuv:
         -> Thread pooling and signal handling
         -> High resolution clock
         -> fs module
      -> Event-queue, Event-loop, and Thread pool are most important part of the LIBUV 
         library.

   ==> Event Queue:
      -> the work of event queue is to keep the incoming requests of client and pass it 
         into the event loop.

   ==> Event-Loop:
      -  The Event Loop is responsible for scheduling and executing callbacks of 
         asynchronous operations such as network and file I/O.
            | Part       | Job           |
            | ---------- | ------------- |
            | OS/libuv   | Do I/O work   |
            | Event Loop | Run callbacks |

      -> If any blocking events/tasks comes to the event loop, event loop offload that 
         task and send it to the thread pool to execute this task and then event loop 
         continue with small tasks.
         
      -  So, the event loop register the I/O callback so that it can be executed later 
         and offload actual work to thread pool, and once the thread pool done the job 
         response goes back to event loop and then event loop execute that registered 
         callback. Not all I/O goes to the thread pool.
         For instance:
            | Type of async work               | Who does it                  |
            | -------------------------------- | ---------------------------- |
            | File system, crypto, DNS (some)  | **Thread pool (libuv)**      |
            | Network I/O (HTTP, TCP, sockets) | **OS kernel (non-blocking)** |

      -> Event loop is the heart of the node.js
      -> Some features of event-loop:
        * Event loop is endless loop which will never sleep until the tasks are not executed.
        * Event loop execute task from event queue only when there is no pending task into 
          the event loop. 
        * Event loop always pick older task from the event queue.
        * Event loop always pick microtask callbacks first then rest(according to the priority).
      -      
         | Feature        | Provided By |
         | -------------- | ----------- |
         | Callbacks      | JavaScript  |
         | Promises       | JavaScript  |
         | Async behavior | Event Loop  |

    ==> Thread pool:
      -> By-default thread pool give us 4 separate threads (it can be further increased)
      -> The event loop offload the heavy task and send it to the thread pool, thread 
         pool pick that task and assign a thread to execute them, once that execution 
         of that heavy/blocking task is done response send back to the event loop by 
         thread pool.

      -> Event loop automatically offload the heavy/blocking tasks
      -> Thread pool is responsible for handling heavy tasks such as:
         * File access
         * Cryptography related things
         * caching password
         * file compression
         *           ..etc
    
   ==> Other libraries:
        -> HTTP parse-> used to parse http 
        -> openSSL -> for cryptography
        -> Zlib -> used for file compression

   ==> Flow of Node.js Architecture:
      -> Client send request to server the requests can be blocking/non-blocking
      -> Node.js retrieve the incoming request and add them into the event queue.
      -> Event queue passes the request into the event loop.
      -> Event loop check if request is non-blocking, it execute it by itself(Event loop), 
         otherwise the request sent to the thread pool
      -> When thread pool receive the request from event loop, it execute them and 
         result of the request sent back to event loop.
*/

// Advantages of Node.js Architecture
// Handling multiple concurrent client requests is fast and easy
// No need to create multiple threads
// Require fewer resources and memory
