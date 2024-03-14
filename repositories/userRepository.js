const UserModel = require("../models/userModel.js");

class UserRepository {
  static getUsers = (next) => {
    try {
      return UserModel.getUsers(next);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = (id, next) => {
    try {
      return UserModel.getUserById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static postUser = (body, next) => {
    try {
      return UserModel.postUser(body, next);
    } catch (error) {
      next(error);
    }
  };

  static putUser = (body, params, next) => {
    try {
      return UserModel.putUser(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = (id, next) => {
    try {
      return UserModel.deleteUser(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserRepository;
