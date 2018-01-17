const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firefighterSchema = new Schema({
  name: { type: String, required: true },
  working: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Firefighter = mongoose.model("Firefighter", firefighterSchema);

module.exports = Firefighter;
