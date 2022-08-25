import IProteus from "./iproteus"
import Leopard from "./laopard"
import Serpent from "./serpent"

export default class Lion implements IProteus{

    name='Lion'

    tellMeTheFuture(): void {
        if(Math.floor(Math.random()*2)){
            Object.assign(this,new Leopard())
            this.tellMeTheFuture=Leopard.prototype.tellMeTheFuture
            this.tellMeTheForm=Leopard.prototype.tellMeTheForm
        }else{
            Object.assign(this,new Serpent())
            this.tellMeTheFuture=Serpent.prototype.tellMeTheFuture
            this.tellMeTheForm=Serpent.prototype.tellMeTheForm
        }
    }
    tellMeTheForm(): void {
        console.log(`I am form of ${this.name}`)
    }
  
}