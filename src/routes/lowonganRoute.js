const express = require("express");
const LowonganController = require("../controllers/lowonganController");
const router = express.Router();

const lowonganSchema = require("../middleware/validator/lowonganSchema");
const validate = require("../middleware/validator/validate");
const upload = require("../middleware/uploads/upload");

// const {
//   authenticateToken,
//   authorizationRole,
// } = require("../middleware/auth/auth");

// router.get("/lowonganm", LowonganController.getAllLowongan);

router.post(
  "/lowongan",
  upload.none(),
  validate(lowonganSchema.createLowonganSchema),
  LowonganController.createLowongan,
);

router.delete("/lowongan/:id", LowonganController.deleteUser);
// router.get("/user/:id", UserController.getUserById);
// router.put("/user/:id", UserController.updateUser);
// router.delete("/user/:id", UserController.deleteUser);
// router.patch("/user/:id", upload.single("images"), UserController.uploadImage);

// router.post(
//   "/lowongan",
//   validate(lowonganSchema.createLowonganSchema),
//   LowonganController.createLowongan,
// );

router.get("/lowongan", LowonganController.getAllLowongan);
router.get("/", (req, res) => {
  res.send("Hello from Lowongan Route");
});
router.post("/lowongan", upload.none(), LowonganController.createLowongan);
router.get("/lowongan", upload.none(), LowonganController.createLowongan);
// router.get("/lowongan/:id", upload.none(), LowonganController.updatelowongan);

router.put("/lowongan/:id", upload.none(), LowonganController.updatelowongan);

module.exports = router;
