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
        res.json(data);
      }
    });
  });


module.exports = router;
