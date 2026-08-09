/*
==> Middleware in node:
    ->  Middleware is a function that sits between the request and the response 
        in a Node.js (Express) application.
    -> It has access to:
        - req (request)
        - res (response)
        - next() (to pass control to the next middleware)
    ->  Basic Syntax:
        (req,res,next){
            // Do some things:
            next() // pass control to next middleware.
        }
*/

/*
=> Why do we use Middleware:
    ->  Middleware helps us separate concerns and avoid repeating code.
    ->  We use middleware to:
        1)  Modify request or response
        2)  Validate data
        3)  Authenticate users
        4)  Handle errors
        5)  Log requests
        6)  Parse request bodies
        7)  Secure applications
            and many more actions we can perform.

    ->  Instead of writing the same logic in every route, we write it once as 
        middleware and use in every routes or add in one top of the routes.
*/
/*
=> Middleware Flow (Request Lifecycle):
    ->  Client → Middleware 1 → Middleware 2 → Route Handler → Response
*/
/*
=> Types of Middleware in Node.js (Express):
    1)  Application-level Middleware:
        ->  Applied to all or specific routes.
        app.use((req,res,next)=>{
            console.log("Method: ",req.method);
            next();
        })

    2)  Router-level Middleware: can have multiple routes.
        ->  Applied to a specific router.
            const router  = new Router();
            router.user(authMiddleware)

    3)  Built-in Middleware (Express):
            Middleware	                Purpose
            express.json()	            Parse JSON request body
            express.urlencoded()	    Parse form data
            express.static()	        Serve static files
                            ...and many more.

    4)  Error-handling Middleware:
        ->  Has 4 parameters.
        ->  Example:
            app.use((err,req,res,next)=>{
                res.status(500).json({error:err.message});
            })
*/
/*
=> Important middleware used in node (commonly):
    1)  Authentication/Authorization:
        ->  Verify JWT
        ->  Check user roles
            Example:
            const auth = (req, res, next) => {
                if (!req.user) return res.status(401).end();
                next();
            };

    2)  Request Parsing:
        ->  express.json()
        ->  express.urlencoded()

    3)  Logging:
        ->  Log requests, status codes, response time

    4)  Security:
        ->  Prevent attacks (XSS, CSRF, etc.)
*/
/*
=> Important Middleware Libraries in Node.js:
    | Library                | Use                                           |
    | ---------------------- | --------------------------------------------- |
    | **express**            | Web framework (middleware-based)              |
    | **body-parser**        | Parse request bodies (now built into Express) |
    | **cors**               | Enable Cross-Origin Resource Sharing          |
    | **morgan**             | HTTP request logging                          |
    | **helmet**             | Secure HTTP headers                           |
    | **jsonwebtoken**       | JWT authentication                            |
    | **multer**             | File uploads                                  |
    | **cookie-parser**      | Parse cookies                                 |
    | **express-session**    | Session management                            |
    | **bcrypt / bcryptjs**  | Password hashing                              |
    | **express-rate-limit** | Rate limiting (DDoS protection)               |
*/