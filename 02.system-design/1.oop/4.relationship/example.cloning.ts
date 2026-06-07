/*
You are required to design a class hierarchy to demonstrate object cloning using 
shallow and deep copying in a library system. A Library contains a list of Book 
objects.

Shallow Copy: Creates a new object that shares references with the original object for 
nested structures.

Deep Copy: Creates a completely independent copy of the original object, including all 
nested structures.

Classes :
Book :
Attributes : title (string) , author (string)

Library :
Attributes : name (string) , books (List of Book class)
Methods :
shallowClone() : Creates a shallow copy of the Library object.
deepClone() : Creates a deep copy of Library object.
display() : Displays the output/ attributes of the class.
addBook (Book book) : It adds one book info to the list of books.

Refer the commented code on IDE to understand the output format using display method.
Refer the sample example output to understand the output format.
*/
class Book{
    title:string;
    author:string;
    constructor(title:string,author:string){
        this.title = title;
        this.author = author;
    }
}

class Library{
    name:string;
    books:Book[] = [];

    constructor(name:string){
        this.name = name;
    }

    shallowClone(){
        const clone = new Library(this.name);
        clone.books = this.books;
        return clone;
    }

    deepClone(){
        const clone = new Library(this.name);
        clone.books = this.books.map((item:Book)=>{
            return new Book(item.title,item.author);
        })
        return clone;
    }

    addBook (book:Book){
        this.books.push(book);
    }

    display(){
        console.log(`Library : ${this.name}`);
        for(let item of this.books){
            console.log(`Book : ${item.title}, Author : ${item.author}`);
        }
    }
}