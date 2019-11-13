import models from '../models';
import Util from '../utils/util';


const { Rider, Driver, Location } = models;

/**
 * @author Samuel Niyitanga
 * @exports RiderController
 * @class RiderController
 * @description Handles all related riders functionalities
 * */
class RiderController {
  static async getAll(req, res) {
    try {
      const riders = await Rider.findAll();
      return res.status(200).send(riders);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  // Get a specific driver by id

  static async getById(req, res) {
    try {
      const specifRider = await Rider.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send(specifRider);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // For a specific driver, get a list of the 3 closest drivers

  static async getNear(req, res) {
    try {
      const { name } = req.params;
      const providedRider = await Driver.findAll({
        where: { names: name },
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });

      if (providedRider.length === 0) {
        return res.status(404)
          .send({ message: 'Provided Riders not found!' });
      }
      const allRiders = await Driver.findAll({
        include: [
          { model: Location, attributes: ['id', 'name', 'latitude', 'longitude'] },
        ],
        attributes: ['id', 'names'],
      });
      const closest = allRiders.filter((rider) => {
        const {
          latitude: latitudeToCompare, longitude: longitudeToCompare,
        } = rider.dataValues.Location.dataValues;
        if ((providedRider[0].id !== rider.dataValues.id) && Util.getWithIn3Km(
          providedRider[0].Location.latitude, providedRider[0].Location.longitude,
          latitudeToCompare, longitudeToCompare,
        )) {
          return rider;
        }
        return {};
      });
      if (closest.length === 0) {
        return res.status(404)
          .send({ message: 'No closest riders' });
      }
      return res.status(200).send(closest);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default RiderController;
