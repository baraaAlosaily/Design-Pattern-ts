interface IComponent{
    method():string;
}

class Component implements IComponent{
    method(): string {
        return 'Component Method';
    }
    
}

class Decorator implements IComponent{
   
    #object:IComponent

    constructor(object:IComponent){
        this.#object=object
    }

    method(): string {
        return `Decorator Method(${this.#object.method()})`;
    }
}

const COMPONENT=new Component();
console.log(COMPONENT.method())

const COMPONENT2=new Decorator(COMPONENT);
console.log(COMPONENT2.method())

const COMPONENT3=new Decorator(COMPONENT2);
console.log(COMPONENT3.method())