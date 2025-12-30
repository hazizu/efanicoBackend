const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/AuthMiddleware");

const userController = require("../controllers/UserController");

router.get("/", authMiddleware ,userController.getAllUsers);
router.get("/:id", authMiddleware,userController.getOneUser);

module.exports = router;