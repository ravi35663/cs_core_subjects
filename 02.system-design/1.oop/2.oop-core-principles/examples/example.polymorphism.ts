/*
Design a class ShapeCalculator that calculates the area of different shapes using method overloading. Implement the below attributes and methods to 
calculate the area of different shapes :

Methods :

area (integer radius) : Calculates and print the area of circle using the formula π×radius2 .
area (integer length, integer width) : Calculates and print the area of rectangle using the formula (length * width).
area (integer base1, integer base2, integer height) : Calculates and print the area of Trapezoid using the formula ( (base1 + base2) * height) / 2.
*/

class ShapeCalculator{
    area(radius:number): void;
    area(length:number,width?:number): void;
    area(base1:number,base2?:number,height?:number):void
    area(p1:number,p2?:number,p3?:number){
        if(p1 && p2 && p3){
            const a = (p1+p2) * p3 / 2
            console.log("Area of Trapezoid : ",Math.floor(a))
        }else if(p1 && p2){
            const a = p1 * p2;
            console.log("Area of Rectangle : ",Math.floor(a))
        }else{
            console.log("Area of circle : ",Math.floor(3.14 * p1*p1))
        }
    }
}