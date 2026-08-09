/*
=> Database design and integration in LLD:
    -   Design a database tables in a such a ways that read and write should be fast.
*/
/*
=> Real world enhancements and practices:
    Concern:                        LLD Strategy:
    -   Duplicate Payment           -   Use idempotency key in payment request
    -   Refund must be atomic       -   Wrap refund + Status in transaction block
    -   Slow Dashboards             -   Use Pagination
    -   Query Explosion             -   Fetch relations eagerly or joins in repository
    -   Scaling to millions         -   Indexing(Individual and composite)
*/