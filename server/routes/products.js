const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get Request in Places');
  res.json({ message: 'It Words!' });
});

module.exports = router;
