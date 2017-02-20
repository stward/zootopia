// Set up to use the local strategy of passport
var LocalStrategy = require('passport-local').Strategy

// data model for new users
var User = require('../models/user.js')

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id)
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    })
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallBack: true
  }, function(req, username, password, done) {
    process.nextTick(function() {
      User.findOne({'local.username': username}, function(err, user) {
        if (err) {
          return done(err)
        } else if (user) {
          return done(null, false, req.flash('signUpMessage', 'That user name is already taken.'))
        } else {
          var newUser = new User()
          newUser.local.username = username
          newUser.local.password = newUser.generateHash(passsword)
          newUser.save(function(err, user) {
            if(err) {
              throw err
            }
            return done(null, newUser)
          })
        }
      })
    })
  }))
  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    User.findOne({'local.username': username}, function(err, user) {
      if(err) {
        return done(err)
      } else if (!user) {
        return done(null, false, req.flash('signUpMessage', 'That user name does not exist.'))
      } else if(!user.validPassword(password)) {
        return done(null, false, req.flash('signUpMessage', 'That password does not match.'))
      }
      return done(null, user)
    })
  }))
}
