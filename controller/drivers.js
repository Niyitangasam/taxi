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
  static async getAll(req, res) {
    try {
      const riders = await Driver.findAll();
      return res.status(200).send(riders);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // Get a list of all available drivers
  static async getAvailable(req, res) {
    try {
      const availableRiders = await Driver.findAll({
        where: { available: true },
      });
      return res.status(200).send(availableRiders);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // Get a list of all available drivers within 3 km for a specific location

  static async getAvailableWithin3Km(req, res) {
    try {
      const available = await Location.findAll({
        where: { name: req.params.location },
        attributes: ['id', 'latitude', 'longitude'],
      });
      const availableMapped = available.map(el => el.get({ plain: true }));
      const availableNear = availableMapped[0].get('longitude').value;
      return res.status(200).send(availableNear);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async getById(req, res) {
    try {
      const specifDriver = await Driver.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send(specifDriver);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default DriverController;
