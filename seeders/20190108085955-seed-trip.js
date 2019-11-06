const tripSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Trips',
      [
        {
          startLocation: 'Rugunga',
          endLocation: 'Kanogo',
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'Kanogo',
          endLocation: 'Kabuga',
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'Nyamirambo',
          endLocation: 'Rugunga',
          completed: true,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {},
};
export default tripSeeder;
