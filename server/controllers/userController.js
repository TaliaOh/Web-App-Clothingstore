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

const getAllUsers = (req, res) => {
  console.log('Get Request in Places');
  res.json({ DUMMY_DATA });
};

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_DATA.find((p) => {
    return p.id === userId;
  });
  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided id.', 404)
    );
  }
  res.json({ user });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
