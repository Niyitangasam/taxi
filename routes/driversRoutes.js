const express = require('express');
const driversController = require('../controller/driversController');

const router = express.Router();


router.get('/', driversController.getAll);
router.get('/available', driversController.getAvailable);
router.get('/:id', driversController.getById);
router.get('/availableNear/:location', driversController.getAvailableWithin3Km);
module.exports = router;
