import HouseBuilder from "./builder"

export default class IglooDirector{
    static construct(){
        return new HouseBuilder()
        .setBuildingType('Igloo')
        .setWallMaterial('metals')
        .setWidows(25)
        .setDoors(25)
        .getResult()
    }
}