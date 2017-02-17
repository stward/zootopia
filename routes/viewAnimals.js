var Express = require('express')
var $ = require('jquery')
var Animal = require('../models/animals')

var Router = Express.Router()

Router.use(function(req, res, next) {
  console.log('using the animals api router')
  next()
})

Router.route('/')
  .get(function(req, res) {
    Animal.find(function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.render('animals', {animals:data})
      }
    })
  })

Router.route('/update/:animalId')
  .get(function(req, res) {
    Animal.findById(req.params.animalId, function(err, animal) {
      if(err) {
        console.log(err);
      } else {
        res.render('updateAnimalsForm', {animal:animal})
      }
    })
  })

module.exports = Router
