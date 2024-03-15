const MovieModel = require("../models/movieModel.js");

class MovieRepository {
  static getMovies = (next) => {
    try {
      return MovieModel.getMovies(next);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = (id, next) => {
    try {
      return MovieModel.getMovieById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static postMovie = (body, next) => {
    try {
      return MovieModel.postMovie(body, next);
    } catch (error) {
      next(error);
    }
  };

  static putMovie = (body, params, next) => {
    try {
      return MovieModel.putMovie(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static upload = async (id, fileName, next) => {
    try {
      return await MovieModel.upload(id, fileName, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = (id, next) => {
    try {
      return MovieModel.deleteMovie(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieRepository;
