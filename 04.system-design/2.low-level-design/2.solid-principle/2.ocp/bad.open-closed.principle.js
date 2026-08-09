
/*
=> Bad Example (Violating Open-Closed Principle):
    ->  In the example below, every time we add a new shape, we need to modify the getArea() 
        function. This violates the principle because the existing function is modified for 
        every new requirement.
*/

class Shape{
    constructor(type,dimensions){
        this.type = type;
        this.dimensions = dimensions;
    }
}

function getArea(shape){
    if(shape.type == 'circle'){
        return Math.PI * shape.dimensions.radius ** 2;
    }else if(shape.type == 'rectangle'){
        return shape.dimensions.height * shape.dimensions.width;
    }
    // Adding a new shape will require modifying this function
}
const circle = new Shape('circle',{radius:10});
const rectangle = new Shape('rectangle',{width:10,height:20});

console.log("Circle shape: ",getArea(circle));
console.log("Rectangle shape:",getArea(rectangle));
