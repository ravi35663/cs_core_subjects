import { Floor } from "../../domain/Floor"

export interface IFloorRepository{
    save(floor: Floor): void;
    findByFloorNumber(floorNumber: number): Floor;
}
