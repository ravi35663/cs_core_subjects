// Good factory pattern:
interface Vehicle{
    drive(): void;
}

class Car implements Vehicle{
    drive(): void {
        console.log("Drive car")
    }
}

class Bike implements Vehicle{
    drive(): void {
        console.log("Ride bike")
    }
}

class VehicleService{
    drive(type:string){
        VehicleFactory.vehicle(type).drive();
    }
}

class VehicleFactory{
    public static vehicle(type: string):Vehicle{
        if(type == 'Bike'){
            return new Bike();
        }else if(type == 'Car'){
            return new Car();
        }else{
            throw new Error("Invalid vehicle type");
        }
    }
}

const v = new VehicleService();
v.drive('Bike')
v.drive('Car')