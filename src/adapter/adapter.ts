interface IA{
    methodA():void;
}

class ClassA implements IA{
    methodA(): void {
        console.log('methodA')
    }
}

interface IB{
    methodB():void
}

class ClassB implements IB{
    methodB(): void {
        console.log('methodB')
    }
}


class ClassBAdapter implements IA{
    #classB:ClassB;

    constructor(){
        this.#classB=new ClassB();
    }

    methodA(): void {
        console.log(this.#classB.methodB());
    }
}

const ADAPTER=[new ClassA(),new ClassB()];

ADAPTER.forEach((item)=>{
    if(item instanceof ClassB){
        item.methodB();
    }else{
        item.methodA();
    }
})

const ADAPTER2=[new ClassA(),new ClassBAdapter()];

ADAPTER2.forEach((item)=>{
   item.methodA();
})