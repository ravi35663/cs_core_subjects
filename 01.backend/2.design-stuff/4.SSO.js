/*
==> What is SSO (Single Sign-On)?
    ->  SSO allows a user to log in once and access multiple applications without 
        logging in again.
    ->  Example: Log in to Google once and access Gmail, Drive, YouTube without 
        re-logging.

==> How SSO Works (Simple Flow):
    1)  User tries to access App A
    2)  App redirects user to SSO Provider (e.g., Google, Okta, Azure AD)
    3)  User logs in once
    4)  SSO Provider verifies identity
    5)  SSO Provider sends a token/assertion (JWT, SAML, OIDC)
    6)  App trusts the token → user is logged in
    7)  Same login works for App B, App C, etc.
*/

/*
==> Technologies Used in SSO
    ->  OAuth 2.0
    ->  OpenID Connect (OIDC) (most common)
    ->  SAML (enterprise)
*/

/*
==> Benefits of Using SSO
    ==> For Users
        ->  One login for many apps
        ->  Better user experience
        ->  Fewer passwords to remember

    ==> For Developers / Companies
        ->  Centralized authentication
        ->  Improved security (less password reuse)
        ->  Easier user management (enable/disable access in one place)
        ->  Reduced support costs (fewer password reset issues)
*/

/*
==> Real-World Examples
    ->  Google Login
    ->  Microsoft Azure AD
    ->  Okta
    ->  Auth0
*/
/*
==> When to Use SSO
    ->  Multiple internal apps
    ->  Enterprise systems
    ->  SaaS platforms
    ->  Microservices architecture
*/