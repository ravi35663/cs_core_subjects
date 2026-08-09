/*
4) Query Optimization
   - Reading query plans
   - Avoiding N+1 queries
   - Joins vs subqueries
   - Pagination strategies (OFFSET vs keyset pagination)
*/

/*
1) Reading Query Plans
    -   Goal: Understand how PostgreSQL executes your query and where time is 
        wasted.
    -   Tools
        - EXPLAIN → planner estimate
        - EXPLAIN ANALYZE → real execution

-   Rule: Optimize only when EXPLAIN ANALYZE shows a problem
*/
-- Example:
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'test@mail.com';
/*
=>  Output:
    Index Scan using idx_users_email on users
    Execution Time: 0.03 ms
*/
/*
=>  What to look for
    - Index Scan (good) vs Seq Scan(bad) (on large tables)
    - rows (estimated vs actual)
    - Execution Time
*/
/*
2) Avoiding N+1 Queries
    Problem: One query to fetch data + N queries for related data → slow.
*/
-- Bad (N+1):
SELECT * FROM users; -- ➡️ Fetches all users: 1 Query
-- then for each user
SELECT * FROM orders WHERE user_id = 1; -- Then for EACH user (N queries)
-- 1 + N queries = performance killer

-- Good (Single JOIN): 1 query instead of N+1
SELECT u.id, u.name, o.id AS order_id 
FROM users u
LEFT JOIN orders o
ON  u.id = o.user_id ;
-- Always fetch related data using JOINs or batching

-- Batching: Solution 2: IN clause (batch fetch)
SELECT * FROM users;

SELECT * FROM orders
WHERE user_id IN (1, 2, 3, 4, 5);
-- ➡️ 2 queries total, not N+1

/*
=>  Real-world cause (important for interviews)
    - This often happens when using:
        - ORMs (TypeORM, Sequelize, Hibernate)
        - Lazy loading relations
*/
-- Example: BAD practice:
users.forEach(u => {
  u.orders; // triggers query per user ❌
});

/*
=>  How to detect N+1 (lead trick)
    - Enable query logging
    - Look for same query repeated many times
    - Use APM (New Relic, Datadog)
*/

/*
=> Summary N+1 Query:
    -   The N+1 problem occurs when an application executes one query to fetch 
        parent records and then executes an additional query for each parent to 
        fetch related data, resulting in N+1 total queries.
    -   If you see a loop and a DB query inside it — 🚨 suspect N+1
*/
-------------------------------------------Joins vs Subqueries---------------------------------
/*
=>  Joins vs Subqueries:
    -   Rule: PostgreSQL optimizer is good, but JOINs are usually clearer & faster.
*/
/*
=> Subquery: 
    - Writing sql query inside other sql query:
    - This is not N+1 query:
    - The subquery is not executed once per row
*/
-- This is a single SQL statement
SELECT *
FROM orders
WHERE user_id IN (
  SELECT id FROM users WHERE country = 'India'
);

-- How PostgreSQL executes it internally see in the below example:
SELECT o.*
FROM orders o
JOIN users u ON u.id = o.user_id
WHERE u.country = 'India';

/*
=> JOIN (Preferred):
    Why JOINs are better
        - Better optimization
        - Easier to read
        - More predictable plans

Note:   Use subqueries only when logic requires isolation.
*/

/*
=>  Pagination Strategies:
*/
-- OFFSET Pagination (Slow at Scale) (Not ideal)
-- Time complexity is: O(limit + offset)
SELECT * FROM orders
ORDER BY created_at DESC
LIMIT 10 OFFSET 10000;
/*
Problem:
    - DB scans & skips 10,000 rows every time
    - Slower as page number grows
*/

/*
=> Keyset Pagination (Recommended):
*/
-- Time complexity : O(limit)
SELECT * FROM orders
WHERE created_at < '2025-01-01 10:00:00' -- Have to create index of created_at
ORDER BY created_at DESC
LIMIT 10;

-- Required index for keyset:
CREATE INDEX idx_orders_created_at
ON orders(created_at DESC);

/*
=>  Why better
    - Uses index efficiently
    - Constant performance
    - Ideal for infinite scroll
*/

/*
    | Topic         | Bad         | Good              |
    | ------------- | ----------- | ----------------- |
    | Query plan    | Guessing    | `EXPLAIN ANALYZE` |
    | Data fetching | N+1 queries | JOINs             |
    | Filtering     | Subqueries  | JOINs             |
    | Pagination    | OFFSET      | Keyset            |
*/
/*
    | Feature        | OFFSET         | Keyset              |
    | -------------- | -------------- | ------------------- |
    | Performance    | ❌ Degrades     | ✅ Consistent        |
    | Large tables   | ❌ Slow         | ✅ Fast              |
    | Page numbers   | ✅ Yes          | ❌ No                |
    | Real-time data | ❌ Inconsistent | ✅ Stable            |
    | Complexity     | ✅ Simple       | ⚠️ Slightly complex |
*/