const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json({ status: 'success', data: result });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ status: 'success', data: user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register
};