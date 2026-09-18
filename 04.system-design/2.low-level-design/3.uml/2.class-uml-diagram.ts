/*
=> UML Class Diagram:
    - UML (Unified Modeling Language) represents the structure,
      attributes, methods, and relationships of a system.
*/

/*
=> UML Class Notation:

    Class Representation:
        1. Class Name (Top)
        2. Attributes (Middle)
        3. Operations/Methods (Bottom)

    Example:
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

    Visibility Markers:
        + Public
        - Private
        # Protected
        ~ Package

=> Attributes and Method Syntax:

    Attributes:
        visibility name : type = defaultValue

        Example:
            public number price = 0;
            + price : number = 0;

    Methods:
        visibility name(parameters) : returnType

        Example:
            private int sum(int a, int b) {
                return a + b;
            }

            - sum(a : number, b : number) : number

    Interface:
        <<interface>>
        Payment

    Abstract Class:
        <<abstract>>
        ClassName
        (Class name is italicized)

    Enumeration:
        ----------------
        |<<enumeration>>|
        |    name       |
        |-------------- |
        |    .val1      |
        |    .val2      |
        |    .val3      |
        ----------------
*/

/*
=> Perspectives of Class Diagrams:

    1. Conceptual (Business/Analysts):
        Represents domain concepts and relationships.

        Example:
            Customer -> places -> Order -> Contains -> Product

    2. Specification (Architects/Designers):
        Focuses on interfaces of abstract data types.

    3. Implementation (Developers):
        Describes how classes implement interfaces.

        Example:
            +----------------------------------+
            |         <<interface>>            |
            |              Order               |
            +----------------------------------+
            | + addProduct() : void            |
            | + removeProduct() : void         |
            +----------------------------------+
*/

/*
=> Relationships Between Classes:

    1. Association
    2. Aggregation
    3. Composition
    4. Inheritance
    5. Realization (Implementation)
    6. Dependency
*/

/*
=> 1. Association ('uses-a'):

    - Represented by a solid line (-----).
    - Shows interaction between two classes.
    - Classes can exist independently.

    Example:
        User & Cart

        +----------------+        +----------------+
        |     Student    | -----  |     Course     |
        +----------------+        +----------------+
        | - id : number  |        | - code : string|
        | - name : string|        | - title : string|
        +----------------+        +----------------+

    Meaning:
        A Student is associated with a Course.
        Courses can differ for different Students.
*/

/*
=> 2. Aggregation ('has-a'):

    - Represented by a hollow diamond (◇).
    - Weak has-a relationship.
    - Contained objects can exist independently.

    Example:
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

    Meaning:
        A Department has Employees, but Employees
        can exist without a Department.

    Diamond is placed on the whole/owner side.
*/

/*
=> 3. Composition ('part-of'):

    - Represented by a filled diamond (◆).
    - Strong has-a relationship.
    - Part's lifecycle depends on the whole.

    Example:

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

    - Diamond is placed on the whole/owner side (House).
    - Room cannot exist independently of House.
    - If House is destroyed, its Rooms are also destroyed.

    Meaning:
        A House is composed of Rooms.
*/

/*
=> 4. Inheritance ('is-a'):

    - Represented by a solid line with a hollow triangle (△).
    - Arrow points to the parent/base class.
    - Child inherits properties and methods of the parent.

    Example:

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

    Meaning:
        Dog is an Animal (IS-A relationship).
*/

/*
=> 5. Realization (Implementation):

    - Represented by a dashed line with a hollow triangle.
    - Connects a class with an interface.
    - Class implements the interface methods.

    Example:

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

    - △ points to the interface.
    - Dashed line represents Realization.
    - CreditCardPayment implements Payment.

    Meaning:
        CreditCardPayment realizes (implements) Payment.
*/

/*
=> 6. Dependency:

    - Represented by a dashed arrow (- - - - >).
    - Shows temporary usage between classes.
    - A change in one class may affect the other.
    - No ownership relationship.

    Example:

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

    - Arrow points from dependent class → dependency.
    - Indicates temporary usage, not ownership.
    - Dependency often exists during method execution.

    Meaning:
        OrderService depends on PaymentGateway.
*/