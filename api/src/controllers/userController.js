const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status: "success", data: user });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers(req.query);
    res.status(200).json({
      status: 'success',
      data: result.data,
      pagination: result.pagination
    });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    // esto coge lo que viene en la url, concretamente el id
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      const error = new Error("No existe ningún usuario con ese id");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);

    if (!user) {
      const error = new Error("No existe ningún usuario con ese id");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    next(err);
  }
};

const deactivateUser = async (req, res, next) => {
  try {
    const deactivatedUser = await userService.deactivateUser(req.params.id);

    if (!deactivatedUser) {
      const error = new Error("No existe ningún usuario con ese id");
      error.statusCode = 404;
      throw error;
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
};
