'use strict';

const ApiV1Router = require('./api-v1');
const AuthenticationRouter = require('./authentication.router');
const UsersRouter = require('./users.router');

module.exports = {
  ApiV1Router,
  AuthenticationRouter,
  UsersRouter
}
