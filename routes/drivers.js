import express from 'express';

import DriverController from '../controller/drivers';
import ValidationMiddleware from '../middlewares/validation';

const router = express.Router();


router.get('/', DriverController.getAll);
router.get('/available', DriverController.getAvailable);
router.get('/:id', ValidationMiddleware.validateId, DriverController.getById);
router.get('/availableNear/:location', ValidationMiddleware.validateString, DriverController.getAvailableWithin3Km);

export default router;
