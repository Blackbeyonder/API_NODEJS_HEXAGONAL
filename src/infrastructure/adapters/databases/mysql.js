// src/infrastructure/adapters/databases/mysql.js

const mysql = require('mysql');
const dbConfig = require('../../../../config/database'); // Importa la configuración de la base de datos

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
  host: dbConfig.db_host,
  user: dbConfig.db_user,
  password: dbConfig.db_password,
  database: dbConfig.db_name,
  port:dbConfig.db_port
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
