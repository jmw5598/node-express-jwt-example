'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCreate: (user, options) => {
        return new Promise((resolve, reject) => {
          bcrypt.hash(user.password, 10)
            .then(hash => {
              user.password = hash;
              user.addRole([1]);
              resolve(user);
            })
          });
      }
    }
  });
  User.associate = function(models) {
    User.belongsToMany(models.Role, {
      through: 'UserRole',
      as: 'roles',
      foreignKey: 'userId'
    });
  };
  return User;
};
