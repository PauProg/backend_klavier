// Importamos librerias
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Rutas
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');

// ErrorHandler
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('API Ecommerce en marcha 🚀'));
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando el puerto ${PORT}`));