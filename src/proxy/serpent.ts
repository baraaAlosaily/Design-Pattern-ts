import IProteus from "./iproteus"
import Leopard from "./laopard"
import Lion from "./lion"

export default class Serpent implements IProteus{

    name='Serpent'

    tellMeTheFuture(): void {
        if(Math.floor(Math.random()*2)){
            Object.assign(this,new Lion())
            this.tellMeTheFuture=Lion.prototype.tellMeTheFuture
            this.tellMeTheForm=Lion.prototype.tellMeTheForm
        }else{
            Object.assign(this,new Leopard())
            this.tellMeTheFuture=Leopard.prototype.tellMeTheFuture
            this.tellMeTheForm=Leopard.prototype.tellMeTheForm
        }
    }
    tellMeTheForm(): void {
        console.log(`I am form of ${this.name}`)
    }
  
}