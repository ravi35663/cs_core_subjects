/*
=> Dependencies Inversion Principle (DIP):
   ->   High-level modules should not depend on low-level modules. Both should depend 
        on abstractions.
    ->  Abstractions should not depend on details. Details should depend on 
        abstractions.
    ->  High Level modules are interfaces and abstract classes.
*/
// Bad Design (DIP Violation)
// Low-level class (detail)
class MySqlDatabase{
    connect(){
        console.log("Connected to MySQL");
    }
}
// Here problem is what if multiple DB introduced? then this will fails
// High-level class (business logic):
class UserServiceClass{
    private db = new MySqlDatabase(); // ❌ tightly coupled
    saveUser(){
        this.db.connect();
        console.log("User Saved");
    }
}

/*
=> Why this breaks DIP?
    ->  UserService depends on a concrete class
    ->  Switching DB ⇒ rewrite UserService
    ->  Hard to test (no mocking)
    ->  Tight coupling = fragile system
*/

//Good Design (DIP Applied):
// Create an abstraction (interface)
// High level module.
interface Database{
    connect():void;
}

//Low-level modules depend on abstraction
// This is low level module
class MySqlDatabaseClass implements Database{
    connect(): void {
        console.log("Connected to MySql");
    }
}

// This is low level module
class MongoDatabase implements Database{
    connect(): void {
        console.log("Connected to MongoDB");
    }
}

// High-level module depends on abstraction:
class UserServiceClassTwo{
    // This user service is not aware which database you're using.
    constructor(private db:Database){}
    saveUser(){
        this.db.connect();
        console.log("User saved");
    }
}

// Dependency Injection (composition root)
const db = new MySqlDatabaseClass(); // or MongoDatabase
const userService = new UserServiceClassTwo(db);
userService.saveUser();

/*
=> Real-world analogy
    =>  Electric switch 
        ->  Switch doesn’t care which bulb
        ->  Bulbs follow the socket standard
        ->  You can replace bulb without touching the switch
*/
/*
=> Without DIP: UserService → MySQLDatabase
=> With DIP:
    UserService → Database <-   MySQLDatabase
                                MongoDatabase
                                Postgresql
*/