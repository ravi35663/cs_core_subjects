/*
==> High Level System Design:
    -> We have set of requirements to build a product out of it (requirement).
        -> Decide architecture
        -> Decide components (Cache, DB, Servers, CDN and many more)
        -> Decide Module (Auth Module or many more according to your requirements)
    -> how these things interact to each other to solve a problem or develop a product  
*/
/*
==> Why it is so popular?
    -> Every Single 'Tech' product is a 'system' this has been 'designed'.
    -> Companies are building product and need you all to design it.
*/
/*
==> Why Understanding system design is important?
    ->  This is what people do at work (Designing system)
    ->  Onces you grow in your career you'll spent 80% of the time doing this 
        (Designing System)
    ->  System design is hence relevant for literally everyone.
*/
/*
==> Side Effects of System design: 😅:
    -> You solve real problems, not something made up
    -> You will break down problem statement
    -> Re-wires your brain to think in a structural way
        -> Considering all possible cases
        -> To deliver a great uses experience
*/
/*
==> What will we do when we design a system?
    1) Break-down problem statement into solvable sub-problem
    2) Decide key Components and Responsibilities
    3) Decide Boundaries of each components
    4) Touch upon key challenges in scaling it
    5) Make our application fault tolerant and available 
*/
/*
==> How to approach System design?
    ->  System design is Extremely practical and there is a structural way to tackle the 
        situation
    ->  Take Baby Steps, No matter what 😅

1) Understand the problem statement: ******* :- MVVI:
    ->  Without having a thorough understanding of the problem at hand we would easily 
        digress(diverge)

2) Break it down into components (Essential):
    -> Do not break components for the sake of it, only add if it is necessary 
    -> Create components that you know are must.
        e.g: Design Facebook:
                Auth, Notification, Feed, Gamification ] Components/Features
            -> When problem statement is too big break it down in features
            -> See in picture-a

3) Dissect Each Components:
    e.g: Feed might have generator, aggregator, webserver:
        ->  Generator is used to generate feed: 
        ->  Webserver(server feed) used to show the feeds: (Reading part of the feed)
        ->  Aggregator to make filter on the feed, you may sure and not sure about it so 
            it is optional to put on.
        ->  See in picture-b:

4) For Each sub-problem(Components) look into:
    1)  Database and caching: Storage
    b)  Scaling & fault tolerance: One or More servers: 
        (How my system survive if request comes in millions)
    c)  Async Processing (Delegation): Delegation task to complete by other while you 
        doing other tasks
    d)  Communication : Http, FTP, Web-socket ..etc:

5) Add more sub-components if needed:
    -> Understand the scope
    -> Decide how often components will talk to this new one
    -> Decide on 4 above factors for this new component
    -> Repeat:

==> Note: 
    ->  For Bigger problem start top-down approach to solve the problem. That is, design 
        high level what you understand and go deeper at low level like code level.
    ->  For smaller problem follow the bottom up approach:
*/
/*
==> How Do you know that you have build a good system?
    ->  Every system is "infinite" buildable and knowing when to stop the evolution is 
        very important.

==> Here are some pointers that will help you.
    1)  You broke your system into components. follow picture-a.
    2)  Every components has a clear set of responsibilities ** (Exclusive that is independent)
        like:
            ->  Feed webserver -> it serves feed over http
            ->  Feed Generator -> Pull data (Candidate feed items like followers, 
                recommendation, ..etc) from multiple services and put them into DB.
            ->  Feed Aggregators -> Combine candidate items fetch by generator filter out 
                redundant, ranks and create a final consumable feed.

    3)  For Each components, you've slight technical details figured out
        -> Database and caching
        -> Scaling & Fault tolerance
        -> Async processing (Delegating: providing tasks to complete by other)
        -> Communication 

    4)  Each component (in isolation) is:
        -> Scalable -> Horizontal Scalable
        -> Fault tolerant  
            -> Plan for recovery (Mostly data) in case of a failure 
                -> To a stable state
        -> Available 
            -> Components should functions even when some components "fails"

    ->  This is precisely how we would tackle every single system. Tackle every single 
        failure that will cause to your application at any level like: what if if any 
        system failed, handle the case where your system went to outage, handle every 
        thing then your system will be good.
*/