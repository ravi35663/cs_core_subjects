/*
Note: Typescript doest not support inner classes so the below points are pointless, 
    1)  What are inner classes in typescript
    2)  Type of inner classes
    3)  Static nested classes
    4)  Non static inner class
    5)  Local inner class
    6)  Anonymous inner class

    Instead, TypeScript uses:
        1)  Composition
        2)  Functions / closures
        3)  Anonymous objects
        4)  Modules
*/
/*
=> What are inner classes in typescript:
    ->  TypeScript does NOT support true inner (nested) classes like Java.

=> What this means:
    ->  In Java, a class can be defined inside another class
    ->  In TypeScript, you cannot define a class inside another class body
    ->  So true inner classes do not exist in TypeScript

=> What TypeScript uses instead (alternatives)
    1) Nested classes via properties
    2) Closures / factory functions
    3) Namespaces or modules
*/

/*
Example (what is NOT allowed):
    class Outer {
        class Inner { } // Syntax error in TypeScript
    }
*/

// Common workaround (composition):
class Inner {
    show() {
      console.log("Inner logic");
    }
}
  
class Outer {
    inner = new Inner();
}

const outer:Outer = new Outer();
outer.inner.show();

/*
=> Class Composition: 
    ->  One class uses another class instead of being inside it.
    ->  Replaces inner classes → “has-a” relationship
*/
class Engine{
    start(){
        console.log("Engine starts");
    }

    stop(){
        console.log("Engine stops");
    }
}
 
class Car{
    engine:Engine = new Engine() // composition. Can has a engine ("has-a" relationship)
 
    drive(){
        this.engine.start();
    }
}

/*
=> Functions / Closures: 
    ->  A function can remember variables from where it was created.
    ->  Used instead of local/anonymous inner classes
*/
function counter(){
    let count = 0;
    return ()=>{
        count++;
        return count;
    }
}  
const c = counter();
c(); // 1
c(); // 2

/*
=> Anonymous Objects:
    ->  Objects created without a class.
    ->  Replaces anonymous inner classes
*/
const user = {
    name: "Ravi",
    greet() {
      console.log("Hello");
    }
};

/*
=> Modules:
    ->  Group related code into files.
    ->  Replaces nested class grouping
*/

// mathUtil.ts
// export function add(a: number, b: number) {
//     return a + b;
// }

// app.ts
// import { add } from "./mathUtil";

/*
    | Java concept           | TypeScript alternative |
    | ---------------------- | ---------------------- |
    | Inner class            | Composition            |
    | Local inner class      | Closure                |
    | Anonymous inner class  | Anonymous object       |
    | Package / nested class | Module                 |
*/