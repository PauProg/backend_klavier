const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async ({ email, password }) => {
  if (!email || !password ) {
    const error = new Error('Introduce tu correo y contraseña');
    error.statusCode = 422;
    throw error;
  }

  const user = await User.findOne({ email });

  // existe y esta activo? si no => error 401 "Credenciales incorrectas"
  if (!user || !user.active) {
    const error = new Error('Credenciales inválidas');
    error.statusCode = 401;
    throw error;
  }

  const passwordOk = await bcrypt.compare(password, user.passwordHash);
  
  if (!passwordOk) {
    const error = new Error('Credenciales inválidas');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const {passwordHash, ...otherData} = user.toObject();

  return { token, user: otherData };
};

module.exports = { login };