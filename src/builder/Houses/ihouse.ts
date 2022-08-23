import House from "./house"

export default interface IHouseBuilder{
    setBuildingType(buildingType:string):this
    setWallMaterial(wallMaterial:string):this
    setDoors(door:number):this
    setWidows(window:number):this
    getResult():House
}