/*
==> Scaling Databases:
    ->  Databases are the most important component of any system out there.
    ->  Databases can makes or break the system. Hence, it is critical to understand 
        how to scale them.

Note:   Below Techniques are applicable to most databases (Relational + non-relational) 
        out there (Read your DB documentation).


1) Vertical Scaling:
    ->  Add more CPU, RAM, Disk to the databases see in picture-a
    ->  Require downtime during reboot
    ->  Gives you ability to handle "scale", more load
    ->  Vertical Scaling has physical hardware limits
    ->  Example - 1:
            Vertical scaling is when you start the application you were know that 4GB RAM 
            is enough but after certain period the RAM shortage is occur then you realize 
            that we need to upgrade the RAM and all, Now days there are so many cloud 
            provide do this kind of upgradation but they have limits. 

    ->  Example - 2:
            You buys a phone which have expandable storage (128GB) Expandable, but what 
            happens when you insert 1TB memory chip??? The phone won't recognize it

    ->  Hence vertical scaling has limits. It is not bad though.

Note:  
    1)  If your data is huge or humongous or you are not sure that how much memory it 
        would consume further, then you should move to horizontal scaling.

    2) How does DB depends on RAM?
        ->  RAM is critical for DB performance.
        ->  Databases cache data in RAM (buffer pool / cache) → avoids disk reads.
        ->  Indexes are stored in RAM for fast lookups; if not → queries slow down.
        ->  Queries (sorting, joins, aggregations) use RAM;
            if RAM runs out → fallback to disk → slower.
        ->  Each DB connection also consumes RAM.
        ->  More RAM = faster DB, ideally dataset + indexes fit into memory.
        ->  In short: RAM acts as the high-speed workspace for databases; 
            disk is the slow fallback.
    
2)  Horizontal Scaling - 1 : Read Replicas:
    ->  Most of the time on any application read:write = 90:10 
    ->  90% we read data and only 10% we write the data.
    ->  You Move reads to other database so that "master" is free to do writes
    ->  API servers should know which database to connect to get things done.
    ->  See in the picture-b:
    ->  At the database level, horizontal scaling (also called scale out) means adding 
        more database servers/nodes to handle more load instead of just upgrading the 
        hardware of a single server.

    ->  Master (Primary) Database:
        ->  This is the main database where all write operations happen:
        ->  INSERT, UPDATE, DELETE.
        ->  It holds the source of truth data.
        ->  Changes made here are copied to replicas (automatically via read logs).

    ->  Read Replica (Slave / Secondary)
        ->  These are copies of the master database.
        ->  They receive updates from the master through replication.
        ->  They are read-only — you can run SELECT queries but not modify data.
        ->  Used to offload read traffic from the master.

    =>  How it works:
        ->  A write (INSERT/UPDATE/DELETE) happens on the master.
        ->  The master logs the change (binary log in MySQL).
        ->  Replicas read this log and apply the changes to stay in sync.

    ->  Your app can send writes to Master and reads to Replicas.
    ->  This improves performance and scalability.

==> Example:
        Writes & Reads
            |
        [ Master DB ]
            /     \
    Reads only   Reads only
    [Replica1]  [Replica2]

==> Benefits:
    ->  Offloads read traffic from the master → faster performance.
    ->  Increases availability (if master goes down, promote a replica).
    ->  Useful for analytics/reporting without impacting main DB.

==> How updating data in master automatically makes changes in replicas:
    1)  You write only to the master (INSERT, UPDATE, DELETE).
    2)  The database replication mechanism (built into MySQL, PostgreSQL, etc.) 
        automatically sends those changes to the read replicas.
    3)  Replicas apply the changes so their data stays in sync.

==> Example in MYSQL:
    1) run: `INSERT INTO orders (id, amount) VALUES (1, 100);`
    2) This happens:
        ->  Master writes the data to its tables.
        ->  Master logs the change in the binary log.
        ->  Read replicas read that log and apply the same change to their copy.
Notes:
    1)  You never run separate writes to the replicas.
    2)  Replication can be synchronous (real-time) or asynchronous (a small delay), 
        so sometimes replicas may be slightly behind the master.(Stale data=> Old Data)
*/
/*
=> Replication:
    ->  Changes on one database (master) needs to be sent to replica to maintain 
        consistency

=> Two modes of replication:
    1)  Synchronous Replication
        ->  Strong Consistency
        ->  Zero Replication log
        ->  Slower Writes
        ->  When write request is made on synchronous, the api will not respond to 
            client unless data write to master and replica read the data from the master.

        ->  This way the master and replicas in perfect sync.
        ->  See in picture picture - c

    2)  Asynchronous Replication:
        ->  Eventual Consistency
        ->  Some replication logs
        ->  Faster writes

        ->  When request is coming from the api data writes in master and response send 
            back to users then in background, the data is written in the replicas. 
            Here, there is no waiting for master to write data in replicas.

        ->  Mysql, Postgres ..etc databases support this, you have to perform one small 
            configuration to enable.
*/
/*
=> Horizontal Scaling - 2: Sharding:
    ->  Sharding comes when you have huge writes then master cannot handle it, in read 
        replicas we can create tons of read replicas but what if write is huge.

    ->  Because one node cannot handle the data/load we split it into multiple exclusive 
        subsets writes on particular row/document will go to one particular shard.

    ->  This way, we scale our overall database load.
Note:
    ->  Shards are independent no replication between them see in picture-d
    ->  API Servers needs to know whom to connect to, to get things done
    ->  Some databases has a proxy that takes care of routine
    ->  Each shard can have its own replica (if needed)
*/
/*
=> How RAM and Database are connected?
1)  Caching & Buffer Pool:
    ->  Databases (like MySQL, PostgreSQL, MongoDB) keep frequently used data in RAM.
    ->  Example: MySQL has a buffer pool; MongoDB uses WiredTiger cache.
    ->  This avoids reading from disk every time → much faster.

2)  Indexes in Memory
    ->  Indexes (like B-trees, hash indexes) are loaded into RAM so lookups are O(log n) 
        or O(1).
    ->  If index doesn’t fit in RAM, queries slow down (needs disk access).

3)  Query Execution
    ->  Sorting, joins, aggregations → all use RAM (via temp memory).
    ->  If RAM is insufficient → database uses disk-based swap/temp files → slower.

4) Connection Handling
    ->  Each active database connection consumes RAM (for session, buffers, temp storage).

Example:
    Suppose you have a Users table with 10 million rows.
    If you query:
    SELECT * FROM users WHERE email = 'test@gmail.com';

    If the email index is in RAM → instant (milliseconds).
    If not → DB goes to disk → much slower (seconds).

Note:
    Rule of Thumb:
        More RAM = faster database performance (until a point).
        Ideally, your working dataset + indexes should fit into RAM.
*/
/*
=> Database proxy:
    ->  A database proxy is like a smart traffic controller between your app and DB 
        servers, making routine DB tasks automatic.

=> What the DB Proxy Does: It is just like API gateway for database gateway.
    1) Connection Management
        ->  Keeps a pool of connections so your app doesn’t overwhelm the DB.
        ->  Example: Amazon RDS Proxy, PgBouncer for PostgreSQL.

    2)  Load Balancing:
        ->  Routes reads to replicas and writes to master automatically.
        ->  Your app doesn’t need to know which server is which.

    3) Failover Handling:
        ->  If master DB goes down, proxy promotes a replica or reroutes traffic → app 
            doesn’t break.
            
    4) Routine Tasks :
        ->  Handles everyday things like connection pooling, retries, 
            read/write splitting, health checks, etc.
*/