import Animal from "./animal";

export class Cat extends Animal {
    isHungry:boolean;

    constructor( name: string, age: number, isHungry:boolean) {
        super(name,age)
        this.isHungry=isHungry
    }
    feed(food: string, amount: number ): void {
        console.log(
            'Feeding ' +
            this.name +
            ' the Dod '+
            amount+
            ' kg of '+
            food
            +' is hungry ' +
            !this.isHungry
        )
    }
}

export class Dog extends Animal {
    constructor(name: string ,age: number) {
        super(name,age)
    }
    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
            this.name +
            ' the cat '+
            amount+
            ' kg of '+
            food 
        )
    }
}