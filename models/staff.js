const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// !! need to change this entirely !! - James//
const staffSchema = new Schema({
  name: { type: String, required: true },
  station: { type: String, required: true },
  e-mail: String,
  status: String,
  notes: String,
  date: { type: Date, default: Date.now }
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
