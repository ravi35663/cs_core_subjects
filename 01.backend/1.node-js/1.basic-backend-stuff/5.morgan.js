/*
=> What is Morgan:
    ->  Morgan is a HTTP request logger middleware for Node.js / Express.
    ->  Morgan automatically logs details of every incoming HTTP request such as:
        1)  HTTP method
        2)  URL
        3)  Status code
        4)  Response time
        5)  Content length
*/
/*
=> Why do we use Morgan?
    ->  We use Morgan to monitor, debug, and audit HTTP requests in an application.
    ->  Instead of manually writing 'console.log' for every request, Morgan:
            1) Logs requests consistently
            2) Logs them automatically
            3) Logs them in standard formats

=> What problem does Morgan solve:
    =>  Without Morgan:
        ->  app.get('/users', (req, res) => {
                    console.log(req.method, req.url);
                    res.send("Users");
                });
        ->  Repetitive
            Error-prone
            Not standardized

    =>  With morgan:
        ->  app.use(morgan('dev'))
        ->  ✔ Clean
            ✔ Standard
            ✔ Centralized

=> How Morgan Works (Internally):
    ->  Morgan sits in the middleware chain:
    ->  Client → Morgan → Routes → Response
        a) Logs request info
        b) Calls next() so request continues
        c) Does NOT modify request/response        
*/
/*
=> Common Morgan Log Formats:
    1)  dev (Most common in development):
        -   app.use(morgan('dev))
        -   Example: GET /api/users 200 12.345 ms - 1234
                1)  Color-coded
                2)  Fast
                3)  Easy to read
    2)  combined (Production standard):
        ->  app.use(morgan('combined'));
        ->  Example: 127.0.0.1 - - [10/Oct/2025:10:00:00 +0000] "GET /api/users HTTP/1.1" 200 1234
                1) ✔ Apache-style logs
                2) ✔ Suitable for log files

    3) Other Formats:
        | Format   | Use case           |
        | -------- | ------------------ |
        | `tiny`   | Minimal logs       |
        | `short`  | Compact            |
        | `common` | Standard HTTP logs |

    4)  Custom Morgan Format:
        ->  app.use(morgan(':method :url :status :response-time ms'))
*/
/*
=> Benefits of Using Morgan:
    1)  Easy Debugging:
        ->  See which endpoint was called
        ->  Identify failing requests (4xx / 5xx)

    2) Performance Monitoring:
        ->  Logs response time
        ->  Helps find slow APIs

    3)  Centralized Logging:
        ->  One middleware logs all requests
        ->  No duplicate code in routes

    4)  Production Monitoring
        ->  Helps with auditing
        ->  Useful for tracing issues in logs

    5)  Works with Log Files:
        ->  You can writes logs into files as well.
            const fs = require('fs');
            const path = require('path');

            app.use(
                morgan('combined', {
                    stream: fs.createWriteStream(
                    path.join(__dirname, 'access.log'),
                    { flags: 'a' }
                    )
                })
            );
*/
/*
=> When NOT to use Morgan?
    ->  If you already use advanced logging tools like:
            1) Winston
            2) Pino
            3) Datadog
    ->  But even then, Morgan can still be integrated with them.
*/
/*
==> Morgan Vs console.log
    | Morgan           | console.log  |
    | ---------------- | ------------ |
    | Structured       | Unstructured |
    | Standard formats | Manual       |
    | Middleware-based | Scattered    |
    | Production-ready | Not ideal    |
*/