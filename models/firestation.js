const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firestationSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  station: { type: String, required: true }
});

const Firestation = mongoose.model("Firestation", firestationSchema);

module.exports = Firestation;
