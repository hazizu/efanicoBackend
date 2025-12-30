const CompetencesEfanico = require("../models/CompetencesEfanico");
// ➤ Ajouter une compétence
exports.createCompetence = async (req, res) => {
  try {
    const competence = await CompetencesEfanico.create(req.body);
    res.status(201).json(competence);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "cette compétence existe déjà !" });
    }
    res.status(500).json({ error: error.message });
  }
};



exports.getCompetences = async (req, res) => {
  try {
    const competences = await CompetencesEfanico.find(); // récupère toutes les compétences

    if (!competences || competences.length === 0) {
      return res.status(404).json({ message: "Aucune compétence trouvée" });
    }
    res.status(200).json(competences);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};