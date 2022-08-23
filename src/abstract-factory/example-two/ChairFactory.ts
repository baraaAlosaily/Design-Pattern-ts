import {dimensions} from './dimesions';

export interface IChair{
    name:string,
    height:number,
    width:number,
    depth:number,
    getDimension():dimensions
}

class Chair implements IChair{
    name=''
    height=0
    width=0
    depth=0
    getDimension(): dimensions {
        return{
            height:this.height,
            width:this.width,
            depth:this.depth
        }
    }
}

class SmallChair extends Chair{
    constructor(){
        super()
        this.name="SmallChair"
        this.height=40
        this.width=40
        this.depth=40
    }
}
class MediumChair extends Chair{
    constructor(){
        super()
        this.name="MediumChair"
        this.height=60
        this.width=60
        this.depth=60
    }
}
class BigChair extends Chair{
    constructor(){
        super()
        this.name="BigChair"
        this.height=100
        this.width=100
        this.depth=100
    }
}

export class ChairFactory{
    static getChair(piece:string):IChair{
        if(piece==='s'){
            return new SmallChair();
        }else if(piece==='m'){
            return new MediumChair();
        }else {
            return new BigChair();
        }
    }
}