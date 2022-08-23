interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

export default class Animal implements IAnimal{
    name: string;
    age: number;

    constructor( name: string, age: number) {
        this.name = name
        this.age = age
    }
    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
            this.name +
            ' the Dod '+
            amount+
            ' kg of '+
            food
        )
    }
}