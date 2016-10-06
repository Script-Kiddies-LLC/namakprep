var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile("index.html");
});

app.listen(PORT, function () {
  console.log('Your server is up and running on port:' + PORT);
});
