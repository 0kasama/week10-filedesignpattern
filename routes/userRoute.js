const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userCtrl.js");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.postUser);
router.put("/:id", UserController.putUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
