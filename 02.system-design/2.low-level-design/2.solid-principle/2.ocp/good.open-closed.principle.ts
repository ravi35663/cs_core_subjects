/*
=> Good code: Good Example (Adhering to Open-Closed Principle)
    ->  Instead of modifying existing code, we use polymorphism to extend functionality. 
        Each shape class implements its own getArea() method.
*/
abstract class Shape{
    abstract getArea():number;
}

class Rectangle extends Shape{
    constructor(private height:number,private width:number){
        super();
    }
    getArea(){
        return this.height * this.width
    }
}

const rec = new Rectangle(10,20);
rec.getArea();

class Circle extends Shape{
    private PI:number = 3.16;
    constructor(private radius:number){
        super();
    }

    getArea(){
        return this.PI * this.radius * this.radius;
    }
}

const circleCi = new Circle(10);
circleCi.getArea()