import express from 'express';
import TripController from '../controller/trips';

const router = express.Router();


router.post('/', TripController.create);
router.put('/complete/:id', TripController.complete);
router.get('/active', TripController.getAllActive);

export default router;
