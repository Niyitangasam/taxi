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
      return queryInterface.bulkInsert('Riders', [{
      names: 'NIYITANGA',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      names: 'NIKOBAHOZE',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    } ,{
      names: 'Samuel',
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
