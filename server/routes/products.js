const express = require('express');

const controller = require('../controllers/productController');

const router = express.Router();

router.get('/', controller.getAllProducts);

router.get('/:pid', controller.getProductById);

module.exports = router;
