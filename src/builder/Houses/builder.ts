import House from "./house"
import IHouseBuilder from "./ihouse";

export default class HouseBuilder implements IHouseBuilder{
    house: House;
    constructor(){
        this.house=new House;
    }
    setBuildingType(buildingType: string): this {
        this.house.buildingType=buildingType;
        return this;
    }
    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial=wallMaterial
        return this
    }
    setDoors(door: number): this {
        this.house.doors=door
        return this
    }
    setWidows(window: number): this {
        this.house.windows=window
        return this
    }
    getResult(): House {
        return this.house
    }
}