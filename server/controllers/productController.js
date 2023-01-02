const HttpError = require('../models/http-error');

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

const getAllProducts = (req, res) => {
  console.log('Get Request in Places');
  res.json({ DUMMY_DATA });
};

const getProductById = (req, res, next) => {
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
};

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
