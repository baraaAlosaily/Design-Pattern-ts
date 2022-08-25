import IProteus from "./iproteus";
import Lion from "./lion";
import Serpent from "./serpent";

export default class Leopard implements IProteus{

    name='Leopard'

    tellMeTheFuture(): void {
        if(Math.floor(Math.random()*2)){
            Object.assign(this,new Lion())
            this.tellMeTheFuture=Lion.prototype.tellMeTheFuture
            this.tellMeTheForm=Lion.prototype.tellMeTheForm
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