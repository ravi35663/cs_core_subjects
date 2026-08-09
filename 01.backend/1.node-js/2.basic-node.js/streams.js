/*
==> Streams:
    ->  Start using data, before it has finished loading.
    ->  Netflix and youtube they use stream data to play video/audio or any 
        large file.
    ->  Streaming is continuos flow of data from source to destination and it 
        does not wait to load entire data at once.
*/

const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt')
// means we display what we have in file and there is no need to parse that into string
// const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt');
// console.log("Stream stream is",readStream);
/*
    ->  here 'on' is a event lister
    ->  here we're not getting all data at once but we're getting data in pipe 
        with some delay
*/
readStream.on('data',(chunk)=>{
    console.log("---------- New Chunk ----------");
    console.log(chunk); // this is package of data ==> chunk of data
    writeStream.write('\n-----------------------------------New Chunk -----------------------------------');
    writeStream.write(chunk.toString());
})
/*
=> Pipe:
    -> Send, read and write stream data
    -> this is alternative of above read and write stream
*/
readStream.pipe(writeStream);