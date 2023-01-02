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

const getAllOrders = (req, res) => {
  console.log('Get Request in Places');
  res.json({ DUMMY_DATA });
};

const getOrderById = (req, res, next) => {
  const orderId = req.params.oid;
  const order = DUMMY_DATA.find((p) => {
    return p.id === orderId;
  });
  if (!order) {
    return next(
      new HttpError('Could not find a order for the provided id.', 404)
    );
  }
  res.json({ order });
};

exports.getAllOrders = getAllOrders;
exports.getOrderById = getOrderById;
