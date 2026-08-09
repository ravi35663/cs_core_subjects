/*
=>  What is a Deadlock?
    -   A deadlock happens when two (or more) transactions block each other forever, 
        and none can move forward.
    -   Each transaction is waiting for a lock held by the other.
    -   PostgreSQL is smart — it detects this situation and kills one transaction 
        to break the deadlock.

=>  Simple definition : “You wait for me, I wait for you — and nobody moves.”
*/
/*
=>  Easy Real-World Analogy
    - Two people in a narrow corridor
    - Person A blocks the left side
    - Person B blocks the right side
*/

-- Deadlock Example in PostgreSQL:
-- Table: accounts(id, balance)

-- Transaction A (Terminal 1):
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- holds lock on row id = 1;

UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- waits for row id = 2;


-- Transaction B (Terminal 2):
BEGIN;
UPDATE accounts SET balance = balance - 50 WHERE id = 2;
-- holds lock on row id=2

UPDATE accounts SET balance = balance + 50 WHERE id = 1;
-- waits for row id=1
/*
Result
    PostgreSQL detects: ERROR: deadlock detected
*/
/*
=>  Why Does PostgreSQL Kill One Transaction?
    Because:
        - Both are waiting
        - Waiting forever = system freeze
        - PostgreSQL chooses one victim to rollback
This resolves the deadlock.
*/
/*
=> How PostgreSQL decides which transaction to rollback in a deadlock:
    1) PostgreSQL builds a wait-for graph:
        - In PostgreSQL, every transaction holds locks and may wait for other locks.
        - Example:
            - T1 → waiting for lock held by T2
            - T2 → waiting for lock held by T1
        -
            This forms a cycle → deadlock 🔁
            PostgreSQL detects this automatically.
    
    2) Deadlock detection is not immediate
        - PostgreSQL waits for: deadlock_timeout (default: 1s)

        - After that:
                It checks the wait-for graph
                If a cycle exists → deadlock confirmed

    3) PostgreSQL chooses a victim transaction:
        -   PostgreSQL does NOT randomly kill a transaction.
        -   It evaluates cost and picks the cheapest one to rollback.
        -   Factors considered:
                | Factor             | Meaning                      |
                | ------------------ | ---------------------------- |
                | 🔹 Transaction age | Newer transactions preferred |
                | 🔹 Locks held      | Fewer locks = cheaper        |
                | 🔹 Work done       | Less work = cheaper          |
                | 🔹 Rollback impact | Minimal undo                 |

        -   Goal: Minimize wasted work and system disruption.

    4) The victim is rolled back immediately:
        Once chosen:
            - PostgreSQL aborts only ONE transaction
            - Releases its locks
            - Other transaction continues successfully
        -   Error thrown:
                ERROR: deadlock detected
                DETAIL: Process 12345 waits for ShareLock on transaction 6789; 
                        blocked by process 54321.

    5) Why PostgreSQL doesn’t rollback both?
        Because:
            - One rollback is enough to break the cycle
            - Rolling back both would waste more work
            - Databases prioritize throughput + consistency
*/
/*
=>  Simple real-world analogy 
    - Two people stuck in a narrow corridor:
        - One carrying a heavy sofa
        - One carrying a notebook
    - The person with the notebook steps back (cheapest rollback 😄)
*/
/*
=>  PostgreSQL resolves deadlocks by detecting wait-for cycles and aborting the 
    lowest-cost transaction—usually the youngest one holding the fewest locks—to 
    minimize rollback impact.
*/

/*
=> Issues Caused by Deadlocks:
    1) Transaction Failure
        - One transaction is aborted
        - App must retry

    2) Poor User Experience
        - Payment failed
        - Booking failed
        - User sees random errors

    3) Performance Impact
        - Blocked transactions
        - Increased latency
        - Retry storms under load

    4) Data Consistency Risk (if retries not handled)
        - Partial business operations
        - Missing updates
*/

/*
=> How to Handle Deadlocks (IMPORTANT):
*/
-- 1. Always Lock Rows in Same Order (BEST PRACTICE)
-- Bad:
-- Txn A
UPDATE accounts WHERE id = 1;
UPDATE accounts WHERE id = 2;

-- Txn B
UPDATE accounts WHERE id = 2;
UPDATE accounts WHERE id = 1;

-- Good:
UPDATE accounts WHERE id IN (1,2) ORDER BY id;

-- 2. Keep Transactions Short:
-- Bad:
BEGIN;
-- API call
-- user input
-- long processing
UPDATE ...
COMMIT;

-- Good:
BEGIN;
UPDATE ...
COMMIT;

/*
3) Use SELECT … FOR UPDATE Carefull:
    - Locks rows early and clearly.
*/
BEGIN;
SELECT * FROM rooms WHERE id = 5 FOR UPDATE;
UPDATE rooms SET is_available = false WHERE id = 5;
COMMIT;

/*
4. Retry on Deadlock (MANDATORY)
    - Deadlocks are normal, not bugs.
    - App logic must retry.

Example idea:
    - Retry 2–3 times
    - Add small delay
    - Log deadlocks
*/

/*
5) Use SERIALIZABLE for Critical Logic
    - PostgreSQL will:
        - Detect conflicts
        - Abort one transaction
        - Force retry safely

    - Best for:
        - Bookings
        - Payments
        - Inventory
*/

/*
=> How to Detect Deadlocks in Production:
    - PostgreSQL logs:
        ERROR: deadlock detected

    - You can also monitor:
        pg_stat_activity
        pg_locks
*/

/*
=>  What Problem Does Deadlock Handling Solve?
        - Prevents system freeze
        - Protects data consistency
        - Ensures high concurrency
        - Keeps database responsive
        
    -   Without deadlock detection → entire system could hang
*/