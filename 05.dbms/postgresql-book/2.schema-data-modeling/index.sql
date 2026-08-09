/*
=>  Schema & Data Modeling
    - Designing schemas for scalability
    - One-to-one, one-to-many, many-to-many
    - UUID vs SERIAL/BIGSERIAL
    - Soft delete vs hard delete
*/
----------------------- Designing Schemas for Scalability in PostgreSQL ------------------------
/*
1. Use efficient data types (smaller = faster):
    -   Use minimal size types to reduce memory & I/O.
*/
-- Example:
id BIGSERIAL PRIMARY KEY    -- use only if > 2B(Billion) rows
status SMALLINT             -- instead of VARCHAR

/*
2. Normalize for Writes, Denormalize for Reads
    -   Normalize → scalable writes & consistency (split redundant data across multiple tables)
    -   Denormalize selectively → faster reads: (joins are avoided)
*/
-- Example:
-- Normalized
orders(user_id);

-- Denormalized for scale:
orders(user_id,user_email);

/*
3.Use Proper Indexing (Critical for Scale)
    -   Index only what you query frequently.
*/
-- Example:
CREATE INDEX index_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_created_at ON orders(created_at);

/*
4.Partition Large Tables
    -   Split massive tables to avoid full-table scans.
*/
-- Example (Range Partitioning):
CREATE TABLE orders (
  id BIGSERIAL,
  user_id BIGINT,
  item_count INT,
  location TEXT,
  created_at DATE
) PARTITION BY RANGE (created_at);
/*  
    here, rows are not split automatically. You decide the splits.
*/
/*
-   This creates a partitioned parent table:
        - 'orders' itself stores no data
        - Actual rows go into child partition tables
        - Partitioning key: created_at

-   At this point:
        - No partitions exist
        - You cannot insert any rows yet
*/
/*
=>  How rows are split (important)
    -   Rows are split based on the RANGE rules you define, not automatically.
    -   You must create partitions like this:
*/
CREATE TABLE orders_2025_01
PARTITION OF orders
FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');

CREATE TABLE orders_2025_02
PARTITION OF orders
FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');
/*
=>  Rule:
    - PostgreSQL checks created_at
    - Finds the partition whose range contains that date
    - Inserts the row into that partition
*/
-- Example: Where rows go
INSERT INTO orders (user_id, item_count, location, created_at)
VALUES (1, 10, 'some location', '2025-01-15');
-- Partition key should always be in the last in values and keys of the orders
-- Goes into orders_2025_01

INSERT INTO orders (created_at) VALUES ('2025-02-10');
-- Goes into orders_2025_02

-- What happens if no matching partition exists?
INSERT INTO orders (created_at) VALUES ('2030-01-01');
-- You'll get the error: no partition of relation "orders" found for row

-- Fix: DEFAULT partition:
CREATE TABLE orders_default
PARTITION OF orders
DEFAULT;

-- How to see row counts per partition:
SELECT
  relname,
  n_live_tup
FROM pg_stat_user_tables
WHERE relname LIKE 'orders_%';


/*
5.Avoid Over-Indexing
    - Too many indexes = slow inserts/updates.
    Rule
        - Index WHERE, JOIN, ORDER BY columns only
*/

/*
6.Use Surrogate Keys (Not Natural Keys)
    -   Surrogate keys scale better.
*/
-- Example:
    id BIGSERIAL PRIMARY KEY   -- better than email as PK

/*
7.Plan for Growth (Future-proof)
    - Add created_at, updated_at
    - Soft deletes if needed
*/
-- Example:
    is_deleted BOOLEAN DEFAULT false

/*
Note:
    Schema scalability = 
        right data types + 
        smart indexing + 
        partitioning + 
        controlled denormalization
*/

-------------------------One-to-one, one-to-many, many-to-many-------------------------
/*
1) One-to-One (1:1)
    -   One row in table A relates to only one row in table B.
    -   When to use: 
        -   Optional or sensitive data split into another table.
*/
-- Example:
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT
);
CREATE TABLE user_profiles(
    user_id INT PRIMARY KEY REFERENCES users(id),
    bio TEXT,
    email VARCHAR(100)
)
-- One user → one profile
SELECT u.id, u.name, p.bio, p.email
FROM users u
JOIN user_profiles p
ON u.id = p.user_id;

/*
2) One-to-Many (1:N)
    -   Meaning: One row in table A relates to many rows in table B.
    -   Most common relationship.
    -   Example: one user have multiple tasks/blogs/items ..etc
*/
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id), -- No primary key is here so can be multiple entries
    amount INT
)
-- One user → many orders
-- Each order → one user

SELECT u.id, u.name, o.amount, o.id AS order_id
FROM users u
JOIN orders o
ON u.id = o.user_id;

/*
3) Many-to-Many (M:N)
    - Meaning: Many rows in table A relate to many rows in table B.
    - Solved using a junction (mapping) table.
*/

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name TEXT
)

CREATE TABLE courses(
    id SERIAL PRIMARY KEY,
    title TEXT
)

-- junction (mapping) table
CREATE TABLE student_courses(
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    PRIMARY KEY(student_id, course_id)
)
/*
One student → many courses
One course → many students
*/
SELECT s.id AS student_id, s.name AS student_name, c.id AS course_id, 
c.title AS course_title
FROM student s
JOIN student_courses sc
    ON s.id == sc.student_id
FROM course c
JOIN student_courses sc
    ON c.id = sc.course_id
/*
    JOIN = only matching records
    LEFT JOIN = include parent even if child is missing
*/
SELECT u.name, o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

/*
=> Summary:
    1:1 → split optional data
    1:N → parent-child relationship
    M:N → always use a junction table
*/


---------------------UUID vs SERIAL / BIGSERIAL in PostgreSQ---------------------
/*
=>  SERIAL / BIGSERIAL
    - What it is: Auto-incrementing integer generated by a sequence.

    - Pros
        - Small size (4 / 8 bytes)
        - Fast indexes & joins
        - Human-readable, ordered

    - Cons
        - Predictable IDs
        - Harder in distributed systems (ID collisions across DBs)

    -   Best for
        - Single database
        - High-performance OLTP systems
*/
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT
);

/*
=>  UUID:
    -   What it is: Globally unique identifier (128 bites).
    -   Pros
            - Globally unique (safe for distributed systems)
            - Can be generated outside DB
            - Hard to guess (better security)
    Cons
        - Larger (16 bytes)
        - Slower indexes & joins
        - Random order → index fragmentation
*/
-- Example:
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT
);
/*
    | Feature             | SERIAL/BIGSERIAL  | UUID     |
    | ------------------- | ----------------  | -------- |
    | Size                | 4 / 8 bytes       | 16 bytes |
    | Performance         | 🔥 Faster         | Slower   |
    | Order               | Sequential        | Random   |
    | Distributed systems | ❌                | ✅      |
    | Security            | Predictable       | Safer    |
*/
/*
=>  Lead-Level Recommendation
    - Single DB, high scale → BIGSERIAL
    - Microservices / multi-region → UUID
    - Best of both worlds → UUID v7 (time-ordered)
*/
-- UUID v7 Example:
id UUID DEFAULT gen_random_uuid();
/*
=>  Rule of thumb: 
    -   Performance first → SERIAL.
    -   Distribution first → UUID.
*/

----------------------------Soft delete vs hard delete----------------------------
/*
=>  Hard Delete
    -   What it is: Row is permanently removed using DELETE.

    -   Pros
        - Frees storage
        - Simple queries
        - No extra filters needed

    -   Cons
        - Data loss (no recovery)
        - Auditing & rollback impossible

    -   Best for
        - Temporary / non-critical data
        - Cleanup jobs, logs
*/
-- Example:
DELETE FROM users WHERE id = 10;

/*
=>  Soft Delete
    -   What it is: Row stays, marked as deleted using a flag or timestamp.

    -   Pros
        - Data recovery possible
        - Audit & history tracking
        - Safer for business data

    -   Cons
        - Queries must filter deleted rows
        - Table size grows
*/

UPDATE users
SET is_deleted = true,
    deleted_at = NOW()
WHERE id = 10;

-- Query (exclude deleted rows)
SELECT * FROM users WHERE is_deleted = false;
/*
    | Aspect           | Hard Delete | Soft Delete   |
    | ---------------- | ----------- | ------------- |
    | Data recovery    | ❌          | ✅             |
    | Storage          | Frees space | Grows         |
    | Query complexity | Simple      | Needs filters |
    | Auditing         | ❌         | ✅             |
*/

/*
=>  Lead-Level Best Practice
    -   Soft delete for core business tables,
    -   Hard delete for logs, cache, temp data
*/
-- Pro tip (performance):
CREATE INDEX idx_users_active
ON users(id)
WHERE is_deleted = false;
