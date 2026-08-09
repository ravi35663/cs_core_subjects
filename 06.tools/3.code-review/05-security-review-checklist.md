# Security PR Review Checklist

Use this for any PR that touches authentication, authorization, data access, APIs, forms, uploads, or sensitive data.

## 1. Input Handling
- Is all external input validated?
- Are types, enums, required fields, and ranges enforced?
- Is untrusted input sanitized/escaped where needed?

## 2. Authentication & Authorization
- Is the user authenticated where required?
- Are authorization checks enforced server-side?
- Can a user access another user’s data by changing IDs or payloads?
- Are admin-only operations properly guarded?

## 3. Sensitive Data
- Any secrets, tokens, passwords, or PII exposed in code/logs/responses?
- Are env vars/config used safely?
- Are internal errors leaking implementation details?

## 4. Common Web Risks
- SQL/NoSQL injection risk
- XSS / unsafe HTML rendering risk
- Unsafe file handling / path traversal risk
- Insecure redirects / token leakage / unsafe deserialization if relevant

## 5. Operational Safety
- Are security-sensitive actions logged appropriately?
- Are rate limits / brute-force protections relevant?
- Are audit trails needed for this change?
