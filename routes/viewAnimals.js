var express = require('express');
var $ = require('jquery');
var Animal = require('../models/animals');



var router = express.Router();

router.use(function (req, res, next) {
  console.log('Using the express router!');
  next();
})


router.route('/')
  .get(function (req, res) {
    Animal.find(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.render('animalsView', {animals: data});
      }
    });
  });

router.route('/update/:animalId')
  .get(function (req, res) {
    Animal.findById(req.params.animalId, function (err, animal) {
      if (err) {
        console.log(err);
      } else {
        res.render('updateAnimalsForm', {animal: animal})
      }
    })
  })









module.exports = router;
