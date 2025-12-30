const PressingEfanico = require("../models/PressingEfanico");

// ➤ Ajouter un pressing
exports.createPressing = async (req, res) => {
  try {
    const pressing = await PressingEfanico.create(req.body);
    res.json(pressing);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Le numéro existe déjà !" });
    }
    res.status(500).json({ error: error.message });
  }
};

// ➤ Récupérer tous les presses
exports.getAllPressings = async (req, res) => {
  try {
    const pressings = await PressingEfanico.find()
    .populate({
      path:"clothePrices.clotheId",
      select:"_id libelle type"
    })
    res.json(pressings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Récupérer un presse
exports.getOnePressing = async (req, res) => {
  try {
    const pressing = await PressingEfanico.findById(req.params.id)
      .populate({
      path:"clothePrices.clotheId",
      select:"_id libelle type"
    })
    res.json(pressing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Modifier un presse
exports.updatePressing = async (req, res) => {
  try {
    const pressing = await PressingEfanico.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(pressing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Supprimer un presse
exports.deletePressing = async (req, res) => {
  try {
    const pressing = await PressingEfanico.findByIdAndDelete(req.params.id);
    res.json(pressing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};