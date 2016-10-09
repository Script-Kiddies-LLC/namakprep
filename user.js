var express = require('express');
var router = express.Router();

router.get('/route', (req, res) => {
  res.send('Testing router for /user');
});

module.exports = router;
