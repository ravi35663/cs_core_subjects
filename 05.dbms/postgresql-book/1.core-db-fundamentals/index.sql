/*
1) Core Database Fundamentals
   - Data types, constraints, primary/foreign keys
   - Normalization vs denormalization
   - ACID properties
*/
/*
=>  Data Types, Constraints, Primary/Foreign Keys:
   -  Common Data Types
      - INTEGER, BIGINT
      - VARCHAR(n), TEXT
      - BOOLEAN
      - DATE, TIMESTAMP
      - JSON, JSONB

   -  Constraints:
      - PRIMARY KEY → uniquely identifies a row
      - FOREIGN KEY → maintains relation between tables
      - UNIQUE, NOT NULL, CHECK, DEFAULT
*/
-- Example:
CREATE TABLE users(
   id SERIAL PRIMARY KEY,
   email VARCHAR(100) UNIQUE NOT NULL,
   age INT CHECK (age >= 18)
)

CREATE TABLE orders(
   id SERIAL PRIMARY KEY,
   user_id INT REFERENCES users(id),
   created_at TIMESTAMP DEFAULT NOW();
)
/*
=> OLTP:
   -  Online Transaction Processing (OLTP) is a system designed to manage 
      high-volume, concurrent, real-time transactions for operational, 
      day-to-day business tasks.
*/
/*
=> Normalization vs Denormalization
   -  Normalization:
      -  split data into multiple tables to avoid redundancy (OLTP)

   -  Denormalization:
      -  combine data to reduce joins and improve read performance (analytics)
*/
/*
-- Normalized
   users(id, name)
   orders(id, user_id)

-- Denormalized
   orders(id, user_name)
*/
/*
=> ACID Properties (PostgreSQL is fully ACID-compliant)
   -  Atomicity → all or nothing transaction
   -  Consistency → data follows rules & constraints
   -  Isolation → concurrent transactions don’t conflict
   -  Durability → committed data survives crashes
*/

/*
Below  is a transaction in PostgreSQL.
   Why?
      BEGIN → starts the transaction
      Both UPDATEs execute as one unit
      COMMIT → permanently saves changes

What it guarantees (ACID – Atomicity)
   If both updates succeed → money transfers correctly
   If any update fails → nothing is saved (you can ROLLBACK)
*/
-- Transaction Example:
BEGIN; 
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;

/*
=> Transaction:
   -  Multiple SQL statements wrapped with BEGIN + COMMIT = Transaction
*/

-- Example (failure case):
BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 999; -- fails
ROLLBACK;
