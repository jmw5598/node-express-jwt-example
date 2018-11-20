'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      field: 'role',
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false
  });
  Role.associate = function(models) {
    Role.belongsToMany(models.User, {
      through: 'UserRole',
      as: 'users',
      foreignKey: 'roleId'
    });
  };
  return Role;
};
