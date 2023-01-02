const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products');

const server = express();

server.use('/api/products', productsRoutes);

server.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

server.listen(5000);
