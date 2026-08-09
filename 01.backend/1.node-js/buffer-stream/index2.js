/*
  ==> A Writable Stream
    ->  A writable stream is a stream of data that is created to write some streaming data.
    ->  For example, creating a write stream to write a text file for some streaming data.
      const fs = require('fs')
      const writeStream = fs.createWriteStream('./dump.txt');
    
    * In the above code, we created a write stream to write some streaming data to a file 
      named dump.txt.

    * Running the above two lines creates a file with the named 'dump.txt' but without any 
      data inside it.

    * to actually write some data into it, we can use writeStream.write('some data')
    writeStream.write('hello\n');
    writeStream.write('world\n');
*/

const fs = require('fs')
const writeStream = fs.createWriteStream('./dump.txt');
/*
  ->  In the above code, we created a write stream to write some streaming data to a file named dump.txt.
  ->  Running the above two lines creates a file with the named 'dump.txt' but without any data inside it.
*/

// * to actually write some data into it, we can use writeStream.write('some data')
writeStream.write('Hello World,\n');
writeStream.write('This is Ravi from planet Earth.\n');

/*
==> Stream Piping and Unpiping:
  ->  In an Express application, the req (request) and res (response) for a request handler are streams. 
  ->  A req is a readable stream of data whereas res is a writable stream of data.
  ->  Considering this for an HTTP request, we have to serve a really large file, we can do so by using
      streams.
*/

