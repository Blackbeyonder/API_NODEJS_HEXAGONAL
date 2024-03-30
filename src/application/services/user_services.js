// src/application/services/user_service.js

class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
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
  