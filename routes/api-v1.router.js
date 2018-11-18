'use strict';

const express = require('express');
const ApiV1Router = express.Router();

const { ApiV1Controller } = require('../controllers');

ApiV1Router.get('/usersOnly', ApiV1Controller.usersOnly);
ApiV1Router.get('/adminOnly', ApiV1Controller.adminOnly);

module.exports = ApiV1Router;
