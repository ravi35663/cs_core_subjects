/*
    Webpack:
        webpack is modules bundler for javascript applications. webpack process your
        application's modules into one or more than one bundles, often a single bundle
        It is used to optimize your application on browser.
        Generally it gives you three files which is .js, .html and .css file

    Why Do we need webpack?
    -> Getting each time page from server take time to load so we webpack make bundle
       of small-small chunk so that you don't have to make HTTP request again and again
       and then your application will be more optimized. 
       Your application performance increased and load time will reduced.
*/

/*
    Webpack Vs Babel:
    -> webpack bundle your javascript modules all together and generate single or multiple
       bundle while babel transpile your modern (ES6+) code into ES5 code which is understandable 
       by most of the older browser.
    -> webpack used to reduce load time of page.
    -> webpack bundle JavaScript, CSS, and images files
    -> webpack bundle asset files as well.

    Babel: Transforms modern JavaScript into backward-compatible versions for broader 
           browser support.

    What is a JavaScript bundler:
    -> A javascript bundler is a tool that used to put all your code and dependencies 
       together into one .js file. It is used to optimize the load time of the app.
    
    Why do we need bundler?
    -> What if you have multiple file which is included in multiple script tag and one
       file is dependant on other files. that is the issue bundler is solving it putting
       all your files into one .js file so that everything you need is available for you. 
*/