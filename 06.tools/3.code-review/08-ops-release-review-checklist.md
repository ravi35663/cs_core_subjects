# Ops / Release Review Checklist

Use this when a PR affects deployment, rollout, observability, or production behavior.

## 1. Config & Environment
- Are new env vars/config values documented?
- Are defaults safe?
- Are secrets handled correctly?
- Are feature flags needed for rollout safety?

## 2. Deployment Safety
- Can frontend/backend deploy independently if needed?
- Can old and new versions coexist during rollout?
- Is rollback feasible?
- Are migration/deploy order dependencies clear?

## 3. Observability
- Are important failures logged?
- Are logs useful without leaking sensitive data?
- Are metrics, alerts, or dashboards needed for this change?
- How will we know if this broke in production?

## 4. Operational Risk
- Could this impact availability or latency?
- Any background job, queue, retry, or timeout behavior changed?
- Any manual runbook or support note needed?
