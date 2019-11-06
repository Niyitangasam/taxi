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
      return res.send(riders);
    } catch (error) {
      return res.send(error);
    }
  }
  // Get a specific driver by id

  static async getById(req, res) {
    try {
      const specifDriver = await Rider.findOne({
        where: { id: req.params.id },
      });
      return res.send(specifDriver);
    } catch (error) {
      return res.send(error);
    }
  }
}
export default RiderController;
