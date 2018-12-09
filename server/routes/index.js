'use strict';
const express = require('express');
const Router = express.Router();

const ApiRouter = require('./api');
const AuthenticationRouter = require('./authentication.router');
const UsersRouter = require('./users.router');

const { JwtMiddleware } = require('../middleware');

Router.use('/api', JwtMiddleware.verify, ApiRouter);
Router.use('/auth', AuthenticationRouter);
Router.use('/users', JwtMiddleware.verify, UsersRouter);

module.exports = Router;
