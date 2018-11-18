'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      { id: 1, role: 'USER' },
      { id: 2, role: 'ADMIN' }
    ], {})
    .catch((error) => console.log("ROLE ERROR", error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
