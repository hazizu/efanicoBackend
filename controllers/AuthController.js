const User = require("./../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "TA_CLE_SECRETE_A_CHANGER";

exports.register = async (req, res) => {
  try {
    const { fullName, phone, password } = req.body;

    // vérifier si email existe déjà
    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ message: "Ce est déjà utilisé" });

    // hash mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // créer user
    const user = new User({
      fullName,
      phone,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: "Utilisateur créé avec succès", data: user });

  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};


exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    // rechercher user
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ message: "Numéro de téléphone incorrect" });

    // comparer mdp
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    // générer token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Connexion réussie",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        phone: user.phone
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
