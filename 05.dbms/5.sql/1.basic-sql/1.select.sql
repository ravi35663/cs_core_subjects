/*
==> SELECT Query:
    ->  The `SELECT` statement is used to retrieve data from a database. 
        You can choose specific columns or all columns in a table.
    ->  Syntax:
        SELECT colum1,colum2...columnN from table_name
*/
/*
// employees table:
+----+---------+-----+------------+
| id | name    | age | department |
+----+---------+-----+------------+
|  1 | Alice   | 30  | HR         |
|  2 | Bob     | 25  | IT         |
|  3 | Charlie | 28  | Finance    |
+----+---------+-----+------------+
*/
SELECT id,name,age FROM employees:
-- Output --
/*
+----+---------+-----
| id | name    | age 
+----+---------+-----
|  1 | Alice   | 30  
|  2 | Bob     | 25  
|  3 | Charlie | 28  
+----+---------+-----
*/

-- To select all columns:
SELECT * from employees;
/*
+----+---------+-----+------------+
| id | name    | age | department |
+----+---------+-----+------------+
|  1 | Alice   | 30  | HR         |
|  2 | Bob     | 25  | IT         |
|  3 | Charlie | 28  | Finance    |
+----+---------+-----+------------+