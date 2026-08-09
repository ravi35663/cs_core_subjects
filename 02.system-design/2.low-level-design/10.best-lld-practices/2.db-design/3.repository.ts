/*
=>  What is Repository:
    -   A repository is a domain centric abstraction that manages aggregates - not just one table, but 
        related data grouped logically.
    -   Purpose:
        -   Encapsulate complex joins and business rules
        -   Provides high level, intent based API (Not Just CRUD)
    -   Don't let services do SQL joins, Repositories should return fully populated models or DTOs.

*/

interface UserWithOrders {
    id: string;
    name: string;
    email: string;
    orders: {
        id: string;
        total: number;
    }[];
}

class UserRepository {

    // 1. Find user with related orders
    async findUserWithOrders(
        userId: string
    ): Promise<UserWithOrders | null> {

        // Sequelize would perform the JOIN internally
        return User.findByPk(userId, {
            include: [Order]
        }) as Promise<UserWithOrders | null>;
    }

    // 2. Find users who have placed orders
    async findActiveCustomers(): Promise<User[]> {

        return User.findAll({
            include: [
                {
                    model: Order,
                    required: true
                }
            ]
        });
    }

    // 3. Create user with initial order
    async createUserWithOrder(
        userData: {
            name: string;
            email: string;
        },
        orderData: {
            total: number;
        }
    ) {

        // In real application this would use a transaction
        const user = await User.create(userData);

        await Order.create({
            ...orderData,
            userId: user.id
        });

        return this.findUserWithOrders(user.id);
    }
}
const repository = new UserRepository()
repository.findUserWithOrders(userId);

repository.findActiveCustomers();

repository.createUserWithOrder(userData, orderData);

/*
=> DAO vs Repository:
    -   They're very similar, which is why you'll often see these terms used interchangeably.
    -
        | DAO                      | Repository                         |
        | ------------------------ | ---------------------------------- |
        | Focuses on data access   | Focuses on domain/application data |
        | Usually close to DB/ORM  | Usually higher-level abstraction   |
        | `findById()`, `insert()` | `findUserByEmail()`, `saveUser()`  |
        | DB-oriented              | Domain-oriented                    |
*/