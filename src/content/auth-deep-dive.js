export const authDeepDiveDoc = `
# Deep Dive: Secure Session Authentication

This document outlines the security architecture of the Inventory Management System. The primary goal was to implement a **stateful, "security-first" authentication flow** that protects sensitive merchant data from common web vulnerabilities.

## The Strategy: Sessions over Tokens
While many modern applications use JSON Web Tokens (JWT) stored in \`localStorage\`, I chose **Session-based authentication** with server-side persistence in PostgreSQL. 

### Why not LocalStorage?
Storing sensitive credentials in \`localStorage\` makes an application vulnerable to **Cross-Site Scripting (XSS)**. Any malicious script running in the browser can read \`localStorage\` and steal the user's token. 

By using **HttpOnly Cookies**, we ensure that the session identifier is inaccessible to client-side JavaScript, effectively neutralizing XSS-based credential theft.

---

## The Authentication Lifecycle

### 1. The Handshake (Login)
When a user submits their credentials, the following "silent" security exchange occurs:
* **Hashing:** The backend verifies the password using \`bcrypt\`.
* **Session Storage:** A unique session record is created in a PostgreSQL table (\`connect-pg-simple\`).
* **The Cookie:** The server sends a \`Set-Cookie\` header to the browser with these flags:
    * \`HttpOnly\`: Blocks JavaScript access.
    * \`Secure\`: Ensures the cookie is only sent over HTTPS.
    * \`SameSite=Lax\`: Protects against Cross-Site Request Forgery (CSRF).



### 2. Validating Requests
Every subsequent request to a protected endpoint (like \`/items\`) follows this validation logic:
1. The browser automatically attaches the session cookie.
2. The server intercepts the request and checks the cookie against the PostgreSQL session store.
3. If valid, the server attaches the \`user_id\` to the request object.

---

## Data Scoping & Multi-Tenancy
Authentication is only half the battle. To ensure a "Merchant-First" experience where users never see each other's data, I implemented **Strict Data Scoping**.

Every database query is filtered by the authenticated \`user_id\`. Even if an attacker guesses a valid \`item_id\`, the query will return no results if that item does not belong to the active session:

\`\`\`sql
-- The backend automatically injects the session's user_id ($1)
SELECT * FROM items 
WHERE id = $2 AND user_id = $1;
\`\`\`

## Summary of Security Wins
* **No XSS exposure:** Sensitive identifiers are hidden from JavaScript.
* **No stale data:** Sessions can be revoked instantly from the database.
* **Server-side Truth:** The client never dictates "who" they are; the server maintains that state.
`;