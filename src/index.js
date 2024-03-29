// Importar Express
const express = require('express');
const serverConfig = require('../config/server');

// Crear una instancia de la aplicación Express
const app = express();

// Escuchar en un puerto específico
const PORT = process.env.PORT || serverConfig.port;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Definir una ruta para la raíz de la API
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! qlo2');
});

// Definir una ruta para un endpoint específico
app.get('/saludo', (req, res) => {
  res.send('¡Hola! ¿Cómo estás?');
});
