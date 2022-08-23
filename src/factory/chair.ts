 import { dimension } from "./dimention";

 interface IChair{
    height:number,
    width:number,
    depth:number,
    getDimension():dimension
 }

 export default class Chair implements IChair{
    height=0;
    width=0;
    depth=0;
    getDimension(){
       return {
        width:this.width,
        height:this.height,
        depth:this.depth
       } 
    }
 }