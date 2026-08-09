# Master PR Review Framework

A lightweight framework to review pull requests consistently.

## 1. Understand the Change
- What problem does this PR solve?
- Is the scope focused and reviewable?
- Does the implementation match the stated requirement?
- Are there unrelated changes mixed in?

## 2. Review the Solution Design
- Is the logic placed in the right layer/module?
- Does it follow existing architecture and team patterns?
- Is the abstraction level appropriate?
- Is the solution maintainable and easy to extend?

## 3. Validate Correctness
- Does the happy path work?
- Are edge cases and failure cases handled?
- Could this change break existing behavior?
- Are assumptions explicit and safe?

## 4. Check Maintainability
- Are names clear and meaningful?
- Are functions/components focused and readable?
- Is control flow simple and predictable?
- Is duplication avoided where it matters?

## 5. Check Safety
- Security: validation, auth/authz, sensitive data
- Performance: heavy queries, unnecessary rerenders, expensive loops
- Reliability: retries, transactions, idempotency, rollback concerns

## 6. Review Tests & Release Readiness
- Are important paths tested?
- Are risky regressions covered?
- Are config, migration, rollout, and observability impacts clear?

---

## Quick Review Outcome Template
### Blocking
- Correctness / security / major maintainability issues

### Suggestions
- Readability / simplification / better patterns

### Nits
- Minor style / wording / cleanup suggestions
