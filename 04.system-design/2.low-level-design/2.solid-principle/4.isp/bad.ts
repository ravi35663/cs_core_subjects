/*
=> Bad Example (Violates ISP)
*/
abstract class Animal {

  abstract eat(): void;

  abstract fly(): void;
}

class Dog extends Animal {

  eat(): void {
    console.log("Dog eats");
  }

  fly(): void {
      // Dog can't fly, but is forced to implement the method
      throw new Error("Dogs can't fly!");
  }
}

class Bird extends Animal {

  eat(): void {
      console.log("Bird eats");
  }

  fly(): void {
    console.log("Bird flies");
  }
}


// Usage:
const dog = new Dog();

dog.eat(); // Dog eats
dog.fly(); //  Runtime Error: Dogs can't fly!

/*
=> Problems:
    1)  The Dog class is forced to implement the fly method even though it doesn't make sense for dogs to 
        fly unless it is super dog(xD).
        
    2)  Violates ISP by having a large, generalized interface (Animal) with irrelevant methods for some 
        subclasses.
*/