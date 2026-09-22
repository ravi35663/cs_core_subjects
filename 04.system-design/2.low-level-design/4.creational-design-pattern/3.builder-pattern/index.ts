/*
=> Builder Pattern:
    - Creational pattern used to construct complex objects step by step.
    - Separates object construction from its representation, allowing the same
      construction process to create different representations.
*/

/*
=> Telescoping Constructor Anti-Pattern:
    - Multiple overloaded constructors or one constructor with many optional
      parameters to support different object configurations.
    - Makes object creation hard to read, error-prone, and difficult to scale.
    - In TypeScript, multiple constructor signatures are needed for different
      parameter combinations.
    - Fine for 1–2 optional parameters, but becomes tedious and repetitive
      when there are many optional parameters.
*/

// Example:
class Shake{
    fruitType:string;
    liquid:string;
    sugar?:boolean;
    dryFruits?:string[];
    constructor(fruitType:string, liquid:string);
    constructor(fruitType:string, liquid:string, sugar:boolean);
    constructor(fruitType:string, liquid:string, sugar:boolean, dryFruits:string[]);
    constructor(param1:string, param2:string, params3?:boolean, param4?:string[]){
        this.fruitType = param1;
        this.liquid = param2;
        if(params3){
            this.sugar = params3;
        }
        if(param4){
            this.dryFruits = param4;
        }
    }
}
/*
=> When to use Builder Pattern:
    - Object has many fields/options
    - Immutability is preferred
    - You want readable and maintainable object creation

=> When to avoid:
    - Class has only 1–2 fields
    - No customization or immutability is needed
*/

/*
=> Pros and Cons:

    Pros:
    - Avoids constructor telescoping
    - Supports immutability
    - Clean, readable object creation
    - Good for complex configurations

    Cons:
    - Slightly more setup
    - Overkill for small classes
    - Requires a separate builder
*/

/*
=> Real-world example:
    - Amazon shopping cart
*/