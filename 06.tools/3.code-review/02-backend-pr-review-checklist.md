# Backend PR Review Checklist

Use this when reviewing APIs, services, DB operations, workers, and backend logic.

## 1. Layering & Design
- Are controller/service/repository responsibilities clean?
- Is business logic placed in the right layer?
- Does the solution fit existing architecture and conventions?
- Is the code easy to maintain and extend?

## 2. Correctness
- Does the implementation satisfy the requirement?
- Are edge cases and failure paths handled?
- Are error responses meaningful and consistent?
- Could this change break existing behavior?

## 3. Data Safety
- Are DB reads/writes correct?
- Are transactions used where needed?
- Is partial failure handled safely?
- Are updates safe from accidental overwrites?

## 4. Concurrency / Reliability
- Is the flow idempotent if needed?
- Are duplicate requests/retries handled safely?
- Any race-condition risk?
- Are background jobs/events resilient to failure?

## 5. Performance
- Any N+1 query risk?
- Any repeated DB/API calls inside loops?
- Is pagination/filtering handled appropriately?
- Is unnecessary data being loaded or returned?

## 6. Security
- Input validation at the API boundary
- Auth/authz checks are correct
- Sensitive data is not leaked in logs/responses
- No obvious injection / unsafe query construction

## 7. Tests
- Business logic covered
- API / integration behavior covered where needed
- Failure and regression paths tested
