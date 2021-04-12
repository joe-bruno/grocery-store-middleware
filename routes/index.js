var express = require('express');
var router = express.Router();

router.get('/purchasableItems', function(req, res, next) {
  res.json({items: []});
});

router.post('/calculatePrice', function(req, res, next) {
  console.log(req.body.testProp);
  res.json({totalPrice: 0.0});
});

module.exports = router;
