/*
===> Good code: Good Example (Adhering to Open-Closed Principle)
    ->  Instead of modifying existing code, we use polymorphism to extend functionality. 
        Each shape class implements its own getArea() method.
*/

// Base Shape class
class Shape{
    // This can be a abstract or interface method
    getArea(){
        throw new Error('getArea() must be implemented in subclasses')
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius
    }
    getArea(){
        return Math.PI * this.radius ** 2
    }
}

const circle = new Circle(10);
console.log("Area of the circle is: ",circle.getArea());


class Rectangle extends Shape{
    constructor(height,width){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }
}

const rect = new Rectangle(10,20);
console.log("Area of rectangle is: ",rect.getArea());

// Adding a new shape (Triangle) doesn't require modifying existing classes
class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
}