
const mongoose = require("mongoose");

const presataireEfanicoSchema = new mongoose.Schema({
  nom:{ type: String, required: true },
  prenom: { type: String, required: true },
  telephone: { type: String, required: true, unique: true },
  ville: { type: String, required: true },
  communeOrQuarter: { type: String, required: true },
  ServiceDescription: { type: String, required: true },
  competences: { type: [String], required: true },

    clothePrices: [{
    clotheId: { type: mongoose.Schema.Types.ObjectId, ref: "ClotheFanico", required: true },
    unitClothePrice: { type: Number, required: true }
  }],
  fouchetteMin: { type: Number, required: true },
  fouchetteMax: { type: Number, required: true },
  availableDays: { type: [String], required: true },
});

module.exports = mongoose.model("Prestatairefanico", presataireEfanicoSchema);
 