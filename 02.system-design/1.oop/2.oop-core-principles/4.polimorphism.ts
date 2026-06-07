/*
=> Can a return type differentiate overloading? Not allowed

=> Can you override static method? 
  -  Not allowed because it does not belong to instance but class.

=> How to trigger static method from child class? 
  - Yes by  ClassName.method():
  - Example: Parent.print();
*/

/*
=> What is polymorphism?
  - Polymorphism means “many forms” — it allows different classes to define methods with 
    the same name but different behaviors, depending on which class is being used.

  - It’s a core OOP concept that enables flexibility and extensibility in your code.

=> Types of Polymorphism in TypeScript:
  1) Compile-time (Method Overloading) — simulated using function signatures.
  2) Runtime (Method Overriding) — achieved through class inheritance.
*/
/*
1. Method Overriding (Runtime Polymorphism):
  ->  Child classes override parent class methods to provide their own behavior.
*/
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows');
  }
}

function makeSound(animal: Animal) {
  animal.speak(); // Behavior depends on object type
}
makeSound(new Dog()); // 🐶 Dog barks
makeSound(new Cat()); // 🐱 Cat meows

/*
2. Method Overloading (Compile-time Polymorphism – Simulated):
  -> TypeScript supports function overload signatures (not true overloading like C++/Java).
*/
class Calculator {
  add(a: number, b: number): number; // signature
  add(a: string, b: string): string; // signature
  add(a: any, b: any): any { // general implementation
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));       // 5
console.log(calc.add('Hello ', 'TS')); // "Hello TS"

/*
                    Compile Time                        Runtime
Mechanism           method overloading                  method overriding
Determination       resolved at compile time            resolved at run time
Binding             Static binding                      Dynamic binding
Inheritance         not required                        required
*/