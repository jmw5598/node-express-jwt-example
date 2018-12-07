'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    roleId: {
      type: DataTypes.INTEGER,
      field: 'role_id'
    }
  }, {
    timestamps: false,
    tableName: 'user_roles'
  });
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};
