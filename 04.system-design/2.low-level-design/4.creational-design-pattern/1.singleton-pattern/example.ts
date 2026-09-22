/*
    SINGLETON PATTERN - Database Connection

    Goal:
    - The application should have only ONE database connection manager.
    - Every service that needs the DB gets the same instance.

    Why?
    - Avoid creating multiple connection managers.
    - Centralize DB configuration/connection state.
    - Provide a single access point.
*/

class Database{
    private static instance: Database | null = null;

    private constructor(){ // private means, the class only instantiated inside the class only
        console.log("Database instance is created")
    }
    static getDbInstance(): Database{
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect():void{
        console.log("Database connected");
    }

    query(sql: string):void{
        console.log("Executing the query: ",sql);
    }

}
// Service 1:
class UserService{
    private db: Database.getDbInstance();

    getUser():void{
        this.db.query("SELECT * FROM users");
    }
}

// Service 2:
class OrderService{
    private db: Database = Database.getDbInstance();

    getOrders():void{
        this.db.query("SELECT * FROM orders");
    }
}


// Application
const userService = new UserService();
const orderService = new OrderService();

userService.getUser();
orderService.getOrders();


// Both services use the SAME Database instance
console.log(
    Database.getDbInstance() === Database.getDbInstance()
); // true

/*
         Database
             │
        getInstance()
             │
    ┌────────┴────────┐
    │                 │
UserService       OrderService
    │                 │
    └───────┬─────────┘
            │
    Same DB instance
*/