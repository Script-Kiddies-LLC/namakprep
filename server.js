var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
const PORT = app.get('port')

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile("index.html");
});

app.listen(PORT, function () {
  console.log('Your server is up and running on port:' + PORT);
});
