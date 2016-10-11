const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const user = require('./routers/user');

app.use(express.static('public'));
app.use('/user', user);

app.get('/', (req, res) => {
  res.render("index.html");
});

app.get('/calendar', (req, res) => {
  res.render('calendar.html');
});

app.get('/calendar/lunch-menu', (req, res) => {
  // res.render('/');
});

app.get('/about', (req, res) => {
  res.render('about.html');
});

app.get('/contact', (req, res) => {
  res.render('contact.html');
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.get('/admission', (req, res) => {
  res.render('admission.html');
});

app.get('/*', (req, res) => {
  res.status(404).render('404.html');
});

app.listen(PORT, () => console.log(`Your server is up and running on port: ${PORT}`));
