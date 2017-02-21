var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var user = new Schema({
  local: {
    username: String,
    password: String
  },
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
});

user.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

user.methods.validPassword = function functionName (password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', user);
