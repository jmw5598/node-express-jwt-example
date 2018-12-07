'use strict';

const express = require('express');
const ApiRouter = express.Router();

const ApiV1Router = require('./v1');

ApiRouter.use('/v1', ApiV1Router);

module.exports = ApiRouter;
