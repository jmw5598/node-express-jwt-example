'use strict';

const express = require('express');
const ApiV1Router = express.Router();

const RestrictedRouter = require('./restricted.router');

ApiV1Router.use('/restricted', RestrictedRouter);

module.exports = ApiV1Router;
