import HouseBuilder from "./builder"

export default class CastleDirector{
    static construct(){
        return new HouseBuilder()
        .setBuildingType('Castle')
        .setWallMaterial('wood')
        .setWidows(30)
        .setDoors(25)
        .getResult()
    }
}
