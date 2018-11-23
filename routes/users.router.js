'use strict';

const express = require('express');
const UsersRouter = express.Router();

const { UsersController } = require('../app/controllers');
const { JwtMiddleware } = require('../app/middleware');

UsersRouter.route('/')
  .get(JwtMiddleware.hasRole('ADMIN'), UsersController.list)
  .post(JwtMiddleware.hasRole('ADMIN'), UsersController.create);

module.exports = UsersRouter;
