
const mysql = require('mysql2');
const dbConfig = require('../../../../config/database'); // Importa la configuración de la base de datos

// Crea una conexión a la base de datos
const pool = mysql.createPool({
  host: dbConfig.db_host,
  user: dbConfig.db_user,
  password: dbConfig.db_password,
  database: dbConfig.db_name,
  port:dbConfig.db_port
});

// Obtiene una conexión del pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar al pool de conexiones:', err);
    return;
  }
  console.log('Conexión exitosa al pool de conexiones MySQL');
  connection.release(); // Libera la conexión al pool después de usarla
});

module.exports = pool.promise();
