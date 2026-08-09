// Why Node.js is single threaded?
/*
   -> Node.js describe as "single threaded" because it operates I/O asynchronous tasks in a 
      single thread which is main thread.

   -> Node.js uses an event-driven, non-blocking I/O model, which means that it handles 
      concurrency(switching to tasks) in a single thread by using an event loop.

   -> The event loop efficiently look out for the asynchronous tasks and move to other async 
      task concurrently and when the task is done it keep looking other tasks into the event 
      loop if any comes after that.

   -> Event-loop always run as your sever run and it keep looking for the events to comes.

   -> Because of the event-loop node can handle large number of concurrent connections 
      without the need of creating separate thread to each connection.

   -> The event loop is the heart of the Node.js processing model.
*/
/*
   List down the tasks which can be done asynchronously using the event loop.
   1) I/O Operations: 
      -> Reading from file/database or network socket
      -> Writing to file/database or network socket

   2) Network Requests:
      -> Sending HTTP requests, fetching data from API and any other network connection

   3) Timer and Delay:
      -> Scheduling task to run after certain delay or interval without blocking the main 
         thread 

   4) Concurrency:
      -> Perform multiple task execution concurrently, especially in scenarios where one task 
         is not depends on result of other tasks.

   5) Callbacks and Promises:
   
   6) Event Handling:
         ............etc

*/