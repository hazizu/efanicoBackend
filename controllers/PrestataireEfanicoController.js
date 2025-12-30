const PrestataireEfanico = require("../models/PrestataireEfanico");
// ➤ Ajouter un prestataire
exports.createPrestataire = async (req, res) => {
  try {
    const prestataire = await PrestataireEfanico.create(req.body);
    res.json(prestataire);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Le numéro existe déjà !" });
    }
    res.status(500).json({ error: error.message });
  }
};

// ➤ Récupérer tous les prestataires
exports.getAllPrestataires = async (req, res) => {
  try {
    const prestataires = await PrestataireEfanico.find()
    .populate({
      path:"clothePrices.clotheId",
      select:"_id libelle type"
    })
    res.json(prestataires);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Récupérer un prestataire
exports.getOnePrestataire = async (req, res) => {
  try {
    const prestataire = await PrestataireEfanico.findById(req.params.id)
      .populate({
      path:"clothePrices.clotheId",
      select:"_id libelle type"
    })
    res.json(prestataire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Modifier un prestataire
exports.updatePrestataire = async (req, res) => {
  try {
    const prestataire = await PrestataireEfanico.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(prestataire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Supprimer un prestataire
exports.deletePrestataire = async (req, res) => {
  try {
    const prestataire = await PrestataireEfanico.findByIdAndDelete(req.params.id);
    res.json(prestataire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};