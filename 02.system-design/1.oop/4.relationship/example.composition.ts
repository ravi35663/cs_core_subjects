/*
Design a system to manage a composition relationship between a University and its 
Colleges. 
Implement the following:

University class :
Attribute: colleges (List of College objects), name (string)

Methods:
addCollege(collegeName, collegeId): Adds a college to the university.
displayDetails(): Prints the university's details along with all associated colleges.

College Class :
Attributes: name (String), id (String).
For output format refer the commented code on IDE.
*/

class Collage{
    name:string;
    id:string
    constructor(name:string,id:string){
        this.name = name;
        this.id = id;
    }
}

class University{
    private colleges:Collage[] = [];
    name:string;
    constructor(name:string){
        this.name = name;
    }

    addCollege(collegeName:string,collageId:string){
        const college:Collage = new Collage(collegeName, collageId);
        this.colleges.push(college);
    }

    displayDetails(){
        console.log(`University Name : ${this.name}`);
        for(let item of this.colleges){
            console.log(`College Name : ${item.name}`);
            console.log(`College Id : ${item.id}`);
        }
    }
}

/*
==> Why THIS is Composition:
    ->  University creates Collage
    ->  Collage cannot exist without University
    ->  No external injection of Collage
    ->  Strong ownership
*/