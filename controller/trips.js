import models from '../models';

const { Trip } = models;

/**
 * @author Samuel Niyitanga
 * @exports TripController
 * @class TripController
 * @description Handles all related trip functianalities
 * */
class TripController {
  static create(req, res) {
    const {
      startLocation, endLocation, driverId, riderId, completed,
    } = req.body;
    return Trip.create({
      startLocation, endLocation, driverId, riderId, completed,
    })
      .then(trip => res.send(trip))
      .catch((err) => {
        res.send(200, JSON.stringfy(err));
        return res(err);
      });
  }

  // complete a trip

  static complete(req, res, next) {
    return Trip.update(
      { completed: true },
      { returning: true, where: { id: req.params.id } },
    )
      .then((updatedBook) => {
        res.send(updatedBook);
      })
      .catch(next);
  }

  // Get a list of active trip

  static getAllActive(req, res) {
    return Trip.findAll({ where: { completed: true } })
      .then(trip => res.send(trip))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
export default TripController;
