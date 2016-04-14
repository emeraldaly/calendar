var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  start: { type: Date },
  //new Date(y, m, 28),
  end: { type: Date },
  //new Date(y, m, 29),


});
var Events = mongoose.model('Events', EventSchema);
module.exports = Events;