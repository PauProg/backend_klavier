const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(202).json({ status: 'success', data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };