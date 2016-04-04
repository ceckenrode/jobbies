var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobbieSchema = new Schema({
  title: String,
  compensation: String,
  description: String,
  category: String,
  estCompletionTime: String,
  status: String,
  employer: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  employee: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  location: [{
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number
  }]
});

// methods ======================


module.exports = mongoose.model('Jobbie', jobbieSchema);
