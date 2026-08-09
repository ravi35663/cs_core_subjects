/*
==> Joins:
    ->  JOINS` are used to combine rows from two or more tables based on a related 
        column between them.
    ->  `INNER JOIN`: Returns matching rows.
    ->  `LEFT JOIN`: Returns all rows from the left table and matching rows from the 
        right.
    ->  `RIGHT JOIN`: Returns all rows from the right table and matching rows from the 
        left.
    ->  `FULL JOIN`: Returns all rows when there is a match in either table.
*/
-- Syntax:
SELECT colums FROM table1
JOIN table2 ON table1.column_name = table2.common_column

-- Customer Table
-- +-------------+-------+
-- | customer_id | name  |
-- +-------------+-------+
-- |     101     | Alice |
-- |     102     | Bob   |
-- +-------------+-------+

-- Orders Table
-- +----------+-------------+--------+
-- | order_id | customer_id | amount |
-- +----------+-------------+--------+
-- |    1     |     101     |  100   |
-- |    2     |     102     |  200   |
-- +----------+-------------+--------+

-- To join `customers` with `orders`:
SELECT customer_id, orders.amount 
FROM customers;
JOIN orders ON customers.customer_id = orders.customer_id;
-- +-------+--------+
-- | name  | amount |
-- +-------+--------+
-- | Alice |  100   |
-- | Bob   |  200   |
-- +-------+--------+

/*
==> DATE FUNCTIONS
    ->  SQL provides functions to manipulate and format dates, like `NOW()`, `CURDATE()`, 
        `DATEADD()`, and `DATEDIFF()`.
*/
-- Syntax:
SELECT NOW(), CURDATE(), DATEDIFF(date1, date2) FROM table_name;
-- To get the current date and time:
SELECT NOW() AS current_date_time;

-- To calculate the difference between two dates:
SELECT DATEDIFF('2024–09–12', '2024–09–01') AS days_difference;
-- | days_difference |
-- | - - - - - - - - |
-- |       11        |
