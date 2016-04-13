var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobbieSchema = new Schema({
  title: String,
  compensation: String,
  description: String,
  category: String,
  estCompletionTime: String,
  status: {
    type: String,
    default: "notComplete"
  },
  timePosted: {
    type: Date,
    default: Date.now
  },
  _employer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  _employee: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  location: [{
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String
  }]
});

// methods ======================


module.exports = mongoose.model('Jobbie', jobbieSchema);
