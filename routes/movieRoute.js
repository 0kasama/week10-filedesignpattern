const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieCtrl.js");
const multer = require("../middlewares/multer.js")

router.get("/", MovieController.getMovies);
router.get("/:id", MovieController.getMovieById);
router.post("/", MovieController.postMovie);
router.post("/upload", multer.single("image"), MovieController.uploads);
router.put("/:id", MovieController.putMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;