'use strict';

const AuthenticationController = require('./authentication.controller');
const UsersController = require('./users.controller');
const ApiControllers = require('./api');

module.exports = {
  ApiControllers,
  AuthenticationController,
  UsersController
};
