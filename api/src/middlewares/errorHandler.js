const errorHandler = (err, req, res, next) => {
  console.error("❌ Error capturado:", err.message);

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Error interno del servidor';

  // Control de errores específicos de Mongoose
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  if (err.code === 11000) { // Error de duplicidad (ej. email ya registrado)
    statusCode = 409;
    message = `El valor introducido para '${Object.keys(err.keyValue)}' ya está registrado.`;
  }

  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Formato de ID inválido: ${err.value}`;
  }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};

module.exports = errorHandler;