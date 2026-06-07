
/*
=> What is object cloning:
    ->  Object cloning means creating a new object by copying an existing object’s 
        state (data) instead of creating it from scratch.
    ->  duplicate an object.
*/
/*
=> Why do we need object cloning:
    ->  To create a copy without affecting the original object
    ->  To avoid shared references (side effects)
    ->  Useful in immutability, undo/redo, caching, prototypes
*/
/*
=> Types of Object Cloning:
*/
/*
1) Shallow Cloning:
    ->  Copies only the top-level fields
    ->  Nested objects are shared (same reference)
*/

class Department {
    constructor(public name: string) {}
}
class Employee {
    constructor(public name: string, public dept: Department) {}

    clone() {
        return Object.assign({}, this);
    }
}
const d = new Department("IT");
const e1 = new Employee("Ravi", d);
const e2 = e1.clone();

e2.dept.name = "HR";  // affects e1 also

/*
2) Deep Cloning
    ->  Copies all levels
    ->  Nested objects are fully duplicated
*/

class Employee1 {
    constructor(public name: string, public dept: Department) {}

    clone() {
        return new Employee1(
            this.name,
            new Department(this.dept.name)
        );
    }
}

/*
=> Object Cloning vs Reference Copy:
*/
const a = { x: 10 };
const b = a;   // reference copy 
// here, a and b point to same object

const e = { ...a }; // clone: e is independent of a
