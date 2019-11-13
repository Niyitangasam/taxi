import express from 'express';

import DriverController from '../controller/drivers';
import ValidationMiddleware from '../middlewares/validation';

const router = express.Router();


router.get('/', DriverController.getAll);
router.get('/available', DriverController.getAvailable);
router.get('/availableNear', DriverController.getAvailableWithin3Km);
router.get('/:id', ValidationMiddleware.validateId, DriverController.getById);

export default router;
