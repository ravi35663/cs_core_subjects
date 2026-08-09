# Testing PR Review Checklist

Use this to review whether tests are sufficient and valuable.

## 1. Coverage of Risk
- Are the main business flows covered?
- Are edge cases and failure paths covered?
- Are likely regressions protected by tests?

## 2. Test Quality
- Do tests verify behavior instead of implementation details?
- Are test names clear and scenario-based?
- Are mocks used only where helpful?
- Are tests readable and maintainable?

## 3. Right Test Level
- Unit tests for logic-heavy functions
- Integration tests for API/DB interactions
- Component tests for important UI behavior
- E2E coverage for critical user flows if relevant

## 4. Stability
- Are tests deterministic and not flaky?
- Are they too coupled to internal refactors?
- Do they fail for the right reasons?
