const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

const userSchema = require("../middleware/validator/userSchema");
const validate = require("../middleware/validator/validate");
const upload = require("../middleware/uploads/upload");

const {
  authenticateToken,
  authorizationRole,
} = require("../middleware/auth/auth");

router.get(
  "/user",
  authenticateToken,
  authorizationRole(["super admin", "admin"]),
  UserController.getAllUser,
);

router.post(
  "/user",
  upload.none(),
  validate(userSchema.createUserSchema),
  UserController.createUser,
);

router.get("/user/:id", UserController.getUserById);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);
router.patch("/user/:id", upload.single("images"), UserController.uploadImage);

module.exports = router;
