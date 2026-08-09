/*
=> What is jsonwebtoken?
    ->  jsonwebtoken is a Node.js library used to create and verify JWT tokens 
        for authentication and authorization.

=> Why do we use it:
    ->  To implement stateless authentication
    ->  No server-side session storage
    ->  Easy to scale APIs

=> How JWT Works (Simple Flow):
    ->  Login → 
        Server creates token → 
            Client stores token → 
                Client sends token → 
                    Server verifies token
*/
/*
    Create a JWT (Sign)
*/
const jwt = require('jsonwebtoken');
const token = jwt.sign(
  { userId: 1 },          // payload // Not encrypted // Payload contains user info
  'SECRET_KEY',           // secret
  { expiresIn: '1h' }     // expiry
);
console.log("Token will be created: ",token);

//Verify a JWT
jwt.verify(token, 'SECRET_KEY', (err, user) => {
    if (err) return res.status(401).send('Invalid token');
    console.log(user); // payload data
});
  
// JWT as Middleware (Most Common)
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Unauthorized');
  
    req.user = jwt.verify(token, 'SECRET_KEY');
    next();
};
/*
    ->  Protects routes
    ->  Adds user info to req
*/
/*
Benefits of jwt:
    1) Stateless & scalable
    2) Secure (signed tokens)
    3) Works well with REST APIs
*/
/*
=> Important Notes
    1) JWT payload is NOT encrypted
    2) Always use expiry
    3) Do not store sensitive data
*/
/*
=> Important Parts of a JWT Token:
    ->  A JWT (JSON Web Token) has 3 parts, separated by dots (.):
        e.g: HEADER.PAYLOAD.SIGNATURE
        1) Header
        2) Payload
        3) Signature
        ->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
            eyJ1c2VySWQiOjEsImV4cCI6MTcwMDAwMDAwMH0.
            abc123xyz
*/
// Parts of jwt:
/*
1) Header – How the token is signed:
    {
        "alg": "HS256",
        "typ": "JWT"
    }
    Contains:
        Algorithm used (HS256, RS256)
        Token type (JWT)
        ->  Converted to Base64Url
*/
/*
2) Payload – User data (claims):
    {
        "userId": 1,
        "role": "admin",
        "exp": 1700000000
    }
    Contains:
        1) User info (claims)
        2) Expiry time (exp)
        3) Issuer (iss), subject (sub), etc.

    ⚠️ Not encrypted (only encoded)
    ->  Converted to Base64Url
*/
/*
3) Signature – Security & integrity:
    ->  The signature is created using:
        HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            SECRET_KEY
        )
    ->  Prevents tampering
    ->  Verifies token authenticity
*/
/*
==> How JWT Token Is Made Internally (Step-by-Step):
    Step 1: Create Header using some algorithm: Base64Url encode
    Step 2: Create Payload: Base64Url encode
    Step 3: Generate Signature
        Combine encoded header + payload
        Sign with secret key
*/