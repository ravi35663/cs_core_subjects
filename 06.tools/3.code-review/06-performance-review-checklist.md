# Performance PR Review Checklist

Use this when reviewing performance-sensitive code paths in frontend or backend.

## 1. Hot Path Awareness
- Is this code in a frequently used or heavy-traffic path?
- Does performance matter here based on actual usage?

## 2. Backend Performance
- Any N+1 query risk?
- Repeated DB/API calls inside loops?
- Large payloads or unnecessary data loading?
- Missing pagination/filtering/index usage?

## 3. Frontend Performance
- Expensive work happening during render?
- Unnecessary rerenders from unstable state/props?
- Duplicate network requests?
- Large lists without pagination/virtualization where needed?

## 4. Memory / Compute Cost
- Repeated transformations that can be avoided?
- Heavy synchronous processing blocking the request/UI?
- Any obvious memory growth or large object retention?

## 5. Tradeoff Check
- Is the implementation clear enough for the performance cost?
- Is optimization necessary, or just premature?
- If optimized, is the complexity justified?
