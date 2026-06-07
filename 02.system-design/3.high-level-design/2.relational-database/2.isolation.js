/*
==> Isolation Level:
    ->  Relational databases provides ACID guarantees and "I" in ACID is "Isolation" 
        levels that helps us tune them.
    ->  Isolation levels dictate how much one transaction know about other transaction
    ->  We Look at each of them and try to understand with the example.

==> There are 4 standard of isolation :
    1) Repeatable Reads
    2) Read Committed
    3) Read Uncommitted
    4) Serializable

1)  Repeatable Read:
    ->  Consisted reads within some transaction even if other transaction committed 1st 
        transaction would not see the changes (if value already read).
    ->  Example:
            We will creating two transactions:
            ->  See current transaction isolation  
                mysql> SELECT @@transaction_ISOLATION;
                        +-------------------------+
                        | @@transaction_ISOLATION |
                        +-------------------------+
                        | REPEATABLE-READ         |
                        +-------------------------+
                        1 row in set (0.004 sec)

            ->  Make 'autocommit' off by running "SET autocommit=0" in the both terminal;
            ->  Start two transaction in the table by running this command  twice:
                mysql> START TRANSACTION;
            ->  As of now data is same in both the transactions 
            ->  Now change table in transaction 1 and do not commit
            ->  now see data in both terminal of the table that you have make the change
            ->  in transaction 1 you will see data is being updated but in transaction 2 
                the data is still older one.

            ->  Now commit Transaction 1 by running "COMMIT"; the transaction 1 data is 
                updated and now if you still see the transaction 2 data it will shows 
                older data because terminal 2 is still in transaction 2 mode which is 
                not yet committed.

            ->  Now you commit transaction 2 without changing anything then you will see 
                updated data by transaction 1.

            ->  So if transactions are being started, you have to make commit every time 
                in each transaction while making updates to tables if you want to see 
                updated data.

            ->  This entire thing only happens in "Repeatable read" and by default mysql 
                DB in "Repeatable Isolation"

2) Read Committed:
    ->  Reads within the same transaction always reads fresh value:
    ->  Con: Multiple reads within same transaction are inconsistent.
    -> Example:
        Steps to see this:
        ->  Make the ISOLATION Level to Read by running this command: 
            'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMIT';
        ->  See the Isolation transaction:
            mysql> select @@transaction_isolation;
            +-------------------------+
            | @@transaction_isolation |
            +-------------------------+
            | READ-COMMITTED          |
            +-------------------------+
            1 row in set (0.001 sec)

        ->  Start two Transaction:
        ->  Update table in transaction 2 and commit it then you will see changes in 
            transaction 1 without running committed and here the data is inconsistent.
        ->  Try it in terminal

3) Read Uncommitted:
    ->  Reads event uncommitted values from other transaction
    ->  This is also called "dirty Read"
    -> Example to understand it better:
        ->  Make isolation in Read Uncommitted by running 
            "SET SESSION TRANSACTION ISOLATION READ UNCOMMITTED";
            
        ->  Start more than 1 transactions in "Read UNCOMMITTED" Isolation
        ->  Make changes in table in 1 transaction without committing it and you will 
            see changes in other the same table in other transactions as well.

4) Serializable:
    ->  Every Read is a locking read (Depend on engine) and while one transaction read, 
        others will have to wait.
    ->  This is the strict form of isolation and it is the slowest one.
    ->  Example:
        ->  Set transaction in SERIALIZATION level
        ->  Start more than one transaction 
        ->  Make change on users table in transaction 1 without commit and try to see 
            data in users table
        ->  You have to wait until and unless that transaction has not committed or 
            rollback;
        ->  This is slow process.
*/
/* 
==> What is Autocommit in mysql?
    ->  In MySQL, autocommit is a mode that controls whether each SQL statement is 
        automatically committed to the database right after it executes.

    ->  AUTOCOMMIT = 1 (ON) → Every INSERT, UPDATE, or DELETE is immediately saved (committed). \
        You don’t need to run COMMIT;.

    ->  AUTOCOMMIT = 0 (OFF) → Changes are not saved until you explicitly run COMMIT;. 
        You can also ROLLBACK; to undo.

    ->  SELECT @@autocommit; -> To check current status of Autocommit.
    ->  Turn it ON or OFF:
        1) SET autocommit = 1;  -- Turn ON
        2) SET autocommit = 0;  -- Turn OFF

    ->  Example:

        SET autocommit = 0;
        INSERT INTO users (name) VALUES ('Ravi');
        -- Not saved yet
        ROLLBACK; 
        -- Change is undone
*/