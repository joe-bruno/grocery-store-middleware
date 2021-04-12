var express = require('express');
var router = express.Router();

router.get('/:customerId', function(req, res, next) {
  res.json({customer: {}, pastOrders: []});
});

module.exports = router;
