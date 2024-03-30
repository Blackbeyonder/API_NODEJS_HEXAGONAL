// src/domain/repositories/user_repository.js

class UserRepository {
    constructor(pool) {
      this.pool = pool;
    }
  
    async getAll() {
      try {
        const connection = await this.pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        return rows;
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
  