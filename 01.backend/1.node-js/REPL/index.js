/*
==> REPL:
    ->  Read :- Read the user input and parse it in javascript data-structure and 
        store in memory
    ->  Eval :- Evaluate the data structure
    ->  Print :- Print the result
    ->  Loop :- the terminal is ready to take next input 
    
    -> REPL is used to run javascript in the terminal
    -> REPL is used for debugging and code execution at terminal
    -> you can create your own REPL in node.js 
    -> terminal can gives you auto completion options
*/

/*
==> Node REPL special commands:
    -> .help :- print this help message
    -> .break :- sometimes you get stuck, this gets you out.
    -> .clear :- Alias for .break
    -> .exit :- exit the repl
    -> .load :load js file into repl session then you can use everything of that file
    -> .save : save helps you saving all repl session and history into a file 
*/
// You can create your own REPL:
const repl = require('repl')
const myRepl = repl.start({
    ignoreUndefined:true
})