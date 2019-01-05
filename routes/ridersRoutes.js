const requireLogin = require('../middleware/requireLogin');


module.exports = (app) => {
  const Rider = [
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
  // Get a list of all riders
  app.get('/api/riders', async (req, res) => {
    res.send({ status: 200, data: Rider });
  });
  // Get a rider by id
  app.get('/api/riders:id', async (req, res) => {
    const rider = Rider.find(r => r.id === req.params.id);
    res.send({ status: 200, data: rider });
  });
  // A list of three closest driver
  app.get('/api/riders:id?closest', async (req, res) => {
    res.send({ status: 200, data: rider });
  });
};
