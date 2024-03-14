const UserRepository = require("../repositories/userRepository.js");

class UserService {
  static getUsers = (next) => {
    try {
      return UserRepository.getUsers(next);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = (id, next) => {
    try {
      return UserRepository.getUserById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static postUser = (body, next) => {
    try {
      return UserRepository.postUser(body, next);
    } catch (error) {
      next(error);
    }
  };

  static putUser = (body, params, next) => {
    try {
      return UserRepository.putUser(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = (id, next) => {
    try {
      return UserRepository.deleteUser(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserService;
