interface VehicleInterface{
    drive():void;
}

class Bike implements VehicleInterface{
    drive(): void {
        console.log("Drive Bike");
    }
}

class Car implements VehicleInterface{
    drive(): void {
        console.log("Drive car");
    }
}

/*
It is a creational design pattern that lets you create objects without telling 
your code exactly which class to use. Here client is VehicleService and it does not know which class it is using
*/
class VehicleService{ // Service only responsible for particular feature
    public drive(type:string):void{
        VehicleFactory.createVehicle(type).drive();
    }
}

class VehicleFactory{ // Factory is responsible for creating object of class type
    public createVehicle(type:string):VehicleInterface{
        if(type == 'Bike'){
            return new Bike();
        }else if(type == 'Car'){
            return new Car();
        }else{
            throw new Error("Invalid vehicle type")
        }
    }
}

const b = new VehicleService();
b.drive('Bike')
/* ===================== FACTORY PATTERN EXAMPLE =====================
    -   Factory Pattern creates objects without exposing creation logic
    -   Client depends on abstraction, not concrete classes
    -   You can make the changes in factory but not in the service.
*/

/*
=> Class Level diagram of above example:
                <<interface>>
        +----------------------------------+
        |            Vehicle               |
        +----------------------------------+
        |                                  |
        +----------------------------------+
        | + drive() : void                 |
        +----------------------------------+
                 ▲ (Realization)
                 |
        -------------------------------
        |                             |
+------------------------+   +------------------------+
|          Car           |   |          Bike          |
+------------------------+   +------------------------+
|                        |   |                        |
+------------------------+   +------------------------+
| + drive() : void       |   | + drive() : void       |
+------------------------+   +------------------------+


        (Dependency: creates)
                 ▲
                 |
        +----------------------------------+
        |        VehicleFactory            |
        +----------------------------------+
        |                                  |
        +----------------------------------+
        | + createVehicle(                |
        |     type : string               |
        |   ) : Vehicle                   |
        +----------------------------------+
                 ▲
                 |
        (Dependency: uses)
                 |
        +----------------------------------+
        |        VehicleService            |
        +----------------------------------+
        |                                  |
        +----------------------------------+
        | + drive(type : string) : void   |
        +----------------------------------+

*/
/*
=>  Relationship Explanation:
    Vehicle → Interface
    Car, Bike → Realization (implements Vehicle)
    VehicleFactory → Dependency on Car, Bike, and Vehicle
    VehicleService → Dependency on VehicleFactory
    Object creation is encapsulated inside VehicleFactory
*/
/*
UML Symbols Used:
    ▲   → Inheritance / Realization
    - - > Dependency
*/
