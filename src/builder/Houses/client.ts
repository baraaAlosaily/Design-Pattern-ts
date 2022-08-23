import IglooDirector from "./Igloo";
import CastleDirector from "./castle";
import HouseBoatDirector from "./boat";

const Igloo=IglooDirector.construct()
console.log(Igloo.construction())

const castle=CastleDirector.construct()
console.log(castle.construction())

const houseBoot=HouseBoatDirector.construct()
console.log(houseBoot.construction())