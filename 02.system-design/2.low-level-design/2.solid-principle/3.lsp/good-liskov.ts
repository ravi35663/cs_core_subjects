/*
==> Good LSP Example
    1)  This example adheres to LSP by avoiding inheritance and using a clear interface.
*/
abstract class Shape{
    abstract getArea():number;
}

class Rectangle extends Shape{
    constructor(private height:number,private width:number){
        super();
    }

    getArea(): number { // Must have to implement other than that it is violate the LSP:
        return this.height * this.width;
    }
}

class Circle extends Shape{
    private PI:number = 3.16;
    constructor(private radius:number){
        super();
    }
    getArea(): number {
        return this.PI * this.radius * this.radius;
    }
}  
/*
Advantages:
    1)  Each class (Rectangle and Square) implements behavior consistent with its own 
        logic without interfering with the other.
    2)  Substituting one shape for another works seamlessly because they share a common 
        interface (Shape).
*/