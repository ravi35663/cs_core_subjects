/*
Design a class Employee to manage employee details securely using proper encapsulation and access modifiers. The class should implement the following 
attributes and methods :

Attributes :

name (string) : public, Represents the name of employee.
employeeId (Integer) : protected, Represents the unique Id of the employee.
salary (double) : private, Represents the salary of the employee.
Methods :

setSalary (double salary) : Sets the salary value, If salary is negative then print "Invalid salary" and set the salary to 0.
getSalary() : Return the salary value.
parameterised constructor to initialize the attributes. (If salary is negative then print "Invalid salary" and set the salary to 0.)
displayEmployeeDetails() : Display the employee details in format specified below :


Refer the sample examples for understanding the output format.

Refer the commented code to check the output statments.
*/

class Employee{
    public name:string;
    protected employeeId:number;
    private salary!:number;

    constructor(name:string,employeeId:number,salary:number){
        if(salary < 0){
            console.log("Invalid salary");
            this.salary = 0;
        }else{
            this.salary = salary;;
        }
        this.employeeId = employeeId;
        this.name = name;
    }
    
    setSalary(salary:number){
        if(salary < 0){
            console.log("Invalid salary");
            this.salary = 0;
        }else{
            this.salary = salary;
        }
    }

    getSalary(){
        return this.salary;
    }
    displayEmployeeDetails(){
        console.log(this.name);
        console.log(this.employeeId);
        console.log(this.salary.toFixed(2));
    }
}