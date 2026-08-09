---- +----------+-------------+--------+
-- | order_id | customer_id | amount |
-- +----------+-------------+--------+
-- |    1     |     101     |  100   |
-- |    2     |     102     |  200   |
-- |    3     |     101     |  300   |
-- +----------+-------------+--------+
/*
==> SQL CASE
    ->  The `CASE` statement is used for conditional logic in SQL queries. 
    ->  It acts like an `if-else` structure in SQL.
*/
-- Syntax:
-- SELECT colum1,
--     CASE
--         WHEN condition1 THEN result1
--         WHEN condition2 THEN result2
--         ELSE result3
--     END AS alias_name
-- FROM table_name;

-- To categorize orders based on amount:
SELECT amount,
    CASE 
        WHEN amount > 250 THEN 'high'
        WHEN amount > 100 THEN 'medium'
        ELSE 'low'
    END AS order_category
FROM orders;
-- | amount | order_category  |
-- | - - -  | - - - - - - - - |
-- | 100    | Low             |
-- | 200    | Medium          |
-- | 300    | High            |
