const GeoPoint = require('geopoint');
const db = require('../models');


// Get a list of all drivers
exports.getAll = (req, res) => {
  return db.Driver.findAll()
    .then(drivers => res.send(drivers))
    .catch((err) => {
      res.status(400).send(err);
      return res(err);
    });
};

// Get a list of all available drivers
exports.getAvailable = (req, res) => {
  return db.Driver.findAll({ where: { available: true } })
    .then(drivers => res.send(drivers))
    .catch((err) => {
      res.send(400, JSON.stringfy(err));
    });
};

// Get a list of all available drivers within 3 km for a specific location

exports.getAvailableWithin3Km = (req, res) => {
   db.Location.findOne({ where: { name: req.params.location } })
    .then((location) => { return location.get({ plain: true }); })
    .then((drivers) => { return res.send(drivers.longitude); })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.getById = (req, res) => {
  let queryResult;
  if (isNaN(req.params.id)) {
    queryResult = res.status(400).json('Invalid ID Given');
  } else {
    db.Driver.findById(req.params.id)
      .then((driver) => {
        if (driver) {
          queryResult = res.status(200).send(driver);
        } else {
          res.status(404).json('Not Existing'); }
      })
      .catch((err) => {
        queryResult = res.send(400, JSON.stringfy(err));
      });
  }
  return queryResult;
};
