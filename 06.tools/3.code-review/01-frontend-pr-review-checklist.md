# Frontend PR Review Checklist

Use this when reviewing UI, React, state management, and UX-related PRs.

## 1. Component Design
- Does each component have a clear responsibility?
- Is business logic separated from presentation where appropriate?
- Are props/state names clear and minimal?
- Is reusable logic extracted sensibly (hooks/utils/services)?

## 2. State Management
- Is state minimal and predictable?
- Is there duplicated or derived state that should not be stored?
- Are async loading/error/success states handled?
- Any stale state or race-condition risk?

## 3. React / UI Correctness
- Are hooks used correctly (`useEffect`, dependencies, cleanup)?
- Any side effects during render?
- Any unnecessary rerenders or unstable props/functions?
- Are forms, validation, and user interactions handled correctly?

## 4. UX Coverage
- Loading state handled
- Empty state handled
- Error state handled
- Disabled/retry/success feedback handled where needed

## 5. Accessibility
- Semantic HTML where possible
- Inputs have labels
- Keyboard interactions work
- Focus management makes sense for dialogs/forms/errors

## 6. Frontend Performance
- Avoid expensive work in render
- Avoid duplicate API calls
- Check list rendering / pagination / memoization where relevant
- Watch bundle-heavy imports or unnecessary state updates

## 7. Tests
- Important UI behavior is tested
- Critical interaction flows are covered
- Tests verify behavior, not implementation internals
