const express = require('express');

const controller = require('../controllers/orderController');

const router = express.Router();

router.get('/', controller.getAllOrders);

router.get('/:oid', controller.getOrderById);

module.exports = router;
