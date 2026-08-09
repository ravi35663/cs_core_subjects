/*
=> Authentication (Short & Simple):
    -   Authentication is the process of identifying a user and deciding what 
        they are allowed to access based on identity, role, or credentials.

=> Common Types of Authentication:
    - Local (Email/Password)
    - JWT (Token-based)
    - Session-based
    - OAuth / OAuth 2.0
    - OpenID Connect (OIDC)
    - Multi-Factor Authentication (MFA / 2FA)

================================================================================
1) Local Authentication (Email / Password)
    - The application manages user credentials itself using email and password.
    - Gives full control but requires strong security practices.

    Example:
        // Signup
        POST /signup
        { "email": "ravi@example.com", "password": "MyStrong@123" }

        hashedPassword = bcrypt.hash(password);
        save(email, hashedPassword);

        // Login
        POST /login
        { "email": "ravi@example.com", "password": "MyStrong@123" }

        bcrypt.compare(password, storedHash);

    Security: ⭐⭐⭐ (Medium–High, depends on implementation)
    - Secure with hashing, HTTPS, rate limiting, HttpOnly cookies, optional 2FA.
    - Insecure with plain text passwords, weak hashing, no brute-force protection.

    Implementation Level: ⭐⭐⭐⭐ (Medium)
    Pros: Full control, no third-party dependency, works offline.
    Cons: High security responsibility, complex password reset flows.

================================================================================
2) JWT (Token-Based Authentication)
    - Server issues a signed token after login.
    - Client sends token with every request.
    - Stateless and scalable.

    Example:
        POST /login
        { "email": "ravi@example.com", "password": "123456" }

        const token = jwt.sign(
          { userId: 1, role: "user" },
          JWT_SECRET,
          { expiresIn: "1h" }
        );

        Authorization: Bearer <JWT_TOKEN>
        jwt.verify(token, JWT_SECRET);

    Security: ⭐⭐⭐⭐ (High if done correctly)
    - Secure with short expiry, HttpOnly cookies, HTTPS, refresh tokens.
    - Risky if stored in localStorage or with long expiry.

    Implementation Level: ⭐⭐⭐ (Medium)
    Pros: Stateless, scalable, good for SPAs & microservices.
    Cons: Token revocation & refresh logic is complex.

================================================================================
3) Session-Based Authentication
    - Server creates a session after login.
    - Session ID stored in cookie and validated on each request.

    Flow:
        Login → Session created → Cookie stored → Server validates session

    Pros: Very secure, easy logout, CSRF protection.
    Cons: Server-side storage needed, scaling requires Redis.

    Best Use: Traditional web apps, banking systems.
    Implementation Level: Easy–Medium

================================================================================
4) OAuth 2.0 (Authorization Framework)
    - Allows apps to access third-party data without sharing passwords.
    - OAuth is authorization, not authentication.

    Example:
        App → Google Login
        User approves
        Google → Access Token
        App → Google API (with token)

    Pros: No password handling, trusted providers, fast onboarding.
    Cons: Third-party dependency, complex flows.

    Best Use: Social login, third-party integrations.
    Implementation Level: Medium

================================================================================
5) OpenID Connect (OIDC)
    - Authentication layer built on top of OAuth 2.0.
    - Provides user identity using ID tokens (JWT).

    OAuth vs OIDC:
        OAuth → Authorization (API access)
        OIDC  → Authentication (User identity)

    Pros: Secure, standardized, widely used.
    Cons: More complex than OAuth.

    Best Use: Enterprise SSO, identity platforms.
    Implementation Level: Medium–High

================================================================================
6) Multi-Factor Authentication (MFA / 2FA)
    - Requires multiple proofs of identity:
        - Something you know (password)
        - Something you have (OTP)
        - Something you are (biometrics)

    Flow:
        Login → Password → OTP → Access granted

    Pros: Extremely secure, protects against stolen passwords.
    Cons: Extra user friction, higher implementation effort.

    Implementation Level: High

================================================================================
7) OAuth (Detailed Overview)
    - OAuth allows third-party apps to access protected resources securely.
    - Does not authenticate users by itself (OIDC is needed for auth).

    Example:
        “Login with Google”
        → User consents
        → Access token issued
        → App accesses Google APIs

    Why OAuth:
        - Avoid password handling
        - Secure API access
        - Scope-based permissions
        - Social login & integrations

    Pros: Secure, scalable, industry standard.
    Cons: Complex redirects, token management risks.

    Implementation Level: High

================================================================================
OAuth 1.0 vs OAuth 2.0:
    - OAuth 1.0: Very complex, signed requests, rarely used today.
    - OAuth 2.0: Token-based, HTTPS, mobile & SPA friendly, industry standard.
*/
