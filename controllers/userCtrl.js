const UserService = require("../services/userService.js");

class UserController {
  static getUsers = async (req, res, next) => {
    try {
      const data = await UserService.getUsers(next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UserService.getUserById(id, next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static postUser = async (req, res, next) => {
    try {
      const data = await UserService.postUser(req.body, next);
      res.status(201).json({ message: "New User Added", data });
    } catch (error) {
      next(error);
    }
  };

  static putUser = async (req, res, next) => {
    try {
      const data = await UserService.putUser(req.body, req.params, next);
      res.status(200).json({ message: "User Updated", data });
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UserService.deleteUser(id, next);

      res.status(200).json({ message: `Deleted user with id : ${id}`, data });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
