import models from '../models';

const { Rider } = models;

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
}
export default RiderController;
