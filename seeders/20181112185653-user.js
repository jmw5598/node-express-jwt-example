'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { id: 1, username: 'admin', password: '$2a$10$T1W8ybvUt4CSqdqoIA/CkOttiDusVHDoxRirVca11DjGa3ZX.PKX2' },
      { id: 2, username: 'user', password: '$2a$10$6JMo4paEWMLED5SGhuE75eEyv.j5wxktBpZIBKel/btGpMwCrXkVe' }
    ], {})
    .catch((error) => console.log(error));

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
