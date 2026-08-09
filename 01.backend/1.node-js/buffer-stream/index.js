// What is Buffer, Piping & Stream Chaining in Node.js
/*
==> Stream:
    ->  Stream is a sequence of data which is used to represent in small to big files.
    ->  To handle and manipulate stream data like a video, a large file, etc., we need 
        stream in node.
    ->  The streams module in node.js manage all streams
    ->  In an Express application, the req (request) and res (response) for a request 
        handler are streams. A req is a readable stream of data whereas res is a writable 
        stream of data.
*/
/*
==> Types of streams:
    1) Readable Stream:
        -> To create a stream of data for reading (say, reading a large file in chunks).
    2) Writable Stream:
        -> To create a stream of data for writing (say, writing a large amount of data to a file).
    3) Duplex Stream:
        -> To create a stream of data for writing/reading at the same time
        -> We can read and write to a duplex stream (say, a socket connection between a client and a server).
    4) Transform streams:
*/
/*
==> Buffer in stream:
    ->  Streams work on a concept called buffer.
    ->  Stream hold data in a temporary memory called buffer. Once the part of the buffer 
        data is executed it is automatically removed from the buffer.
    ->  A buffer is a temporary memory that a stream takes to hold some data until it is 
        consumed.
*/
/*
==> Streams and EventEmitters
    ->  Streams extend EventEmitters
    ->  Node.js streams extend the EventEmitter class. We can listen to events like 'data', 
        'open' and 'end' in streams.
    ->  To simply listen to an event, we need to use the stream.on() function available 
        in the stream.
*/
/*
==> Read Streams in Node.js:
    ->  You can also pause and resume a stream in Node.js by simply calling the pause() 
        and resume() function on the stream.
*/
// Example of Flowing data:
const fs = require("fs")
var readStream = fs.createReadStream('./data.txt');

readStream.on('data', chunk => {
    console.log('---------------------------------');
    console.log(chunk); // this will gives you buffer data
    console.log('---------------------------------');
});

readStream.on('open', () => {
    console.log('Stream opened...');
});

readStream.on('end', () => {
    console.log('Stream Closed...');
});


/*
==> Flowing and Non-Flowing Streams: there are two types of readable streams:
    1) Flowing stream :— 
        A stream that keeps on passing the data that can be directly listened to by using 
        the 'data' event on the stream.

    2) Non-flowing stream :— 
        A stream that does not push data automatically. Instead, the stream stores the 
        data in the buffer and we need to explicitly call the read() method of the stream 
        to read it.
*/
/*
    This is example of non-flowing data:
    const fs = require("fs")

    var readStream = fs.createReadStream('./data.txt');
    setTimeout(() => {
        const data = readStream.read(10);
        console.log(data);
    }, 10);
*/