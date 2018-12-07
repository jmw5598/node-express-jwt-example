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

    return bcrypt.hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
        return UsersRepository.save(user);
      })
      .then((user) => {
        return UsersRepository.findById(user.dataValues.id);
      })
      .then((user) => { console.log('user', user); return res.status(201).send({
        message: 'Successfully created new user',
        payload: user.dataValues
      }); })
      .catch((error) => res.status(400).send({ error: 'Error creating new user' }));
  }

  exists(req, res) {
    const id = req.params.id;
    return UsersRepository.exists(id)
      .then((count) => {
        if(count > 0) return res.status(204).send();
        else throw err;
      })
      .catch((error) => res.status(404).send({ error: 'User id not found'}));
  }

  find(req, res) {
    const id = req.params.id;
    return UsersRepository.findById(id)
      .then((user) => {
        if(user) res.status(200).send(user)
        else throw err;
      })
      .catch((error) => res.status(404).send({ error: `User with id ${id} not found`}));
  }

  replace(req, res) {
    const id = req.params.id;
    return res.status(200).send({ message: `Replaced user with id ${id}` });
  }

  update(req, res) {
    const id = req.params.id;
    return res.status(200).send({ message: `Updated user with id ${id}` });

  }

  delete(req, res) {
    const id = req.params.id;
    return res.status(200).send({ message: `Deleted user with id ${id}` });
  }

}

module.exports = new UsersController();
