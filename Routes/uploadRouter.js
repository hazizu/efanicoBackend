const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/UploadController");
const multer = require("multer");

// Multer configuration (diskStorage ou memoryStorage)
const storage = multer.diskStorage({});
const upload = multer({ storage: storage });

router.post("/upload/file", upload.single("file"), uploadController.uploadFile);

module.exports = router;