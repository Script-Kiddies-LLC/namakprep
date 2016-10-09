const express = require('express');
const router = express.Router();

router.get('/route', (req, res) => {
  res.send('Testing router for /user');
});

module.exports = router;
