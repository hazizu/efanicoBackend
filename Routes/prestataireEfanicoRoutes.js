const express = require("express");
const router = express.Router();

const prestataireEfanicoController = require("../controllers/PrestataireEfanicoController");
// ➤ Ajouter un prestataire
router.post("/", prestataireEfanicoController.createPrestataire);

// ➤ Récupérer tous les prestataires
router.get("/", prestataireEfanicoController.getAllPrestataires);

// ➤ Récupérer un prestataire
router.get("/:id", prestataireEfanicoController.getOnePrestataire);

// ➤ Modifier un prestataire
router.put("/:id", prestataireEfanicoController.updatePrestataire);

// ➤ Supprimer un prestataire
router.delete("/:id", prestataireEfanicoController.deletePrestataire);

module.exports = router;