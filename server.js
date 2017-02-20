var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

// the needed require statments for passport export-sessopm for taking session data
var session = require('express-session')
// storing use info
var cookieParser = require('cookie-parser')
var passport = require('passport')
var flash = require('connect-flash')
var morgan = require('morgan')

mongoose.connect("mongodb://localhost/zootopia");

var animalRoutes = require('./routes/animals');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('public'))

app.use(morgan('dev')) // log every request
app.use(cookieParser())

// set app to use middleware needed for authentication
app.use(session({secret: 'asdf'})) // session secret
app.use (passport.initialize())
app.use (passport.session())
app.use(flash)

require('./config/passport')(passport)
require('./routes/userAuth')(app, passport)

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send({message: "It's alive!!!"});
});

app.use('/api/animals', animalRoutes);

app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
