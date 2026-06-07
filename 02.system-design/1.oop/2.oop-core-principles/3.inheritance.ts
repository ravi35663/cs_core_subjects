/*
=> Advantages of Inheritance:
  1) Code Reusability     → No need to rewrite common logic.
  2) Maintainability      → Update base behavior in one place.
  3) Modularity           → Classes become more organized and specialized.

=> Can a subclass inherit private members:
  - No, a subclass cannot inherit or access private members of its parent class in TypeScript.

=> Does typescript allow multiple inheritance? No,
*/

/*
=> What is inheritance? What are parent and subclass?
  - Inheritance is an object oriented programming concept.
  - 'extends' means inheritance of class.
  - Inheritance is a mechanism that allows one class to derive (or extend) another 
    class, so it can reuse its properties and methods.
  - It promotes code reusability, extensibility, and modularity.

=> Parent (Base / Superclass):
  - The class being inherited from — it defines common properties and behaviors.

=>  Child (Derived / Subclass)
  - The class that extends the parent — it inherits everything from the parent and can add 
    or override features.
*/
class Parent{
  name:string;
  constructor(name:string){
      this.name = name;
  }

  greet():string{
      return `Hello my name is: ${this.name}`;
  }
}

class Child extends Parent{
    age:number;
    constructor(name:string, age:number){
        super(name); // Calls the parent constructor to initialize 'name'
        this.age = age;
    }

    // Method specific to Child class
    introduce(): string{
        return `${this.greet()} and I am ${this.age} years old.`
    }
}

const john = new Child('John',25);
john.introduce();

/*
=> Type of inheritance (Single, multi-level, hierarchical):
*/

// 1. Single Inheritance: A single child class inherits from one parent class.
class Parent {
  showParent() {
    console.log('This is Parent');
  }
}

class Child extends Parent {
  showChild() {
    console.log('This is Child');
  }
}

const obj = new Child();
obj.showParent(); // Inherited
obj.showChild();

/*
2. Multi-Level Inheritance:
  - A class inherits from another class which itself inherits from another class (a chain).
  - Use case: Layered inheritance for deeper hierarchies.
*/
class GrandParent {
  greet() {
    console.log('Hello from GrandParent');
  }
}

class Parent extends GrandParent {
  speak() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  play() {
    console.log('Hello from Child');
  }
}

const obj = new Child();
obj.greet(); // From GrandParent
obj.speak(); // From Parent
obj.play();  // From Child

/*
3) Hierarchical Inheritance: 
  -  Multiple child classes inherit from a single parent class.
  -  Shared functionality across different subclasses.
*/
class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}

class Child1 extends Parent {}
class Child2 extends Parent {}

const c1 = new Child1();
const c2 = new Child2();
c1.greet(); // Hello from parent
c2.greet(); // Hello from parent

/*
4. Multiple Inheritance (Not Supported Directly):
  - TypeScript (like JavaScript) does not support multiple inheritance (a class can’t extend multiple classes).
    class A {}
    class B {}
    class C extends A, B {} // ❌ Not allowed

    But you can achieve:
*/
/*
=> Keys points for inheritance (Access modifiers, overriding, super):
    1. Access Modifiers
        ->  Control visibility of parent class members in inheritance.

        Modifier	  Accessible in Child?	Description
        public	    Yes	                  Accessible anywhere (inside/outside class).
        protected	  Yes	                  Accessible in child classes but not outside.
        private	    No	                  Accessible only within the same class.

    ->  Example:
        class Parent {
              public a = 1;
              protected b = 2;
              private c = 3;
            }

            class Child extends Parent {
            show() {
                console.log(this.a); // Correct
                console.log(this.b); // correct
                // console.log(this.c);Error
            }
        }
*/
/*
2.Method Overriding:
  - A subclass can redefine (override) a method from the parent class to change or 
    extend its behavior.
*/

class Parent {
    greet() {
      console.log('Hello from Parent');
    }
}

class Child extends Parent {
    greet() {
      console.log('Hello from Child');
    }
}

const ch = new Child();
ch.greet(); // "Hello from Child"

/*
3. super Keyword
    Used to:
    ->  Call the parent class constructor.
    ->  Access parent methods or properties inside a child class.
*/
class Parent {
  constructor(public name: string) {}
  greet() {
    console.log(`Hello, ${this.name} from Parent`);
  }
}

class Child extends Parent {
  constructor(name: string, public age: number) {
    super(name); // calls Parent constructor
  }

  greet() {
    super.greet(); // calls Parent method
    console.log(`Age: ${this.age}`);
  }
}

const c = new Child('Ravi', 25);
c.greet();

/*
Summary
  1) Access Modifiers: Control what the child can inherit or access.
  2) Overriding: Child class redefines parent methods.
  3) super: Used to invoke parent constructors or methods.

  In short: Access modifiers define what’s visible, overriding defines what changes, 
  and super connects parent and child.
*/

/*
=> Method override vs method overloading:
  -  Method override means:
    1) Same access modifier
    2) Same method name
    3) Same parameter and their type
    4) Same return type 

  -  Method Overloading:
    1) Same access modifier
    2) Same method name
    3) Different parameters or different types of parameters.
*/
