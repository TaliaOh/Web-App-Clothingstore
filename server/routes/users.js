const express = require('express');

const controller = require('../controllers//userController');

const router = express.Router();

router.get('/', controller.getAllUsers);

router.get('/:uid', controller.getUserById);

module.exports = router;
