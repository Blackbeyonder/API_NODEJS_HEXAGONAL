// src/infrastructure/adapters/controllers/userController.js

const express = require('express');
const router = express.Router();
const pool = require('../databases/mysql');
const UserService = require('../../../application/services/user_services'); // Ruta al archivo del servicio de usuarios
const UserRepository = require('../../repositories/user_repository'); // Ruta al archivo del servicio de usuarios

const userRepository = new UserRepository(pool); // Crear una instancia del repositorio de usuarios
const userService = new UserService(userRepository); 

// Endpoint para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
