const express = require('express');

const HttpError = require('../models/http-error');

const router = express.Router();

const DUMMY_DATA = [
  {
    id: 'p1',
    productName: 'T-shirt',
    price: '20$',
    color: 'black',
    image: '',
  },
  {
    id: 'p2',
    productName: 'T-shirt',
    price: '20$',
    color: 'white',
    image: '',
  },
  {
    id: 'p3',
    productName: 'T-shirt',
    price: '20$',
    color: 'gray',
    image: '',
  },
];

router.get('/', (req, res) => {
  console.log('Get Request in Places');
  res.json({ message: 'It Words!' });
});

router.get('/:pid', (req, res, next) => {
  const productId = req.params.pid;
  const product = DUMMY_DATA.find((p) => {
    return p.id === productId;
  });
  if (!product) {
    return next(
      new HttpError('Could not find a product for the provided id.', 404)
    );
  }
  res.json({ product });
});

module.exports = router;
