


module.exports = (app) => {
  const Trip = [
    {
      id: 1,
      driverID: 2,
      riderID: 3,
      complete: true,
    },
    {
      id: 2,
      driverID: 2,
      riderID: 3,
      complete: true,
    },
    {
      id: 3,
      driverID: 4,
      riderID: 5,
      complete: false,
    },
  ];
  // Get a list of all trips
  app.get('/api/riders', async (req, res) => {
    res.send({ status: 200, data: Trip });
  });
  // Get a list of completed trips
  app.get('/api/completed', async (req, res) => {
    const completedTrip = Trip.find(t => t.complete === true);
    res.send({ status: 200, data: completedTrip });
  });
  // Create a new trip by assigning a driver to a rider
};
