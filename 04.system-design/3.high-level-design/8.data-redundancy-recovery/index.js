/*
==> Data Redundancies and Recovery:
    ->  API servers are "stateless" but databases are "stateful"
    ->  API servers going down is fine because a new one will be spin up almost instantly
    ->  API server gets request and it does not matter which one handle it.
    ->  Databases going down is catastrophic(extremely harmful; bringing physical or financial ruin);
        almost always an outage!!!!
        Worst: Disk crash leading to loss of data.
*/
/*
Note:
    ->  A good system always takes care of such catastrophic situation.
    ->  The only way to protect ourselves against loss of data is to create multiple copies of it 
        (data redundancies)
    ->  Redundancy can be implemented at row/document level, table level or DB level
    ->  Redundant data can be stored on different table, different DB or different region.

Note:
You have to always prepared for outage or massive catastrophic:

==> Backup and Restore:
    ->  Daily backup of data. (Incremental)
    ->  Weekly completed backup
    ->  Storing one copy across region.(Disaster recovery)
    ->  When something goes wrong, just restore the last backup
    ->  Almost always the easiest thing to do
*/

/*
==> Continuous redundancy:
    ->  Setup replica of the database and writes go to both DB (sync/async):
        1)  API server writing to both databases
        2)  API Writes to one and is copied to other asynchronously.
            |--[API Server]--|sync
            ()               ()
            ()    `` async`` ()
            main            replica
    ->  if the main database goes down, replica can take its place (almost instantly)
        -> Note: this replica may just be a stand-by and not server any production traffic
*/  
/*
==> Exercise:
    ->  Setup replication between two mysql servers
    ->  see how you can backup a mysql db
    ->  see how you can restore the database.
*/

/*
==> Leader Election for auto recovery:
    ->  Say we have bunch of servers, serving HTTP requests.
        [--1-] [--2-] .. [--n-]
    ->  When one of them goes down, we have to spin up a new one, doing this is responsibility of 
        another module, say orchestration see in picture a.png
    ->  Orchestrator keeps on eye on the servers, when one goes down, orchestrator spins one and add.
        ->  No Human intervention
        ->  Minimal time outage
    ->  But what if orchestrator is down? who monitors it?
        ->  We need orchestrator for orchestrator
        ->  Who monitor orchestrator
        ->  Another orchestrator????
            ==> This these goes out of hand quickly.
    ->  Hence we need an automated way to recover the system, when one orchestrator is down somehow other 
        orchestrator comes backup and takes responsibility. This is called as leader election.
*/  

/*
==> Leader follower setup:
    ->  We run orchestrator in leader-follower mode. multiple nodes running the orchestrator code.
        One leader while others are workers/follower
    ->  Leader keeps an eye on workers. if worker dies leader spins up new one
    ->  Workers ping the servers and checks if they are healthy.
    ->  If orchestrator worker finds a backend server is unhealthy, it spins new one.
    ->  If orchestrator leader finds that orchestrator is unhealthy, it spins new one.
    ->  If orchestrator workers finds orchestrator leader is dead.
        ->  They trigger a leader election algorithm and system auto-recovered
        ->  How workers will choose a leader depends on the leader election algorithm

Note:
    This is a generic concept and we can apply it to any system that needs an ability to auto-recover.
*/