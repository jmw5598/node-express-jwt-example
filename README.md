# Node Express JWT Authentication / Authorization Example

An example project implementing JWT authentication and role based authorization.

### Demo Setup
1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.


### Default Credentials

| Username | Password | Description |
| - | - | - |
| admin | admin | User with `ADMIN` and `USER` roles. |
| user | user | User with only `USER` role. |

### Default Routes

| Path | Method | Description |
| `/users` | `GET` | List all users [requires ADMIN role] |
| `/users` | `POST` | Create new user [requires ADMIN role] |
| `/api/v1/restricted/usersOnly` | `GET` | Users only path |
| `/api/v1/restricted/adminOnly` | `GET` | Admin only path |


### Middleware Methods

| Method | Description |
| - | - |
| `verify()` | Verifies token passed in `Authorization` request header.  Token prefixed with `Bearer` |
| `hasRole(role)` | Ensures the authenticated user has appropriate role |
| `hasAnyRole([role, role])` | Ensures the authenticated user has ANY of the appropriate roles |
| `hasAllRoles([role, role])` | Ensures the authenticated user has ALL the appropriate roles |
