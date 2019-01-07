const db = require('../models');

// Get a list of all drivers

exports.getAll = (req, res) => {
  return db.Rider.findAll()
    .then(riders => res.send(riders))
    .catch((err) => {
      res.send(200, JSON.stringfy(err));
      return res(err);
    });
};
// Get a specific driver by id

exports.getById = (req, res) => {
  return db.Rider.findById(req.params.id)
    .then(rider => res.send(rider))
    .catch((err) => {
      res.send(200, JSON.stringfy(err));
    });
};

// For a specific rider, get a list of closest rider
