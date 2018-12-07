'use strict';
const express = require('express');
const Router = express.Router();

const ApiRouter = require('./api');
const AuthenticationRouter = require('./authentication.router');
const UsersRouter = require('./users.router');

Router.use('/api', ApiRouter);
Router.use('/auth', AuthenticationRouter);
Router.use('/users', UsersRouter);

module.exports = Router;
