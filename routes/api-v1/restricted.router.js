'use strict';

const express = require('express');
const RestrictedRouter = express.Router();

const { RestrictedController } = require('../../app/controllers');

RestrictedRouter.get('/adminOnly', RestrictedController.adminOnly);
RestrictedRouter.get('/usersOnly', RestrictedController.usersOnly);

module.exports = RestrictedRouter;
