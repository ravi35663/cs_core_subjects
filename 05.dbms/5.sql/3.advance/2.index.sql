/*
==> STRING FUNCTIONS
    ->  String functions in SQL allow you to manipulate and format text data. 
    ->  Common functions include:
        1)  `CONCAT()`: Concatenates strings.
        2)  `SUBSTRING()`: Extracts a portion of a string.
        3)  `LENGTH()`: Returns the length of a string.
        4)  `UPPER()` / `LOWER()`: Converts a string to upper or lowercase.
*/
/*
Table: Employee Table:
    +-------------+------------+-----------+---------------------------+
    | employee_id | first_name | last_name | email                     |
    +-------------+------------+-----------+---------------------------+
    |      1      | John       | Doe       | john.doe@example.com      |
    |      2      | Jane       | Smith     | jane.smith@example.com    |
    |      3      | Alice      | Johnson   | alice.johnson@example.com |
    |      4      | Bob        | Brown     | bob.brown@example.com     |
    +-------------+------------+-----------+---------------------------+
*/
--  CONCAT
SELECT employee_id, CONCAT(first_name,' ',last_name) AS full_name
FROM employees;
/*
    +-------------+------------+-
    | employee_id | full_name     |
    |      1      | John Doe      |   
    |      2      | Jane Smith    | 
    |      3      | Alice Johnson |  
    |      4      | Bob Brown     |
    +-------------+------------+- |
*/
-- SUBSTRING
SELECT employee_id, SUBSTRING(email,1,5) AS email_prefix
FROM employees;
/*
    +-------------+------------+-
    | employee_id | email_prefix  |
    |      1      | john.         |   
    |      2      | jane.         | 
    |      3      | alice         |  
    |      4      | bob.b         |
    +-------------+------------+- |
*/
-- LENGTH:
SELECT employee_id, LENGTH(email) AS email_length
FROM employees;

--  `UPPER()` / `LOWER()`
SELECT employee_id,
UPPER(first_name) AS first_name_upper
FROM employees;