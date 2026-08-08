/*
=> API (Application programming interface) design, versioning and security:
    -   What 
*/

/*
=> What is an API?
    -   An API is an application programming interface is a set of rules and protocols that allow 
        different software applications to communicate and exchange data.
*/

/*
=> What is REST APIs?
    -   REST stands for Representational State Transfer. REST defines a set of functions like GET, POST, 
        PUT, DELETE, PATCH, ..etc that client can use to access server data. Client and servers 
        exchange data using HTTP.
    -   The main feature of REST API is statelessness.
    -   Statelessness means that servers do not save client data between request
*/

/*
=> What are different types of APIs?
    -   APIs are classified both according to their architecture and scope of use.
    -   Here are scope of APIs:
        1) Private APIs: 
            -   These are internal to an enterprise and only used for connecting systems and data within 
                the business internally.

        2)  Public APIs:
            -   These are open the public and may be used by anyone. There may or not be some 
                authorization and cost associated with these types of APIs.

        3)  Partner APIs:
            -   These are only accessible by authorized external developers to aid business-to-business 
                partnerships. (Any third party apis that need keys to access)

        4)  Composite APIs:
            -   These combine two or more different APIs to address complex system requirements or 
                behavior
*/
/*
=> Things to keep in mind for the APIs:
    -   Many users will be using it
    -   Code is for now, API is forever
    -   Cannot modify the existing fields in request
    -   Cannot modify the existing response fields
    -   Inform users/customers that new version is there
    -   Keep the old version running till everyone has offloaded.    
*/

/*
=> API lifecycle across teams:
    -   Suppose you're creating a feature for that backend api is needed and that api need to integrated 
        on frontend. Instead of waiting backend api to complete the frontend guy need to wait which is 
        not correct. So we create a contact on open API or any other tool to mock the api request and 
        response as contact then backend guys work on that api and frontend guys will parallelly use 
        mock api.
    -
    Stage:                      Backend:                                Frontend:
    Contract first              Define DTO's and Open API spec          User mock server in parallel
    Dev & Test                  Build controllers and services          Mock -> Real API
    Integration Testing         Validate contract                       Ensure compatibility
    Deployment                  Maintain old versions                   Release client incrementlly
    Evolve                      Add optional fields                     Maintain backend compatibility                        
*/

/*
=> Advance REST Principles, Sensitive operations:
    -   Resource Naming:
    -   Bad URL                                     Good URL:
        /getUserDetails ? id = 123                  GET /api/v1/users/123
        /addBookToShell                             POST /api/v1/shelves/{id}/books
        /cancel-order                               POST /api/v1/orders/{id}/cancel

    -   Use plural nouns (like users, books, orders ..etc). Use HTTP verbs to describe the action
    -   Example: POST /users    -> Create
                 GET /users/123 -> Get user

    - Why Plural nouns: 
        -   Rest sees data as resource, not as functions. Think of a resource like an object or row in a table.
        -   The HTTP method describes what to do with it.
*/

/*
=>  Idempotency Key:
    -   Client granted unique identification (UUID) that tells the server. These multiple requests are 
        the same intent. Please don't proceed them more than once. Like payment cannot not proceed with 
        more than one for one kind of requests.
    -   Example:    
            POST:
            Header: Idempotency - Key: <UUID>

*/

/*
=> DTO (Data Transfer Object) contact - Designing Contracts:
    -   Includes:
            -   All required fields upfront
            -   Future addition should be nullable or optional
            -   Avoid leaking sensitive data: API keys or DB

    -   Try to use enum(ACTIVE, INACTIVE) with meaning instead of '1' or '0'
*/

/*
=> Error Handling:
    -   Always use a structured error response, even for 4xx(Client) or 5xx(Server)
    -   Example:
        {
            timestamp:" some time",
            status: 400,
            error:  "Bad request",
            message:    "Invalid Email",
            path:   "/api/v1/users"
        }
*/

/*
=> Common HTTP status code categories:
    Category        Code Range          Meaning                     Example:
    2xx             200-299             Success                     200 ok, 201 created
    3xx             300-399             Redirection                 301 moved permanently
    4xx             400-499             X client error              400 bad request,  404
    5xx             500-599             Server Error                500 Internal server Error
*/

/*
=> Filtering, Sorting and pagination:
    -   Filtering:  GET |   /api/v1/problems? tags = dp, greedy & difficulty = easy
    -   Sorting:    GET |   /api/v1/problems? sortBy = createdAt & order = desc
    -   Pagination: Get |   /api/v1/problems? page = 2 & size = 10:
        - Return meta data as well (data about data like total pages, total items, current page ..etc) 
*/

/*
=>  API security considerations:
    -   Secure your contact design:
        -   Don't expose sensitive data
        -   Avoid sending token in URL data
        -   Don't rely on frontend to validate inputs
        -   Authentication is about identity
        -   Authorization is about permission

    -   Common Auth Methods:    API keys, Session Cookies, JWT
*/

/*
=> Throttling VS Rate Limiting:
    -   Rate limiting is the practice of restricting the number of requests a client cam make to your 
        API within a defined time window.
    -   Example:
        -   You can call /api/v1/problems a max of 1000 times per users else 429 too many requests
    -   Your system can return headers :
        -   x - Ratelimit-limit: 1000
        -   x - Ratelimit-remaining: 57
        -   x - Ratelimit-reset: Time
*/
/*
=>  Throttling:
    -   It is about slowing down requests when the traffic is too high or resource are under pressure.
    -   Actions:
        -   Delay the requests
        -   Queue the requests
        -   Drop the requests after a final threshold
*/

/*
=> Monitoring and Observability:
    -   Monitoring:
        -   Watching known metrics

    -   Observability:
        -   Ability to answers unknown questions about the system by inspecting logs, traces, metrics
    - Before deploying your code you must set it up to monitor and observe logs and all.

=>  Must have metrics:
    -   Latency metrics: 
        -   (avg response time, P100: means which req take max time, P99: 99% call happens in some sec, 
            P95: 95% requests happens in some seconds)
        -   Error rate by end-point (count of 4xx, 5xx)
        -   Traffic by api version
    -   Tools:
        -   Prometheus, grafana
*/

/*
=> What is an API endpoint and why is it important?
    -   API endpoints are the final touchpoints in the API communication system. These include server 
        URLs, services, and other specific digital locations from where information is sent and 
        received between systems. 

    -   API endpoints are critical to enterprises for two main reasons: 
        1) Security: 
            -   API endpoints make the system vulnerable to attack. 
            -   API monitoring is crucial for preventing misuse.

        2) Performance:
            -   API endpoints, especially high traffic ones, can cause bottlenecks and affect system 
                performance.
*/

/*
=> How to secure a REST API?
    -   All APIs must be secured through proper authentication and monitoring. 
    -   The two main ways to secure REST APIs include:
        1) Authentication tokens:
            -   These are used to authorize users to make the API call. Authentication tokens check 
                that the users are who they claim to be and that they have access rights for that 
                particular API call. 

            -   For example, when you log in to your email server, your email client uses authentication 
                tokens for secure access.

        2)  API keys :
            -   API keys verify the program or application making the API call. They identify the 
                application and ensure it has the access rights required to make the particular API call. 
                API keys are not as secure as tokens but they allow API monitoring in order to gather 
                data on usage. 

            -   You may have noticed a long string of characters and numbers in your browser URL when 
                you visit different websites. This string is an API key the website uses to make 
                internal API calls.
*/

/*
=> How to create an API?
    -   Due diligence and effort are required to build an API that other developers will want to work 
        with and trust. 

    -   These are the five steps required for high-quality API design:
        1) Plan the API:


*/