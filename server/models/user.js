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
        user.password = bcrypt.hashSync(user.password, 10);
        user.addRole([1]);
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
