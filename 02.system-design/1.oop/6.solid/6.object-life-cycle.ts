/*
=> Object Life-cycle:
    ->  Object life-cycle = 
            from object creation → usage → becoming unreachable → garbage collection
*/

/*
=> Object Creation (Birth of an Object):
    ->  In OOP, an object is created using a class constructor.
*/
class User{
    constructor(public name:string){
        console.log("Object is created");
    }
}
let user = new User("Ravi");

/*
=> What happens internally?
    ->  Memory is allocated in the heap
    ->  Constructor initializes state
    ->  'user' holds a reference to that memory
    ->  Object is now alive
*/
/*
=> Reference Counting (How long object lives):
    ->  An object lives as long as it has at least one reference.
*/
let u1 = new User("A");
let u2 = u1;   // reference count = 2
u1 = null;    // reference count = 1
u2 = null;    // reference count = 0 → eligible for GC (garbage collection)
/*
=> Key idea:
    ->  References, not variables, keep objects alive
    ->  When reference count = 0, object becomes unreachable
*/
/*
=> Garbage Collector in TypeScript (JavaScript GC):
    ->  TypeScript has NO garbage collector of its own
    ->  It relies on JavaScript engine GC (V8, SpiderMonkey, etc.)
*/
/*
=> How GC works
    ->  GC starts from root objects
        - global variables
        - stack variables
    ->  Marks reachable objects
    ->  Deletes unmarked objects
*/
function createUser() {
    const user = new User("Ravi");
} // user goes out of scope → unreachable
// Object becomes eligible for garbage collection

/*
=> Memory Leak (When objects should die but don’t):
    ->  A memory leak happens when: 
            Objects are no longer needed but are still referenced.
*/ 
// Example (Classic OOP mistake):
class CacheClass {
    static users: User[] = [];

    static add(user: User) {
        this.users.push(user);
    }
}
CacheClass.add(new User("A"));
/*
❌ users is static
❌ Reference never released
➡️ Object never garbage collected
*/


// Another common leak: Event listeners
class ButtonHandler {
    constructor() {
        window.addEventListener("click", this.onClick);
    }

    onClick() {
        console.log("clicked");
    }
}
// ❌ Listener holds reference to object
// ❌ Object never dies

/*
=> Cyclic References (Important Concept):
    ->  Two objects reference each other.
*/
class Person {
    friend?: Person;
}

const a = new Person();
const b = new Person();

a.friend = b;
b.friend = a;

// Cyclic leak example (with global reference)
const people: Person[] = [];
people.push(a);

/*
==> Object Destruction (There is NO destructor):
    ->  Unlike Java / C++:
        ->  No destroy() or finalize()
        ->  No deterministic destruction
*/
// Cleanup must be manual
class Resource {
    close() {
        // write your cleanup code in here:
        console.log("cleanup done");
    }
}
const r = new Resource();
r.close();

//
/*
=> Best Practices (Very Important ⭐)
    1) Nullify references when done
        Example:
            user = null;
    2)  Avoid unnecessary global/static references:
            // ❌
            static cache = [];

            // ✅
            use weak references or scoped variables 
    3)  Remove event listeners:
        window.removeEventListener("click", this.onClick);

    4)  Prefer local scope:
            function process() {
                const obj = new User("Temp");
            }
    5)  Be careful with closures:
            function outer() {
                const bigObject = new User("Leak");

                return function inner() {
                    console.log(bigObject.name);
                }
            }
        ->  bigObject stays alive as long as 'inner' exists
*/