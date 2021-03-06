import Util from '../utils/util';
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
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });
      return res.status(200).send(availableRiders);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // Get a list of all available drivers within 3 km for a specific location

  static async getAvailableWithin3Km(req, res) {
    try {
      const { latitude, longitude } = req.query;
      if (!latitude || !longitude) {
        return res.status(400)
          .send({ message: 'location details are invalid' });
      }
      const available = await Driver.findAll({
        where: { available: true },
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });
      const availableNearSpecificLocation = available.filter((driver) => {
        const {
          latitude: latitudeToCompare, longitude: longitudeToCompare,
        } = driver.dataValues.Location.dataValues;
        if (Util.getWithIn3Km(latitude, longitude, latitudeToCompare, longitudeToCompare)) {
          return driver;
        }
        return {};
      });
      if (availableNearSpecificLocation.length === 0) {
        return res.status(404)
          .send({ message: 'No drivers available within 3 Km' });
      }
      return res.status(200).send(available);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async getById(req, res) {
    try {
      const specifDriver = await Driver.findOne({
        where: { id: req.params.id },
      });
      if (!specifDriver) {
        return res.status(404)
          .send({ message: 'No drivers with that ID found' });
      }
      return res.status(200).send(specifDriver);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default DriverController;
