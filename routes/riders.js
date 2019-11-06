import express from 'express';
import RiderController from '../controller/riders';
import ValidationMiddleware from '../middlewares/validation';


const router = express.Router();


router.get('/', RiderController.getAll);
router.get('/:id', ValidationMiddleware.validateId, RiderController.getById);
// router.get('/near', RiderController.getNear);

export default router;
