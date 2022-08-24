class SubSystemA{
    method():string{
        return 'A'
    }
}

class SubSystemB{
    method():string{
        return 'B'
    }
}

class SubSystemC{
    method(value: { C: number[] }): { C: number[] } {
        return value
    }
}

class Facade{
    subSystemClassA():string{
        return new SubSystemA().method();
    }

    subSystemClassB():string{
        return new SubSystemB().method();
    }

    subSystemClassC(value:{C:number[]}):{C:number[]}{
        return new SubSystemC().method(value);
    }
}

const FACADE=new Facade();

console.log(FACADE.subSystemClassA())
console.log(FACADE.subSystemClassB())
console.log(FACADE.subSystemClassC({C:[1,2,3]}))