var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


var animalRoutes = require('./routes/animals');
var Animal = require('./models/animal');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zootopia");

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('public')) // gives our app access to our static code in public folder

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passpo

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

app.get('/edit/:animalId', function (req, res) {
  Animal.findById( req.params.animalId, function(err, animal){
    if (err) {
      res.json(err, 'ERROR');
    } else {
      res.render('edit', { data: animal });
    }
  });
});


app.get('/post', function (req, res) {
  res.render('post');
});

app.use('/api/animals', animalRoutes);

app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
