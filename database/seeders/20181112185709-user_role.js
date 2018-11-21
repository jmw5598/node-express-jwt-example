'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_roles', [
      { user_id: 1, role_id: 1 },
      { user_id: 1, role_id: 2 },
      { user_id: 2, role_id: 1 }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_roles', null, {});
  }
};
