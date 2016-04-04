var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  score: Number,
  title: String,
  description: String,
  jobbie: [{
    type: Schema.Types.ObjectId,
    ref: "Jobbie"
  }],
  employee: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  employer: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

// methods ======================


module.exports = mongoose.model('Rating', ratingSchema);
