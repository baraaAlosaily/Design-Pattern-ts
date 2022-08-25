interface IAbstractExpression{
    interpret():number
}

class Numeral implements IAbstractExpression{
    value:number;

    constructor(value:string){
        this.value=parseInt(value)
    }

    interpret(): number {
        return this.value
    }
}

class Add implements IAbstractExpression{

    left:IAbstractExpression
    right:IAbstractExpression

    constructor( left:IAbstractExpression,right:IAbstractExpression){
        this.left=left;
        this.right=right
    }

    interpret() {
        return this.left.interpret()+this.right.interpret()
    }
    
}

class Subtract implements IAbstractExpression{

    left:IAbstractExpression
    right:IAbstractExpression

    constructor( left:IAbstractExpression,right:IAbstractExpression){
        this.left=left;
        this.right=right
    }

    interpret() {
        return this.left.interpret()-this.right.interpret()
    }
}

const SENTENCE = '5 + 4 - 3 + 7 - 2'

console.log(SENTENCE);
const TOKEN=SENTENCE.split(' ');
console.log(JSON.stringify(TOKEN))

const AST:IAbstractExpression[]=[];
AST.push(new Add(new Numeral(TOKEN[0]),new Numeral(TOKEN[2])));
AST.push(new Subtract(AST[0], new Numeral(TOKEN[4])))
AST.push(new Add(AST[1],new Numeral(TOKEN[6])))
AST.push(new Subtract(AST[2],new Numeral(TOKEN[8])))

const AS_ROOT=AST.pop();

console.log((AS_ROOT as IAbstractExpression).interpret())

console.log(AST,{depth:null})



