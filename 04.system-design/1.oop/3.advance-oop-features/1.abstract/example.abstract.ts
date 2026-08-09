/*
You are required to design a program that utilizes an abstract class Animal to serve as the foundation for specific animal classes. 
The objective is to demonstrate runtime polymorphism where derived classes override the behaviour of the abstract method makeSound(). 
The program should include:

An abstract class Animal :

Attributes :
name (string) : Represents the name of the animal.

Abstract Method :
makeSound() : To print the sound specific to the animal.

Derived Classes :
Dog class : Inherits class Animal and overrides the makeSound() method to print "Woof!".
Cat class : Inherits class Animal and overrides the makeSound() method to print "Meow!".


Refer sample example to understand about the output format.

Refer the commented code on IDE to view the output statements.
*/

abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract makeSound():void;
}

class Dog extends Animal{
    constructor(dname:string){
        super(dname);
    }
    makeSound(){
        console.log(`The dog ${this.name} says : Woof!`)
    }
}
class Cat extends Animal{
    constructor(cname:string){
        super(cname);
    }
    makeSound(){
        console.log(`The Cat ${this.name} says : Meow!`)
    }
}