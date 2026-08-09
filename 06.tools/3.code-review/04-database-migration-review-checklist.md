# Database / Migration Review Checklist

Use this when a PR changes schema, data models, or migrations.

## 1. Schema Change Safety
- Is the schema change necessary and minimal?
- Are column types/defaults/nullability correct?
- Are indexes needed for new query patterns?
- Will old code and new code coexist safely during rollout?

## 2. Migration Safety
- Is the migration backward compatible?
- Could it lock a large table or impact availability?
- Is existing data handled safely?
- Is rollback possible if deployment fails?

## 3. Data Integrity
- Are foreign keys / relations correct?
- Could this cause accidental data loss or overwrite?
- Are unique constraints / ownership rules enforced where needed?
- Are defaults and backfills safe for existing rows?

## 4. Query Impact
- Will this introduce slow queries?
- Is pagination/filtering/index usage still appropriate?
- Any N+1 or full-table scan risk?
- Are reads/writes optimized for expected scale?

## 5. Release Readiness
- Migration order documented if needed
- Backfill/cleanup tasks identified
- Monitoring plan exists for risky migrations
