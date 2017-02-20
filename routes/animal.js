var express = require('express');
var Animal = require('../models/animals');

var router = express.Router();

router.use(function (req, res, next) {
  console.log('using the animals server');
  next();
});

router.route('/animals')
  .get(function (req, res) {
    Animal.find(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      }
    });
  })
  .post(function (req, res) {
    var animal = new Animal();
    animal.name = req.body.name;
    animal.species = req.body.species;
    animal.save(function (err, data) {
      if (err) {
        console.log('error saving animal');
      } else {
        res.json(data);
      }
    });
  });

router.route('/animals/:animalId')
  .get(function (req, res) {
    Animal.findById(req.params.animalId , function (err, data) {
      if (err) {
        console.log(err , 'cant find that animal!!');
      } else {
        res.json(data);
      }
    });
  })
  .put(function (req, res) {
    Animal.findById(req.params.animalId, function (err, animal) {
      if (err) {
        console.log(err);
      } else {
        animal.name = req.body.name ? req.body.name : animal.name;
        animal.species = req.body.species ? req.body.species : animal.species;
        animal.save(function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        });
      }
    });
  })
  .delete(function (req, res) {
    Animal.remove({'_id': req.params.animalId}, function (err, animal) {
      if (err) {
        console.log(err);
      } else {
        res.json({message: 'Animal Deleted', data: animal});
      }
    });
  });

  module.exports = router;
