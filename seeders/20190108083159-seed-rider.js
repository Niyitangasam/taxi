const riderSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Riders', [{
      names: 'NIYITANGA',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'NIKOBAHOZE',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    } , {
      names: 'Samuel',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  },
};
export default riderSeeder;
