const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.get('/calendar', (req, res) => {
  res.sendFile(__dirname + '/public/calendar.html')
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/public/profile.html');
});

app.get('/*', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html')
});

app.listen(PORT, () => console.log(`Your server is up and running on port: ${PORT}`));
