# Node Express JWT Authentication / Authorization Example

An example project implementing JWT authentication and role based authorization.

### Middleware Methods

| Method | Description |
| - | - |
| `verify()` | Verifies token passed in `Authorization` request header.  Token prefixed with `Bearer` |
| `hasRole(role)` | Ensures the authenticated user has appropriate role |
| `hasAnyRole([role, role])` | Ensures the authenticated user has ANY of the appropriate roles |
| `hasAllRoles([role, role])` | Ensures the authenticated user has ALL the appropriate roles |
