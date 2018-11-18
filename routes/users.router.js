'use strict';

const express = require('express');
const UsersRouter = express.Router();

const { UsersController } = require('../controllers');

UsersRouter.get('/', UsersController.list);
UsersRouter.post('/', UsersController.create);

module.exports = UsersRouter;
