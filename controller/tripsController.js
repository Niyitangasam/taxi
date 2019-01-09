const db = require('../models');

// create a trip

exports.create = (req, res) => {
  const {
    startLocation, endLocation, driverId, riderId, completed,
  } = req.body;
  return db.Trip.create({
    startLocation, endLocation, driverId, riderId, completed,
  })
    .then(trip => res.send(trip))
    .catch((err) => {
      res.send(200, JSON.stringfy(err));
      return res(err);
    });
};

// complete a trip

exports.complete = (req, res) => {
  const id = parseInt(req.params.id, 10);
  return db.Trip.findById(id)
    .then((trip) => {
      const {
        startLocation, endLocation, driverId, riderId, completed = true,
      } = trip;
      return trip.update({
        startLocation, endLocation, driverId, riderId, completed,
      })
        .then(() => res.send(trip))
        .catch((err) => {
          console.log('***Error updating contact', JSON.stringify(err));
          res.status(400).send(err);
        });
    });
};

// Get a list of active trip

exports.getAllActive = (req, res) => {
  return db.Trip.findAll({ where: { completed: true } })
    .then(trip => res.send(trip))
    .catch((err) => {
      res.status(400).send(err);
    });
};
