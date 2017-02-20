module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    // res.render('index.ejs')
    res.json({message: 'index page'})
  });
  app.get('/login', function(req, res) {
    // res.render('login.ejs', {message: req.flash('loginMessage')})
    res.json({message: 'login page'})
  });
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/signup', function(req, res) {
    // res.render('signup.ejs', {message: req.flash('signupMessage')})
    res.json({message: 'sign up page'})
  });
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
};
