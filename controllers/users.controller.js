'use strict';

class UsersController {

  constructor() {}

  list(req, res) {
    return res.status(200).send({ message: 'List of Users Returned' });
  }

  create(req, res) {
    return res.status(201).send({ message: 'Successfully Created New User' });
  }

}

module.exports = new UsersController();
