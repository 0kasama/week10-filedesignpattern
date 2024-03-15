const express = require("express");
const movieRoute = require("./movieRoute.js");
const userRoute = require("./userRoute.js");
const router = express.Router();

router.use("/user", userRoute);
router.use("/movie", movieRoute);

module.exports = router;
