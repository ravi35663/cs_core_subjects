/*
===> Why we use Data structure :- 
    ->  There are many reasons to learn data structure. For instance if you want fast insertion and removal 
        of elements then you should use linked list instead of array. and so on.

==> ES2015 (ES-6) Syntax:-
    ->  Class is the blueprint of an object with predefined properties and methods.
    ->  With the help of class we can make new data types.
    ->  Static methods are class methods not instance or object methods.
    ->  Static method shared by all instances of the class.
    ->  You can access static methods using created class
    ->  in the static method ‘this’ represents all info of the class including static methods and
        static properties.
	    e.g.
*/
class Student{ // This student is become constant
    // “this” represents the Students methods and properties for particular objects
    static age = 26;

    constructor(firstName,lastName){ 
    // this is constructor function that will run for each new object
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName+" " +this.lastName;
    }

    static schoolName(){
        console.log(`value of this`,this);
        return 'HF high School phenhara'
    }
    static newName(){
        return 'Ravi'
    }
}
const s1 = new Student('Ravi','kumar')
// this is an Student object {firstName:’Ravi’,lastName:’Kumar’,fullName:Fun Diff}
const s2 = new Student('Amit','Kumar')
Student.schoolName(); // value of this [class Student] { age: 26 }