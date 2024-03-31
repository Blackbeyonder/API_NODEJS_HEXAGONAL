
//Aqui van todas las consultas a la base de datos
const User = require('../../domain/entities/User');
class UserRepository {
    constructor(pool) {
      this.pool = pool;
    }
  
    async getAll() {
      try {
        const connection = await this.pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        return rows.map(row => new User(row.id, row.name, row.lastname));;
      } catch (error) {
        throw error;
      }
    }
  
    async create(userData) {
      try {
        const connection = await this.pool.getConnection();
        const [result] = await connection.query('INSERT INTO users SET ?', userData);
        connection.release();
        return { id: result.insertId, ...userData };
      } catch (error) {
        throw error;
      }
    }
  
    // Otros métodos para actualizar, eliminar usuarios, etc.
  }
  
  module.exports = UserRepository;
  