const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products')

const server = express();

server.use(productsRoutes);

server.listen(5000);
