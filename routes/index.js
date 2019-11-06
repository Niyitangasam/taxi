import express from 'express';
import drivers from './drivers';
import riders from './trips';
import trips from './riders';

const router = express.Router();

router.use('/api/v1/drivers', drivers);
router.use('/api/v1/riders', riders);
router.use('/api/v1/trips', trips);

export default router;
