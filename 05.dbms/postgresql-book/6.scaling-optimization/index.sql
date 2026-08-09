/*
=>  PostgreSQL Optimization Areas:
*/

/*
1) Optimizing Data Types:
    -   Part of storage & memory optimization
    -   Smaller data types → less disk I/O → faster queries
    -   Ensuring efficient storage and retrieval by selecting the most appropriate 
        data types for our use case.
    -   Choosing optimal data types greatly improves storage and query performance.
    -   Reduced table size from 3.07 TB to 0.3 TB (~95%) via data type, index, and 
        column optimization.
    -   Use the smallest suitable data type
    -   Smaller data types reduce storage and improve query speed.
    -   Drop unnecessary columns (e.g., unused created_at, updated_at).
    -   Avoid heavy types like JSON/BLOB unless required.
    -   Prefer structured columns and store only essential data.
    -   Example:
            - INT vs BIGINT
            - VARCHAR(255) vs TEXT
            - TIMESTAMP vs TIMESTAMPTZ

=>  Direct impact on:
    - Index size
    - Cache efficiency
    - Query speed
*/

/*
2) Designing for Access Patterns
    -   Optimizing Access Patterns for Better Query Performance
    -   Structuring our schema and queries to align with how data is accessed and 
        modified most frequently.
    -   Part of schema & query optimization
    -   Tables and indexes designed based on:
    -   Read-heavy vs write-heavy
        -   OLTP vs reporting
    -   Skip offset-based pagination due to poor performance on large datasets.
    -   Offset pagination scans and skips rows, causing high CPU and memory usage.
    -   Use cursor-based pagination for faster, scalable, and consistent results.
    -   Avoid COUNT(*) on large tables as it’s computationally expensive.
    -   Use precomputed/incremental counters instead of real-time counts.
    -   Apply connection pooling to reduce database overhead.
    -   Use Redis caching for frequently accessed queries.
    -   Reduce redundant computations via event aggregation for faster responses.
    -   Example:
            - Separate hot vs cold data
            - Avoid joins on high-traffic paths

=> This is real-world optimization, not theory.
*/

/*
3) Partitioning:
    -   Part of large-scale performance optimization
    -   Breaks big tables into smaller chunks
    -   Distributing data effectively to manage large volumes while maintaining 
        performance.
    -   Partitioning improves performance for very large tables by reducing query 
        scope.
    -   Split tables into smaller segments using keys like date, region, or parent 
        entity.
    -   Used range-based partitioning via pg_partman for tables > ~1B records.
    -   Example: Parent IDs 1–50,000 split into 50 partitions of 1,000 each.
    -   Queries scan only relevant partitions, reducing data scanned.
    -   Partitioning aligns with business logic (year, region, parent entity).
    
    -   Improves:
            - Query speed
            - Vacuum performance
            - Index efficiency
    -   Common types:
            - Range (date-based logs)
            - List (region, tenant)
            - Hash (even distribution)
*/
/*
4) Choosing the Right Indexes: 
    -   Leveraging PostgreSQL’s indexing capabilities to speed up queries and reduce 
        execution times.
    -   Most important PostgreSQL optimization
    -   Includes:
            - B-tree
            - GIN / GiST
            - Partial indexes
            - Composite indexes
    -   Goals:
            - Faster lookups
            - Fewer sequential scans
            - Reduced query execution time
*/

/*
5) Structuring Data Efficiently:
    -   Part of logical & physical design optimization
    -   Includes:
            - Normalization → reduce redundancy
            - Denormalization → reduce joins
            - Materialized views → precomputed results
    -   Trade-offs:
            - Storage vs speed
            - Write cost vs read performance
*/
/*
    -   We could scale PostgreSQL to handle billions of records efficiently through 
        these strategies. 
    -   PostgreSQL optimization is not just about queries and indexes; it includes 
        data types, schema design, access patterns, partitioning, and balancing 
        normalization with performance
*/