/*
=> Interface Segregation Principle (ISP):
    ->  class should not be forced to depend on methods they don’t use.
*/

//Bad Design (ISP Violation): One fat interface
interface WorkerInterface{
    work(): void;
    eat():  void;
    sleep(): void;
}

// Human worker:
class HumanWorker implements WorkerInterface{
    work(): void {
        console.log("Human can work");
    }
    eat(): void {
        console.log("Human can eat");
    }
    sleep(): void {
        console.log("Human can sleep");
    }
}

// Robot Worker:
class RobotWorker implements WorkerInterface{
    work(): void {
        console.log("Robot can work")
    }
    eat(): void { // No Needed
        console.log("Robot cannot eat")
    }
    sleep(): void { // no Needed
        console.log("Robot cannot sleep")
    }
}
/*
=> Why this breaks ISP?
    ->  RobotWorker is forced to implement methods it doesn’t need
    ->  Interface is too large
    ->  Leads to runtime errors
    ->  Poor OOP design
*/

// Good Design (ISP Applied)
// Split interfaces by responsibility
interface Workable{
    work(): void;
}
interface Eatable{
    eat(): void;
}
interface Sleepable{
    sleep() : void;
}

class HumanWorkerClass implements Workable, Eatable, Sleepable{
    work(): void {
        console.log("Human can work")
    }
    eat(): void {
        console.log("Human can eat");
    }
    sleep(): void {
        console.log("Human can sleep")
    }
}

class RobotWorkerClass implements Workable{
    work(): void {
        console.log("Robot can work");
    }
}