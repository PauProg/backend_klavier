const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  // 1. Extraemos la contraseña y el resto de los datos en texto plano
  const { password, ...otherData } = userData;

  if (!password || password.length < 12) {
    const error = new Error('Debe haber una contraseña de 12 carácteres como mínimo.');
    error.statusCode = 422;
    throw error;
  }

  // 2. Definimos el coste de salt (rondas)
  const saltRounds = 10;

  // 3. Generamos el hash de la contraseña
  const generatedPasswordHash = await bcrypt.hash(password, saltRounds);

  // 4. Creamos el usuario con el passwordHash en vez del texto plano
  const newUser = new User({
    ...otherData,
    passwordHash: generatedPasswordHash
  });

  const savedUser = await newUser.save();
  const userObject = savedUser.toObject();
  const { passwordHash, ...userWOHash } = userObject;

  return userWOHash;
};

const getAllUsers = async (queryParams) => {
  const { active, name, sort, page = 1, limit = 10 } = queryParams;

  const filter = {};

  if (active !== undefined) {
    filter.active = active === 'true';
  }

  if (name) {
    filter.name = { $regex: name, $options: 'i' };
  }

  const pageNum = Math.max(1, parseInt(page, 10));
  const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10)));
  const skip = (pageNum - 1) * limitNum;

  // Recordatorio: nunca exponemos el passwordHash en las consultas
  let query = User.find(filter).select('-passwordHash').skip(skip).limit(limitNum);

  if (sort) {
    const sortCriteria = sort.split(',').join(' ');
    query = query.sort(sortCriteria);
  }

  const users = await query;
  const total = await User.countDocuments(filter);

  return {
    data: users,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages: Math.ceil(total / limitNum)
    }
  };
};

const getUserById = async (id) => {
  return await User.findById(id).select('-passwordHash');
};

const updateUser = async (id, updateData) => {
  // 1. Comprobamos si el usuario actualiza su contraseña
  if (updateData.password) {
    const saltRounds = 10;
    // Hasheamos la nueva contraseña
    updateData.passwordHash = await bcrypt.hash(updateData.password, saltRounds);

    // Eliminar el campo 'password' en texto plano para que mongoose no lo guarde
    delete updateData.password;
  } else {
    // Si no mandan contraseña, nos aseguramos de borrar passwordHash de los datos
    // a actualizar para evitar sobreescribir el hash actual con undefined o vacíos.
    delete updateData.passwordHash;
  }

  // 2. Ejecutamos la actualización
  return await User.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true }
  ).select('-passwordHash');
};

const deactivateUser = async (id) => {
  return await User.findByIdAndUpdate(
    id,
    { active: false },
    { new: true }
  ).select('-passwordHash');
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser
};