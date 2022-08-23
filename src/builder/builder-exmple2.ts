// class House{
//     buildingType:string='';
//     doors:number=0;
//     wallMaterial:string='';
//     windows:number=0
//     construction():string{
//         return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
//     }
// }

// export interface IHouseBuilder{
//     setBuildingType(buildingType:string):this
//     setWallMaterial(wallMaterial:string):this
//     setDoors(door:number):this
//     setWidows(window:number):this
//     getResult():House
// }

// class HouseBuilder implements IHouseBuilder{
//     house: House;
//     constructor(){
//         this.house=new House;
//     }
//     setBuildingType(buildingType: string): this {
//         this.house.buildingType=buildingType;
//         return this;
//     }
//     setWallMaterial(wallMaterial: string): this {
//         this.house.wallMaterial=wallMaterial
//         return this
//     }
//     setDoors(door: number): this {
//         this.house.doors=door
//         return this
//     }
//     setWidows(window: number): this {
//         this.house.windows=window
//         return this
//     }
//     getResult(): House {
//         return this.house
//     }
// }

// class IglooDirector{
//     static construct(){
//         return new HouseBuilder()
//         .setBuildingType('Igloo')
//         .setWallMaterial('metals')
//         .setWidows(25)
//         .setDoors(25)
//         .getResult()
//     }
// }
// class CastleDirector{
//     static construct(){
//         return new HouseBuilder()
//         .setBuildingType('Castle')
//         .setWallMaterial('wood')
//         .setWidows(30)
//         .setDoors(25)
//         .getResult()
//     }
// }
// class HouseBoatDirector{
//     static construct(){
//         return new HouseBuilder()
//         .setBuildingType('House Boat')
//         .setWallMaterial('Rock')
//         .setWidows(45)
//         .setDoors(25)
//         .getResult()
//     }
// }

// const Igloo=IglooDirector.construct()
// console.log(Igloo.construction())

// const castle=CastleDirector.construct()
// console.log(castle.construction())

// const houseBoot=HouseBoatDirector.construct()
// console.log(houseBoot.construction())

