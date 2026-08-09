/*
=> Interface:
    ->  In Object-Oriented Programming, an interface is a contract that defines what 
        behaviors a class must provide, without defining how those behaviors are 
        implemented.
    ->  An interface specifies capabilities, not implementation.
    ->  It contains method signatures
    ->  No business logic
    ->  Classes implement interfaces
    ->  Interface is blueprint of a class.
*/
// Defining an interface
interface AnimalInterface {
    name: string;
    age: number;
    // Method signature: no implementation
    makeSound(): void;
}
// Class implementing the interface
class DogClass implements AnimalInterface {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Implementing the interface method
    makeSound(): void {
      console.log("Bark!");
    }
}
// Creating an instance
const myDog = new DogClass('Buddy', 3);
console.log(myDog.name); // Output: Buddy
myDog.makeSound();       // Output: Bark!
/*
    class with multiple interfaces:
*/

// Interface for flying behavior
interface CanFly {
    fly(): void;
}
// Interface for swimming behavior
interface CanSwim {
    swim(): void;
}

class Bird implements CanFly, CanSwim{
    swim(): void {
        console.log("Bird cannot swim")
    }
    fly(): void {
        console.log("Bird can fly")
    }
}

const b1 = new Bird();
b1.fly();
b1.swim()

/*
=> Can multiple interfaces extends other interfaces?
    ->  Yes, an interface can inherit rules from one or more interfaces.
    ->  This helps in reusing contracts and keeping design clean.
*/

interface A {
    a(): void;
}
  
interface B {
    b(): void;
}
  
interface C extends A, B {
    c(): void;
}
/*
=> Default and static methods in interfaces:
    ->  In TypeScript, interfaces cannot have default or static methods because 
        they only define contracts, not implementation or class-level behavior.
*/
/*
=> Why use interfaces?
    ->  Better structure:
    ->  Loose coupling: If you want you can implement otherwise you may not
    ->  Easy maintenance:
    ->  Cleaner design:
    ->  They make code flexible and easy to change
*/
/*
Key Benefits:
    1)  Separation of concerns: Different functionalities can be defined in 
        different interfaces, and classes can combine them as needed.
        
    2)  Flexibility: A class can implement multiple interfaces, allowing for more complex behavior.
*/