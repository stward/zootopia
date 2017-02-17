var Mongoose = require('mongoose')
var Schema = Mongoose.Schema

var AnimalSchema = new Schema({
  name:    String,
  species: String
})

module.exports = Mongoose.model('Animal', AnimalSchema)
