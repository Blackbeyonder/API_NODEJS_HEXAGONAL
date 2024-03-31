//Solo funciona para tener de referencia los metodos que se van a usar en infrasture/repositories
class UserRepository {
    async getAllUsers() {
        throw new Error('getAllUsers method must be implemented');
    }

    async createUser(userData) {
        throw new Error('createUser method must be implemented');
    }

    // Otros métodos como getUserById, updateUser, deleteUser, etc.
}

