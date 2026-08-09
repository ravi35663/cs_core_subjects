# API PR Review Checklist

Use this when reviewing API endpoints, contracts, payloads, and integration-facing changes.

## 1. Contract Design
- Is the request/response shape clear and consistent?
- Are field names meaningful and stable?
- Are status codes appropriate?
- Is the API easy for consumers to understand?

## 2. Validation & Error Handling
- Are request params/body validated properly?
- Are required fields and enums enforced?
- Are error responses consistent with existing APIs?
- Are failure cases explicit and useful for clients?

## 3. Backward Compatibility
- Does this introduce a breaking change?
- Will existing frontend/mobile/integrations still work?
- Are deprecated fields/paths handled safely?
- Is rollout order between client/server safe?

## 4. Security
- Are auth/authz checks present and correct?
- Can users access data they should not access?
- Is sensitive data excluded from responses?
- Are rate-limiting / abuse concerns relevant here?

## 5. Performance & Reliability
- Is the endpoint doing too much work?
- Are downstream service failures handled?
- Are retries/timeouts relevant and handled safely?
- Are response sizes and query patterns reasonable?

## 6. Tests / Docs
- Contract behavior tested
- Error paths tested
- API docs/examples updated if needed
