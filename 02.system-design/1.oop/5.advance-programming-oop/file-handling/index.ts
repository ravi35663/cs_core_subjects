/*
==> File handling in oops:
    ->  Importance of file handling in oop
    ->  File class
    ->  FileReader and BufferReader
    ->  FileWriter and BufferWriter
    ->  Try With Resources
    ->  Logging Application Data
    ->  Common file handling issues

*/
/*
==> What is file handling:
    ->  File handling is the process of creating, opening, reading, writing, and 
        closing files so that a program can persist data permanently outside the 
        application’s memory.
    ->  In OOP, file handling means encapsulating file operations inside classes so 
        data access is structured, reusable, and safe.
*/
/*
=> Why File Handling is Needed (Real Life)
    ->  Store user data (profiles, logs)
    ->  Save application state
    ->  Read configuration files
    ->  Generate reports (PDF, CSV, logs)

Note:
    Memory (RAM) → temporary
    File (Disk) → permanent
*/
/*
=> File Handling without OOP (Problem):
    ->  
        const fs  = require('fs') // file system
        fs.writeFileSync('data.txt',"Hello")
    ->  Issues:
        ❌ Hard to maintain
        ❌ No abstraction
        ❌ Repetition
        ❌ Poor error handling
*/
/*
==> File Handling in OOP (Correct Approach):
    Key OOP Concepts Used
        ->  Encapsulation → hide file logic
        ->  Abstraction → expose simple methods
        ->  Single Responsibility → one class = one purpose
        ->  Polymorphism → different file types
*/
// Basic OOP Structure:
class FileManager{
    write(path:string,data:string){}
    read(path:string):string{
        return ''
    }
}
// Application code doesn’t care how file is handled.
// Simple TypeScript OOP Example
const fs = require('fs');
class FileHandler{
    writeFile(path:string,data:string):void{
        fs.writeFileSync(path,data);
    }
    readFile(path: string):string{
        return fs.readFileSync(path,"utf-8");
    }
}
const file = new FileHandler();
file.writeFile("data.txt", "Hello OOP");
console.log(file.readFile("data.txt"));

// Real-World OOP Example:
class Logger{
    log(message:string){
        fs.appendFileSync('app.log',message+"\n");
    }
}
/*
Used in:
    APIs
    Microservices
    Production systems
*/
/*
Note:
    ->  File handling in OOP is not about syntax, it’s about designing a clean, 
        reusable, and safe file-access layer.
*/
/*
=> FileReader and BufferedReader (TypeScript equivalent):
    ->  fs.readFileSync() → FileReader
    ->  Streams → BufferedReader
*/
import * as fs from "fs";
class FileReader {
    read(path: string): string {
        return fs.readFileSync(path, "utf-8");
    }
}
// Buffered reading (OOP-friendly)
class BufferedFileReader{
    read(path:string):void{
        const stream = fs.createReadStream(path,{encoding:'utf-8'})
        stream.on("data",(chunk)=>{
            console.log(chunk);
        })
    }
}
/*
✔️ Streams = buffering
✔️ Memory efficient
✔️ Used for large files
*/

//FileWriter and BufferedWriter (TypeScript equivalent):
// TypeScript equivalent:
class FileWriter{
    write(path: string, data: string): void{
        fs.writeFileSync(path,data);
    }
}

// Buffered writing (Streams):
class BufferedFileWriter{
    write(path: string, data:string): void{
        const stream = fs.createWriteStream(path);
        stream.write(data);
        stream.end();
    }
}
// ✔️ Better performance
// ✔️ Suitable for logs & large data

/*
=> Try-With-Resources (TypeScript equivalent):
    ->  TypeScript uses:
        ->  try/catch/finally
        ->  Streams auto-close on end()
*/
class SafeFileReader{
    read(path: string): string{
        try {
            return fs.readFileSync(path,'utf-8')
        } catch (error) {
            throw new Error("File read failed")
        }finally{
            // Cleanup if needed
        }
    }
}
// ✔️ No memory leak
// ✔️ Controlled resource lifecycle

/*
=> Logging Application Data (Very Important): 
    ->  Logging is a real-world OOP use of file handling.
*/ 
// Logger class (OOP design):
class Logger{
    private file = new File('app.log');
    log(message: string):void{
        const entry = `${new Date().toISOString()} - ${message}\n`;
        fs.appendFileSync('app.log',entry);
    }
}
const logger = new Logger();
logger.log("User logged in");
// Centralized logging
// ✔️ Reusable
// ✔️ Production-grade design

/*
=> Common File Handling Issues:
    1) File not found
    2) Permission issues: OS denies access
    3) Resource leaks:  Not closing streams
    4) Large file memory crash: Using readFileSync instead of streams
    5) Tight coupling:  File logic mixed with business logic
*/

/*
| Java               | TypeScript            |
| ------------------ | --------------------- |
| File               | Custom File class     |
| FileReader         | fs.readFile           |
| BufferedReader     | Streams               |
| FileWriter         | fs.writeFile          |
| BufferedWriter     | Write streams         |
| Try-with-resources | try/finally + streams |
*/