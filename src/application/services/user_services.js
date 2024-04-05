// src/application/services/user_service.js
//!Solo sirve para llamar al metodo que le corresponde en DOMAIN 
// src/application/services/UserService.js
const UserRepository = require('../../domain/repositories/user_repository');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        try {
            return await this.userRepository.getAll();
        } catch (error) {
            throw new Error('Error fetching users: ' + error.message);
        }
    }

    // Otros métodos para crear, actualizar y eliminar usuarios
}

module.exports = UserService;
