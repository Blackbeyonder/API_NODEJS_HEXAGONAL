const UserRepository = require('../repositories/user_repository');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        try {
            return await this.userRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    // Otros métodos de servicio para realizar operaciones relacionadas con usuarios
}

module.exports = UserService;
