/*
==> What is Node.js and where you can use it:
   -> Node.js is an open-source, server-side javascript runtime environment 
      built on google chrome V8 javascript engine.

   -> The V8 chrome javascript engine allows developers to write javascript 
      outside the browser.
   
   -> Node.js is used to write server side scripts of the applications.
   
   -> We can build scalable and high performance applications using node.js
   
   -> Runtime environment includes everything that you need to run/execute a 
      javascript program at the server side.
   
   -> Both your browser(Chrome) javascript and node.js run on chrome V8 engine. 
      This V8 engine converts your javascript code into faster machine code 
      (low level code) so that your code runs without needing any further 
      interpretation.

   -> npm is the largest ecosystem of open source libraries in the world.
   
   -> Node.js uses an event-driven, non-blocking I/O model that makes it 
      lightweight and efficient.
   
   -> I/O refers to input/output. It can be anything from reading/writing a 
      local file to making an http request to any server.
   
   -> I/O takes time and hence blocks other functions. That is the issue node.js 
      is solving with a non-blocking I/O feature.

   -> Javascript is single threaded (Not really single threaded but it has a 
      single threaded event-loop)
   
   -> V8 is an open-source runtime environment which is written in C++.
   
   -> Javascript --> V8(C++) --> Machine code
   
   -> There are many javascript runtime like chrome V8, SpiderMonkey by Mozila, 
      Chakra by Microsoft and javascript core by apple etc.

   -> Event-Driven meaning in node.js is server always ready for 'actions/events' to 
      listen. i.e when any button is clicked an action with that button will happen 
      at server side in terms of API or something else.
      
   -> Event-Driven means, node is always ready for the events that are going to occur 
      at server side.

   -> When we say "event-driven," which means that the program is designed to respond 
      to specific actions or events, just like your birthday party. The events happen 
      on your birthday like cake cutting, gift opening kinds of events occur at nodes. 
      That is why node.js is called event driven.
      
   -> In Node.js, there is a special tool called ""EventEmitter"" that helps with 
      managing these events. It's like a party organizer that keeps track of what 
      events can happen and what should be done when they happens.

==> Blocking I/O:-
   -> Suppose user1 and user2 made a request to the server. user1’s request is processed and 
      unless the response of user1 is not completed or printed to the screen user2’s 
      request would not be initiated. This is what we call blocking I/O.

==> Non-Blocking I/O :-
   -> Because of the node.js event-loop, node js performs non-blocking I/O.
   -> on the other hand when user2 made a request, instead of waiting request of user1’s to 
      completed server proceeds with user2’s request without using multiple thread but using 
      single thread event-loop.
   -> this non-blocking I/O eliminates the need of multithreading since the server can handle 
      multiple requests at the same time with the help of event-loop.

==> Require :-
   -> require is a function, and it accepts parameters as “path” and returns module.exports 
      things.
   -> require does three things
      1) require load modules that come bundled with node.js like file system(fs) and http 
         from node.js APIs.
      2) require load third party libraries such express, mongoose ..etc that you install 
         from npm.
      3) require let you require your own files and modularize the project.

==> Events in Node.js :-
   -> Something that has happened in our app that we can respond to is known as events.
   -> there are two types of events in node.
      1) System Events: C++ core from library called libuv.(i.e finished reading a file)
      2) Custom Events: Javascript core events
*/

