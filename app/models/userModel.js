var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  addressLineOne: String,
  addressLineTwo: String,
  city: String,
  state: String,
  zip: String,
  username: { type: String, unique: true },
  password: String,
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

module.exports = mongoose.model("User", userSchema);