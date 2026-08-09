/*
=> PostgreSQL Topics a Lead Engineer Must Know (Interview-Focused Checklist)

1) Core Database Fundamentals
   - Data types, constraints, primary/foreign keys
   - Normalization vs denormalization
   - ACID properties

2) Schema & Data Modeling
   - Designing schemas for scalability
   - One-to-one, one-to-many, many-to-many
   - UUID vs SERIAL/BIGSERIAL
   - Soft delete vs hard delete

3) Indexing (Very Important)
   - B-tree, Hash, GIN, GiST, BRIN
   - Composite indexes
   - Partial indexes
   - When indexes help vs hurt
   - Index usage with EXPLAIN / EXPLAIN ANALYZE

4) Query Optimization
   - Reading query plans
   - Avoiding N+1 queries
   - Joins vs subqueries
   - Pagination strategies (OFFSET vs keyset pagination)

5) Transactions & Concurrency
   - Isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE)
   - Locks (row-level, table-level)
   - Deadlocks and how to handle them
   - Optimistic vs pessimistic locking

6) Performance & Scaling
   - Connection pooling (PgBouncer)
   - Read replicas
   - Vertical vs horizontal scaling
   - Partitioning (range, list, hash)

7) Advanced SQL
   - CTEs (WITH queries)
   - Window functions
   - JSON / JSONB querying
   - Aggregations and analytics queries

8) Data Integrity & Constraints
   - CHECK constraints
   - UNIQUE constraints
   - Cascading deletes/updates
   - Triggers (when to use, when to avoid)

9) Security
   - Roles and permissions
   - Row Level Security (RLS)
   - SQL injection prevention
   - Encryption at rest & in transit

10) Migrations & Versioning
    - Schema migrations strategies
    - Backward-compatible migrations
    - Zero-downtime migrations
    - Tools (Flyway, Liquibase, Prisma, TypeORM)

11) Backup & Recovery
    - Logical vs physical backups
    - Point-in-Time Recovery (PITR)
    - Disaster recovery strategies

12) Reliability & Monitoring
    - Replication (streaming replication)
    - Failover strategies
    - Monitoring metrics (slow queries, locks, connections)
    - Logs & alerts

13) PostgreSQL Internals (Lead-Level Signal)
    - MVCC (how reads don’t block writes)
    - Vacuum & Autovacuum
    - WAL (Write-Ahead Logging)
    - Table bloat

14) PostgreSQL vs Other Databases
    - PostgreSQL vs MySQL
    - PostgreSQL vs MongoDB
    - When NOT to use PostgreSQL
    - When to use Postgresql
    - Why Postgresql is famous among all other RDBMS
    - Why choose postgresql instead of other RDBMS

15) System Design with PostgreSQL
    - Designing for high traffic
    - Multi-tenant database design
    - Data consistency across services
    - PostgreSQL in microservices architecture

=> Lead-Level Interview Expectation:
   - You should explain WHY a choice was made, not just HOW.
   - Be ready with real production trade-offs and failure scenarios.
   - Show ownership: performance, security, scalability, and reliability.

=> If you master these topics, you are fully prepared for Lead-level PostgreSQL interviews.

*/