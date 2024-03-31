const UserRepository = require('../../infrastructure/repositories/user_repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
  
    async getAllUsers() {
      return await this.userRepository.getAll();
    }
  
    async createUser(userData) {
      return await this.userRepository.create(userData);
    }
  
    // Otros métodos para actualizar, eliminar usuarios, etc.
  }
  
  module.exports = UserService;