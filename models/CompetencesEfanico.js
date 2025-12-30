const mongoose = require("mongoose");

const competencesEfanicoSchema = new mongoose.Schema({
  libelle: { type: String, required: true, unique: true },
 
});

module.exports = mongoose.model("Competencesfanico", competencesEfanicoSchema);