import HouseBuilder from "./builder"

export default class HouseBoatDirector{
    static construct(){
        return new HouseBuilder()
        .setBuildingType('House Boat')
        .setWallMaterial('Rock')
        .setWidows(45)
        .setDoors(25)
        .getResult()
    }
}