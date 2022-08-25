interface IHandler{
    handle(payload:number):number
}

class Successor1 implements IHandler{

    handle(payload: number): number {
        console.log(`Successor1 payload = ${payload}`)
        const test =Math.floor(Math.random()*2)+1;
        if(test===1){
            payload+=1
            payload=new Successor1().handle(payload);
        }else if(test===2){
            payload-=1
            payload=new Successor2().handle(payload);
        }
        return payload
    }
    
}

class Successor2 implements IHandler{

    handle(payload: number): number {
        console.log(`Successor2 payload = ${payload}`)
        const test =Math.floor(Math.random()*3)+1;
        if(test===1){
            payload=payload*2
            payload=new Successor1().handle(payload);
        }else if(test===2){
            payload=payload/2
            payload=new Successor2().handle(payload);
        }
        return payload
    }
    
}

class Chain{
    start(payload:number):number{
        return new Successor1().handle(payload)
    }
}

const CHAIN=new Chain();
const OUT= CHAIN.start(1);
console.log(`Finish result = ${OUT}`)
