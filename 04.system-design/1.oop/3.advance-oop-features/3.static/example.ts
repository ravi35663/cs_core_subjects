/*
You are required to design a class Counter to keep track of how many objects have been created from it. The tracking must be done using the static 
keyword to ensure a single shared variable across all instances of the class. The class should contain below specification :

Attributes :
count (Integer) : A static variable that tracks the total number of objects created.

Methods :
A default constructor that increments the count variable each time a new object is instantiated.
getCount() : A static method that returns the current value of the count variable.
resetCount() : A static method to reset the value of count variable to 0.


Refer the sample examples for understanding the output format.

Refer the commented code on IDE for output statements
*/
class Counter{
    static count:number = 0;
    constructor(){
        Counter.count++;
    }
    static getCount(){
        return Counter.count;
    }
    static resetCount(){
        Counter.count = 0;
    }
}