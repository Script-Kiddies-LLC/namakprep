const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const user = require('./routers/user');

app.use(express.static('public'));
app.use('/user', user);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'Kappa123',
    password : 'KappaPride',
    database : 'test',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.get('/calendar', (req, res) => {
  res.sendFile(__dirname + '/public/calendar.html');
});

app.get('/calendar/lunch-menu', (req, res) => {
  res.sendFile(__dirname + '/public/');
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

app.get('/admission', (req, res) => {
  res.sendFile(__dirname + '/public/admission.html');
});

app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/public/profile.html');
});

app.get('/parents', (req, res) => {
  res.sendFile(__dirname + '/public/parents.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});

app.get('/*', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.post('/admission', (req, res) => {
  console.log(req.body);
});

app.post('/login', (req, res) => {
  console.log(req.body);
});

app.post('/contact', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`Your server is up and running on port: ${PORT}`));
