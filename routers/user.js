const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('../' + __dirname + '/public/profile.html');
});

router.get('/route', (req, res) => {
  res.send('Testing router for /user');
});

module.exports = router;
