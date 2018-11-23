'use strict';

const { User, Role } = require('../models');

class UsersRepository {

  constructor() {}

  findAll() {
    return User.findAll({
      include: [{
        model: Role,
        as: 'roles',
        attributes: ['role'],
        through: { attributes: [] }
      }],
      attributes: {
        exclude: ['id', 'password']
      }
    });
  }

  findOne(username) {
    return User.findOne({
      where: { username: username },
      include: [{
        model: Role, as: 'roles', attributes: ['role'],
        through: { attributes: [] }
      }]
    });
  }

  save(user) {

  }

}

module.exports = new UsersRepository();
