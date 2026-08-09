// Differences between Node.js and the Browser
/*
    -> Both the browser and Node.js uses javascript as their programming language.
    -> Building app that run on browser is completely different to app build on node.js
    -> Despite the fact that it's always JavaScript, there are some key differences that make 
       the experience radically different.
*/

/*What changes is the ecosystem.*/
/*
    ->  In the browser, most of the time what you are doing is interacting with the DOM, or 
        other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. 
        You don't have the 'document', 'window' and all the other objects that are provided by 
        the browser in the node.
    
   ->   And in the browser, we don't have all the nice APIs that Node.js provides through its 
        modules, like the filesystem access functionality.
       
    ->  In practice, you can use both require() and import in Node.js, while you are limited to 
        import in the browser.
*/