/*
5) Transactions & Concurrency
   - Isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE)
   - Locks (row-level, table-level)
   - Deadlocks and how to handle them
   - Optimistic vs pessimistic locking
*/
/*
=> Transactions & Concurrency in PostgreSQL:
    -   Concurrency = multiple transactions reading/writing the same data at 
        the same time.
    -   PostgreSQL solves this using MVCC (Multi-Version Concurrency Control).
*/

/*
=> Why do we need transaction:
    -   Imagine you’re booking a vacation package online. 
    -   The system needs to:
            - Reserve your airline seats
            - Book your hotel room
            - Schedule airport transfers
            - Process your payment

    -   What happens if your payment fails after the airline seats and hotel are 
        reserved? Or if the hotel booking succeeds but the airline reservation fails? 
        Without proper handling, you could end up with a hotel but no flight, or be 
        charged for services you didn’t receive. 
    -   This is where database transactions become crucial.
*/

/*
=> What is transaction in db:
    -   A database transaction is a logical unit of work made up of one or more 
        database operations.

    -   These operations can include reading (SELECT), inserting (INSERT), 
        updating (UPDATE), or deleting (DELETE) data.

    -   All the operations in a transaction are treated as one single, indivisible 
        unit of work.
*/
-- Example of a database transaction: Money Transfer
BEGIN;
    UPDATE accounts SET balance = balance - 500 WHERE id = 1;   -- Debit from sender
    UPDATE accounts SET balance = balance + 500 WHERE id = 2;   -- Credit to receiver
COMMIT;
/*
- Here, both updates form one transaction.
- If either update fails, the transaction is rolled back, and no money is transferred.
*/
/*
=> Why we need transactions:
    -   Banking Systems:
            - Money transfers between accounts
            - ATM withdrawals
            - Bill payments
            - Investment transactions

    -   E-commerce Systems
            - Processing orders
            - Managing inventory
            - Handling payments
            - Updating customer points
*/
-- Banking Transaction example:
-- Without transaction (dangerous!)
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'sender';
-- If system crashes here, money vanishes!
UPDATE accounts SET balance = balance + 100 WHERE account_id = 'receiver';

-- With transaction (safe)
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE account_id = 'sender';
  UPDATE accounts SET balance = balance + 100 WHERE account_id = 'receiver';
COMMIT;

-- E-commerce transaction example
BEGIN;
  -- Check inventory
  SELECT stock FROM products WHERE id = 'item1' FOR UPDATE;
  -- Update inventory
  UPDATE products SET stock = stock - 1 WHERE id = 'item1';
  -- Create order
  INSERT INTO orders (product_id, quantity) VALUES ('item1', 1);
  -- Record payment
  INSERT INTO payments (order_id, amount) VALUES (LASTVAL(), 99.99);
COMMIT;

/*
=>  Common Transaction Patterns:
    1) Short lived transactions:
*/
/*
=>  Short-lived Transactions:
    -   Short-lived transactions are ideal for operations that can be completed 
        quickly. 
    -   These transactions are generally initiated with BEGIN, followed by a series 
        of operations (such as an UPDATE or INSERT), and then committed using COMMIT. 
    -   This pattern helps avoid locking resources for too long and ensures high 
        throughput
*/
-- Example:
BEGIN;
  -- Quick operations (recommended)
  UPDATE inventory SET quantity = quantity - 1;
  INSERT INTO orders (item_id) VALUES (123);
COMMIT;

/*
=>  Long-running Transactions
    -   Long-running transactions involve multiple operations that are spread over 
        a period of time. 
    -   They should be avoided when possible, as they can hold locks for extended 
        periods and negatively impact performance.
*/
-- Example:
-- Avoid when possible
BEGIN 
    -- Multiple operations over time
    UPDATE large_table SET status = 'processing';
    -- ...some time passes
    UPDATE another_table SET completed = true;
COMMIT

/*
=>  Nested Transactions:
    -   PostgreSQL does not support true nested transactions, but it offers 
        SAVEPOINT and ROLLBACK TO SAVEPOINT to simulate nested transaction behavior. 

    -   This allows for more granular control over commit/rollback actions within a 
        larger transaction.
*/

-- Example:
BEGIN;  -- Outer transaction
  UPDATE accounts SET balance = balance - 100;
  
  SAVEPOINT before_fee;
  -- Inner transaction-like behavior
  UPDATE accounts SET balance = balance - fee;
  
  -- If fee processing fails
  ROLLBACK TO before_fee;
  
COMMIT;

/*
=>  ACID Principles: The Four Pillars of Transactions:
    1) Atomicity: The “All or Nothing” Principle
        -   Database: All operations in a transaction must succeed, or none will.
        -   Real world example: When transferring money between bank accounts
        -   If Step 2 fails, Step 1 is automatically undone. You won’t lose your 
            money
*/
-- Example:
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 'your_account';    -- Step 1
  UPDATE accounts SET balance = balance + 100 WHERE id = 'friend_account';  -- Step 2
COMMIT;

/*
2) Consistency: The “Rules Are Rules” Principle
        -   Database: All data must follow defined rules (constraints) before and 
            after the transaction.
        -   Real world example: You can’t book a room hotel that’s already occupied.
*/
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    number TEXT,
    status TEXT CHECK (status IN ('available', 'occupied', 'maintenance'))  -- Consistency rule
);

/*
3) Isolation: The “Private Workspace” Principle
    -   Database: Multiple transactions shouldn’t interfere with each other.
    -   Think of it like multiple cashiers at a store, each handling different 
        customers without mixing up orders.
    -   Example: Two people booking the last hotel room won’t both get it.
*/
-- Example:
BASIC TRANSACTION ISOLATION LEVEL SERIALIZABLE;
    -- Check and book hotel room
    UPDATE hotels 
    SET is_available = false
    WHERE id = 123 AND is_available = true;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Room not available'
    END IF;
COMMIT;

/*
4) Durability: The “Set in Stone” Principle
    -   Database: Once a transaction is committed, changes are permanent.
    -   Like writing in pen versus pencil — committed transactions survive even if 
        the system crashes.
    -   Real world example: Once confirmed, your booking survives system crashes.
*/
-- Example:
BEGIN 
    -- Once this commits, the booking is permanent
    UPDATE bookings
    SET status = 'confirmed'
    WHERE id = 123;
COMMIT;
/*
=> Transaction Isolation Levels:
    -   Think of transaction isolation levels as hotel staff rules to avoid chaos 
        at the reception.
    -   When many guests try to book rooms at the same time, these rules decide who 
        sees which room as available.
    -   Without them, two guests might happily get a “confirmed” message for the 
        same room.
    -   Isolation levels ensure that once one guest is booking the last room, others 
        don’t wrongly see it as free.
    -   This is super important during rush seasons, or the hotel turns into a 
        customer-complaint festival 
*/

/*
=> READ COMMITTED (Default in PostgreSQL):
    -   In a hotel context, READ COMMITTED is like having a real-time availability 
        display at the front desk. When one clerk makes a booking, other clerks 
        will see the updated availability immediately after the booking is confirmed.
*/

-- Terminal 1: Clerk Alice checking room availability
BEGIN;
SELECT is_available FROM rooms
WHERE room_number = '501' AND room_type = 'Suite' -- Shows true

--  Terminal 2: Clerk Bob processes a booking
BEGIN;
UPDATE room SET is_available = false;
WHERE room_number = '501';
INSERT INTO bookings (room_id, guest_name, check_in_date,check_out_date,status)
VALUES (1, 'John Smith', '2024-12-27', '2024-12-29', 'confirmed');
COMMIT;

-- Terminal 1: Alice checks availability again
SELECT is_available FROM rooms 
WHERE room_number = '501';  -- Shows false
/*
    -   This level works well for simple room availability checks and basic bookings.
    -   A clerk might see a room as available, but before booking it, another clerk 
        may reserve it first.
    -   This behavior is normal and acceptable for most booking systems.
    -   It mirrors real-world availability, where room status can change quickly 
        due to concurrent bookings.
*/

/*
=> REPEATABLE READ
    -   REPEATABLE READ is like having a snapshot of the hotel’s availability at a 
        specific moment. If a clerk starts checking room availability for a group 
        booking, they’ll see consistent data throughout their transaction, 
        regardless of other bookings being made.

    -   This isolation level is useful for group bookings and occupancy reports.
    -   It provides consistent room availability numbers during planning.
    -   Even if individual bookings happen at the same time, the data seen remains 
        stable and reliable.
*/

-- Terminal 1: Alice starts group booking with stricter rules
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT COUNT(*) FROM rooms 
WHERE room_type = 'Deluxe' AND is_available = true;  -- Shows 5

-- Terminal 2: Bob books a deluxe room
BEGIN;
UPDATE rooms SET is_available = false 
WHERE id = 3 AND room_type = 'Deluxe';
COMMIT;

-- Terminal 1: Alice checks again
SELECT COUNT(*) FROM rooms 
WHERE room_type = 'Deluxe' AND is_available = true;  -- Still shows 5!
/*
=>  Important Note:
        -   In REPEATABLE READ, Alice sees a fixed snapshot taken at the start of her 
            transaction.
        -   Bob’s booking happens after Alice’s snapshot, so Alice still sees 5 rooms.
        -   This behavior is expected and not a bug.
        -   Alice cannot successfully overbook rooms despite seeing outdated data.
        -   PostgreSQL enforces correctness using row-level locks and conflict 
            detection.
        -   No booking is automatically cancelled by the database.
        -   On conflict, the transaction may block, fail, or throw a serialization 
            error.
        -   The application must retry or recheck availability.
        -   For booking systems, use SELECT FOR UPDATE or SERIALIZABLE isolation.
*/

/*
=>  SERIALIZABLE
    -   SERIALIZABLE is the strictest level, like having a policy where clerks must 
        process group bookings one at a time, with no overlapping transactions 
        allowed:
    -   This isolation level guarantees absolute consistency.
    -   It is critical for VIP block bookings and conference room reservations.
    -   It completely prevents double bookings.
    -   If conflicts occur, the transaction may fail and need to be retried.
*/
-- Terminal 1: Alice starts a group booking
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT COUNT(*) FROM rooms 
WHERE room_type = 'Suite' AND is_available = true;

-- Terminal 2: Bob tries to book a suite
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
UPDATE rooms SET is_available = false 
WHERE room_number = '501' AND room_type = 'Suite';
-- This will wait or fail if Alice's transaction is still running


/*
=>  Choosing the Right Isolation Level

1) READ COMMITTED (Default)
    - Use when: You need basic consistency
    - Good for: Most web applications
    - Trade-off: May see data change between reads

2) REPEATABLE READ
    Use when: You need consistent views of data
    Good for: Financial reports, analytics
    Trade-off: Higher chance of serialization failures

3) SERIALIZABLE
    Use when: You need perfect isolation
    Good for: Financial transactions
    Trade-off: Lower concurrency, more retries needed
*/
-- Locks (row-level, table-level):
/*
=>  Row-Level Locks:
    -   Applied to individual rows, not the whole table
    -   Automatically taken during UPDATE, DELETE, or SELECT … FOR UPDATE
    -   Other transactions can read the row but cannot modify it until the lock is 
        released
    -   Used heavily in booking, payment, inventory systems
    -   Fine-grained
    -   High concurrency
*/

BEGIN;
SELECT * FROM rooms WHERE id = 10 FOR UPDATE;
-- row 10 is locked until COMMIT/ROLLBACK

/*
=>  Table-Level Locks:
    -   Applied to the entire table
    -   Used during DDL operations (ALTER, DROP, TRUNCATE) or bulk actions
    -   Can block reads and/or writes depending on lock type
*/
LOCK TABLE rooms IN ACCESS EXCLUSIVE MODE;
/*
    - Can block other queries
    - Dangerous if used carelessly in production
*/
/*
Summary
    - Row-level locks protect specific records
    - Table-level locks protect entire tables
    - PostgreSQL automatically manages most locks
    - Use explicit locks only when absolutely necessary
*/
