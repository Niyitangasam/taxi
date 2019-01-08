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

    return queryInterface.bulkInsert('Locations', [{
      name: 'Rugunga',
      latitude: 1.9685,
      longitude: 30.0671,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      name: 'Kanogo',
      latitude: 1.9062,
      longitude: 30.1737,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Kabuga',
      latitude: 1.9770,
      longitude: 30.2224,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Butare',
      latitude: 2.6078,
      longitude: 29.7368,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Nyamata',
      latitude: 2.2072,
      longitude: 30.1445,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Rusizi',
      latitude: 2.5303,
      longitude: 29.1856,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Nyagatare',
      latitude: 1.3782,
      longitude: 30.4358,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      name: 'Nyamirambo',
      latitude: 1.9912,
      longitude: 30.0463,
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
