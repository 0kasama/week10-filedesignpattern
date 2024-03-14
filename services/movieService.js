const MovieRepository = require("../repositories/movieRepository.js");

class MovieService {
  static getMovies = (next) => {
    try {
      return MovieRepository.getMovies(next);
    } catch (error) {
      next(error);
    }
  };

  static getMovieById = (id, next) => {
    try {
      return MovieRepository.getMovieById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static postMovie = (body, next) => {
    try {
      return MovieRepository.postMovie(body, next);
    } catch (error) {
      next(error);
    }
  };

  static putMovie = (body, params, next) => {
    try {
      return MovieRepository.putMovie(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteMovie = (id, next) => {
    try {
      return MovieRepository.deleteMovie(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieService;
