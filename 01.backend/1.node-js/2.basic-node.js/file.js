// File system node core module
const fs = require('fs')
// console.log("FS is ",fs)

/*
==> Reading file:
    fs.readFile('./docs/blog1.txt',(err,data)=>{
    // this callback function is fire when first action is done
    if(err){
        console.log("Error is",err)
    }
    // data is in buffer format
    // Buffer is package of data (Binary data)
    console.log("Data is ",data);// this will show buffer data
    // <Buffer 48 65 6c 6c 6f 2c 20 4e 69 6e 6a 61>
    console.log("Data is ",data.toString())// this will exact data of blog1.txt file
    //Hello, Ninja
    })
*/
/*
==> Write file:
    // If file exists then it replaced with new text otherwise new file will be created
    fs.writeFile('./docs/blog2.txt','Hello World , This is Ravi',()=>{
        console.log("Data is written")
    })
*/
/*
==> Directories:
    if(!fs.existsSync('./assets')){
        fs.mkdir('./assets',(err)=>{
            if(err){
                console.log("Some error",err);
            }
            console.log("Folder is created");
        })
    }else{
        fs.rmdir('./assets',(err)=>{
            if(err){
                console.log(err);
            }
            console.log("Folder deleted")
        })
    }
*/

/*
==> Deleting Files:
    if(fs.existsSync('./docs/deleteme.txt')){
        fs.unlink('./docs/deleteme.txt',(err)=>{
            if(err){
                console.log(err);
            }
            console.log('File deleted');
        })
    }
*/
/*
    File system work cannot be done without node js, because it need server to 
    perform such kind of action.
*/
/*
    Example of Synchronous file reading:
    const fs = require('fs')
    *This will block the event loop until the file is read
    const fs.readFileSync('./path/of/file/f.txt','utf8')
    console.log(data);
    * Next line of code won't execute until the file is fully read
*/
/*
    Example of asynchronous file reading:
    const fs = require('fs')
    *This won't block. Node.js will continue executing the next lines of code.
    fs.readFile('./path_of_file/t.txt','utf8',(err,data)=>{
        console.log("Data is :",data);
    })

    *This line can execute even if the file hasn't been fully read yet
    console.log('Reading file asynchronously');
*/