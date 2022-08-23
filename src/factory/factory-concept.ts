interface ProductID{
    name:string
}

class ConcreteProduct implements ProductID{
    name='';
}

class ConcreteProductA extends ConcreteProduct{
    constructor(){
        super()
        this.name='ConcreteProductA'
    }
}
class ConcreteProductB extends ConcreteProduct{
    constructor(){
        super()
        this.name='ConcreteProductB'
    }
}
class ConcreteProductC extends ConcreteProduct{
    constructor(){
        super()
        this.name='ConcreteProductB'
    }
}
class Creator{
    static createObject(someProperties:string):ProductID{
        if(someProperties==='a'){
            return new ConcreteProductA();
        }else if(someProperties==='b'){
            return new ConcreteProductB();
        }else{
            return new ConcreteProductC();
        }
    }
}

const product=Creator.createObject('b');
console.log(product.name)