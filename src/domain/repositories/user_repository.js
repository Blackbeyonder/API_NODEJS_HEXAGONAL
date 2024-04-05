//Solo funciona para tener de referencia los metodos que se van a usar en infrasture/repositories
class UserRepository {
    async getAll() {}
    async getById(userId) {}
    async create(user) {}
    async update(userId, userData) {}
    async delete(userId) {}
}

module.exports = UserRepository;
