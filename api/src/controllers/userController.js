const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status: 'success', data: user });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ status: 'success', data: users });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún usuario con ese id' });
    }

    res.status(200).json({ status: 'success', data: user });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún usuario con ese id' });
    }

    res.status(200).json({ status: 'success', data: user });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ status: 'error', message: 'No existe ningún usuario con ese id' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}