var Express = require('express')
var Animal = require('../models/animals')

var Router = Express.Router()

Router.use(function(req, res, next) {
  console.log('using the express router')
  next()
})

Router.route('/animals')
  .get(function(req, res) {
    Animal.find(function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
  })
  .post(function(req, res) {
    var animal = new Animal()
    animal.name = req.body.name
    animal.species = req.body.species
    animal.save(function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
  })

Router.route('/animals/:animalId')
  .get(function(req, res) {
    Animal.findById(req.params.animalId, function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.json(data)
      }
    })
  })
  .put(function(req, res) {
    Animal.findById(req.params.animalId, function(err, animal) {
      if(err) {
        console.log(err);
      } else {
        animal.name = req.body.name ? req.body.name : animal.name
        animal.species = req.body.species ? req.body.species : animal.species
        animal.save(function(err, data) {
          if(err) {
            console.log(err);
          } else {
            res.json(data)
          }
        })
      }
    })
  })
  .delete(function(req, res) {
    Animal.remove({_id: req.params.animalId}, function(err, animal) {
      if(err) {
        console.log(err);
      } else {
        res.json({message: 'deleted animal', data: animal})
      }
    })
  })

module.exports = Router
