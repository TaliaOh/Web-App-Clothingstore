const express = require('express');

const router = express.Router();

const DUMMY_DATA = [
    {
        id: 'p1',
        productName: 'T-shirt',
        price: '20$',
        color: 'black',
        image: ''
    },
    {
        id: 'p2',
        productName: 'T-shirt',
        price: '20$',
        color: 'white',
        image: ''
    },
    {
        id: 'p3',
        productName: 'T-shirt',
        price: '20$',
        color: 'gray',
        image: ''
    }
]

router.get('/', (req, res) => {
  console.log('Get Request in Places');
  res.json({ message: 'It Words!' });
});

router.get('/:pid', (req, res) => {
    const productId = req.params.pid
    const product = DUMMY_DATA.find(p => {
        return p.id === productId
    })
    res.json({ product });
  });

module.exports = router;
