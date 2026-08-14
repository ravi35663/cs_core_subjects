import { Floor } from "../domain/Floor";
import { IFloorRepository } from "../interfaces/repository/IFloorRepository";

export class FloorRepository implements IFloorRepository{
    private floors: Floor[] = []
    save(floor: Floor): void {
        this.floors.push(floor)
    }

    findByFloorNumber(floorNumber: number): Floor {
        const floor = this.floors.find((floor:Floor) => floor.floorNumber == floorNumber);
        if(!floor){
            throw new Error("Invalid floor");
        }
        return floor;
    }
}