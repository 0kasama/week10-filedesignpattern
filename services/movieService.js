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

  static uploads = async (file) => {
    try {
        if(file) {
            const url = `http://localhost:3000/uploads/${file.filename}`

            return url;
        } else {
            throw {name: "MissingFile"}
        }
    } catch(err) {
        throw err;
    }
}

  static deleteMovie = (id, next) => {
    try {
      return MovieRepository.deleteMovie(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieService;
