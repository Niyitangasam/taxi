const db = require('../models');


exports.getAll = (req, res) => {
  return db.driver.findAll()
    .then(drivers => res.send(drivers))
    .catch((err) => {
      console.log('There was an error fetching drivers', JSON.stringfy(err));
      return res(err);
    });
};
