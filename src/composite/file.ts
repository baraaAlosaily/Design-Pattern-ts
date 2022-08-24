import Folder from "./folder";
import IComponent from "./icomponent";

export default class File implements IComponent{
    referenceToParent?: Folder =undefined

    name:string;

    constructor(name:string){
        this.name=name
    }

    dir(indent: string): void {
        console.log(`${indent}<FILE> ${this.name}`)
    }
    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this)
        }
    }
    
}