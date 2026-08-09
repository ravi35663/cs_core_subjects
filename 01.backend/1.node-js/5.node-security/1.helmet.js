/*
==> What is Helmet Middleware?  
    ->  Helmet is a security middleware for Node.js/Express.
    ->  It helps secure your application by setting HTTP security headers automatically.
    ->  These headers protect your app from:
        1)  XSS (Cross-Site Scripting): Run attacker JS in victim’s browser
        2)  Clickjacking: Invisible UI tricks user clicks
        3)  MIME-type sniffing: Browser misinterprets content type
        4)  Some CSRF(Cross-Site Request Forgery) attack vectors: 
            Forcing a logged-in user’s browser to send unauthorized requests 
            without their consent.
        5)  Information leakage: 
            Accidental exposure of sensitive system or user data through errors, 
            headers, logs, or responses.
*/
/*
=> Why do we use Helmet:
    ->  By default, Express sends very few security headers.
    ->  Without Helmet, your app is more vulnerable to common web attacks.
    -> Helmet:
        ->  Applies best-practice security headers
        ->  Saves you from manually configuring them
        ->  Reduces attack surface with one line of code
            app.use(helmet());
*/
/*
=> What problem does Helmet solve:
    1)  Without Helmet:
        app.get('/', (req, res) => {
            res.send('Hello');
        });

        ->  No X-Frame-Options
        ->  No X-Content-Type-Options
        ->  No XSS protection headers

    2) With Helmet::
        app.use(helmet());
        ->  Adds multiple security headers automatically
        ->  Protects against common browser-level attacks
*/
/*
=> How Helmet Works (Internally):
    ->  Helmet is a collection of smaller middleware functions.
    ->  flow:
          Client → Helmet → Routes → Response
    ->  Helmet:
        ->  Adds security headers to every response
        ->  Does NOT change request or response body
        ->  Calls next() to continue the flow
*/
/*
==> Important Security Headers Added by Helmet:
    1) X-Content-Type-Options:
        ->  'X-Content-Type-Options: nosniff'
            ->  Prevents MIME-type sniffing
            ->  Protects against malicious file execution

    2) X-Frame-Options:
        ->  X-Frame-Options: SAMEORIGIN
            ->  Prevents clickjacking
            ->  Stops your site from being embedded in iframes

    3)  X-XSS-Protection:
        ->  X-XSS-Protection: 0:
            ->  Disables buggy browser XSS filters
            ->  Encourages modern CSP usage

    4) Content-Security-Policy (CSP) (Optional but powerful):
        ->  Controls which scripts, styles, images can load.
            app.use(
                helmet.contentSecurityPolicy({
                    directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'"],
                    },
                })
            );
        ->  Strong defense against XSS
        ->  Prevents loading malicious scripts
    5) Referrer-Policy:
        ->  Referrer-Policy: no-referrer
            ->  Prevents leaking sensitive URLs
*/
/*
==> Benefits of Using Helmet:
    1) Improves Application Security
        ->  Protects against common attacks
        ->  Follows OWASP best practices

    2)  Minimal Configuration
        ->  One line setup
        ->  Sensible defaults

    3)  Production Ready
        ->  Used in real-world, large-scale apps
        ->  Reduces security misconfigurations

    4) Reduces Manual Errors
        ->  No need to remember every header
        ->  Helmet handles it for you
*/
/*
=> Customizing Helmet:
    ->  Disable or configure specific protections:
    ->  app.use(
            helmet({
                frameguard: false, // disable X-Frame-Options
                contentSecurityPolicy: false,
            })
        );
*/
/*
==> When NOT to use Helmet?
    ->  When serving legacy apps that break due to CSP
    ->  When embedding your site in iframes intentionally
        (but you can configure Helmet)
*/