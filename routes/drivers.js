import express from 'express';

import DriverController from '../controller/drivers';

const router = express.Router();


router.get('/', DriverController.getAll);
router.get('/available', DriverController.getAvailable);
router.get('/:id', DriverController.getById);
router.get('/availableNear/:location', DriverController.getAvailableWithin3Km);

export default router;
