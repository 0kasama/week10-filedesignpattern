const express = require("express");
const movieRoute = require("./movieRoute.js");
const userRoute = require("./userRoute.js");
const router = express.Router();
const path = require("path");

router.use("/user", userRoute);
router.use("/movie", movieRoute);
router.use("/uploads", express.static(path.join(__dirname, "../uploads")))

module.exports = router;
