// let foo: string
// let bar: boolean
// let baz: number
// let qux: string[]
// let quuz: [number, string]
let corge: { [key: number]: string }
// let grault: Set<number>

// foo = 'ABC'
// bar = true
// baz = 123
// qux = ['a', 'b', 'c']
// quuz = [1, 'abc']
// corge = { 123: 'abc', 456: 'def' ,567:"baraa"}
// grault = new Set([1, 2, 3])

// console.log(corge)

// let foo: string
// foo = 'ABC'
// foo = '123'
// foo = 'ABC = 123'
// foo = 'quick brown fox, etc'
// foo = "It wasn't me"

// foo= `abc ${foo} def`
// console.log(foo);
// foo= "abc"+" 123";
// console.log(foo);

// let bar: boolean
// bar = true
// bar = false

// let foo="abc";

// bar=foo==="def";
// console.log(bar);

// bar=foo.endsWith("c")

// console.log(bar)

// let baz: number
// baz = 123 //decimal
// baz = 123.456 //float
// baz = 0xffff //hex
// baz = 0b10101 //binary
// baz = 0o671 //octal


// let a: string[]
// a = ['a', 'b', 'd', 'd']
// let b: number[]
// b = [1, 2, 3, 4]
// let c: boolean[]
// c = [true, false, true]
// let d: unknown[]
// d = [1, 'a', true, ['even', 'another', 'internal', 'array']]

// //Array items can be retrieved using a zero based index.
// console.log(a[1])
// console.log(b[0])
// console.log(c[1])
// console.log(d[2])

// console.log(b.lastIndexOf(4));



// let a: { [key: number]: string }
// a = { 123: 'abc', 456: 'def' }
// let b: { [key: string]: boolean }
// b = { abc: true, def: false, ghi: true }

// console.log(a[123])
// console.log(b['def'])

// The key of a dictionary can be of any type and name
// let a: { [key: string]: string }
// let b: { [id: number]: string }
// a = { a: 'car', b: 'train', c: 'plane', d: 'boat' }
// b = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' }
// // and can be retrieved as such
// console.log(a['a'])
// console.log(b[2])

// // Since Dictionaries are really just objects. You can also retrieve
// // a dictionary's value using object notation if the keys are strings
// console.log(a.c)
// // console.log(b.2) // this doesn't work when the key is a number

// // you can add items to a dictionary
// a['e'] = 'go-cart'
// console.log(a)

// // you can delete
// delete b[2]
// console.log(b)

// // The values of a dictionary can be of any type, even an array.
// let c: { [id: number]: number[] }
// c = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] }
// console.log(c)

// let a:{ [key:string] :number }

// a={a:123,b:456,c:789,d:582};

// a["f"]=528;

// console.log(a)

//Tuble

// let a: [number, string]
// a = [1, 'abc']
// let b: [string, boolean, number]
// b = ['abc', false, 123]

// console.log(a[1])
// console.log(b[2])

//Set


// let a: Set<number>
// a = new Set([1, 2, 3, 4])
// let b: Set<string>
// b = new Set(['a', 'b', 'c', 'd', 'a']) // the second `a` is not added
// let c: Set<number|string|boolean>
// c = new Set([1, 'b', true])

// console.log(a)
// console.log(b)
// console.log(c)

// const a:Set<string>=new Set();

// a.add('dog');
// a.add('cat');
// a.add('bird');

// console.log(Array.from(a)[0]);

// class Cat{
//     name:string;
//     stepsWalk:number=0;

//     constructor(name:string){
//         this.name=name;
//     }

//     walk(steps:number):void{
//         console.log(this.name)
//         this.stepsWalk+=steps;
//     }
//     steps():number{
//         return this.stepsWalk;
//     }
// }

// const cat=new Cat("catty");
// cat.walk(20);
// cat.walk(20);

// console.log('the cat walk '+cat.steps()+ " step")

// interface IAnimal {
//     name: string
//     age: number

//     feed(food: string, amount: number): void
// }

// class Animal implements IAnimal{
//     name: string;
//     age: number;

//     constructor( name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     feed(food: string, amount: number): void {
//         console.log(
//             'Feeding ' +
//             this.name +
//             ' the Dod '+
//             amount+
//             ' kg of '+
//             food
//         )
//     }
// }

// class Cat extends Animal {
//     isHungry:boolean;

//     constructor( name: string, age: number, isHungry:boolean) {
//         super(name,age)
//         this.isHungry=isHungry
//     }
//     feed(food: string, amount: number ): void {
//         console.log(
//             'Feeding ' +
//             this.name +
//             ' the Dod '+
//             amount+
//             ' kg of '+
//             food
//             +' is hungry ' +
//             !this.isHungry
//         )
//     }
// }

// class Dog extends Animal {
//     constructor(name: string ,age: number) {
//         super(name,age)
//     }
//     feed(food: string, amount: number): void {
//         console.log(
//             'Feeding ' +
//             this.name +
//             ' the cat '+
//             amount+
//             ' kg of '+
//             food 
//         )
//     }
// }

// import {Dog,Cat} from "./animals"

// const CAT=new Cat('Cosmo',8,true);
// const DOG=new Dog('Rusty',12);
// CAT.feed('fish',0.2);
// DOG.feed('Beef',0.25);



// class Animal {
//     protected name: string
//     protected age: number

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }

// class Cat extends Animal {
//     constructor(name: string, age: number) {
//         super(name, age)
//         console.log(this.name)
//     }
// }

// const CAT = new Cat('Cosmo', 8)
// console.log(CAT)

// class ClassWithProperty {
//     abc = 123
// }

// class ClassWithStaticProperty {
//     static abc = 123
// }

// class ClassWithMethod {
//     method() {
//         return 123
//     }
// }

// class ClassWithStaticMethod {
//     static method() {
//         return 123
//     }
// }

// const CLASS_A = new ClassWithProperty()
// console.log(CLASS_A.abc)

// const CLASS_B = new ClassWithStaticProperty()
// // console.log(CLASS_B.abc); // undefined. 'abc' does not
// // exist on CLASS_B instance.
// // You must reference it via the class name instead
// console.log(ClassWithStaticProperty.abc)

// const CLASS_C = new ClassWithMethod()
// console.log(CLASS_C.method())

// const CLASS_D = new ClassWithStaticMethod()
// // console.log(CLASS_D.method()); //error. CLASS_D.method is
// // not a function.
// // You must reference it via the class name instead
// console.log(ClassWithStaticMethod.method())

// class Circle {
//     radius: number
//     static PI = 3.14

//     constructor(radius: number) {
//         this.radius = radius
//     }
// }

// console.log('Circle.PI = ' + Circle.PI)

// const CIRCLE1 = new Circle(1)
// const CIRCLE2 = new Circle(2)
// const CIRCLE3 = new Circle(3)
// console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2)
// console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2)
// console.log('CIRCLE3 Area = ' + Circle.PI * CIRCLE3.radius ** 2)