'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Drivers', [{
      names: 'Mihogo',
      available: true,
      LocationId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      names: 'Rugema',
      available: false,
      LocationId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    } ,{
      names: 'Samuel',
      available: true,
      LocationId: 3,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
