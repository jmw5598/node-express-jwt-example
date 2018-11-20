'use strict';

const { UsersRepository } = require('../repositories');

class UsersController {

  constructor() {}

  list(req, res) {
    return UsersRepository.findAll()
      .then(users => res.status(200).send(users))
      .catch((error) => res.status(400).send({
        error: error.toString() ,
        message: "Error processing your request"
      }));
  }

  create(req, res) {
    return res.status(201).send({ message: 'Successfully Created New User' });
  }

}

module.exports = new UsersController();
