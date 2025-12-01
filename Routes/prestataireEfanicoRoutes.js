const express = require("express");
const router = express.Router();

const prestataireEfanicoController = require("../controllers/PrestataireEfanicoController");
// ➤ Ajouter un prestataire
router.post("/", prestataireEfanicoController.createPrestataire);

module.exports = router;