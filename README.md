# Node Express JWT Authentication / Authorization Example

An example project implementing JWT authentication and role based authorization.

### Demo Setup
1. Clone the repository with `git clone https://github.com/jmw5598/node-express-jwt-example.git`
2. Generate RSA256 public private keys and place them in the `config` folder with file names `public.key` and `private.key`.  A 512bit key size should be fine.
    - [Online RSA Key Generator][1]
3. Install dependencies with `npm install`.
4. Run migrations and seed that Sqlite database with `sequelize db:migrate` and `sequelize db:seed:all`.
5. Run the project with `node index.js`.

### Default Credentials

| Username | Password | Description |
| - | - | - |
| admin | admin | User with `ADMIN` and `USER` roles. |
| user | user | User with only `USER` role. |

### Default Routes

| Path | Method | Description |
| - | - | - |
| `/auth` | `POST` | Authenticate user, returns JWT token.  Jwt token can the be place in `Authorization` header prefixed with `Bearer`|
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


[1]: http://travistidwell.com/jsencrypt/demo/
