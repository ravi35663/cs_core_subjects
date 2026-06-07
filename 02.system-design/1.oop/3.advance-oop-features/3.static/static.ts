/*
=> Static Properties and Methods:
    -  Tied to the class itself, not objects; used without creating an instance
    -  Ideal for shared data or logic common to all objects of the class
    -  Useful for utility functions, constants, or counters.
    -  They are accessed directly via the class name, not via instances.
    -  Shared by all instances of the class.
*/

class Calculator{
    // Static property

    static PI:number = 3.14

    // Static method
    static add(a:number,b:number):number{
        return a+b;
    }

    // Non-static method
    multiply(a:number,b:number):number{
        return a*b;
    }
}

const cal = new Calculator();

// Accessing static properties and methods
console.log(Calculator.PI); // 
console.log(Calculator.add(5, 10)); // Output: 15

// Non-static method requires an instance
const calc = new Calculator();
console.log(calc.multiply(5, 10)); // Output: 50
  
// Example with a Static Counter:
class User{
    static count:number  = 0;
    constructor(public name:string){
        User.count++ // whenever a new instance is created of User class, count will incremented:
    }

    static getUserCount():number{
        return User.count;
    }
}

const user1 = new User('Ravi');
const user2 = new User('Amit');
console.log(User.count); // 2

/*
=> Static Block in TypeScript:
    ->  A static block is used to run one-time initialization code for a class, and 
        it runs when the class is loaded, not when an object is created.

=> Why static block is used?
    ->  To initialize static variables
    ->  To run setup logic only once
    ->  To avoid putting complex logic directly in static properties
*/
class Config{
    static env:string;
    static{
        Config.env = 'development';
        console.log("environment variable is: ",Config.env);
    }
}
//This runs once, even if no object is created.
/*
=> Important points about static block
    1) Runs only once
    2) Belongs to the class, not objects
    3) Executes before any static method is used
    4) Cannot access non-static members
    5) You can create multiple static block and their execution is from top to bottom.
*/
/*
=> Note:
    1)  A static method cannot trigger/access non-static methods
    2)  A non static method can trigger/access static methods.
*/
class Logger{
    static log(message:string):void{
        console.log(message);
    }
    // Legal
    print():void{
        Logger.log("Hello World, This is Ravi");
    }
    // Illegal
    // print():void{
    //     log("Hello World, This is Ravi");
    // }
}

/*
=> Advantages of static in TypeScript:
    1)  No object needed:
        ->  Static members can be used without creating an instance.

    2)  Shared across all objects
        ->  One copy exists for the entire class.

    3) Utility/helper methods
        ->  Perfect for functions like Math.max(), Logger.log().

    4) Better memory usage
        ->  Not duplicated for every object.

    5) Clear separation of responsibility
        ->  Class-level logic stays separate from object-level logic.
*/
/*
Key Uses:
    1) Utility methods: Functions that don't require an instance (e.g., Math.random()).
    1) Shared constants or values: Like the PI value in the Calculator example.
    3) Tracking data: For instance, keeping track of the number of objects created.
*/