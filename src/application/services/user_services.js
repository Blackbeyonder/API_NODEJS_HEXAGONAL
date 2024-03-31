// src/application/services/user_service.js
const DomainUserService = require('../../domain/services/user_services'); // Importa el servicio de dominio de usuarios

class UserService {
    constructor() {
      this.domainUserService = new DomainUserService();
    }
  
    async getAllUsers() {
      try {
        // Llama al método correspondiente en el servicio de dominio de usuarios para obtener todos los usuarios
        const users = await this.domainUserService.getAllUsers();
        return users;
      } catch (error) {
        throw error;
      }
    }
  
    async createUser(userData) {
      return await this.userRepository.create(userData);
    }
  
    // Otros métodos para actualizar, eliminar usuarios, etc.
  }
  
  module.exports = UserService;
  