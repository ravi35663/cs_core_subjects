/*
=> DAO (Data Access Object):
    -   A DAO is a class that provides basic CRUD operations for a single entity/table.
    -   Instead of your business logic directly talking to PostgreSQL/Sequelize:
    -   Wrong: Service → Sequelize → Database
    -   Right:  Service → DAO → Sequelize → Database
    -   DAO does not support fetching related transactions or requests.
    -   Purpose:
        -   encapsulates new database access logic
        -   Keeps Services clean from SQL/ORM clutter
        -   Encourage separation of concern.
*/

// Example of DAO:
class UserDAO {
    async findById(id: string) {
        return User.findByPk(id);
    }

    async create(data: {
        email: string;
        password: string;
    }) {
        return User.create(data);
    }
}
// Usage:
class UserService {
    constructor(private userDAO: UserDAO) {}

    async getUser(id: string) {
        return this.userDAO.findById(id);
    }
}