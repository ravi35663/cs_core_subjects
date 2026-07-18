/*
=>  What is Singleton Pattern? Why do we need this?
    -   The singleton pattern ensure that the class has only one instance throughout the application's 
        life cycle and provides a global access point to that instance.

=>  Why do we need it:
    -   Should exists only once due to global state, resources constrains or logical reasoning.
    -   Need to be accessed from different part of the system.
*/
/*
=>  Prime Example:
    -   DB connection
    -   Logging
    -   Analytics
        ...etc
*/
/*
=> How do we have singleton pattern:
    - Eager loading and lazy loading
*/
/*
=>  Eager Loading (Instance created immediately):
*/
class EagerSingleton {
    private static instance: EagerSingleton = new EagerSingleton();

    private constructor(){
        console.log("EagerSingleton instance created");
    }

    static getInstance():EagerSingleton{
        return EagerSingleton.instance;
    }
}
const s1 = EagerSingleton.getInstance();
const s2 = EagerSingleton.getInstance();
console.log(s1 === s2); // true
/*
=>  Key points
    1)  Instance is created at class load time:
    2)  Simple and thread-safe: if multiple treads are created then only one EagerSingleton instance 
        will be there
    3)  May waste memory if never used
*/
/*
=> Lazy Loading (Instance created on demand):
*/
class LazySingleton{
    private static instance: LazySingleton | null = null;

    private constructor(){ // constructor is private to prevent external instantiation
        console.log("LazySingleton instance created");
    }
    static getInstance():LazySingleton{
        if(this.instance == null){
            this.instance = new LazySingleton();
        }
        return this.instance;
    }
}
const si1 = LazySingleton.getInstance();
const si2 = LazySingleton.getInstance();
console.log(s1 === s2); // true
/*
=>  Key points
    1) Instance is created only when needed
    2) Saves memory
    3) Slightly more logic
    4) It is not tread safe
*/
/*
=>  Double-Checked Locking (Async-Safe) in TypeScript
*/
class AsyncSingleton{
    private static instance: AsyncSingleton | null = null;
    private static initializing: Promise<AsyncSingleton> | null = null;
    private constructor(){
        console.log("Singleton Created");
    }
    
    static async getInstance(): Promise<AsyncSingleton>{
        // First check (no waiting)
        if(this.instance){
            return this.instance;
        }

        // Second check (after waiting)
        if(!this.initializing){
            this.initializing = new Promise(resolve=>{
                const obj = new AsyncSingleton();
                this.instance = obj;
                resolve(obj);
            })
        }
        return this.initializing;
    }
}
/*
===================== SINGLETON PATTERN: PROS & CONS ===================== 
+----------------------+------------------------------------+------------------------------------+
| Aspect               | Pros                               | Cons                               |
+----------------------+------------------------------------+------------------------------------+
| Instance Control     | Ensures only one instance exists   | Acts like a global variable        |
| Resource Management  | Saves memory & resources           | Can become a bottleneck            |
| Access               | Easy global access                 | Hidden dependencies                |
| Initialization       | Supports lazy loading              | Complex async handling             |
| Consistency          | Shared state remains consistent    | Uncontrolled shared state          |
| Testing              | Simple usage                       | Hard to mock & unit test           |
| Design Principles    | Centralized control                | Violates SRP & DIP                 |
| Coupling             | Reusable shared instance           | Tight coupling between classes     |
| Concurrency (Async)  | Controlled instance creation       | Race conditions if not handled     |
| Scalability          | Useful for app-wide services       | Hard to scale in large systems     |
+----------------------+------------------------------------+------------------------------------+
*/