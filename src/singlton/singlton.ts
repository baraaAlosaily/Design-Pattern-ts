class Singleton{
    static instance:Singleton
    id:number
    constructor(id:number){
        this.id=id;
        if(Singleton.instance){
            return Singleton.instance
        }
        Singleton.instance=this
    }
}

const OBJECTS1=new Singleton(1)
const OBJECTS2=new Singleton(2)

console.log(OBJECTS1===OBJECTS2);

console.log(OBJECTS1);
console.log(OBJECTS2);

