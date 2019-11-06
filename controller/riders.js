import models from '../models';

const { Rider } = models;

/**
 * @author Samuel Niyitanga
 * @exports RiderController
 * @class RiderController
 * @description Handles all related riders functionalities
 * */
class RiderController {
  static getAll(req, res) {
    return Rider.findAll()
      .then(riders => res.send(riders))
      .catch((err) => {
        res.send(200, JSON.stringfy(err));
        return res(err);
      });
  }
  // Get a specific driver by id

  static getById(req, res) {
    return Rider.findById(req.params.id)
      .then(rider => res.send(rider))
      .catch((err) => {
        res.send(200, JSON.stringfy(err));
      });
  }
}
export default RiderController;
