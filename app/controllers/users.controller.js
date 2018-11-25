'use strict';

const bcrypt = require('bcrypt');
const { UsersRepository } = require('../repositories');

class UsersController {

  constructor() {}

  list(req, res) {
    return UsersRepository.findAll()
      .then(users => res.status(200).send(users))
      .catch((error) => res.status(400).send({ error: "Error processing your request" }));
  }

  create(req, res) {
    let user = req.body;

    let hashed = bcrypt.hash(user.password, 10)
      .then((hash) => user.password = hash)
      .catch((error) => res.status(400).send({ error: 'Error creating new user' }));

    let newUser = UsersRepository.save(user)
      .then((user) => res.status(201).send({
        message: 'Sucessfully created new user',
        payload: user.dataValues
      }))
      .catch((error) => res.status(400).send({ error: 'Error creating new user' }));
  }

}

module.exports = new UsersController();
