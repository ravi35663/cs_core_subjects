/*
PostgreSQL vs Other Databases
    - PostgreSQL vs MySQL
    - PostgreSQL vs MongoDB
    - When NOT to use PostgreSQL
    - When to use Postgresql
    - Why Postgresql is famous among all other RDBMS
    - Why choose postgresql instead of other RDBMS
*/
/*
=> Schema in PostgreSQL:
    -   In PostgreSQL, a schema is a logical namespace that organizes database 
        objects like tables, views, functions, and indexes.

    -   Key points:
            - Acts like a folder inside a database
            - Helps avoid name conflicts (same table name in different schemas)
            - Enables access control (grant permissions per schema)
            - Improves organization & clarity for large systems

=>  Why schemas matter:
    - Multi-tenant or modular applications
    - Clear separation of concerns (auth, billing, reporting)
    - Better security and maintainability
*/

/*
Example:
    public.users
    auth.users
    billing.users
Note: Each users table lives in a different schema.
*/

/*
=>  PostgreSQL Vs MySQL:
| Aspect         | **PostgreSQL**                          | **MySQL**                            |
| -------------- | --------------------------------------- | ------------------------------------ |
| Type           | Advanced **object-relational** DB       | Popular **relational** DB            |
| SQL compliance | Very high (strict standards)            | Moderate                             |
| Transactions   | Fully ACID-compliant                    | ACID (InnoDB only)                   |
| Indexes        | B-tree, Hash, GIN, GiST, BRIN           | B-tree (limited others)              |
| JSON support   | Strong (`JSONB`, indexing)              | Basic (`JSON`)                       |
| Concurrency    | MVCC (excellent)                        | MVCC (InnoDB)                        |
| Extensibility  | Highly extensible (custom types, funcs) | Limited                              |
| Performance    | Best for complex queries                | Best for simple read-heavy workloads |
| Replication    | Logical + physical                      | Strong built-in replication          |
| Use cases      | Analytics, complex systems              | Web apps, simple CRUD                |

Note:
    PostgreSQL is feature-rich and ideal for complex, scalable systems, while MySQL 
    is simpler and excels at fast, read-heavy applications.
*/

/*
=> PostgreSQL  Vs MongoDB:
    | Aspect       | **PostgreSQL**                       | **MongoDB**                        |
| ------------ | ------------------------------------ | ---------------------------------- |
| Type         | Relational (SQL)                     | NoSQL (Document)                   |
| Schema       | Fixed, strongly enforced             | Flexible, schema-less              |
| Data format  | Tables & rows                        | JSON-like documents (BSON)         |
| Transactions | Full ACID (multi-row, multi-table)   | ACID (multi-document supported)    |
| Joins        | Native, powerful joins               | No joins (uses embedding / lookup) |
| Query power  | Very strong (complex queries)        | Simple & fast for documents        |
| Indexing     | Advanced (B-tree, GIN, GiST, etc.)   | B-tree-like, text & geo indexes    |
| Scaling      | Vertical + logical sharding          | Horizontal scaling (built-in)      |
| Best for     | Complex data, analytics, consistency | High-scale, flexible data models   |

Note:
    PostgreSQL is best for structured, relational, and transaction-heavy systems, 
    while MongoDB excels at flexible schemas and horizontally scalable applications.
*/

/*
=> When not to use PostgreSQL:
    - Extreme horizontal scale & simple key-value access → Use Cassandra / DynamoDB  
    - Ultra-low latency, in-memory workloads → Use Redis / Memcached  
    - Rapidly changing or schema-less data → Use MongoDB  
    - High-ingestion time-series data (metrics, logs) → Use TimescaleDB / InfluxDB  
    - Large-scale full-text search & relevance ranking → Use Elasticsearch / OpenSearch  
    - Serverless, auto-scaling without DB management → Use Aurora Serverless / DynamoDB  
    - Write-heavy systems with hot-row contention → Use DynamoDB / Cassandra  
*/
/*
=> When to use PostgreSQL:
    -   Strong data consistency & transactions → Banking, payments, order systems  
    -   Complex queries, joins & analytics → Reporting, dashboards, data analysis  
    -   Structured data with clear relationships → CRM, ERP, inventory systems  
    -   Advanced indexing & query optimization → Search-heavy relational workloads  
    -   JSON + relational mix (hybrid model) → Modern web apps, APIs  
    -   Data integrity & constraints matter → Financial, enterprise-grade systems  
    -   Moderate to high scale with reliability → SaaS products, core backend DB  
    -   Extensibility (custom types, functions, extensions) → Advanced business logic in DB  
*/
/*
=>  Why PostgreSQL is famous among other RDBMS:
    -   PostgreSQL is popular because it combines correctness, power, and 
        flexibility better than most relational databases.

    -   Strict ACID compliance → reliable and consistent data
    -   Advanced SQL support → complex queries, CTEs, window functions
    -   Powerful indexing → B-tree, GIN, GiST, BRIN for diverse workloads
    -   Excellent concurrency (MVCC) → high read/write performance without locks
    -   JSONB support → relational + NoSQL in one database
    -   Extensibility → custom types, functions, operators, extensions
    -   Strong data integrity → constraints, foreign keys, checks
    -   Open-source & vendor-neutral → no lock-in, strong community
    -   Scales well → from small apps to large enterprise systems

Note:
    PostgreSQL is famous because it offers enterprise-grade reliability, advanced features, and extensibility while remaining fully open-source and standards-compliant.
*/