// import geopoint from 'geopoint';
import models from '../models';

const { Driver, Location } = models;


/**
 * @author Samuel Niyitanga
 * @exports DriverController
 * @class DriverController
 * @description Handles all related drivers functioanlities
 * */
class DriverController {
  // Get a list of all drivers
  static getAll(req, res) {
    return Driver.findAll()
      .then(drivers => res.send(drivers))
      .catch((err) => {
        res.status(400).send(err);
        return res(err);
      });
  }

  // Get a list of all available drivers
  static getAvailable(req, res) {
    return Driver.findAll({ where: { available: true } })
      .then(drivers => res.send(drivers))
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  // Get a list of all available drivers within 3 km for a specific location

  static getAvailableWithin3Km(req, res) {
    return Location.findAll({ where: { name: req.params.location }, attributes: ['id', 'latitude', 'longitude'] })
      .map(el => el.get({ plain: true }))
      .then((rows) => {
        res.send(rows[0].get('longitude').value);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static getById(req, res) {
    let queryResult;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(req.params.id)) {
      queryResult = res.status(400).json('Invalid ID Given');
    } else {
      Driver.findById(req.params.id)
        .then((driver) => {
          if (driver) {
            queryResult = res.status(200).send(driver);
          } else {
            res.status(404).json('Not Existing');
          }
        })
        .catch((err) => {
          queryResult = res.send(400, JSON.stringfy(err));
        });
    }
    return queryResult;
  }
}
export default DriverController;
