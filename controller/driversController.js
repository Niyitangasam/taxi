const db = require('../models');


// Get a list of all drivers
exports.getAll = (req, res) => {
  return db.Driver.findAll()
    .then(drivers => res.send(drivers))
    .catch((err) => {
      res.send(400, JSON.stringfy(err));
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

// exports.getIn3Km = (req, res) => {
//   db.Driver.findAll({ where:  [{ available: true },{distance: (req.params.)} ] })
//     .then(drivers => res.send(drivers))
//     .catch((err) => {
//       res.send(200, JSON.stringfy(err));
//     });
// };


exports.getById = (req, res) => {
  let queryResult;
  if (isNaN(req.params.id)) {
    queryResult = res.status(400).json('Invalid ID Given');
  } else {
    db.Driver.findById(req.params.id)
      .then((driver) => {
        queryResult = res.status(200).send(driver);
      })
      .catch((err) => {
        queryResult = res.send(400, JSON.stringfy(err));
      });
  }
  return queryResult;
};
