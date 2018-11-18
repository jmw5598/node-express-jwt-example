'use strict';

class RestrictedController {

  constructor() {}

  usersOnly(req, res) {
    return res.status(200).send({ message: 'Users Only Route' });
  }

  adminOnly(req, res) {
    return res.status(200).send({ message: 'Admin Only Route' });
  }

}

module.exports = new RestrictedController();
