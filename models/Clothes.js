const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
    libelle: { type: String, required: true, undefined: true },
    type: { type: String, required: true },
})

module.exports = mongoose.model("ClotheFanico", clothesSchema);