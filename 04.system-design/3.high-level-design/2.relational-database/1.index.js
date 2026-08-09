/*
==> Relational Database:
    ->  Database in any system is very critical components to deal with.
    ->  Database can make or break the system.
    ->  Data in relational database is stored in rows and columns
    ->  If your database is good then 60% job is done, because speed of the application, 
        deal with latency everything is depends on database. So Master databases by 
        designing complex architectures.

==> History of relational Databases:
    ->  Everything "revolutionary" starts with financial application -> read on internet
    ->  Computer first did, it solve first "accounting" -> Ledgers -> Rows and Columns
    ->  (Ledger): a book in which a company, bank, etc. records the money it has paid and 
        received
    ->  Database were developed to support accounting
    ->  Keys properties were:
            1) Data Consistency
            2) Data Durability
            3) Data Integrity
            4) Constrains: Follow certain kind of rules
            5) Everything in one place:

=> Because of these reasons, relational databases provides "Transactions"
    ->  Transactions are help us build systems (Application logic) which are corrects, 
    ->  Transactions are set of queries that you are going to execute in database.
    => ACID:
        A   -> Atomic
        C   -> Consistence 
        I   -> Isolation
        D   -> Durable

1) Atomicity:
    ->  All statement within a transaction takes effect or none of them take effect.

    ->  That is, if you want to update 4 rows of the table it cannot be done that few of 
        the rows update and doing that your system failed and rest of the rows not 
        updated. This is not going to happens

    ->  If you are running any sets of query in db then that is also a transaction

    ->  In a transaction I have added 1 query for adding posts and other for adding post 
        count in other table, while adding posts server crashed and post is added but 
        "stats" table is not updated so in that case the data is inconsistent which is 
        not acceptable at any cost. This is why relational database we use.

    - Example:
        start transaction: publish a post and increase total posts count
            INSERT INTO posts VALUES(...some values);

            UPDATE stats SET total_posts = total_post + 1 
                WHERE user_id = 100;

            COMMIT ==>  changes only happens when commit is run and in that case it
                        should follow the Atomicity.

    2) Consistent:
        ->  Data should never be incorrect no matter what
        ->  "Constrains", "Cascade"(means if you delete any particular row you have to 
            delete associates of it), "Triggers"
        ->  Data should flow one consistent state to another consistent state.
        ->  Example:
                foreign key checks do not allow you to "delete" parent if child exists 
                (Can be tuned)
        ->  You have the necessary tools to ensure that yours data never goes inconsistent.
                total_posts = total entries in posts table for users;

    3) Durability:
        ->  When transaction commits, the changes outlive outage no matter what
        ->  You data should be in the disk. if someone drill the disk but your data 
            should be there, your data cannot be just vanished out.

    4) Isolation:
        ->  When multiple transactions are executing parallely, the 'isolation level' 
            determines how much changes of one transaction are visible to other.
        ->  When two or more people are doing things in the database at the same time, 
            their work should not mess with each other.
        ->  How it works in databases
            ->  The database locks the data you are working with.
            ->  Until your action is done (committed), no one else can change that same 
                piece of data in a way that causes problems.
            ->  Others might still read or queue up to change it, but they won’t see an 
                incomplete or incorrect state

                Txn1:           Txn2:
                --------            
                --------        --------
                --------        --------
                --------
        ->  It is like me and my friend buying a shirt in the same shirt in the mall and 
            only one shirt is available. So, me and my friend might fight and thing will 
            get messy, to overcome this issue the system decide let's first buy the shirt 
            by Ravi's friends based on certain parameters.

******* Note: You pick relational databases for "relations" and ACID:
*/

/*
==> Exercises to perform: DO this MVVI:
    ->  Setup a SQL database (Mysql or Postgresql)
    ->  Create a schema for social network
              users, posts, profiles, photos, following and define relationship
    ->  Insert data in (users & profile) in one transaction
*/