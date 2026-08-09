/*
=>  Types of Dependency Injection:
    -   There are mainly three types:
        1) Constructor Injection:
        2) Setter Injection
        3) Property Injection/ Interface Injections
*/

/*
1) Constructor Injection (Most common)
    -   Immutable dependencies
    -   Test Friendly
    -   Enforces required dependencies
*/
// Example:
class Database {
    findAll() {}
}

class UserService {
    constructor(private db: Database) {}

    getUsers() {
        return this.db.findAll();
    }
}

const db = new Database();
const service = new UserService(db);


/*
2)  Setter Injection:
    -   Mutable
    -   Can be misused by not calling setter
    -   Dependency is set later.
    -   Useful when dependency is optional or may change.
*/
class UserService2{
    private db!: Database;

    setDatabase(db:Database){
        this.db = db
    }
    getUsers(){
        return this.db.findAll()
    }
}
const service2 = new UserService2();
service2.setDatabase(new Database());

/*
3) Interface Injection:
    -   Rarely used
    -   Dependency is assigned directly to a property.
    -   Not commonly used because the dependency can be forgotten, leading to runtime errors.
*/
class UserService3 {
    db!: Database;

    getUsers() {
        return this.db.findAll();
    }
}

const service3 = new UserService3();
service3.db = new Database();