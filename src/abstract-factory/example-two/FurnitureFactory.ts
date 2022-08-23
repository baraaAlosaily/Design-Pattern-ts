import { ChairFactory,IChair } from "./ChairFactory";
import { TableFactory,ITable } from "./TableFActory";

interface IProduct extends IChair,ITable{}

class FurnitureFactory{
    static getProduct(product:string):IProduct|undefined{
        try {
            if(['cs','cm','cb'].indexOf(product)>-1){
                return ChairFactory.getChair(product[1])
            }
            if(['ts','tm','tb'].indexOf(product)>-1){
                return TableFactory.getTable(product[1]);
            }
            throw new Error('nothing matched')
        } catch (error) {
            console.log(error)
        }
    }
}

const chair= FurnitureFactory.getProduct('cb');
console.log(chair)
console.log(chair?.name)

const table= FurnitureFactory.getProduct('tb');
console.log(table)
console.log(table?.name)