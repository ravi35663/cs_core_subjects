/*
=>  Builder pattern: This is very very important pattern
*/
/*
=> What is Builder pattern?
    -   It is creational pattern used to construct complex objects step by step.
    -   It is separates the constitution of an object from it's representation, 
        allowing the same constitution process to create different representations.
*/

// Example see in good.builder.ts file
/*
=> Telescoping Constructor anti-pattern:
    -   Telescoping constructor is an anti-pattern where a class has multiple overloaded 
        constructors (or one long constructor with many optional parameters) to support 
        different combinations of arguments, making object creation hard to read, 
        error-prone, and not scalable.

    -   In typescript you have to create multiple constructor signature to follow the 
        different combination of optional parameter.

    -   This is good for 1-2 optional parameters but not good for large optional 
        parameters. Because the combination become tedious to write and take lots of 
        duplicate code.
*/
// Example:
class Shake{
    fruitType:string;
    liquid:string;
    sugar?:boolean;
    dryFruits?:string[];
    constructor(fruitType:string,liquid:string);
    constructor(fruitType:string,liquid:string,sugar:boolean);
    constructor(fruitType:string,liquid:string,sugar:boolean,dryFruits:string[]);
    constructor(param1:string,param2:string,params3?:boolean,param4?:string[]){
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
=> When to use Builder pattern and when to avoid builder pattern:
    => When to use:
        - An object has multiple fields
        - immutability is preferred (Once created your client cannot change it)
        - You want readable, maintainable object creation
    
    => When to avoid it:
        - Your class is with simply 1-2 fields
        - You don't need object customization or immutability.
*/

/*
=>  Pros and cons:
    Pros:                                   Cons:
    Avoids constructor telescoping          Slightly tough to setup
    Ensure immutability                     Overkill for small classes
    Clean, readable object creation         Separate builder class needed
    Great form complex configuration
*/

/*
=> Real world example:
    1) Amazon cart is good example
*/