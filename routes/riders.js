import express from 'express';
import RiderController from '../controller/riders';

const router = express.Router();


router.get('/', RiderController.getAll);
router.get('/:id', RiderController.getById);
// router.get('/near', RiderController.getNear);

export default router;
