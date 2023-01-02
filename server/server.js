const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products')

const server = express();

server.use('/api/products', productsRoutes);

server.listen(5000);
