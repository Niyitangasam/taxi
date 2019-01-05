const driverRoutes = require('../routes/driversRoutes');


const config = {
  migrate: false,
  driverRoutes,
  port: process.env.PORT || '5000',
};

module.exports = config;
