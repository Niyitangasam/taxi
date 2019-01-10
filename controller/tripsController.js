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

exports.complete = (req, res, next) => {
  return db.Trip.update(
    { completed: true },
    { returning: true, where: { id: req.params.id } },
  )
    .then(updatedBook=> {
      res.send(updatedBook);
    })
    .catch(next);
};

// Get a list of active trip

exports.getAllActive = (req, res) => {
  return db.Trip.findAll({ where: { completed: true } })
    .then(trip => res.send(trip))
    .catch((err) => {
      res.status(400).send(err);
    });
};
