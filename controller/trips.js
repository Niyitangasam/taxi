import models from '../models';

const { Trip, Invoice } = models;

/**
 * @author Samuel Niyitanga
 * @exports TripController
 * @class TripController
 * @description Handles all related trip functianalities
 * */
class TripController {
  static async create(req, res) {
    try {
      const {
        startLocation, endLocation, driverId, riderId,
      } = req.body;
      await Trip.create({
        startLocation,
        endLocation,
        driverId,
        riderId,
      });
      return res.status(200).send({ message: 'Trip created successfully' });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // complete a trip

  static async complete(req, res) {
    try {
      const { amount, id } = req.params;
      const trip = await Trip.findAll({ where: { id } });

      if (trip.length === 0) {
        return res.status(400).send({ message: 'Entered trip not found' });
      }

      if (trip[0].completed) {
        return res.status(422).send({ message: 'Trip already completed!' });
      }
      const completedTrip = await Trip.update(
        { completed: true },
        { returning: true, where: { id: req.params.id } },
      );

      await Invoice.create({
        amount,
        tripId: id,
      });

      return res.status(200).send({ completedTrip, amount });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  // Get a list of active trip

  static async getAllActive(req, res) {
    try {
      const activeTrip = await Trip.findAll({ where: { completed: true } });
      return res.status(200).send(activeTrip);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default TripController;
