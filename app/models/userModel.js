var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
  fName: String,
  lName: String,
  email: {
    type: String,
    unique: true
  },
  phone: Number,
  addressLineOne: String,
  addressLineTwo: String,
  city: String,
  state: String,
  zip: String,
  username: String,
  password: {
    type: String,
    required: true,
  },
  ratings: [{
    type: Schema.Types.ObjectId,
    ref: "Rating"
  }],
  jobbiesAssigned: [{
    type: Schema.Types.ObjectId,
    ref: "Jobbie"
  }],
  jobbiesPosted: [{
    type: Schema.Types.ObjectId,
    ref: "Jobbie"
  }]
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
