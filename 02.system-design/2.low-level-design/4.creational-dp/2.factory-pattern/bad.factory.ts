interface Vehicle{
    drive():void;
}

class BikeClass implements Vehicle{
   drive(): void {
        console.log("Drive a bike")
    }
}

class CarClass implements Vehicle{
    drive():void{
        console.log("Drive a car")
    }
}

/*
-   So the problem here is when the vehicle grows the service grows as well.
-   Here: The VehicleService should only be dealing with driving the vehicle and 
    should not be dealing with object creation logic:
-   Here every time we passing the type it is creating the object and implementing 
    the driving logic which is two thing.
-   Here it is violating the SRP and OCP. Because Two thing is happening:
    For SRP: Driving + Object Creation => Tight coupling
    For OCP: As vehicle is growing, Service is getting manipulated

-> This where we implement the Factory pattern:
*/
class VehicleServiceClass{ 
    public drive(type:string){
        let vehicle:Vehicle;
        if(type == 'bike'){
            vehicle = new BikeClass();
        }else if(type == 'car'){
            vehicle = new CarClass();
        }else{
            throw new Error("Invalid vehicle type");
        }
        vehicle.drive();
    }
}