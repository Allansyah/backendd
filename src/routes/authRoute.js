const express = require("express");
const authController = require("../controllers/authController");
const upload = require("../middleware/uploads/upload");

const router = express.Router();

router.post("/login", upload.none(), authController.loginUser);

module.exports = router;
