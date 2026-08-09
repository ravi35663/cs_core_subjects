/*
==> How to Build a Server in NodeJS?
    ->  The 'http' module is a core module in NodeJS that allows you to create a server 
        that listens for requests on a specific port and sends responses
*/
let http = require('http');
let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end('Hello, World!\n');
})
let port = 5000;
server.listen(port,'localhost',(err)=>{
    if(!err){
        console.log("Server is being listen at port: ",port);
    }
})

/*
==> What is an HTTP Module?
    The http module in NodeJS provides functionalities to create HTTP servers and 
    clients.

==> Important Functions of http modules:
    ->  http.createServer(): Creates an HTTP server that listens to requests and sends 
        responses.
    ->  req.method: Retrieves the request method (GET, POST, etc.).
    ->  req.url: Retrieves the URL of the request.
    ->  res.writeHead(): Sets the status code and headers for the response.
    ->  res.end(): Signals to the server that all of the response headers and body have 
        been sent.
*/

/*
    // Example-2
    let server2 = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the homepage!\n');
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the about page!\n');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found\n');
        }
    });

    server2.listen(3000, '127.0.0.1', () => {
        console.log('Server running at http://127.0.0.1:3000/');
    });
*/


/*
==> Parts of a URL and How URLs Work in NodeJS:
    ==> URL stands for 'Uniform Resource Locator' which is used to specify addresses on the web.

==> Components of a URL:
    1) Protocol: The method used to access the resource. (e.g., http, https, ftp)
        Example: https://
    2) Hostname: The domain name or IP address where the resource is hosted.
        Example: www.example.com
    3) Port: The port number where the server is listening. (default for http is 80 and for https is 443)
        Example: :8080 (optional)
    4) Pathname: The path to the specific resource.
        Example: /path/to/resource
    5) Query String: Key-value pairs used to pass data to the server.
        Example: ?id=123&name=John
    6) Fragment: A reference to a section within a resource.
        Example: #section1 (optional)

        URL: https://www.example.com:8080/path/to/resource?id=123&name=John#section1
*/
/*
==> How URLs Work in NodeJS?
    NodeJS provides the url module to work with URLs, making it easy to parse and extract 
    them.
*/

let url = require('url'); // Core library:
// Sample URL
let myURL = 'https://www.example.com:8080/path/to/resource?id=123&name=John#section1';

// Parsing the URL
let parsedURL = url.parse(myURL, true);

console.log("Parsed URL: ",parsedURL);
let urlObject = {
        protocol: 'https',
        hostname: 'www.example.com',
        port: '8080',
        pathname: '/path/to/resource',
        query: { id: '123', name: 'John' },
};

let formattedURL = url.format(urlObject);
console.log(formattedURL); // 'https://www.example.com:8080/path/to/resource?id=123&name=John'

/*
url.resolve():
    -> It resolves a target URL relative to a base URL.
*/

let base = 'https://www.example.com/home/';
let relative = 'about';

let resolvedURL = url.resolve(base, relative);
console.log(resolvedURL); // 'https://www.example.com/home/about'


/*
==> Methods of HTTP
    =>  HTTP methods define the type of action to be performed on a resource. They are the foundation of 
        RESTful web services.

==> Common HTTP Methods:
    1) GET: Retrieve data from the server.
    2) POST: Send data to the server, often to create or update resources.
    3) PUT: Update an existing resource on the server.
    4) DELETE: Remove a resource from the server.
    5) PATCH: Apply partial modifications to a resource.
    6) HEAD: Same as GET, but without the response body.
    7) OPTIONS: Describes the communication options for the target resource.
*/

let http = require('http');

let server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request received\n');
    } else if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received\n');
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end(`${req.method} not allowed\n`);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

/*
==> Express Introductions:
    ->  Express is a fast, un opinionated, minimalist web framework for NodeJS. It simplifies the process 
        of building web applications and APIs by providing a robust set of features and middleware.


==> The Problem Express Solves
    ==>  Complexity in HTTP Server Handling:
        ->  In vanilla NodeJS, managing routes, handling different HTTP methods, and working with 
            middlewares can become cumbersome (heavy and difficult to carry, use, wear, etc.) as the 
            application grows.
        
        ->  Express abstracts this complexity, allowing developers to write cleaner and more maintainable 
            code.

==> How Express Solves the Problem?
    1)  Routing: Simplifies route handling with a clean syntax.

    2)  Middleware: Provides a way to handle common tasks such as parsing request bodies, handling 
        cookies, and managing sessions.

    3)  Error Handling: Centralized error handling mechanism.

    4)  Third-Party Integrations: Easy integration with various libraries and plugins for extended 
        functionality.
*/


// How to set up express application:
const express = require('express') // first install using 'npm install express'
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world, this is home page");
})
app.post('/home',(req,res)=>{
    console.log("Can create any data:")
    return res.send({})
})

app.listen(3001,(err)=>{
    if(!err){
        console.log("Application is running at port: ",3001);
    }
})

/*
==> Working of Versioning in NodeJS
    -> NodeJS follows SemVer, which is a versioning scheme using three numbers: 'MAJOR.MINOR.PATCH'.

    1) MAJOR: Introduces breaking changes.
    2) MINOR: Adds functionality in a backward-compatible manner.
    3) PATCH: Backward-compatible bug fixes.

==> NodeJS Version Management
    NodeJS releases come in two types:
        1) LTS Releases: Recommended for most users; focus on stability and security.
        2) Current Releases: Include the latest features but may not be as stable as LTS.

==> Using Node Version Manager (NVM):
    Node Version Manager (NVM) is a tool that allows you to install and switch between different 
    versions of NodeJS easily.

==> Example of Version Switching:
    
    nvm install 16.0.0
    nvm use 16.0.0
    node -v # Outputs: v16.0.0

    nvm use 14.17.0
    node -v # Outputs: v14.17.0

    nvm list ==> To list down all installed versions of node:
*/