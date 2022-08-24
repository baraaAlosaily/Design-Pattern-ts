interface IAbstraction{
    method(value:string[]):void
}

interface Implementer{
    method(value:string[]):void
}

class RefinedAbstraction implements IAbstraction{

    #implementer:Implementer

    constructor(implementer:Implementer){
        this.#implementer=implementer
    }

    method(value: string[]): void {
        this.#implementer.method(value)
    }
    
}

class ConcreteImplementA implements Implementer{
    method(value: string[]): void {
        console.log(value)
    }
}

class ConcreteImplementB implements Implementer{
    method(value: string[]): void {
        value.forEach((v)=>console.log(v))
    }
}


const VALUE=['A','B','C'];

const REDINED_ABSTRACTION_A=new RefinedAbstraction(new ConcreteImplementA())
console.log(REDINED_ABSTRACTION_A.method(VALUE))


const REDINED_ABSTRACTION_B=new RefinedAbstraction(new ConcreteImplementB())
console.log(REDINED_ABSTRACTION_B.method(VALUE))