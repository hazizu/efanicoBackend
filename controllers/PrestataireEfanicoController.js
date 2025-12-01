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
