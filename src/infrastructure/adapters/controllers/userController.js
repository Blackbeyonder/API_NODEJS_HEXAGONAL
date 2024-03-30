// src/infrastructure/adapters/controllers/userController.js

const express = require('express');
const router = express.Router();
const pool = require('../databases/mysql');

// Endpoint para obtener todos los usuarios
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
      return;
    }
    res.json(results);
  });
});

module.exports = router;
