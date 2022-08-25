interface IIterator{
    next():IAggregate

    hasNext():boolean
}

interface IAggregate{
    method():void
}

class Aggregate implements IAggregate{

    method(): void {
       console.log("This method has been invoked")
    }
    
}

class IteratorConcept implements IIterator{
    index:number
    aggregates:IAggregate[]

    constructor(aggregates:IAggregate[]){
        this.index=0
        this.aggregates=aggregates
    }
    next() {
        if(this.index<this.aggregates.length){
            const aggregate=this.aggregates[this.index]
            this.index+=1;
            return aggregate
        }
        throw new Error('At end of Iterator')
    }
    hasNext(): boolean {
        return this.index<this.aggregates.length
    }
}

const AGGREGATES=[
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate()
]

const ITERATOR=new IteratorConcept(AGGREGATES);

while(ITERATOR.hasNext()){
    ITERATOR.next().method()
}