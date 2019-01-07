const express = require('express');
const ridersController = require('../controller/ridersController');

const router = express.Router();


router.get('/', ridersController.getAll);
router.get('/:id', ridersController.getById);
// router.get('/near', ridersController.getNear);

module.exports = router;
