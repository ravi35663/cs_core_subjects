/*
==> Liskov Substitution Principle (LSP):
    ->  A child class should be replaceable for its parent without breaking behavior.
*/

class Bird{
    fly(){
        console.log("Bird can fly");
    }
}
// Violation
class Penguin extends Bird{
    fly(): void {
        throw new Error("Can't fly");
    }
}
const penguin: Bird = new Penguin();
penguin.fly() // Here penguin is substituting the parent class Bird but breaking the behavior or Bird class which is fly.


// Good example of Liskov Substitution Principle:
class Sparrow extends Bird{
    //You may or may not implement this method
    fly(): void {
        console.log("Sparrow  can fly:")
    }
}
const sparrow:Bird = new Sparrow();
sparrow.fly()// Here child Sparrow is replaceable for Bird (Parent class)
// Here sparrow is child is replaceable by Bird and also not breaking the parent class behavior which is fly.


// Correct way to make this work with LSP:
class BirdClass{
    eat(){
        console.log("Bird can eat");
    }
}

interface Flyable{
    fly():void;
}

class SparrowClass extends Bird implements Flyable{
    fly(): void {
        // here fly is substituted without breaking the behavior
        console.log("Sparrow can fly")
    }
}

class PenguinClass extends Bird{
    
}