/*
==> Global Object:
    console.log("Global Object is ",global); // This will show you global object
    console.log("Global is equal to this: ", global === this) // true

==> Note:
    ==> Only one global level not on module level:
        ->  globalThis === global    ==> true
        ->  globalThis === this      ==> true
        ->  global === this         ==> true
*/
/*
==> setTimeout:
    var int = global.setTimeout(() => {
        console.log("time interval is cleared ",int);
        global.clearInterval(int);
    }, 5 * 1000);
*/

/*
==> setInterval:
    var int = global.setInterval(() => {
        console.log("this will run on every 1 second");
    }, 1*1000);
    // If you want to cancel interval run you can use 'clearInterval(int)'
*/
 
// console.log(__dirname)// /Users/ravi35663/Projects/Learning/node-js
// console.log(__filename)// /Users/ravi35663/Projects/Learning/node-js/global.js

// In node we cannot use DOM
/*
=> global:
    ->  In Node.js, global is the equivalent of the global object in other environments 
        like window in browsers.
    ->  All global variables, functions, and objects like console, setTimeout, 
        process, etc., are properties of the global object.    
*/
global.myVar = "Hello, World!";
console.log(myVar); // "Hello, World!"
/*
    However, it's generally discouraged to create global variables like this because it 
    can lead to conflicts and unexpected behavior.
*/
/*
==> this:
    ->  In the top-level scope of a node.js module, 'this' does not refer to 
        the global object. instead, 'this' refers to the current module (exports or module.exports).
*/

console.log(this === global); // false
console.log(this === module.exports); // true

/*
===> globalThis:
    ->  globalThis is a standardized way introduced in ECMAScript 2020 to refer to the 
        global object, whether you're in a browser, Node.js, or another environment. 
        It ensures consistency across different environments.
    ->  In Node.js, 'globalThis' refers to the same object as global, making it another 
        way to access the global scope.
*/

globalThis.myVar = "Hello!";
console.log(global.myVar); // "Hello!"

/*
==> IP Address:
    ->  These are addresses for the computer that where is the computer exactly placed.
    ->  Location of the computer.
    ->  All computers have their own ip address which is unique.
    ->  https is used to request 
*/ 