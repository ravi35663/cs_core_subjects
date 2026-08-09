/*
=> Non-Relational Databases:
    ->  It is very Broad generalization of databases that are relational 
        (Mysql, Postgresql, ..etc)
    ->  But This does not means all relational databases are similar.
*/
/*
=> What make non-relational databases interesting?
    -> Most non-relational databases "shard" (horizontal Scaling) out-of-the box.

=> We talk about 3 most important types of No-Sql databases.
    ->  Document DBs, MongoDB, ElasticSearch

=> Document DBs (MongoDB and ElasticSearch):
    ->  Mostly JSON based
    ->  Support complex queries (almost like relational (SQL)) databases
    ->  Partial Updates to documents possible
    ->  Closest to "relational" databases.
    ->  Example: 
            Can do total_post +=1 without re-writing the entire document:
                {
                    user_id:"___",
                    "total_posts":270
                }
    ->  used in in-app notification service, catalog services ..etc
*/
/*
=> Key-Value Stores(Redis, DynamoDB, Aerospike):
    ->  Extremely Simple Databases
    ->  Limited Functionalities (GET(K), PUT(K,V), DELETE(K))
    ->  Meant for key-based access pattern
    ->  Does not support complex queries (Aggregations)
    ->  ***** Can be heavily  sharded and partitioned
    ->  Use Cases: Profile data, order data, auth data, messages (Most of the cases),.etc:
    ->  You can use relational databases and document DBs as KV stores
*/
/*
=> Graph Databases (Neo4j, Neptune, Dgraph):
    ->  What if our graph data structure has a database.
    ->  It stores data that are represented as nodes, edges and relations
    ->  Example:
            A------------>B.   Ravi ---------> iPAD
              Followers               BOUGHT
    ->  Great for running complex 'Graph algorithms'
    ->  Powerful to model social Networks, Recommendations & Fraud Detection
*/
/*
=> Picking the right database:
    ->  It is not a fight, so no need to pick a side
    ->  A database is design to solve a particular problem really well.
    ->  Each kind of database picks a segment with slight overlap
    ->  Common Misconception:
            Picking Non-Relational DB because relational databases do not scale.
    
=> Why Non-Relational DBs scale?
    ->  There are no 'Relations' and "Constrains"
    ->  Data is modelled to be sharded (split cross multiple nodes) because you have 
        not tight constrain checks.
    ->  If we relax the above on relational databases, we can scale it too.
        ->  Do not use foreign key check
        ->  Do not use cross shard transaction
        ->  Do Manual Sharding
*/
/*
=> Does this mean, no DB is different?
    ->  No!! every single database has some peculiar properties and guarantees and if 
        you need those, you pick that DB.
*/
/*
=> How does this help in designing system?
    ->  While designing any system, do not jump to a particular DB right away.
    ->  Follow these steps first:
        1)  Understand what data (structured, unstructured, semi-structured) you are 
            storing
        2)  Understand how much of data you will be storing
        3)  Understand how you will be accessing the data
        4)  What kind of queries you will be firing
        5)  Any special features you expect.
            e.g. Expiration

=> How to pick the right DB? [Not Exhausting, but you'll get the idea ]
    => Pick Relational Database:
        when:
            Example - 1:
                ->  If data can fit on a single node, 
                ->  If You need strong consistency
                ->  Data consistent is very important (Payment kind if stuff)

            Example:2
                You need complex queries, aggregations

    => Pick Redis:
        When:
            Example: 1
                ->  Your access is KV based but need it to be really fast.

            Example: 2:
                ->  You need advance data structure & algorithms

    => If your data cannot fit on single node:
        ->  You have expertise in SQL & can do manual sharding
            ->  Drop constrains & go for relational DB

        ->  You have simple KV based access
            -> Go for KV stores like DDM, mongodb ..etc
            
        ->  If you require sophisticated graph algorithms
            ->  Go for graph DB like Neo4j
            
        ->  If you have nothing special, but want to future 
            -> Go for document DB like mongodb
*/