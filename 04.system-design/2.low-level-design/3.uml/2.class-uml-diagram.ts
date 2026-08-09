/*
=>  UML Class Diagram:
    -   UML 
*/
/*
=>  UML Class Notation:
    -   Class Representation:
        -   Class Name (Top)
        -   Attributes (Middle)
        -   Operations (Bottom)
        -   Example:
                +-----------------------------------+
                |            ClassName              |
                +-----------------------------------+
                | - attribute1 : DataType           |
                | - attribute2 : DataType           |
                | + attribute3 : DataType           |
                +-----------------------------------+
                | + operation1() : ReturnType       |
                | + operation2(param : Type) : RT   |
                +-----------------------------------+
    -   Visibility Markets:
        -   Public (+)
        -   Private (-)
        -   Protected (#)
        -   Package (~)

=>  Attributes and Method syntax:
    -   Attributes : visibility name : type = default value
            Example:    public number price = 0;
                            + price:number = 0;
                            
    -   Methods : visibility name (Parameters List) : return type
            Example:
                    private int sum(int a, int b){
                        return a+b;
                    }
                    
                    - sum(a: number, b:num) : number;


    -   Interface:  <<interface>>
                        name
            Example:
                <<interface>>
                    Payment
    -   Abstract classes: <<abstract>>   
                            name -> in italics
            Example:
                    <<>>
                        
    -   Enumeration:
            ----------------
            |<<enumeration>>|
            |    name       |
            |-------------- |
            |    .val1      |
            |    .val2      |
            |    .val3      |
            -----------------
*/

/*
=>  Perspective of class Diagrams:
    - Business, Analysts:   Conceptual perspective (represents the concepts in the domain)
            Example: Customer -> places ->   Order -> Contains -> Product
    - Architects, Designers: Specification perspective (Focus is on the interfaces of the Abstract Data types, of software)
    - Developers: Implementation perspective (Describes how classes will implements their interfaces)
    - Example:
                +----------------------------------+
                |            <<interface>>          |
                |               Order               |
                +----------------------------------+
                | + addProduct() : void             |
                | + removeProduct() : void          |
                +-----------------------------------+
*/
/*
=>  Relationship between the classes:
    - Association
    - Aggregation
    - Composition
    - Inheritance
    - Realization (Implementation)
    - Dependency
*/
/*
=>  Association: ('uses-a' relation)
    ->  represented by (--- assume it is a single line)
    -   This represents a "uses-a" relationship between two classes where one class uses or interact 
        with the other. 
    -   Example:
            User & cart
    -   Example:
            +----------------+        +----------------+
            |     Student    | -----  |     Course     |
            +----------------+        +----------------+
            | - id : number  |        | - code : string|
            | - name : string|        | - title : string|
            +----------------+        +----------------+
            A Student is associated with a Course and Courses can be differ for Students
*/
/*
=>  Aggregation: -----------◇ (Hollow diamond): ('has-a' relation)
    -   This represents a "has-a" relationship where one class contains another class, but the 
        contained class can exist independently.
    -   Example:
            Department ◇---- Employee
                    +----------------+
                    |    Department  |
                    +----------------+
                    | - name : string|
                    +----------------+
                            ◇
                            |
                            |
                    +----------------+
                    |     Employee   |
                    +----------------+
                    | - id : number  |
                    | - name : string|
                    +----------------+
            Relationship meaning:
                A Department has Employees, but Employees can exist without a Department
*/
/*
=> Composition Relationship: ---◆ (filled diamond) represents Composition: (Lifecycle matters)
    -   This represents a very strong "has-a" relationship where the part cannot exists 
        without the whole. If the whole is destroyed, the parts are also destroyed.
    -   Example:
                +----------------+
                |     House      |
                +----------------+
                | - address      |
                +----------------+
                        ◆
                        |
                        |
                +----------------+
                |      Room      |
                +----------------+
                | - roomNo       |
                | - type         |
                +----------------+

            - Diamond is placed on the owner / whole side → House
            - Room cannot exist independently of House
            - If House is destroyed, all its Room objects are destroyed

            Meaning:
                A House is composed of Rooms (strong “part-of” relationship)
*/
/*
=>  Inheritance:('is-a')
    -   This represents an "is-a" relationship where one class inherits the attributes and methods of 
        another class.
    -   Example:
                +----------------+
                |     Animal     |
                +----------------+
                | - name : string|
                +----------------+
                | + move()       |
                +----------------+
                        ▲
                        |
                +----------------+
                |      Dog       |
                +----------------+
                | - breed : string|
                +----------------+
                | + bark()        |
                +----------------+
            - Explanation (Inheritance / Generalization)
            - ▲ (hollow triangle) represents Inheritance
            - Arrow points to the parent (base) class
            - Dog inherits properties and methods of Animal

            Meaning:
                Dog is an Animal (IS-A relationship)
*/

/*
=> Realization (Implementation):
    -   Represented by - - - - ->(combination of - - - - and filled Arrow)
    -   This represents a relationship between a class and an interface where the class implements the 
        methods declared in the interface.
    -   Example:
            +----------------------+
            |     <<interface>>    |
            |      Payment         |
            +----------------------+
            | + pay(amount:number) |
            +----------------------+
                    △
                    - - - - - - -
                    |
            +----------------------+
            |   CreditCardPayment  |
            +----------------------+
            | + pay(amount:number) |
            +----------------------+

    -   
        - Explanation (Realization / Implementation)
        - △ (hollow triangle) → points to interface
        - Dotted line → represents Realization
        - CreditCardPayment implements Payment
        - Meaning:
            CreditCardPayment realizes (implements) Payment interface
*/
/*
=>  Dependency :
    -   Dashed arrow ( - - - - > ) represents Dependency.
    -   This represents a "uses" relationship when a change in one class may affect the other class.
    -   Example:
            +----------------+
            |   OrderService |
            +----------------+
            | + placeOrder() |
            +----------------+
                    - - - - - >
                    uses
            +----------------+
            | PaymentGateway |
            +----------------+
            | + pay()        |
            +----------------+

            - Arrow points from dependent class → dependency
            - Indicates temporary usage, not ownership
            - Dependency exists only during method execution
            - Meaning:
                OrderService depends on PaymentGateway
*/