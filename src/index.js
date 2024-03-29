// Importar Express

const express = require('express');
const serverConfig = require('../config/server');

// Crear una instancia de la aplicación Express
const app = express();

// const userController = require('./infrastructure/adapters/controllers/userController');
const userController = require('./infrastructure/adapters/controllers/userController');

// Escuchar en un puerto específico
const PORT =  serverConfig.port;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Definir una ruta para la raíz de la API
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! qlo2');
});

// Monta el controlador de usuarios en la ruta /api
app.use('/api', userController);