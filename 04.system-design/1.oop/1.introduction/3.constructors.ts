/*
=> constructor:
    -   If we have not add constructor in class then a default constructor called.
    -   whenever an object is created a constructor will be created for that object as well.
    -   constructor does not return anything.

    -   constructor used to initialized the values in the object.
    -   In TypeScript, constructors are special methods used to initialize class objects. 
    -   There are several types and patterns of constructors depending on how you define or 
        use them.
*/
// 1. Default Constructor:
class Person1 {
  name1: string = 'John';
}
const p1 = new Person1(); // works fine

//2.Parameterized Constructor:
class Person{
    name:string;
    age:number;
    constructor(public name: string, public age:number){
        this.name = name;
        this.age = age;
    }
}
const p = new Person('Ravi', 30)

/*
3. Private Constructor:
    - Prevents direct instantiation from outside the class. Often used in Singleton patterns.
*/
class Singleton{
    private static instance: Singleton;
    private constructor(){}
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
/*
4. Protected Constructor:
    - Allows instantiation only within subclasses, not from outside.
*/
class Base{
    protected constructor() {}
}

class Derived extends Base{
    constructor(){
        super();
    }
}
// const b = new Base();  // Error
const d = new Derived(); // Okay

//5. Constructor Overloading (via signatures):
//TypeScript doesn’t support true overloading but allows multiple signatures with one implementation.
class Example{
    constructor();
    constructor(name:string);
    constructor(name?:string){
        if(name){
            console.log("Hello ",name);
        }else{
            console.log("Hello");
        }
    }
}
const e1 = new Example();
const e2 = new Example('Ravi')
/*
=> Copy Constructor:
    ->  TypeScript does not have a built-in copy constructor like C++ does.
*/
class Doctor{
    name: string;
    age: number;
    constructor(name:string,age:number);
    constructor(doctor: Doctor);
    constructor(param1?: string | Doctor, param2?:number){
        if(param1 instanceof Doctor){
            this.name = param1.name;
            this.age = param1.age;
        }else{
            this.name = param1;
            this.age = param2!;
        }
    }
}
const d1 = new Doctor('Ravi', 30);
const d2 = new Doctor(d1); // // copy constructor
console.log('D2 is ', d2); // {name:'Ravi',age:30}

/*
Note:
    1) Can one constructor call other constructor?? Yes
    2) A constructor can be overloaded via signature: (same method accepts different parameters)
*/