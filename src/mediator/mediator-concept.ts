class Colleague1{
    method1():void{
        console.log("College One")
    }
}

class Colleague2{
    method2():void{
        console.log("College Two")
    }
}

class Mediator{
    private colleague1:Colleague1
    private colleague2:Colleague2

    constructor(){
        this.colleague1=new Colleague1()
        this.colleague2=new Colleague2();

    }

    colleague1Method(){
       return this.colleague1.method1();
    }

    colleague2Method(){
       return this.colleague2.method2()
    }
    
}

const MEDIATOR=new Mediator();

MEDIATOR.colleague1Method()

MEDIATOR.colleague2Method()