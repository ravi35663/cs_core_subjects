/*
=> Caching:
    ->  Caching are anything that helps you avoid an expensive network I/O, disk I/O or 
        computation.
    ->  Caching is used fetch very frequently accessed data to improve performance.
    ->  Store frequently accessed data in a temporary storage location
    ->  Redis – In-memory key-value store, very fast, supports advanced data structures.
    ->  Memcached – Lightweight, distributed, simple key-value caching system.
        ....and many more
    ->  Cache is kind of temporary memory if data goes down in cache there in no need 
        to worry because data will be anywhere store in db.

    -> Example: 
        1)  API call to get profile information
        2)  Reading a specific line from a file
        3)  Doing multiple table joins
    ->  Example:
                      ( )
                       |  <------>   [[API Server]] <--------> [Database]
                      / \                   ^
                                            ^
                                            |
                                            V
                    {User}               (Cache)
        ->  User make a request that includes many joints in database and that data is 
            frequently asked so data first checked in cache memory if there it will 
            return if not, make that expensive query on db get the data from the db, 
            store it into the cache and then return back to the user.

        ->  Caches are faster and expensive too. Hence we do not cache all data 
            ( just sub-sets of it which is most likely to be accessed)

        ->  Caches that we typically use are Redis and memcached
*/                      
/*
=> Note:
    1)  Caches are not restricted for RAM based storage
    2)  Cache can be any storage, that is "nearer" and help you avoid something 
        expensive is a cache for you. In their simplest form, caches are just 
        glorified hash table.

    3)  Whatever make you access faster it can be a cache like any in-memory data you 
        can say.
    
=> Some Examples of caching:
    1)  Google News:
        ->  Most recent news article are more likely to be accessed, hence served from 
            cache

    2)  Auth-Token:
        ->  Authentication are cached in "cache" to avoid load on database
            [token are checked on every request]

    3)  Live Streaming:
        ->  Last 10 min of live streaming is cached on CDN as it will accessed the most
*/
/*
=> Exercises:
    1) Setup Redis locally
    2) Put & get some data
    3) Measure time taken
    4) Connect it with database
*/
/*
=> Populating the cache:
    ->  Cache sits between the API server and the database:
    ->  There are two way to populate the cache

1)  Lazy Population(Most popular):
        ->  Read first go to the cache if data exists, return data 
        ->  else go to the database do heavy operation persist data in the cache and 
            return data this is called lazy populating.
        ->  Whenever we set data in cache, we set an expiry
        Example:    
            Caching blogs:
                ->  Fetching a blog from DB is expensive (Multiple Joins) hence, when 
                    someone accesses it we fetch from DB and cache it on Redis       

2)  Eager Population:
    Way-1:
        ->  Write go to both database and cache in the same request call.
        ->  Example: Live Cricket-Score:
                ->  Thousands of people are watching cricket score you will be serving 
                    it from the cache, so why not update cache & db at once and save the 
                    cache miss.

    ->  Way-2:
        ->  Proactively push the data to cache because you anticipate the need
        ->  Example: When a celebrity tweets/post something
                ->  When account with 100,000 follower post something, proactively it 
                    pushed into the cache
                ->  We will anyway need it and we save a cache miss..
*/
/*
=> Scale a cache :
    ->  Cache is just like a database, hence scaling technique for a cache like Redis 
        is similar to a regular DB.

    ->  Vertical Scaling:   
        ->  [a](small) ==> [AA] (large DB)
        ->  Make your cache bigger to handle more data/load

    ->  Horizontal Scaling - Replica (Scaling Reads) 
        ->  Same data replicated across multiple nodes so that reads could scale
                    {Master Cache}
                        |
                    [API server]
                        |
                    {Replica Cache}

    ->  Horizontal Scaling - Sharding (Scaling Writes):
        ->  Data partitioned across multiple shards, so that writes could scale
        ->  Each shard can have a replica
        ->  Shards are mutually exclusive
                         (Cache - 1)        
                        /
            [API Server] --- (Cache - 2)
                        \    
                        (Cache - 3)
                        ...More caches
*/
/*
=> Caching at Different Level:
    ->  Most common cache we saw was redis, but that is not the only hype of cache out 
        there or not the only place that can be used as a cache.

    ->  Literally every piece/component in your infrastructure cache something for you. 
    ->  Too much caching is bad (Stale (Old) data and invalidation).
    ->  Let's take a look at different places where we can cache.
*/
/*
1) Client Side caching:
    ->  Storing frequently accessed data on client side.
        - Browser, mobile devices ..etc
    ->  Cache Near constant data.    
        - (e.g. images, js files, user information, etc)
    ->  It should be okay service cached info (Stale)
    ->  Invalidation by time (expiry)

->  Massive performance boost, as we need not make any request to backend.
*/
/*
2) Content Delivery Networks (CDN):
    ->  Live streaming
    ->  Serving images, videos, audios and bundles , ..etc
    ->  CDN (Used for caching ) are set of servers distributed across the world.
    ->  Request from a user, goes to the nearest CDN server and hence user gets very 
        quick response.

    ->  US folks getting images from US servers is faster than fetching it from India.

=> CDN does the lazy cache population:
    (( )). 
      |  <---> [CDN ] <---> [API] <- origin server (That is configure with the CDN to get static data)
    /  \
    ->  user's request comes to CDN -> closest server, CDN server checks if it has the 
        data if yes, "return the data" to origin else CDN makes the same request

    ->  Like any other cache, when you put data on CDN you set on expiry to it 
        (Post which CDN delete data)
    ->  In in the picture - cdn-a
*/
/*
3) Remote Cache (Redis): (Expensive & store data in main memory)
    ->  Remote cache is centralized cache that we most commonly use (Redis). 
        Multiple API servers use it to store frequently accessed data.
    ->  Remote means accessible any where in the infrastructure.
    ->  Every Key stored should have an expiration (memory leak)
    ->  Size of cache is relatively very small as compared a database.
*/
/*
4) Database caching:
    ->  Instead of computing total posts by users every time we store 'total_posts' as a 
        column and update it once a while, it saves an expensive DB computation
        ->  SELECT count(*) from posts where user_id = 123 } it is an expensive query
    ->  [Users table]:
        [
            [id , name, ...., total_post]
            [123 , Ravi, ...., 77],
            [124 , Amit, ...., 70]
        ]
        ->  Every time a post is published by the user, we also update the 'users' 
            table and do total_posts = total_posts +1, that we are caching the data 
            in users table instead of running above query.
*/
/*
=> Note:
    ->  There are other places like load balancer, where we can cache.
    ->  We can cache some data at every single component in the system but should we 
        do it? Not necessarily (It is very use-case specific and subject to tolerate 
        level of staleness of the served data)
    ->  *Just because you can does not means you should.
*/