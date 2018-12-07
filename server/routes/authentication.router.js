'use strict';

const express = require('express');
const AuthenticationRouter = express.Router();

const { AuthenticationController } = require('../controllers');

AuthenticationRouter.post('/', AuthenticationController.authenticate);

module.exports = AuthenticationRouter;
