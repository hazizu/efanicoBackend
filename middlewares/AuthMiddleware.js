const jwt = require("jsonwebtoken");
const JWT_SECRET = "TA_CLE_SECRETE_A_CHANGER";

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Token manquant" });

    const decoded = jwt.verify(token, JWT_SECRET);
    
    // ajouter userId dans req
    req.userId = decoded.userId;
    next();

  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};