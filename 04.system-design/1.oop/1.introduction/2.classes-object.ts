/* 
=> Classes and Constructors in TypeScript:  
    -   Classes are blueprints for creating objects with properties and methods.  
    -   The constructor is a special method that runs when an object is created, 
        usually to initialize properties.  
*/
class Person{
    // These are the attributes (the data that stores that is variables)
    name:string;
    age:number;

    /*
        you can assigned in this way as well. here '!' means we assign value later.
        name!:string;
        age!:number 
    */
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    // All the methods in a class are behavior of the class. 
    // method to returns the greetings message 
    greet(){
        return `Hello My name is ${this.name} and my age is ${this.age}`;
    }
}
const person = new Person("Ravi",27)
person.greet();
/*
=> Access Modifiers in TypeScript:  
    -   Define how class members (methods/properties) can be accessed or modified.  
    -   Types: `public`, `private`, `protected`, `readonly`.  

    => Public (default):  
        - Accessible anywhere.  
        - All members are public if no modifier is used.  

    => Private:  
        - Accessible only within the class.  
        - Not available outside or in subclasses.  

    => Protected:  
        - Accessible in the class and its subclasses.  
        - Not accessible outside these.  

    => Readonly:  
        - Makes a property read-only.  
        - Can only be set during initialization or in the constructor.  
*/

class Employee{
    // These are attributes (kind of variables)
    public name:string;             // Can be accessed and modified anywhere
    private salary: number;         // Only accessible within this class , cannot exposed to outer world
    protected department: string;   // Accessible within this class and subclasses
    readonly id: number             // Can only be assigned once, cannot be changed

    constructor(name:string,salary:number,department: string,id:number){
        this.name = name;
        this.salary = salary;
        this.id = id;       // Can only be set here or at declaration
        this.department = department;
    }

    // Method to get the private properties:
    getSalary():number{
        return this.salary;
    }
}

class Manager extends Employee{
    constructor(name:string, salary:number, department:string, id:number){
        super(name, salary, department, id);
    }

    getDepartment():string{
        return this.department; // accessible due to protected
    }
}

const emp = new Employee('John', 50000, 'HR', 101);
console.log(emp.name);           // Public, so accessible
console.log(emp.getSalary());    // can access private data via method

// emp.salary is not accessible directly because it is private
// emp.id = 102; // Error: Cannot assign to 'id' because it is a read-only property
  
// # Very important to understand
/*
=> How the object created and destroyed in the memory?
    -   Stack memory: memory assigned during run time) 
    -   Heap memory:  memory available in our system
    -   Stack memory is very limited
    -   Heap is huge.
    -   Example:
            const emp = new Employee('John', 50000, 'HR', 101);
            ->  here emp is variable so it is store in stack.
            ->  here new Employee('John', 50000, 'HR', 101); is instance and it 
                stored in heap

    -   When program ends the stack memory is deleted but heap memory will stay 
        there and later can be deleted by garbage collector or delete manually.
*/

/*
=> Stack Vs Heap memory:
    | Feature           | Stack Memory                            | Heap Memory                   |
    | ----------------- | --------------------------------------- | ----------------------------- |
    | **Purpose**       | Stores function calls & local variables | Stores objects & dynamic data |
    | **Allocation**    | Automatic (LIFO)                        | Manual / Managed by GC        |
    | **Speed**         | Very fast                               | Slower than stack             |
    | **Size**          | Limited                                 | Large                         |
    | **Lifetime**      | Exists until function ends              | Exists until no references    |
    | **Access**        | Direct                                  | Indirect (via reference)      |
    | **Thread Safety** | Thread-safe                             | Not thread-safe by default    |
    | **Used For**      | Primitives, function frames             | Objects, arrays, classes      |
*/

/*
    Note: References always be in the heap memory like: array, object, classes
*/
function demo() {
  let x = 10;            // Stack
  let user = { name: "Ravi" }; // Heap (reference in stack)
}
