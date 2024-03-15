const MovieService = require("../services/movieService.js");

class MovieController {
  static getMovies = async (req, res, next) => {
    try {
      const data = await MovieService.getMovies(next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await MovieService.getMovieById(id, next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static postMovie = async (req, res, next) => {
    try {
      const data = await MovieService.postMovie(req.body, next);
      res.status(201).json({ message: "New Movie Added", data });
    } catch (error) {
      next(error);
    }
  };

  static putMovie = async (req, res, next) => {
    try {
      const data = await MovieService.putMovie(req.body, req.params, next);
      res.status(200).json({ message: "Movie Updated", data });
    } catch (error) {
      next(error);
    }
  };

  static uploads = async (req, res, next) => {
    try {
      const url = await MovieService.uploads(req.file);

      res.status(201).json({
        message: "Upload Success",
        image_url: url,
      });
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieService.deleteMovie(id, next);

      res.status(200).json({ message: `Deleted movie with id : ${id}`, data });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieController;
