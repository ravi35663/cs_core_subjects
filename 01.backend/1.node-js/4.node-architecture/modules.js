// What are modules in Node.js?
/*
    ->  Modules are used to separate your code into different files so that you can re-use 
        them withing your application

    ->  Modules are collection of javascript functions and object that can be used by external 
        applications/files.
*/

/*
    Types of Node-Modules:
    1) Core Modules: modules that are pre-installed with node.js. (fs, os, cryptography)
    2) Local Modules: custom modules that are created inside the application. (task.js file)
    3) 3rd party modules: those module which are installed with npm.(express,lodash,moment .etc)
    
==> Note: Modules can be import with require (in synchronous way) and import (async way).
*/

/*
    Way of exporting modules:
    Way-1:
    function add(a,b){
        return a+b
    }
    function multiply(a,b){
        return a+b
    }
    Exporting functions
    module.exports = {add,multiply}

    Way-2:
    function sub(a,b){
        return a-b
    }
    
    Export the function:
    exports.sub = sub
*/
