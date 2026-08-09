
-- https://medium.com/geekculture/indexing-in-postgres-db-4cf502ce1b4e
/*
=>  Indexing (Very Important)
    - B-tree, Hash, GIN, GiST, BRIN
    - Composite indexes
    - Partial indexes
    - When indexes help vs hurt
    - Index usage with EXPLAIN / EXPLAIN ANALYZE
*/

/*
1) B-tree Index (Default & Most Used)
    -   Use when: =, <, >, BETWEEN, ORDER BY
    -   Best for OLTP queries
*/
-- Example:
CREATE INDEX idx_users_email ON users(email);

/*
2) Hash Index
    -   Use when: Equality checks only (=)
    -   Rarely used (B-tree usually better)
*/
-- Example:
CREATE INDEX idx_users_email_hash ON users USING HASH (email);

/*
3) GIN Index
    -   Use when: ARRAY, JSONB, full-text search
*/
-- Example:
CREATE INDEX idx_users_tags ON users USING GIN (tags);

-- Query:
SELECT * FROM users WHERE tags @> ARRAY['fitness'];
-- It is like tags.includes('fitness') in js// true
/*
=> What it means
    - tags is an array column (e.g. TEXT[]) in PostgreSQL.
    - @> is the array containment operator.
    - It checks whether the left array contains the right array.

In simple words
    -   Fetch all users whose tags array contains "fitness".
*/
-- tags = ['fitness', 'gym', 'health']  ✅ matched
-- tags = ['fitness']                   ✅ matched
-- tags = ['gym', 'health']             ❌ not matched

/*
4) GiST Index
    -   Use when: Geospatial, ranges, similarity search
    
=>  What this index does
    -   Creates a GiST index on a time range built from:
            - start_time
            - end_time
    -   Optimized for overlap / containment / range queries
    -   Common in booking, events, calendars, availability systems
*/
CREATE INDEX idx_events_time
ON events USING GiST (tsrange(start_time,end_time));

-- Example:
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name TEXT,
  start_time TIMESTAMP,
  end_time TIMESTAMP
);

INSERT INTO events (name, start_time, end_time) VALUES
('Yoga Class', '2026-02-01 06:00', '2026-02-01 07:00'),
('Gym Session', '2026-02-01 07:30', '2026-02-01 08:30'),
('Meditation', '2026-02-01 06:30', '2026-02-01 07:15');

SELECT *
FROM events
WHERE tsrange(start_time, end_time)
      && tsrange('2026-02-01 06:45', '2026-02-01 07:45');
/*
    | Event       | Time        | Overlaps? |
    | ----------- | ----------- | --------- |
    | Yoga Class  | 06:00–07:00 | ✅         |
    | Meditation  | 06:30–07:15 | ✅         |
    | Gym Session | 07:30–08:30 | ✅         |
*/

/*
=>  Why GiST index is used here
    - B-Tree ❌ → can’t index range logic
    - GiST ✅ → designed for:
        - && (overlaps)
        - @> (contains)
        - <@ (contained by)

Note:   
    Index gets used automatically by PostgreSQL for range predicates.
*/

/*
5) BRIN Index
    - Use when: Huge tables with naturally ordered data

=>  What this index does
    - Creates a BRIN (Block Range INdex) on created_at
    - Stores min/max values per data block, not per row
    - Best for very large tables with time-ordered inserts
*/
CREATE INDEX idx_logs_created_at 
ON logs USING BRIN(created_at);

-- Example:
CREATE TABLE logs (
  id BIGSERIAL PRIMARY KEY,
  message TEXT,
  created_at TIMESTAMP
);
-- Demo data (time-ordered inserts)
INSERT INTO logs (message, created_at) VALUES
('User login', '2026-02-01 09:00'),
('User logout', '2026-02-01 09:05'),
('Payment success', '2026-02-01 09:10'),
('Order created', '2026-02-01 09:15');
-- In real systems, this table can have millions/billions of rows.

SELECT *
FROM logs
WHERE created_at >= '2026-02-01 09:05'
  AND created_at <= '2026-02-01 09:12';

/*
    | Feature        | BRIN             | B-Tree         |
    | -------------- | ---------------- | -------------- |
    | Index size     | 🔥 Very small    | ❌ Large        |
    | Best for       | Time-series data | Random lookups |
    | Data order     | Sequential       | Any            |
    | Precision      | Block-level      | Row-level      |
    | Massive tables | ✅ Perfect        | ❌ Costly       |
*/

/*
6) Composite Index
    -   Use when: Queries filter on multiple columns (order matters!)

=>  What this index does:
    - Creates a B-Tree index on (user_id, status)
    - Index is stored left → right
    - user_id is the leading column
*/
CREATE INDEX idx_orders_user_status
ON orders(user_id, status);

-- Works for:
WHERE user_id = 1
WHERE user_id = 1 AND status = 'PAID'

-- Example:
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT,
  status TEXT,
  total_amount NUMERIC,
  created_at TIMESTAMP
);

INSERT INTO orders (user_id, status, total_amount, created_at) VALUES
(1, 'PAID', 500, '2026-02-01'),
(1, 'PENDING', 300, '2026-02-02'),
(2, 'PAID', 700, '2026-02-01'),
(1, 'PAID', 900, '2026-02-03');

-- Query - 1:
SELECT *
FROM orders
WHERE user_id = 1;
/*
=>  Why it works
    - Uses the leading column (user_id)
    - Index can quickly jump to user_id = 1
*/

-- Query 2:
SELECT *
FROM orders
WHERE user_id = 1 AND status = 'PAID';
/*
=>  Why it works
    - Uses both columns in index order
    - Narrow scan → faster lookup
*/
-- Query 3:
SELECT *
FROM orders
WHERE status = 'PAID';
/*
=>  Index NOT used:
    =>  Reason
        - 'status' is not the leading column
        - B-Tree can’t jump directly to 'status' values
*/
-- Query 4:
SELECT *
FROM orders
WHERE status = 'PAID' AND user_id = 1;
/*
    - May still not use the index efficiently
    - (PostgreSQL planner depends on data distribution)
*/
/*
=>  Optional improvement for composite index (real systems)
    - If most queries filter by status = 'PAID':
*/
CREATE INDEX idx_orders_user_paid
ON orders(user_id)
WHERE status = 'PAID'; -- Partial index = smaller + faster

/*
7) Partial Index
    -   Use when: You query only a subset of rows
    -   Kind of composite index
*/
CREATE INDEX idx_active_users
ON users(email)
WHERE is_deleted = false; -- Smaller + faster than full index

---------------------------------When Indexes HELP vs HURT--------------------------------
/*
=>  Indexes HELP when
    - Large tables
    - SELECT-heavy workload
    - Filters / joins on indexed columns

=>  Indexes HURT when
    - Too many indexes
    - Heavy INSERT / UPDATE / DELETE
    - Small tables (seq scan faster)
*/

-------------------------Index usage with EXPLAIN / EXPLAIN ANALYZE-------------------------
/*
    -   You can See query plan & performance using EXPLAIN / EXPLAIN ANALYZE.
    -   EXPLAIN shows the planned execution strategy, while EXPLAIN ANALYZE 
        executes the query and provides actual runtime statistics, allowing us 
        to validate whether indexes are truly being used.
*/
-- index given:
CREATE INDEX idx_orders_user_status
ON orders(user_id, status);

-- Query 1 — EXPLAIN (planner only) (no execution)
EXPLAIN
SELECT *
FROM orders
WHERE user_id = 1 AND status = 'PAID';
/*
output:
    Index Scan using idx_orders_user_status on orders
        Index Cond: ((user_id = 1) AND (status = 'PAID'))

*/
-- Query 2 — EXPLAIN ANALYZE (real execution)
EXPLAIN ANALYZE
SELECT *
FROM orders
WHERE user_id = 1 AND status = 'PAID';
/*
output:
    Index Scan using idx_orders_user_status on orders =>   ➡️ Index is used instead of full table scan.
      Index Cond: ((user_id = 1) AND (status = 'PAID')) => ➡️ Conditions satisfied directly from index traversal.
        Planning Time: 0.120 ms     => ➡️ Time taken to choose execution plan.
        Execution Time: 0.045 ms    => ➡️ Actual time to fetch rows.

*/

-- Time complexity sheet: insert, update and delete mostly share the same time complexity:
/*
| Index Type | Search      | Insert      | Best Use Case       |
| ---------- | ----------- | ----------- | ------------------- |
| **B-Tree** | `O(log n)`  | `O(log n)`  | General purpose     |
| **Hash**   | `O(1)`      | `O(1)`      | Equality only       |
| **GiST**   | `~O(log n)` | `~O(log n)` | Ranges, geo         |
| **GIN**    | `O(log n)`  | `O(n)`      | JSON, arrays        |
| **BRIN**   | `O(blocks)` | `O(1)`      | Massive time-series |

*/