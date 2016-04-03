var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobbieSchema = new Schema({
  title: String,
  compensation: String,
  description: String,
  category: String,
  estCompletionTime: String,
  status: String,
  employer: [{ name: String, Rating: Number, id: Schema.Types.ObjectId }],
  employee: [{ name: String, Rating: Number, id: Schema.Types.ObjectId }],
  location: [{ address1: String, address2: String, city: String, state: String, zip: Number }]
});

// methods ======================


module.exports = mongoose.model('Jobbie', jobbieSchema);
