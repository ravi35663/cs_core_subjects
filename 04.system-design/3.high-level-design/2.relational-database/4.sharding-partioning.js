/*
=> Sharding & Partitioning:
    1)  Sharding : 
        ->  Sharding is a method to distribute data across 'multiple machine'. 
        ->  Shard means databases.

    2)  Partitioning: 
        ->  Splitting a subset of data within the same instance or different instance. 
        ->  Partition means data.

=> How a database is scaled?
    ->  A database server is just a database process (mysqld, mongod) running on an EC2 
        machine.
        3306    [              ]
        ------> [     [Mysql]  ]
                [              ]
                This is virtual service EC2 machine and has mysql running and we publish 
                this at port 3306
    ->  Every Database has a limit to process data.
    ->  You put your database in production, serving real traffic

    Example:
        ->  You have database running on server which handle 100 wps (100 write per second)
        ->  Now you are getting more users, that your db is unable to manage
        ->  Now you scale up you database give it more CPU, RAM and DISK and it scale up 
            to handle 200 wps

        ->  Now your product went viral and your bulky database is unable to handle the 
            load, so you scale up again and now it read 1000 wps.
            
        ->  But, after a certain stage you know you would not be able to scale "up" your 
            DB because of "Vertical Scaling has limit" your were doing.
        ->  So, you have to move to "horizontal Scaling".
        
        ->  Say, one DB server was handling "1000 wps" and we cannot scale up beyond that 
            but we are getting "1500 wps", we can scale horizontally and split the data

        ->  By adding one more database server, we reduce the load to 750 wps on each 
            node and thus handled higher throughput
                ->  In DB-1 ==> 50% traffic
                ->  In DB-2 ==> 50% traffic

        ->  Each database server is thus a "shard" and we say that the data is 
            "partitioned" 50% - 50%

        ->  Overall, a database is sharded while the data is partitioned 
            (split across the databases)

        ->  Example:
            [------------------- 100GB data -------------------]
                [30Gb]  [10GB]   [30GB]    [20GB]     [10GB]
            ->  You partitioned the 100GB of total data into 5 mutually exclusive 
                partitions.

            ->  Each of these partitions can live on one database server or a couple of 
                them can share one server. and this depends on the shards you have.

        ->  5 partitions of our 100gb dataset is distributed across 2 shards see in the 
            picture-e
        
=> Partitioning vs sharding:
    =>  Partitioning = 1 DB, 1 table, internally divided.
        - Split one big table inside one database into smaller parts (partitions).
            Example:
                Database: mydb
                Table: users partitioned by region
                Partition Asia → rows where region = "Asia"
                Partition Europe → rows where region = "Europe"
                Still looks like one table to you.
        
    =>  Sharding = multiple DBs/servers, each storing a slice.
        - Split data across multiple databases/servers.
            Example:
                Server 1 → DB users_asia → users from Asia
                Server 2 → DB users_europe → users from Europe
                Server 3 → DB users_america → users from America
                Each shard is a separate database.

=> How do you partition the data?
    1) Horizontally Partitioning (sharding)
    2) Vertical Partitioning
    ->  When we "split" the 100GB data, we could have used either of the ways but 
        deciding which one to pick depends on load, use case and access pattern

    ->  In horizontal partitioning what we does we pick some rows/document from one 
        table/collection and put them into other database.

    ->  Vertical partitioning is when you put some table of one database to other 
        database.

    ->  Vertical partitioning is like moving from monolithic to microservices. 
*/

/*
=> Partitioning VS Sharding:
    -> See in the picture-f;
    -> Sharding:
    -> Row Represent Sharding and Column represent partitioning;
    
        [[Y/N],     [No],                           [YES]  ]
        [[NO],      [1 server has 1 db],            [1 server has 2 db (data is partitioned)(microservices)]]
        [[YES],     [More than 1 server has same DB (read replica)], [More than 1 server and more than 1 DB(classic microservices)]]
*/
/*
=> Advantage of sharding:
    1)  Handle large reads and writes  
    2)  Increase Overall storage capacity
    3)  Higher availability

=> Disadvantage of sharding:
    1)  Operationally complex   
    2)  Cross-Shard queries expensive
    3)  Higher availability
*/
/*
=> Vertical Partitioning (Column-wise split):
*/
/*
// Before (Single wide table):
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    password_hash TEXT,
    profile_pic TEXT,
    bio TEXT,
    last_login TIMESTAMP
    );
*/
/*
// After (Vertically partitioned):
// Core user data frequently used:
CREATE TABLE users_core (
    user_id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150)
);

// Auth-related data:
CREATE TABLE users_auth (
    user_id BIGINT PRIMARY KEY,
    password_hash TEXT,
    last_login TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users_core(user_id)
);

// Profile data (large / optional):
CREATE TABLE users_profile (
    user_id BIGINT PRIMARY KEY,
    profile_pic TEXT,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users_core(user_id)
);
*/ 