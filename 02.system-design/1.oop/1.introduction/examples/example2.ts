/*
Design a class Rectangle with the following specifications :

Attributes :

length (double) : Represents the length of the rectangle
width (double) : Represents the width of the rectangle.
Area (double) : Represents the area of rectangle.
Constructors :

A default constructor that initializes both length and width to 1.0
A parameterized constructor that takes two arguments to initialize length and width.
Methods :

void calculateArea() : Computes the area of rectangle.
void displayDetails() : Prints the rectangle's details, including its dimensions and area, in format specified below :


Refer the sample examples for understanding the output format.

Refer the commented code on IDE for output statements.
*/
class Rectangle{
    length:number;
    width:number;
    Area:number;

    constructor();
    constructor(length?:number,width?:number){
        if(length && width){
            this.length = length;
            this.width = width;
        }else{
            this.length = 1.0;
            this.width = 1.0;
        }
    }
    calculateArea(){
        this.Area = this.length * this.width;
    }
    displayDetails(){
        console.log('Length :',this.length);
        console.log("Width :",this.width);
        console.log("Area :",this.Area);
    }
}