/*
Design a system to manage the relationship between Employees and Departments using 
aggregation. Implement the following:

Department :
Attributes: name (String), id (String).
Method: displayDetails() - Prints the department details.

Employee :
Attributes: name (String), id (int), department (Department).
Method: displayDetails() - Prints the employee details, including the associated department details.

Refer the commented code for the output format.
*/

// Department Name : Management
// Department Id : MAN41241

class Department{
    name:string;
    id:string;
    displayDetails(){
        console.log(`Department Name : ${this.name}`);
        console.log(`Department Id : ${this.id}`);
    }
}

class Employee{
    empName:string;
    id:number;
    department:Department;

    constructor(empName:string,id:number,department:Department){
        this.empName = empName;
        this.id = id;
        this.department = department;
    }

    displayDetails(){
        console.log(`Employee Name : ${this.empName}`)
        console.log(`Employee Id : ${this.id}`)
        this.department.displayDetails();
    }
}
/*
==> Aggregation is a “has-a” relationship where:
    ->  One class uses another class
    ->  Both objects have independent lifecycles
    ->  Child object can exist without the parent
    ->  Aggregation = weak association
*/