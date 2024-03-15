const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieCtrl.js");

router.get("/", MovieController.getMovies);
router.get("/:id", MovieController.getMovieById);
router.post("/", MovieController.postMovie);
router.put("/:id", MovieController.putMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;