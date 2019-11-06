const DriverSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Drivers', [{
      names: 'Mihogo',
      available: true,
      LocationId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Rugema',
      available: false,
      LocationId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Samuel',
      available: true,
      LocationId: 3,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});
  },

  down: () => {

  },
};
export default DriverSeeder;
