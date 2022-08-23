import {dimensions} from './dimesions';

export interface ITable{
    name:string,
    height:number,
    width:number,
    depth:number,
    getDimension():dimensions
}

class Table implements ITable{
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

class SmallTable extends Table{
    constructor(){
        super()
        this.name="SmallTable"
        this.height=40
        this.width=40
        this.depth=40
    }
}
class MediumTable extends Table{
    constructor(){
        super()
        this.name="MediumTable"
        this.height=60
        this.width=60
        this.depth=60
    }
}
class BigTable extends Table{
    constructor(){
        super()
        this.name="BigTable"
        this.height=90
        this.width=90
        this.depth=90
    }
}

export class TableFactory{
    static getTable(piece:string):ITable{
        if(piece==='s'){
            return new SmallTable();
        }else if(piece==='m'){
            return new MediumTable();
        }else {
            return new BigTable();
        }
    }
}