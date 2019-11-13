import express from 'express';
import TripController from '../controller/trips';
import ValidationMiddleware from '../middlewares/validation';


const router = express.Router();


router.post('/', TripController.create);
router.put('/complete/:id/:amount', ValidationMiddleware.validateId, ValidationMiddleware.validateAmount, TripController.complete);
router.get('/active', TripController.getAllActive);

export default router;
