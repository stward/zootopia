var User = require('../models/user')
var Location = require('../models/location')

module.exports = function (app, passport) {
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {
    // res.json({'message': 'This is the index page'});
    res.render('index.ejs'); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
    // res.json({'message': 'This is the loggin page'});
  });

  // process the login form
  // app.post('/login', do all our passport stuff here);
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
    // res.json({'message': 'This is the signup page.'});
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.get('/profile', isLoggedIn, function(req, res) {
    User.findById(req.user._id)
      .populate('location')
      .exec(function(err, data) {
      if (err) {
        console.log(err);
        // res.render('profile', {user: req.user, message: req.flash('updateMessage')})
      } else {
        res.render('profile', {user: data, message: req.flash('updateMessage') })
      }
    })
  });

  // =====================================
  // UPDATE USER =========================
  // =====================================
  app.post('/update', isLoggedIn, function(req, res) {
    User.findById(req.user._id, function(err, user) {
      if (err) {
        console.log(err);
        req.flash('updateMessage', 'Update Failed: Failed to look up user.')
        res.redirect('/profile')
      } else {
        var location = new Location()
        location.city = req.body.city
        location.state = req.body.state
        location.zip = req.body.zip
        location.save(function(err, data) {
          if (err) {
            console.log(err);
            req.flash('updateMessage', 'Update Failed: Failed to save.')
            res.redirect('/profile')
          }
        user.location = location._id
        user.save(function(err, data) {
          if (err) {
            console.log(err)
            req.flash('updateMessage', 'Update Failed: Failed to save user.')
            res.redirect('/profile')
          }
        })
          console.log(data);
          req.flash('updateMessage', 'Updated user.')
          res.redirect('/profile')
        })
      }
    })
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
}
