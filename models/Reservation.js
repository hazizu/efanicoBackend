const mongoose = require("mongoose");


const clothesSchema = new mongoose.Schema({
  clotheId: { type: mongoose.Schema.Types.ObjectId, ref: "ClotheFanico", required: true },
  totalClothe: { type: Number, required: true },
  pricePerClothe: { type: Number, required: true },
  totalPriceClothe: { type: Number} // sera calculé automatiquement
});

const reservationSchema = new mongoose.Schema({
  client : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  prestataire: { type: mongoose.Schema.Types.ObjectId, ref: "Prestatairefanico" },
  pressing: { type: mongoose.Schema.Types.ObjectId, ref: "Pressingfanico" },
  clothesList:[clothesSchema],
});

// calul automatique totalPriceClothe 
reservationSchema.pre("save", function() {
  this.clothesList.forEach(item => {
    item.totalPriceClothe = item.totalClothe * item.pricePerClothe;
  });
});

module.exports = mongoose.model("Reservation", reservationSchema);


