const mongoose = require("mongoose"); // importamos mongoose

// Creamos la función connectDB de manera asíncrona
const connectDB = async () => {

  // try catch por si hay errores en la conexión
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connectat correctament");
  } catch (err) {
    console.log(err.message);
    // Paramos todo el proceso con código 1 (mal)
    process.exit(1);
  }
};

// Exportamos la función como un módulo
module.exports = connectDB;
