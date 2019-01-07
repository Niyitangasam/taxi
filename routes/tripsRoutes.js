const express = require('express');
const tripsController = require('../controller/tripsController');

const router = express.Router();


router.post('/', tripsController.create);
router.get('/complete/:id', tripsController.complete);
router.get('/active', tripsController.getAllActive);
module.exports = router;
