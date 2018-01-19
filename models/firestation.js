const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firestationSchema = new Schema({
  name: { type: String, required: true },
  staffMin: { type: Number, required: true },
  staff: [{ type: Schema.Types.ObjectId, ref: 'Firefighter' }]
});

const Firestation = mongoose.model("Firestation", firestationSchema);

module.exports = Firestation;
