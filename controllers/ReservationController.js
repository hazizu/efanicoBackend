const Reservation = require("../models/Reservation");

// ➤ Ajouter un reservation
exports.createReservation = async (req, res) => {
  try {

    const reservationData = {
      ...req.body,
      client: req.userId  // ajouter userId dans req
    };
    const reservation = await Reservation.create(reservationData);
    
    res.status(201).json(reservation);

  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// ➤ Récupérer toutes les reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
     .populate([    
    {
      path:"client",
      select:"_id fullName phone"
    },
    {
        path:"prestataire",
        select:"_id nom prenom telephone ville communeOrQuarter"
    },
    {
      path:"pressing",
      select:"_id pressingName telephone ville communeOrQuarter "
    },
    {
        path:"clothesList.clotheId",
        select:"_id libelle type"
    }]
)
    res.status(200).json(reservations);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// ➤ Récupérer un reservation
exports.getOneReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
// ➤ Récupérer les reservations d'un utilisateur
exports.getReservationsByClient = async (req, res) => {
  try {
    const userId = req.userId; // ou req.userId si connecté
    const reservations = await Reservation.find({ client: userId })
      .populate([
        { path: "client", select: "_id fullName phone" },
        { path: "prestataire", select: "_id nom prenom telephone ville communeOrQuarter" },
        { path: "pressing", select: "_id pressingName telephone ville communeOrQuarter" },
        { path: "clothesList.clotheId", select: "_id libelle type" }
      ]);

    res.status(200).json(reservations);

  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// ➤ Modifier un reservation
exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// ➤ Supprimer un reservation
exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
