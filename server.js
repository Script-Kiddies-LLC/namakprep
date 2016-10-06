var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Your server is up and running on port: ${PORT}`);
});
