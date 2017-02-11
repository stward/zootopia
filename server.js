var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('public')) // gives our app access to our static code in public folder

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/view', function (req, res) {
  res.render('view');
});

app.get('/edit', function (req, res) {
  res.render('edit');
});


app.get('/post', function (req, res) {
  res.render('post');
});

app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
