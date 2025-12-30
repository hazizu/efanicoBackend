const Clothes = require("../models/Clothes");

// ➤ Ajouter une compétence
exports.createClothes = async (req, res) => {
  try {
    const clothes = await Clothes.create(req.body);
    res.status(201).json(clothes);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "cet vetement existe déjà !" });
    }
    res.status(500).json({ error: error.message });
  }
};



exports.getClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find(); // récupère toutes les compétences

    if (!clothes || clothes.length === 0) {
      return res.status(404).json({ message: "Aucune compétence trouvée" });
    }
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};