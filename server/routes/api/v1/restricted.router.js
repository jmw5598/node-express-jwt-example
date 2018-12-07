'use strict';

const express = require('express');
const RestrictedRouter = express.Router();

const { RestrictedController } = require('../../../controllers').ApiControllers.V1;
const { JwtMiddleware } = require('../../../middleware');

RestrictedRouter.get('/adminOnly', JwtMiddleware.hasRole('ADMIN'), RestrictedController.adminOnly);
RestrictedRouter.get('/usersOnly', JwtMiddleware.hasRole('USER'), RestrictedController.usersOnly);

module.exports = RestrictedRouter;
