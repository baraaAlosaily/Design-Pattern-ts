export interface IProductB{
    name:string
}

class ConcreteProduct implements IProductB{
    name='';
}

class ConcreteProductA extends ConcreteProduct{
    constructor(){
        super()
        this.name='FactoryB: ConcreteProductA'
    }
}
class ConcreteProductB extends ConcreteProduct{
    constructor(){
        super()
        this.name='FactoryB: ConcreteProductB'
    }
}
class ConcreteProductC extends ConcreteProduct{
    constructor(){
        super()
        this.name='FactoryB: ConcreteProductC'
    }
}

export class FactoryB{
    static getObject(some_properties:string):IProductB{
        if(some_properties==='a'){
            return new ConcreteProductA();
        }else if(some_properties==='b'){
            return new ConcreteProductB();
        }else{
            return new ConcreteProductC();
        }
    }
}