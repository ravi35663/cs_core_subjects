/*
==> SUM, AVG, COUNT
    ->  These are aggregate functions used to perform calculations on a set of values.
    -> `SUM()`: Returns the total sum of a numeric column.
    -> `AVG()`: Returns the average of a numeric column.
    -> `COUNT()`: Returns the number of rows or non-`NULL` values.
*/
-- Syntax:
    SELECT SUM(column_name), AVG(column_name), COUNT(column_name) FROM table_name;

---- +----------+-------------+--------+
-- | order_id | customer_id | amount |
-- +----------+-------------+--------+
-- |    1     |     101     |  100   |
-- |    2     |     102     |  200   |
-- |    3     |     101     |  300   |
-- +----------+-------------+--------+
-- To calculate the total amount of orders:
SELECT SUM(amount) as total_sum FROM order;
-- output: total_sum 600;
SELECT AVG(amount) AS avg_sales FROM orders;
-- avg_sales 
-- 200;
SELECT COUNT(order_id) AS total_orders FROM orders;
-- total_orders 
-- 3
/*
==> SQL GROUP BY:
    ->  The `GROUP BY` statement is used to group rows that have the same values in 
        specified columns. Often used with aggregate functions like `SUM()`, `COUNT()`, 
        etc.
*/
/*
==> Syntax:
    SELECT col1, aggregate_function(column2)
    FROM table_name
    GROUP BY column1
*/
-- To find the total order amount for each customer:
SELECT customer_id, SUM(amount) AS total_amount
FROM olders
GROUP By customer_id;
-- | customer_id | total_amount |
-- | - - - - - - | - - - - - -  |
-- | 101         | 400          |
-- | 102         | 200          |

/*
==> SQL HAVING
    ->  The `HAVING` clause is used to filter records after grouping. 
    ->  It’s similar to `WHERE`, but it operates on aggregated data.
*/

-- Syntax:
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;

-- Example: To find customers who have spent more than 300:
SELECT customer_id, SUM(amount) as total_amount
FROM orders
GROUP By customer_id
HAVING total_amount > 300;
-- | customer_id | total_amount |
-- | - - - - - - | - - - - - -  |
-- | 101         | 400          |

/*
==> SQL DISTINCT
    ->  The `DISTINCT` keyword is used to return only unique values.
*/
-- Syntax:
SELECT DISTINCT colum1 FROM table_name;

-- Example: To get unique customer IDs from the `orders` table:
SELECT DISTINCT customer_id FROM orders;
-- | customer_id |
-- | - - - - - - |
-- |    101      |
-- |    102      |

/*
==> SQL ARITHMETIC:
    ->  SQL allows arithmetic operations like addition, subtraction, multiplication, 
        and division directly within queries.
*/
-- Syntax:
SELECT column_name + 100, column_name - 50, column_name * 2, column_name/2 FROM table_name

-- To add 10% tax to each order::
SELECT amount, amount * 1.1 amount_with_tax FROM orders;
/*
| amount | amount_with_tax |
| - - -  | - - - - - - - - |
|   100  |    110          |
|   200  |    220          |
|   300  |    330          |
*/

/*
==> MATH FUNCTIONS
    ->  SQL provides built-in math functions like `ROUND()`, `CEIL()`, `FLOOR()`, and 
        `ABS()` to perform mathematical calculations.
*/
-- Syntax: 
SELECT ROUND(column_name), CEIL(column_name), FLOOR(column_name), ABS(column_name) FROM table_name;

-- Example: To round the order amounts to the nearest integer:
SELECT amount, ROUND(amount) as rounded_amount FROM orders;
-- | amount | rounded_amount  |
-- | - - -  | - - - - - - - - |
-- | 100    | 110.00          |
-- | 200    | 220.00          |
-- | 300    | 330.00          |

/*
==> SQL DIVISION:
    ->  SQL supports division (`/`) to perform calculations between columns or constants.
*/
--  Syntax: 
SELECT column1 / column2 FROM table_name;

-- To calculate the average order per customer (assuming no `GROUP BY`):
SELECT SUM(amount) / COUNT(DISTINCT customer_id) as avg_per_customer FROM orders;
-- | avg_per_customer |
-- | - - - - - - - -  |
-- |     300          |

/*
==> SQL NULL
    ->  `NULL` represents missing or undefined data. 
    ->  SQL provides functions like `IS NULL`, `IS NOT NULL`, and `COALESCE()` to 
        handle `NULL` values.
*/

-- Syntax: 
SELECT column1 FROM tabele_name WHERE column1 IS NULL;

-- To find orders where the amount is `NULL`:
SELECT * FROM orders WHERE amount IS NULL;

-- To handle `NULL` values using `COALESCE()`:
SELECT COALESCE(amount,0) FROM orders; - return 0 if amount is NULL;