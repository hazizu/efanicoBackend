const express = require("express");
const router = express.Router();

const pressingEfanicoController = require("../controllers/PressingEfanicoController");
// ➤ Ajouter un pressing
router.post("/", pressingEfanicoController.createPressing);

// ➤ Récupérer tous les presses
router.get("/", pressingEfanicoController.getAllPressings);

// ➤ Récupérer un presse
router.get("/:id", pressingEfanicoController.getOnePressing);

// ➤ Modifier un presse
router.put("/:id", pressingEfanicoController.updatePressing);

// ➤ Supprimer un presse
router.delete("/:id", pressingEfanicoController.deletePressing);

module.exports = router;
