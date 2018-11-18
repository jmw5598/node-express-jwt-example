'use strict';

const AuthenticationController = require('./authentication.controller');
const UsersController = require('./users.controller');
const { RestrictedController } = require('./api-v1');

module.exports = {
  AuthenticationController,
  RestrictedController,
  UsersController
};
