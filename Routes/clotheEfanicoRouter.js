const express = require("express");
const router = express.Router();

const clotheEfanicoController = require("../controllers/ClothesEfanicoController");
// ➤ Ajouter une compétence
router.post("/", clotheEfanicoController.createClothes);

// ➤ Récupérer toutes les compétences  
router.get("/", clotheEfanicoController.getClothes);

module.exports = router;