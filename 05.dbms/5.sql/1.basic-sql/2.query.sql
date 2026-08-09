-- +----+---------+-----+------------+
-- | id | name    | age | department |
-- +----+---------+-----+------------+
-- |  1 | Alice   | 30  | HR         |
-- |  2 | Bob     | 25  | IT         |
-- |  3 | Charlie | 28  | Finance    |
-- +----+---------+-----+------------+

/*
==> SQL WHERE
    ->  The `WHERE` clause is used to filter records based on conditions. 
    ->  It helps you fetch only the rows that match specific criteria.
    ->  Syntax: 
        -- SELECT column1, column2, … FROM table_name WHERE condition;
*/
-- To select employees who are older than 25:
SELECT * FROM employees WHERE age > 25
-- +----+---------+-----+------------+
-- | id | name    | age | department |
-- +----+---------+-----+------------+
-- |  1 | Alice   | 30  | HR         |
-- |  3 | Charlie | 28  | Finance    |
-- +----+---------+-----+------------+

/*
==> AND, OR, NOT:
    ->  These operators allow you to combine multiple conditions in your `WHERE` clause.

    -> `AND`: Returns records when all conditions are true.
    -> `OR`: Returns records when at least one condition is true.
    -> `NOT`: Negates a condition.
*/
-- Syntax
SELECT column1, column2, … FROM table_name WHERE condition1 AND/OR/NOT condition2;

-- Example:
SELECT * FROM employees WHERE age > 25 AND department = 'HR';
SELECT * FROM employees WHERE age > 25 OR department = 'IT';
SELECT * FROM employees WHERE NOT department = 'Finance';

/*
==> SQL BETWEEN:
    ->  The `BETWEEN` operator selects values within a range. 
    ->  It is inclusive of the boundary values.
*/
-- Syntax:
SELECT col1,col2, ... FROM table_name WHERE col_name BETWEEN value1 AND value2;
-- SELECT column1, column2, … FROM table_name WHERE column_name BETWEEN value1 AND value2;

-- Example: Select employees aged between 25 and 30:
SELECT * FROM employees WHERE age BETWEEN 25 AND 30


/*
==> SQL IN:
    ->  The `IN` operator allows you to specify multiple values in a `WHERE` clause. 
    ->  It’s useful when checking against multiple possible values.
*/
SELECT colum1, colum2, .. FROM table_name WHERE col_name IN (value1,value2,value3);


-- Example: Select employees who work in the IT or HR departments:
SELECT * FROM employees WHERE department IN('IT','HR');
/*
// employees table:
+----+---------+-----+------------+
| id | name    | age | department |
+----+---------+-----+------------+
|  1 | Alice   | 30  | HR         |
|  2 | Bob     | 25  | IT         |
+----+---------+-----+------------+
*/

/*
==> SQL LIKE
    ->  The `LIKE` operator is used in a `WHERE` clause to search for a specified 
        pattern in a column. You can use `%` as a wildcard for any number of characters 
        and `_` for a single character.
*/
-- Syntax:
SELECT column1, column2, … FROM table_name WHERE column_name LIKE pattern;

-- Example: Select employees whose name starts with “A”:
-- SELECT * FROM employees WHERE name LIKE 'A%';
SELECT * FROM employees WHERE name LIKE 'A%'
-- | id | name    | age | department |
-- +----+---------+-----+------------+
-- |  1 | Alice   | 30  | HR         |

-- Select employees whose name contains “li”:
SELECT * FROM employees WHERE name "%li%"
+----+---------+-----+------------+
-- | id | name    | age | department |
-- +----+---------+-----+------------+
-- |  1 | Alice   | 30  | HR         |
-- |  3 | Charlie | 28  | Finance    |
-- +----+---------+-----+------------+

/*
==> SQL ORDER BY:
    ->  The `ORDER BY` clause is used to sort the result set in ascending or descending 
        order. 
    ->  By default, the `ORDER BY` sorts in ascending order.
    -> `ASC`: Ascending order (default).
    -> `DESC`: Descending order.
*/
-- Syntax:
-- SELECT column1, column2, … FROM table_name ORDER BY column_name [ASC|DESC];

-- Example: Select all employees and sort them by age in ascending order:
SELECT * FROM employees ORDER BY age ASC;
-- +----+---------+-----+------------+
-- | id | name    | age | department |
-- +----+---------+-----+------------+
-- |  2 | Bob     | 25  | IT         |
-- |  3 | Charlie | 28  | Finance    |
-- |  1 | Alice   | 30  | HR         |
-- +----+---------+-----+------------+