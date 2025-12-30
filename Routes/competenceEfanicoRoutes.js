const express = require("express");
const router = express.Router();

const competenceEfanicoController = require("../controllers/CompetenceEfanicoController");
// ➤ Ajouter une compétence
router.post("/", competenceEfanicoController.createCompetence);

// ➤ Récupérer toutes les compétences
router.get("/", competenceEfanicoController.getCompetences);

module.exports = router;