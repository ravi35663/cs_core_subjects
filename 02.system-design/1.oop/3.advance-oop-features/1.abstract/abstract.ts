/*
=> What is abstraction?
    -   Abstraction means showing only the essential details and hiding the 
        unnecessary complexity.
    -   Abstraction can be implemented using 'abstract' keyword or 'interface' in 
        typescript. 
*/

export abstract class Animal {
    abstract sound(): void // Abstract method without implementation

    // Concrete method: implemented in the abstract class
    move():void{
        console.log("I can move")
    }

    static info() {
        console.log("All the animals has 4 legs");
    }
}

export class Dog extends Animal{
    // must provide implementation for the abstract method
    sound():void{
        console.log("Bark");
    }
}

const myDog:Animal = new Dog();
myDog.sound(); // Bark
myDog.move // I can move

const myNewDog:Dog = new Dog(); // 

/*
=> Abstract Classes & Methods:
    -   Abstract class can’t be instantiated; used as a base with shared 
        functionality
    -   Can have both implemented and abstract methods; child classes must 
        implement abstract ones

=> Abstract Methods:
    ->  These are methods declared inside an abstract class without any 
        implementation.
    ->  Derived classes must provide the implementation for these abstract methods.
    ->  Abstract methods are like a contract that any subclass must follow.
*/
/*
=> Key Points:
    Abstract Class :-
        ->  Cannot be instantiated.
        ->  Can have both abstract (without implementation) and non-abstract 
            (implemented) methods.
    
    Abstract Method :-
        ->  Declared without implementation in the abstract class.
        ->  Must be implemented by any class that extends the abstract class.

    Concrete Methods in Abstract Class :-
        ->  Can be implemented normally in the abstract class and inherited by 
            subclasses.
*/
/*  Example with Multiple Abstract Methods: */ 
abstract class Vehicle{
    abstract startEngine(): void;
    abstract stopEngine(): void;

    wheels: number = 4;    // concrete variable
    abstract brand: string; // abstract variable

    // Concrete method
    fuelType(): string{
        return 'Diesel'
    }
}

class Car extends Vehicle{
    brand: string;
    startEngine(): void {
        console.log("Car engine started")
    }

    stopEngine(): void {
        console.log("Car engine stopped");
    }
}

const car = new Car();
console.log(car.fuelType()); // Diesel
car.startEngine() // Car engine started
car.stopEngine() // Car engine stopped


/*
=> Key Benefits:
    ->  Abstract classes provide a structured way to define a base class with 
        certain methods that must be implemented by subclasses.
    ->  You can include some shared functionality directly in the abstract class 
        (like the move() method in the Animal class).
*/
/*
=> Why do we use abstraction?
    1) Reduce complexity
    2) Hide unnecessary details
    3) Make code easier to use
    4) Improve maintainability
    5) Focus only on what matters
*/
/*
=>  Note : We can implements abstraction in 2 ways
    1)  using 'abstract'
    2)  using interface:
        ->  Interfaces can only define method signatures, not implementations.
        ->  If you need concrete methods, use an abstract class.
*/
// Abstraction using interfaces:
interface Person{
    walk():void;
    talk(sentence:string):string;
}

class Doctor implements Person{
    walk(): void {
        console.log("A doctor can walk")
    }
    talk(): string {
        console.log("A doctor can talk")
        return "A doctor can talk"
    }
}
const doctor = new Doctor();
/*
=> Can an abstract class extends another abstract class?
    ->  Yes — an abstract class can extend another abstract class in TypeScript.
    ->  Both parent abstract classes and child abstract classes can have concrete 
        methods.
*/

abstract class Flat{
    abstract type():string;
}

abstract class Resort extends Flat{
    abstract location():string
}

/*
=> Can we have constructor class in abstract class?
    ->  Yes — an abstract class can have a constructor in TypeScript.
    ->  You can’t instantiate the abstract class
    ->  But child classes can call its constructor using super()

=> Use of constructor in an abstract class:
    ->  To initialize common properties that every child class should inherit.
    ->  Sets common data
    ->  Avoids repeating code in every child class
    ->  Helps structure shared logic
*/
abstract class Watch {
    constructor(public brand: string) {} // common initialization
  }
  
  class DigitalWatch extends Watch {
    constructor() {
      super("Apple"); // uses parent constructor
    }
}