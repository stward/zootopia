var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var animalRoutes = require('./routes/animals');
var Animal = require('./models/animal');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zootopia");

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('public')) // gives our app access to our static code in public folder

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/view', function (req, res) {
  Animal.find(function(err, animals){
    if (err) {
      res.json(err, 'ERROR');
    } else {
      res.render('view', { data: animals });
    }
  });
});

app.get('/edit', function (req, res) {
  res.render('edit');
});


app.get('/post', function (req, res) {
  res.render('post');
});

app.use('/api/animals', animalRoutes);

app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
