const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// !! need to change this entirely !! - James//
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const FireStation = mongoose.model("FireStation", fireStationSchema);

module.exports = FireStation;
