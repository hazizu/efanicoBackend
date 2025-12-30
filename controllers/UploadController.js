// uploder un fichier

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkridp45u",
  api_key: "924782439312145",
  api_secret: "4it1NZQFJUeQPm5wGZR8QDquVso",
});

exports.uploadFile = async (req, res) => {
    try {
    if (!req.file) {
        console.log(req);
        
      return res.status(400).json({ message: "Aucun fichier reçu" });
    }

    // req.file.path contient le chemin local si diskStorage
    const filePath = req.file.path || req.file.buffer;

    // Upload vers Cloudinary
    const result = await cloudinary.uploader.upload(filePath);
    res.status(200).json({ logoUrl: result.secure_url });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }

}