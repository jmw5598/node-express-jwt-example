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
    return User.build(user).save()
      .then((user) => {
        user.addRoles([1]);
        return new Promise((resolve, reject) => resolve(user));
      })
      .catch((error) => new Promise((resolve, reject) => reject(error)));
  }

}

module.exports = new UsersRepository();
