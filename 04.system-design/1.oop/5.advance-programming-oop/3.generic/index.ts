/*
=>  Wildcard type (? extends T)
=>  Wildcard type (? super T)
=>  Raw Type
*/

/*
=> What are generic:
    ->  For generic always remember 'type' is parameter not hard-coded as in normal 
        functions:

    ->  Generics allow you to write type-safe, reusable OOP code where the type is a 
        parameter, not hard-coded.

    ->  In OOP terms: 
        Generics enable classes, interfaces, and methods to work with any data type 
        while preserving type safety.
*/
/*
=> Why Generics are Needed:
    ->  Without generics:
        ->  You duplicate classes for different types
        ->  Or you lose type safety using 'any'

    ->  With generics:
        ->  One generalized abstraction
        ->  Strong typing
        ->  Clean polymorphic behavior
*/
// Generic Class:
class Box<T>{
    private value:T;

    constructor(value:T){
        this.value = value;
    }

    getValue():T{
        return this.value;
    }
}
const numberBox = new Box<number>(10);
const stringBox = new Box<string>('Hello');
// Same class, different types → OOP abstraction

//Generic Interface
interface Repository<T>{
    save(item: T): void;
    findById(id: number): T;
}
class User{}
class UserRepository implements Repository<User>{
    save(user:User){};
    findById(id: number): User {
        return new User();
    }
}
// Interface remains generic, implementation is concrete.

// Generic Method
class Util{
    static identity<T>(value:T):T{
        return value;
    }
}
const n = Util.identity<number>(10);
const str = Util.identity<string>('TS');

// Generic Constraints (OOP safety)
interface Identifiable{
    id:number;
}
class Service<T extends Identifiable>{
    getId(item:T):number{
        return item.id;
    }
}//Ensures behavior contract, not just type.

// Generics + Inheritance
class Base<T>{
    data:T;
    constructor(data:T){
        this.data = data;
    }
    getData():T{
        return this.data;
    }
}

class Derived extends Base<string> {
    constructor(data:string){
        super(data);
    }
}

//Real-World OOP Example:
class ApiResponse<T>{
    constructor(
        public data:T,
        public success:boolean
    ){}
}

const user = new User();
const order = new Order();// example

new ApiResponse<User>(user,true);
new ApiResponse<Order>(order,true);

// Generics = Type-safe polymorphism
/*
=> Bounded type parameter:
    ->  A bounded type parameter means restricting a generic type to a specific type 
        or hierarchy using 'extends'.
    ->  In OOP terms: “T can be any type, but it must satisfy a given contract.”
*/ 
/*
=> Why Bounded Generics are Needed:
    ->  Prevent invalid types
    ->  Enforce behavior at compile time
    ->  Preserve Liskov Substitution Principle
    ->  Enable safe polymorphism
*/
/*
=>  Basic Syntax: <T extends some types>
    ->  This does NOT mean inheritance only — 
    ->  it means:
            class
            interface
            structural shape
*/
// Interface-based Bound (Most Common)
interface Identifiable {
    id: number;
}
class UserClass{
    constructor(public id:number, public name: string) {}
}
class ProductClass{
    constructor(public id:number, public price:number){}
}
class RepositoryClass<T extends Identifiable>{
    getId(item:T):number{
        return item.id;
    }
}
const userRepo = new RepositoryClass<UserClass>();
const productRepo = new RepositoryClass<ProductClass>();

const userClass = new UserClass(10,"Ravi");
const productClass = new ProductClass(1,200);
userRepo.getId(userClass);
productRepo.getId(productClass);
/*
    - User and Product are allowed
    - Any object without id will be rejected
*/

// Class-based Bound:
class Animal{
    speak(){}
}

class Dog extends Animal{};
class Cage<T extends Animal>{
    keep(animal:T){
        animal.speak();
    }
}

// Multiple Bounds (Intersection Types)
interface Flyable {
    fly():void;
}
interface Swimmable{
    swim(): void;
}

class Duck implements Flyable, Swimmable{
    fly(): void {
        
    }
    swim(): void {
        
    }
}

class Zoo<T extends Flyable & Swimmable>{
    handle(animal:T){
        animal.fly();
        animal.swim();
    }
}

// Function with Bounded Generic:
function getLength<T extends {length:number}>(value: T): number{
    return value.length;
}
/*
=>  This above function works with:
    string
    array
    custom objects with length
*/
/*
=> Why 'extends' is used (Important):
    ->  <T extends string | number>
    ->  Means:
        ->  T must be string OR number
        ->  NOT any other type
*/
/*
| Concept           | Meaning                |
| ----------------- | ---------------------- |
| `<T>`             | Any type               |
| `<T extends X>`   | Type must follow X     |
| `&`               | Multiple bounds        |
| Structural typing | Shape-based constraint |

*/
/*
=> Advantages of Generics in TypeScript (OOP context):
    ->  Generics provide type-safe abstraction in OOP, allowing code to work with 
        multiple data types without duplication.
    1)  Type Safety (Biggest Advantage):
            class Box<T>{
                value: T;
            }
        ->  Errors caught at compile time
        ->  No 'any', no runtime surprises
    
    2)  Code Reusability:
            class Repository<T> {
                save(item: T) {}
            }
        ->  Same class works for User, Order, Product
        ->  No duplicate implementations
        ->  DRY principle (Don't Repeat Yourself)
    
    3)  Better OOP Abstraction
        ->  Encapsulates behavior, not data type
        ->  Works with polymorphism
        ->  One algorithm → many types

    4)  Eliminates Type Casting:
        Without generics:
            const value = getValue() as string;
        With generics:
            const value = getValue<string>();

    5)  Improved Readability & Self-Documentation:
            function identity<T>(value:T):T{
                return value;
            }
        ->  Method contract is clear
        ->  Intent is obvious

    6)  Compile-Time Performance Boost:
        ->  Fewer runtime errors
        ->  No unnecessary checks or conversions

    7)  Enables Strong API Design:
            class ApiResponse<T>{
                data:T
            }
        ->  Consumer knows exactly what type is returned
        ->  Better IDE autocomplete

    8)  Works with Interfaces & Constraints:
            class Service<T extends Identifiable>{}
        ->  Enforces contracts
        ->  Maintains LSP

    9)  Real-World Example Advantage:
            new ApiResponse<User>(user);
            new ApiResponse<Order>(order);
        ->  Same structure, different domain objects.
*/