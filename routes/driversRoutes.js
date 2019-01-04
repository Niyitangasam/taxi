const requireLogin = require('../middleware/requireLogin');


console.log('in driver upper');

module.exports = (app) => {
  const Driver = [
    {
      id: 1,
      available: true,
      names: 'ABC',
      distance: 3,
    },
    {
      id: 2,
      available: false,
      names: 'ABC',
      distance: 5,
    },
    {
      id: 3,
      available: true,
      names: 'ABC',
      distance: 4,
    },
  ];
  console.log('in driver down');
  // Get all drivers
  app.get('/api/drivers', async (req, res) => {
    res.send({ status: 200, data: Driver });
  });

  // Get Specific driver by ID
  app.get('/api/drivers/:id', async (req, res) => {
    const driver = await Driver.find(d => d.id === parseInt(req.params.id, 10));
    if (!driver) res.status(404).send('the Driver with that ID was not found');
    res.send({ status: 200, data: driver });
  });

  // Get a list of all available drivers within 3 km for a specif location
  app.get('/api/available', async (req, res) => {
    const driver = await Driver.find(d => d.available === true);
    if (!driver) res.status(404).send('No Availabble Driver(s) found');
    res.send({ status: 200, data: driver });
  });
  // Get all available drivers
  app.get('/api/availableIn3Km', async (req, res) => {
    const driver = await Driver.find(d => d.distance === 3);
    if (!driver) res.status(404).send('No Driver in 3 Km');
    res.send({ status: 200, data: driver });
  });
};
