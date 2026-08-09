/*
==> Advanced SQL:
    ->  In this section, we will cover advanced topics that give you more control over 
        data manipulation, analysis, and reporting. 
    ->  These concepts will help you tackle complex SQL problems with ease.

==> Advanced SQL concepts help with:
    -> Writing efficient queries using `CTEs` and `subqueries`
    -> Working with window functions for row-wise operations
    -> Ranking, lead, and lag functions
    -> Self-joins and advanced query techniques like `UNION`
    -> Writing clean, optimized SQL
    -> Understanding the execution order of SQL queries
    -> Pivots and string manipulations
*/

/*
==> CTE vs. SUBQUERY:
    ->  Both Common Table Expressions (CTE) and subqueries allow you to create 
        temporary result sets for use within a query. However, they have different use 
        cases and syntax.
*/
/*
==> CTE (WITH Clause):
    ->  A CTE is a temporary result set that can be referenced within the main SQL 
        query. 
    ->  It enhances readability and allows for recursive queries.
*/

--Syntax (CTE):
WITH cte_name AS (
    SELECT column1, column2
    FROM table_name
    WHERE condition
)
SELECT column1, column1 
FROM cte_name;

-- Example: To calculate total sales for customers using a CTE:
WITH sales_summary AS (
    SELECT customer_id, SUM(amount) AS total_sales
    FROM orders
    GROUP By customer_id;
)
SELECT * FROM sales_summary WHERE total_sales > 500;

/*
==> Subquery:
    ->  A subquery is a query nested inside another query. 
    ->  It can be used to filter data or provide intermediate results.
*/
-- Syntax (Subquery):
SELECT column1 FROM table_name
WHERE column1 = ( SELECT Max(colum1) FROM table_name);

-- Example: To find customers with more than 500 in total sales using a subquery:
SELECT customer_id, total_sales 
FROM (
    SELECT customer_id, SUM(amount) as total_sales
    FROM orders
    GROUP By customer_id
) AS sales_summary
WHERE total_sales > 500;

/*
==> SQL SELF-JOINS:
    ->  A self-join is a join where a table is joined with itself. 
    ->  This is useful for comparing rows within the same table.
*/
--  Syntax:
SELECT a.column1, b.colum2
FROM table_name a
JOIN table_name b ON a.common_column = b.common_column;

-- To find orders placed by the same customer on different dates:
SELECT a.order_id, a.amount, b.order_id AS other_order_id, b.amount AS other_amount
FROM orders a
JOIN orders b ON a.customer_id = b.customer_id AND a.order_id != b.other_id;

/*
==> SQL UNION:
    ->  The `UNION` operator combines the results of two or more SELECT queries into a 
        single result set. 
    ->  The `UNION ALL` operator includes duplicate rows, while `UNION` removes them.
*/
-- Syntax:
SELECT * from table_1
UNION
SELECT * from table_2;
-- Example: To combine customer IDs from `customers` and `orders` tables:
SELECT customer_id from customers
UNION
SELECT customer_id from orders;

/*
==> EXECUTION ORDER ↕:
    ->  Understanding SQL’s execution order can help write better queries. 
    ->  Here’s the typical order:
        1. FROM: Identify the source tables.
        2. JOIN: Apply joins if needed.
        3. WHERE: Filter rows.
        4. GROUP BY: Group rows for aggregation.
        5. HAVING: Filter grouped rows.
        6. SELECT: Choose which columns to return.
        7. ORDER BY: Sort the result set.
        8. LIMIT: Limit the number of rows returned.
*/
/*
==> SQL PIVOTING:
    ->  Pivoting in SQL converts rows into columns, allowing for better data reporting 
        and analysis. 
    ->  SQL doesn’t have a built-in `PIVOT` function in some databases, so you may need 
        to use aggregate functions and `CASE` statements.
*/

-- Example: To pivot sales data by month:
SELECT customer_id,
    SUM(CASE WHEN month = 'January' THEN amount ELSE 0 END) AS January,
    SUM(CASE WHEN month = 'February' THEN amount ELSE 0 END) AS February
FROM sales
GROUP By customer_id;