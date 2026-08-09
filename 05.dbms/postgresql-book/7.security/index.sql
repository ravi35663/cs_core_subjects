/*
9) Security
   - Roles and permissions
   - Row Level Security (RLS)
   - SQL injection prevention
   - Encryption at rest & in transit
*/
/*
=> Roles and permissions:
    -   Proper access control in PostgreSQL is critical for data security, 
        scalability, and separation of concerns. PostgreSQL provides a robust 
        role-based access control system that extends beyond basic user permissions.
*/

/*
=>  Roles in PostgreSQL:
    1) Login roles (LOGIN): 
        -   These are roles that can authenticate and connect to the database. 
        -   Think of them as individual users.
    2) Group roles: 
        -   These cannot log in by themselves but are used to assign a set of 
            privileges to one or more login roles. 
        -   Group roles make it easy to manage access for entire teams.
*/
/*
=>  Privileges in PostgreSQL
    -   Privileges define what a user (role) can do with a database object like a 
        table, schema, or function.
*/

/*
=>  Table-Level Privileges
    -   Operations like reading or writing to a table require explicit privileges:
        - SELECT
        - INSERT
        - UPDATE
        - DELETE: Remove Single row
        - TRUNCATE: remove entire rows instantly
        - REFERENCES: Used for foreign key
        - TRIGGER:
*/
-- Example:
GRANT SELECT ON TABLE employees TO readonly;

/*
=>  TRIGGER (PostgreSQL)
    -   A TRIGGER is a database mechanism that automatically executes a function 
        when a specified event occurs on a table.

    - Key points (short):
        - Runs automatically (no manual call)
        - Fires on INSERT, UPDATE, DELETE, or TRUNCATE
        - Can run BEFORE, AFTER, or INSTEAD OF an operation
        - Used to enforce rules, maintain consistency, or log changes
*/
-- Create a trigger:
CREATE TRIGGER update_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

/*
=>  Schema-Level Privileges
    -   A schema is a namespace that contains named objects like tables and 
        functions.
        -   USAGE: Allows access to the schema's objects.
        -   CREATE: Allows creation of new objects in the schema.
*/
-- Example:
GRANT USAGE ON SCHEMA sales TO analyst;

/*
=>  Database-Level Privileges
    -   Database-wide access is managed with:
            - CONNECT
            - TEMP
            - CREATE
*/
GRANT CONNECT ON DATABASE company_db TO analyst;
/*
=>  Function-Level Privileges
    -   This allows access control to stored procedures or functions
*/
GRANT EXECUTE ON FUNCTION calculate_bonus TO app_user;

/*
=>  Grant and Revoke
    -   Permissions can be removed easily
*/
REVOKE SELECT ON employees FROM readonly;
------------------------------------------Example:------------------------------------------
/*
Example:
    We have two persons: Jaya and Surya. Both are data analysts. They need read-only 
    access to specific tables in ourdatabase. Now we want to avoid repeating 
    permissions, so we’ll use a group role. Create a Group Role for Analysts.

    This role will hold shared permissions (e.g., read-only access). Because this 
    level of access is more than enough for the analysts.
*/
-- Create a role:
CREATE ROLE analyst_team;

-- Creating LOGIN Role for Surya and Jaya.
CREATE ROLE jaya LOGIN PASSWORD 'jayapass';
CREATE ROLE surya LOGIN PASSWORD 'suryapass';
-- Now Jaya and Surya can connect to the database.

/*
    Add Jaya and Surya to the 'analyst_team' Role. This gives them all permissions 
    granted to the group. No need to create and provide shared permissions for each 
    persons.
*/
-- We grant read-only access to specific tables once, to the group.
GRANT SELECT, DELETE ON TABLE public.sales_data TO analyst_team;
GRANT SELECT, DELETE ON TABLE public.revenue_report TO analyst_team;
/*
    Now both Jaya and Surya can read and delete rows without setting individual 
    access.
*/
-- Note: Use \du in psql to view roles and their attributes.

/*
    Oh, we have granted access to the analyst_team group for the sales_data and 
    revenue_report tables in the public schema. However, the DELETE permission 
    should not have been given to the analysts it was granted accidentally.

    So we need to revoke the DELETE access to the group
*/

REVOKE DELETE ON TABLE public.sales_data FROM analyst_team;
REVOKE DELETE ON TABLE public.revenue_report FROM analyst_team;
-- Now both the persons can only read the data from those tables.

/*
=> Row-Level Security in PostgreSQL:
    -   Row-Level Security (RLS) is a powerful feature in PostgreSQL that controls 
        access at the row level, meaning users can only see or modify specific rows 
        in a table based on a policy we define.
*/
-- Example:
/*
    -   Let’s say we are building a CRM (Customer Relationship Management) platform 
        used by sales teams across different companies or branches.

    -   Each salesperson of the respective company logs in and manages their own 
        clients and deals.
*/
/*
=>  Without RLS
    -   Since the sales data of all companies is stored in a single table, and we 
        cannot create a separate table for each company. 
    -   The main issue is that a salesperson from one company can see the customers 
        of other companies upon logging in, which becomes a serious concern.
*/
/*
=>  With RLS
    -   Enable RLS so that each salesperson only sees their own company leads.
*/

-- 1.Enable RLS on the leads table:
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 2. Create a policy to restrict access to the user’s rows
CREATE POLICY lead_access_policy
ON leads -- table_name
FOR SELECT
USING (owner = current_user);
/*
    This means that only show rows where the owner column matches the logged-in 
    user's username.
*/

-- 3. Create sales people login roles:
CREATE ROLE arjun LOGIN PASSWORD '78higu123';
CREATE ROLE velu LOGIN PASSWORD 'uy7f86123';

-- 4. Grant access to the leads table:
GRANT SELECT ON leads TO alice;
GRANT SELECT ON leads TO bob;


/*
=>  Best Practices
    1) Use Role-Based Access Control (RBAC): 
        -   Create group roles for permissions, assign to user roles.

    2) Avoid Granting Direct Privileges to Users: 
        -   Always use intermediate roles.

    3) Restrict Superuser Access: 
        -   Only Admins must have SUPERUSER.

    4) Grant at Schema Level:
        -   Use GRANT USAGE and SELECT ON ALL TABLES for schema-based control.

    5) Use ALTER DEFAULT PRIVILEGES:
        -   Ensure future tables inherit correct access.

    6) Enable Row-Level Security (RLS): 
        -   Control access per row using policies and SET app context.

    7) Revoke Unwanted Access: 
        -   Use REVOKE to correct accidental grants immediately.

    8) Audit Role Usage Regularly: 
        -   Query pg_roles and pg_stat_activity for insights.

    9)  Avoid Hardcoding Passwords: 
        -   Use secret managers for credentials.

    10) Test Access in Staging: 
        -   Simulate roles using SET ROLE before deploying to production.

    11) Maintain Naming Conventions: 
        -   Use descriptive names like read_sales, etl_writer, etc.
        
    12) Log & Monitor Privilege Use: 
        -   Use pgAudit or log access patterns externally.
*/