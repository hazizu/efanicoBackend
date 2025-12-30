const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/AuthMiddleware");
const reservationController = require("../controllers/ReservationController");

// faire une route pour ajouter une reservation
router.post("/", authMiddleware, reservationController.createReservation);

// ➤ Récupérer toutes les reservations
router.get("/", authMiddleware, reservationController.getAllReservations);

// ➤ Récupérer un reservation
router.get("/:id", authMiddleware, reservationController.getOneReservation);

// ➤ Récupérer les reservations d'un utilisateur
router.get("/user/:userId", authMiddleware, reservationController.getReservationsByClient);

// ➤ Modifier un reservation
router.put("/:id", authMiddleware, reservationController.updateReservation);

// ➤ Supprimer un reservation
router.delete("/:id", authMiddleware, reservationController.deleteReservation);

module.exports = router;