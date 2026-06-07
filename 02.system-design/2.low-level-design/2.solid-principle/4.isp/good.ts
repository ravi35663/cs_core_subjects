/*
==> Good Example (Follows ISP)
    ->  Break the large interface into smaller, more specific interfaces.
*/
// In ts you can convert them into interfaces or abstraction(don't implements abstraction unless you have concrete methods)

interface Eatable {
  eat(): void;
}

interface Flyable {
  fly(): void;
}

class Dog implements Eatable {

  eat(): void {
    console.log("Dog eats");
  }

}

class Bird implements Eatable, Flyable {

  eat(): void {
    console.log("Bird eats");
  }

  fly(): void {
    console.log("Bird flies");
  }

}

const dog = new Dog();
dog.eat();     // Dog eats
// dog.fly();  ❌ Compile-time error (GOOD!)

const bird = new Bird();
bird.eat();    // Bird eats
bird.fly();    // Bird flies

/*
==> Advantages:
    1)  Classes implement only the methods they need.
    2)  Avoids unnecessary implementation of irrelevant methods, ensuring cleaner and more 
        maintainable code.

Note: By splitting the interface, both Dog and Bird can have behaviors appropriate to 
      their nature without being forced to implement unnecessary methods.
*/